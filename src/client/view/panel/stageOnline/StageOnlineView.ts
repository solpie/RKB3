import { noticeJoin } from './score/Com2017';
import { getScorePanelUrl } from '../../admin/home/home';
import { DateFormat } from '../../utils/JsFunc';
import { CommandId } from '../../Command';
import { PanelId } from '../../const';
import { VueBase } from '../../utils/VueBase';
import { dynamicLoading } from '../../utils/WebJsFunc';
import { BasePanelView } from '../BasePanelView';
import { BracketView } from './bracket/BracketView';
import { RankView } from './rank/RankView';
import { ScoreView } from './score/ScoreView';

declare let $
declare let io
let rankView: RankView
let bracketView: BracketView
let scoreView: ScoreView
let canvasStage
// const opReq = (cmdId: string, param: any, callback: any) => {
//     $.ajax({
//         url: `/panel/${PanelId.onlinePanel}/${cmdId}`,
//         type: 'post',
//         data: JSON.stringify(param),
//         headers: { "Content-Type": "application/json" },
//         dataType: 'json',
//         success: callback
//     });
// }
class StageOnlineView extends VueBase {
    template = require('./stage-online.html')
    basePanelArr: BasePanelView[]
    actTab = VueBase.PROP
    gameId = VueBase.String
    isOp = VueBase.PROP
    delayTime = VueBase.PROP
    delayTimeShowOnly = VueBase.PROP
    liveTime = VueBase.PROP
    srvTime = 0;//服务器时间(毫秒)
    isTimerRunning = false;
    timeDiff = VueBase.PROP
    // delayTimeMS = 0;

    panelTime = VueBase.PROP
    panelTime2Set = VueBase.PROP

    //无延时数据    
    lLiveScore = VueBase.PROP
    lLiveFoul = VueBase.PROP
    lLiveName = VueBase.PROP
    rLiveScore = VueBase.PROP
    rLiveFoul = VueBase.PROP
    rLiveName = VueBase.PROP
    liveData: any
    //冠军 面板
    championTitle = VueBase.PROP
    //公告
    noticeTitle = VueBase.PROP
    noticeContent = VueBase.PROP
    isBold = VueBase.PROP
    opReq = (cmdId: string, param: any, callback: any) => {
        $.ajax({
            url: `/panel/${PanelId.onlinePanel}/${cmdId}`,
            type: 'post',
            data: JSON.stringify(param),
            headers: { "Content-Type": "application/json" },
            dataType: 'json',
            success: callback
        });
    }

    constructor() {
        super()
        VueBase.initProps(this)
    }

    protected created() {
        this.basePanelArr = []
        this.isOp = this.$route.params.op == "op"
        this.gameId = this.$route.params.game_id
        if (this.isOp) {
            this.actTab = 'tab1'
            dynamicLoading.css('/css/bulma.min.css')
        }
        console.log('stageOnlineView created!')
    }

    protected mounted() {
        canvasStage = BasePanelView.initPixi()
        // this.bracket = new BracketView()
        // this.bracket.gameId = this.$route.params.game_id
        let panel = this.$route.query['panel']
        if (panel == "bracket") {
            //test
            this.showBracket()
        }
        else if (panel == "score") {
            this.showScore()
        }
        else {
            this.showRank()
        }
        console.log('StageOnlineView mounted!')
        // this.initIO()
    }

    initIO() {
        // http://api.liangle.com/api/passerbyking/game/wheel/ready/156
        let localWs = io.connect(`/${PanelId.rkbPanel}`)
        localWs.on('connect', (msg) => {
            console.log('connect', window.location.host)
            // localWs.emit("opUrl", { opUrl: window.location.host })
        })
            // .on(`${CommandId.sc_showRank}`, (data) => {
            //     console.log("CommandId.sc_showRank", data)
            //     this.showRank()
            // })
            .on(`${CommandId.sc_showBracket}`, (data) => {
                console.log("CommandId.sc_showBracket", data)
                this.showBracket()
            })
            .on(`${CommandId.sc_hideOnlinePanel}`, (data) => {
                this.showOnly("")
            })

    }

