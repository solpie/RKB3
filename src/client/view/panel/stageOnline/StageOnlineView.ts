import { setInterval } from 'timers';
import { CommandId } from '../../Command';
import { PanelId } from '../../const';
import { getAllPlayer, getClientDelay, getLive, getVsTitleData, setClientDelay } from '../../utils/HupuAPI';
import { imgLoader } from '../../utils/ImgLoader';
import { DateFormat } from '../../utils/JsFunc';
import { VueBase } from '../../utils/VueBase';
import { $post, dynamicLoading } from '../../utils/WebJsFunc';
import { WebDBCmd } from '../../WebDBCmd';
import { BasePanelView } from '../BasePanelView';
import { BracketView } from './bracket/BracketView';
import { Lottery } from './lottery/Lottery';
import { RankView } from './rank/RankView';
import { ScoreView } from './score/ScoreView';
import { GroupV2 } from './scoreV2/GroupV2';

declare let $
declare let io
let rankView: RankView
let bracketView: BracketView
let scoreView: ScoreView
let lottery: Lottery
let groupSp: GroupV2
let canvasStage
imgLoader
class StageOnlineView extends VueBase {
    template = require('./stage-online.html')
    basePanelArr: BasePanelView[]
    actTab = VueBase.PROP
    gameId = VueBase.String
    isOp = VueBase.PROP
    isRmOp = VueBase.PROP
    delayTime = VueBase.PROP
    //开题延时输入
    clientDelayTime = VueBase.PROP
    //服务端
    clientDelayTimeSrv = VueBase.PROP

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
    //小组
    isShowGroupLeft = VueBase.PROP
    liveData: any

    //实力榜
    inputDate = VueBase.PROP
    //冠军 面板
    championTitle = VueBase.PROP
    //
    gameIdxArr = VueBase.PROP
    vsTitle = VueBase.PROP
    vsTitleMap: any
    //公告
    noticeTitle = VueBase.PROP
    noticeContent = VueBase.PROP
    input_notice_left_bottom = VueBase.PROP
    isWrap = VueBase.PROP
    noticeHistory = VueBase.PROP
    inputRollText = VueBase.PROP

    inputPlayerPopInfo_win_L = VueBase.PROP
    inputPlayerPopInfo_score_L = VueBase.PROP
    inputPlayerPopInfo_rank_L = VueBase.PROP

    inputPlayerPopInfo_win_R = VueBase.PROP
    inputPlayerPopInfo_score_R = VueBase.PROP
    inputPlayerPopInfo_rank_R = VueBase.PROP

    inputRollTextCount = VueBase.PROP
    vsPlayer = VueBase.PROP
    gameTitleType = VueBase.PROP
    gameSubTitle = VueBase.PROP
    gamePlayerArr: any
    liveConf: any
    opReq = (cmdId: string, param: any, callback: any) => {
        param._ = null
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
        console.log('created ol view')
        this.basePanelArr = []
        this.isRmOp = this.$route.params.op == "rmop"
        this.isOp = this.$route.params.op == "op" || (this.isRmOp)
        this.gameId = this.$route.params.game_id
        this.inputRollTextCount = 2
        if (this.isRmOp) {
            this.actTab = 'tab2'
            dynamicLoading.css('/css/bulma.min.css')

        }
        else if (this.isOp) {
            this.actTab = 'tab1'
            this.initLiveConf()
            dynamicLoading.css('/css/bulma.min.css')
        }
        console.log('stageOnlineView created!')
    }
    initLiveConf() {
        getLive(conf => {
            this.liveConf = conf
            console.log('inti live conf', conf);
        })
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
        else if (panel == "group") {
            this.showGroup()
        }
        else {
            this.showRank()
        }

        this.input_notice_left_bottom = '本场赛事集锦'
        this.initIO()
        console.log('StageOnlineView mounted!')
    }