    showRank() {
        if (!rankView) {
            rankView = new RankView(this, canvasStage)
            rankView.reqRank(this.gameId)
            this.basePanelArr.push(rankView)
        }
        rankView.reqRank(this.gameId)
        this.showOnly(rankView.name)
    }

    showBracket() {
        console.log('onClkBracket')
        if (!bracketView) {
            bracketView = new BracketView(canvasStage, this.gameId)
            this.basePanelArr.push(bracketView)
        }
        this.showOnly(bracketView.name)
    }
    _setLiveData(data?) {
        if (data == null)
            data = {
                leftFoul: 0,
                rightFoul: 0,
                leftScore: 0,
                rightScore: 0
            }
        if (data.leftScore != null) {
            this.lLiveScore = data.leftScore
        }
        if (data.rightScore != null) {
            this.rLiveScore = data.rightScore
        }
        if (data.rightFoul != null) {
            this.rLiveFoul = data.rightFoul
        }
        if (data.leftFoul != null) {
            this.lLiveFoul = data.leftFoul
        }
        this.liveData = data
    }
    _setPlayer(lPlayer, rPlayer) {
        this.lLiveName = lPlayer
        this.rLiveName = rPlayer
    }
    showScore() {
        if (!scoreView) {
            scoreView = new ScoreView(canvasStage, this.$route)
            if (this.isOp) {
                this.isBold = 'normal'
                scoreView.initOP(this)
                scoreView.on('init', (data) => {
                    this.setSrvTime(data.t)
                    this.liveTime = DateFormat(new Date(this.srvTime), "hh:mm:ss");
                    this.delayTimeShowOnly = data.delayTimeMS / 1000
                    let d = {
                        leftFoul: data.player.left.leftFoul,
                        rightFoul: data.player.right.rightFoul,
                        leftScore: data.player.left.leftScore,
                        rightScore: data.player.right.rightScore
                    }
                    this._setLiveData(d)
                    this._setPlayer(data.player.left.name, data.player.right.name)
                })
                scoreView.on('updateScore', (data) => {
                    this._setLiveData(data)
                })
                scoreView.on('commitGame', (data) => {
                    this._setLiveData()
                })
                scoreView.on('timeDiff', (data) => {
                    console.log('timeDiff', data)
                    if (data && data.td) {
                        this.timeDiff = data.td
                    }
                })
                scoreView.on('startGame', (data) => {
                    this._setPlayer(data.player.left.name, data.player.right.name)
                })
            }

            this.basePanelArr.push(scoreView)
        }
        this.showOnly(scoreView.name)
    }
    getView(bpName: string): any {
        for (let i = 0; i < this.basePanelArr.length; i++) {
            let bp: BasePanelView = this.basePanelArr[i]
            if (bpName == bp.name)
                return bp
        }
    }
    showOnly(bpName: string) {
        let showBp
        for (let i = 0; i < this.basePanelArr.length; i++) {
            let bp: BasePanelView = this.basePanelArr[i]
            if (bpName != bp.name)
                bp.hide()
            else
                showBp = bp
        }
        if (showBp)
            showBp.show()
    }
    onTick() {
        console.log("onTick");
        this.srvTime += 1000;
        this.liveTime = DateFormat(new Date(this.srvTime), "hh:mm:ss");
        this.panelTime = DateFormat(new Date(this.srvTime - this.getView('score').delayTimeMS), "hh:mm:ss");
    }
    setSrvTime(t) {
        console.log("isRunning:", this.isTimerRunning, this.onTick, t);
        this.srvTime = t;
        if (!this.isTimerRunning) {
            this.isTimerRunning = true;
            setInterval(() => {
                this.onTick();
            }, 1000);
        }
    }
    methods = {
        onClkHide() {
            console.log('onClkHide')
            this.opReq(`${CommandId.cs_hideOnlinePanel}`, { _: null })
        },
        onClkRank() {
            console.log('onClkRank')
            this.opReq(`${CommandId.cs_showRank}`, { _: null })
        },
        onClkStartTimer() {
            console.log('onClkStartTimer')
            this.opReq(`${CommandId.cs_startTimer}`, { _: null })
        },
        onClkPauseTimer() {
            this.opReq(`${CommandId.cs_pauseTimer}`, { _: null })
        },
        onClkSetDelay() {
            console.log("onClkSetDelay", this, this.delayTime);
            // this.panelTime = this.liveTime
            let dt = Number(this.delayTime);
            if (dt >= 0) {
                this.delayTimeMS = dt * 1000;
                this.opReq(`${CommandId.cs_setDelayTime}`, { delayTimeMS: this.delayTimeMS, _: null }, () => {
                })
                $.post(`/online/delay/${this.gameId}/${dt}`, (res) => {
                    if (res) {
                        this.delayTimeShowOnly = dt
                    }
                })
            }
        },
        onClkResetTimer() {
            this.opReq(`${CommandId.cs_resetTimer}`, { _: null })
        },
        onClkSetPanelTime(timeBySec) {
            this.opReq(`${CommandId.cs_setTimer}`, { _: null, time: Number(timeBySec) })
        },
        onClkLeftChampion() {
            this.opReq(`${CommandId.cs_showChampion}`, { _: null, isLeft: true, title: this.championTitle })

        },
        onClkRightChampion() {
            this.opReq(`${CommandId.cs_showChampion}`, { _: null, isLeft: false, title: this.championTitle })
        },
        onClkRegularPlayer() {
        },

        onClkShowScore(v) {
            this.opReq(`${CommandId.cs_toggleScorePanel}`, { _: null, visible: v })
        },
        onClkToggleChampionPanel(v) {
            this.opReq(`${CommandId.cs_toggleChampionPanel}`, { _: null, visible: v })
        },
        onClkRenderData() {
            if (this.liveData)
                scoreView.setScoreFoul(this.liveData)
        },
        onClkNoticePresets(idx) {
            let presets = { '1': noticeJoin }
            let preset = presets[idx]
            if (preset) {
                this.noticeContent = preset.content
                this.noticeTitle = preset.title
            }
        },
        onClkNotice(visible, isLeft) {
            if (this.noticeContent)
                this.opReq(`${CommandId.cs_showNotice}`,
                    { _: null, title: this.noticeTitle, content: this.noticeContent, isLeft: isLeft, visible: visible, isBold: this.isBold })
        },
        onClkToggleTheme(isDark) {
            this.opReq(`${CommandId.cs_toggleTheme}`, { _: null, isDark: isDark })
        },
        onSetPreRoundPosition(isRight) {
            this.opReq(`${CommandId.cs_setPreRoundPosition}`, { _: null, isRight: isRight })
        },
        onTogglePreRoundTheme(isDark) {
            this.opReq(`${CommandId.cs_togglePreRoundTheme}`, { _: null, isDark: isDark })
        },
        onSetFxPoint(mx, my) {
            console.log(mx, my)
            this.opReq(`${CommandId.cs_setFxPoint}`, { _: null, mx: mx, my: my })
        },
        onPlayScoreFx() {
            this.opReq(`${CommandId.cs_playScoreFx}`, { _: null})
        },
        tab(t) {
            this.actTab = t
        },
        onSetBDVisible(v) {
            this.opReq(`${CommandId.cs_setBdVisible}`, { _: null,v:v})
        },
        onClkBracket() {
            this.opReq(`${CommandId.cs_showBracket}`, { _: null })
        }
    }
}
export let stageOnlineView = new StageOnlineView()