    initIO() {
        // http://api.liangle.com/api/passerbyking/game/wheel/ready/156
        let localWs = io.connect(`/${PanelId.rkbPanel}`)
        localWs.on('connect', (msg) => {
            console.log('connect', window.location.host)
        })
            .on(`${CommandId.sc_showGroup}`, (data) => {
                console.log('sc_showGroup', data);
                this.showGroup(data)
            })

    }
    groupSp: any
    showGroup(data?) {
        if (!groupSp) {
            groupSp = new GroupV2(canvasStage, this.gameId)
            if (data) {
                groupSp.showLeft(data.isLeft)
            }
        }
        else {
            if (data.visible) {
                groupSp.showGroup(data.idx - 1, data.liveConf)
                groupSp.showLeft(data.isLeft)
            }
            else
                groupSp.hide()
        }
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
        console.log('onClkBracket', this.$route.query)
        if (!bracketView) {
            bracketView = new BracketView(canvasStage, this.gameId, this.$route)
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
                this.isWrap = '1'
                scoreView.initOP(this)
                scoreView.on('init', (data) => {
                    this.setSrvTime(data.t)
                    // this.getClientDelayTime()
                    this.onGetClientDelay()
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
        // console.log("onTick");
        this.srvTime += 1000;
        this.liveTime = DateFormat(new Date(this.srvTime), "hh:mm:ss");
        this.panelTime = DateFormat(new Date(this.srvTime - this.getView('score').delayTimeMS), "hh:mm:ss");
    }
    onGetClientDelay() {
        getClientDelay(this.gameId, (res) => {
            console.log(res)
            this.clientDelayTimeSrv = res.data.delay
        })
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

        onClkShowScore(v, isBottomOnly) {
            this.opReq(`${CommandId.cs_toggleScorePanel}`, { _: null, visible: v, isBottom: isBottomOnly })
        },
        onClkToggleChampionPanel(v) {
            this.opReq(`${CommandId.cs_toggleChampionPanel}`, { _: null, visible: v })
        },
        onClkRenderData() {
            if (this.liveData)
                scoreView.setScoreFoul(this.liveData)
        },
        onClkNoticePresets(title, content) {
            if (content) {
                this.noticeContent = content
                this.noticeTitle = title
            }
        },
        onDelNoticePresets(content) {
            let a = []
            for (let i = 0; i < this.noticeHistory.length; i++) {
                let n = this.noticeHistory[i];
                if (n.content != content) {
                    a.push(n)
                }
            }
            this.noticeHistory = a
        },
        onNoticePresets(key) {
            let textPresets = { 'network': '当前直播网络略有波\n动,工作人员正在紧急\n处理,请大家稍作等待\n马上回到精彩赛事中!' }
            this.noticeContent = textPresets[key]
        },
        onClkNotice(visible, isLeft, isPreview?) {
            if (this.noticeContent) {
                // noticeHistory
                if (!this.noticeHistory)
                    this.noticeHistory = []
                let hasHistory = false
                for (let i = 0; i < this.noticeHistory.length; i++) {
                    let n = this.noticeHistory[i];
                    if (n.content == this.noticeContent && n.title == this.noticeTitle) {
                        hasHistory = true
                        break;
                    }
                }
                if (!hasHistory)
                    this.noticeHistory.push({ content: this.noticeContent, title: this.noticeTitle })
                this.opReq(`${CommandId.cs_showNotice}`,
                    {
                        _: null,
                        isPreview: isPreview,
                        title: this.noticeTitle,
                        content: this.noticeContent, isLeft: isLeft, visible: visible, isWrap: Boolean(Number(this.isWrap))
                    })
            }

        },
        onSetPreRoundPosition(isRight) {
            this.opReq(`${CommandId.cs_setPreRoundPosition}`, { _: null, isRight: isRight })
        },
        onSetFxPoint(mx, my) {
            console.log(mx, my)
            this.opReq(`${CommandId.cs_setFxPoint}`, { _: null, mx: mx, my: my })
        },
        onPlayScoreFx() {
            this.opReq(`${CommandId.cs_playScoreFx}`, { _: null })
        },
        tab(t) {
            this.actTab = t
        },
        onSetBDVisible(v) {
            this.opReq(`${CommandId.cs_setBdVisible}`, { _: null, v: v })
        },
        onClkBracket() {
            this.opReq(`${CommandId.cs_showBracket}`, { _: null })
        },
        onSetClientDelay(t) {
            setClientDelay(this.gameId, t, (res) => {
                console.log('setClientDelay', res)
                this.onGetClientDelay()
            })
        },
        onShowFx(visible, fxIdx = 1) {
            this.opReq(`${CommandId.cs_showBottle}`, { _: null, visible: visible, fxIdx: fxIdx })
        },
        onBracketShow(page, v) {
            let data = { _: null, page: page, visible: v }
            if (page == 0 && v) {
                getAllPlayer(this.gameId, res => {
                    data['playerArr'] = res.data
                    this.opReq(`${CommandId.cs_showBracketPage}`, data)
                })
            }
            else
                this.opReq(`${CommandId.cs_showBracketPage}`, data)
        },
        onShowPlayerRanking(playerId) {
            $post('/online/ranking/raw', { date: '2017-07-19' }, res => {
                console.log('Top10player', playerId, res.doc);
                if (res.doc.length > 0) {
                    let playerArr = res.doc[0]['raw']
                    let playerArr2 = []
                    let ranking = 1
                    for (let p of playerArr) {
                        if (p.playerName && Number(p.playCount) > 3) {
                            p.rinking = ranking
                            playerArr2.push(p)
                            ranking += 1
                        }
                    }
                    for (let p of playerArr2) {
                        if (p.playerName.search(playerId) > -1)
                            console.log("#", "*", p.sortId, p.playerName);
                    }
                }
            })
        },
        emitPlayer(playerArr, gameTitle?, gameSubTitle?) {
            let lp, rp
            for (let p of this.gamePlayerArr) {
                if (p.name == playerArr[0]) {
                    lp = p
                }
                if (p.name == playerArr[1])
                    rp = p
            }
            this.opReq(`${CommandId.cs_setPlayer}`, { _: null, leftPlayer: lp, rightPlayer: rp, gameTitle: gameTitle, gameSubTitle: gameSubTitle })

        },
        onSetPlayer(vsPlayer, gameTitleType?, gameSubTitle?) {
            let a = vsPlayer.split('-')
            // let titleMap = { 1: '八进四', 2: '四进二', 3: '决赛' }
            let gameTitle = gameTitleType
            if (a.length == 2) {
                if (!this.gamePlayerArr) {
                    getAllPlayer(this.gameId, data => {
                        console.log('get player', data);
                        this.gamePlayerArr = data.data
                        this.emitPlayer(a, gameTitle, gameSubTitle)
                    })
                }
                else
                    this.emitPlayer(a, gameTitle, gameSubTitle)
            }
        },
        onClkTop5(v, idx, g) {
            this.opReq(`${CommandId.cs_showTop5}`, { _: null, visible: v, idx: idx, gameIdxArr: g })
        },
        onClkGroup(v, idx) {
            this.opReq(`${CommandId.cs_showGroup}`, { _: null, visible: v, idx: idx, liveConf: this.liveConf, isLeft: this.isShowGroupLeft })
        },
        onClkVsTitle(v, vs) {
            this.opReq(`${CommandId.cs_showVsTitle}`, { _: null, visible: v, vs: vs })
        },
        showCommentator(v, style) {
            let commentatorArr = [this.liveConf.commentator1[0], this.liveConf.commentator2[0]]
            this.opReq(`${WebDBCmd.cs_commentator}`, { _: null, visible: v, isInfo2: false, commentatorArr: commentatorArr, style: style })
        },
        showCommentatorInfoPage(v, idx) {
            let commentatorArr = [this.liveConf.commentator1[0], this.liveConf.commentator2[0]]
            this.opReq(`${WebDBCmd.cs_commentator}`, { _: null, visible: v, isInfo2: true, commentatorArr: commentatorArr })
        },
        showStaticImage(v, imgId) {
            let imgMap = { 1: 'http://rtmp.icassi.us:8090/uploads/932b0a2eb5dc45399820871305ad2a1e.png' }
            let url = imgMap[imgId]
            this.opReq(`${WebDBCmd.cs_staticImg}`, { _: null, visible: v, url: url })
        },
        onShowAccount(idx, v) {
            if (v)
                this.opReq(`${CommandId.cs_toggleScorePanel}`, { _: null, visible: !v, isBottom: true })
            this.opReq(CommandId.cs_showPanel, { panelId: PanelId.bottomNoticeAccount, idx: idx, visible: v })
        },
        onShowNoticeLeftBottom(cont, v) {
            this.opReq(CommandId.cs_showPanel, { cont: cont, panelId: PanelId.notice_left_bottom, visible: v })
        },
        onClkLoadVsTitle() {
            if (this.vsTitleMap) {
                // this.lLiveName = '丁绍祺'
                // this.rLiveName = '万昌东'
                console.log('map ', this.lLiveName, this.rLiveName)
                let ln = this.vsTitleMap[this.lLiveName]
                let rn = this.vsTitleMap[this.rLiveName]
                if (ln && rn) {
                    this.vsTitle = ln + ' ' + rn
                }
                else if (ln) {
                    this.VsTitle = ln + ' ' + '神秘补位球员'
                }
                else if (rn)
                    this.VsTitle = rn + ' ' + '神秘补位球员'
            }
            else {
                getVsTitleData(res => {
                    let map = JSON.parse(res)
                    this.vsTitleMap = map
                    console.log('vs title', map);
                    this.onClkLoadVsTitle()
                })
            }
        },
        onShowPlayerPopInfo(isPrev, v, isLeft, win, score, rank) {
            this.opReq(`${CommandId.cs_showPlayerPopInfo}`, { _: null, visible: v, isPreview: isPrev, win: win, score: score, rank: rank, isLeft: isLeft })
        },
        showRollText(text, loop, v, style = 1) {
            this.opReq(`${CommandId.cs_showRollText}`, { _: null, visible: v, loop: Number(loop), text: text, style: style })
        },
        onAddScore(isLeft, v) {
            this.opReq(`${CommandId.cs_updateScore}`, { _: null, dtScore: v, isLeft: isLeft })
        },
        onAddFoul(isLeft, v) {
            this.opReq(`${CommandId.cs_updateFoul}`, { _: null, dtFoul: v, isLeft: isLeft })
        },
        onUpdateScore(isLeft, v) {
            let score = Number(v)
            if (score > -1)
                this.opReq(`${CommandId.cs_updateScore}`, { _: null, score: v, isLeft: isLeft })
        },
        onUpdateFoul(isLeft, v) {
            let score = Number(v)
            if (score > -1)
                this.opReq(`${CommandId.cs_updateFoul}`, { _: null, foul: v, isLeft: isLeft })
        },
        onClkShowStage(v) {
            this.opReq(`${CommandId.cs_showStage}`, { _: null, visible: v })
        }
    }
}
export let stageOnlineView = new StageOnlineView()