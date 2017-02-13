import { ScoreView } from './score/ScoreView'
import { RankView } from "./rank/RankView"
import { BasePanelView } from "../BasePanelView"
import { Bracket } from "./bracket/Bracket"
import { dynamicLoading } from "../../utils/WebJsFunc"
import { VueBase } from "../../utils/VueBase"
import { PanelId } from "../../const"
import { CommandId } from "../../Command"

declare let $
declare let io
let rankView: RankView
let bracketView: Bracket
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
    gameId = VueBase.String
    isOp = VueBase.PROP
    delayTime = VueBase.PROP
    liveTime = VueBase.PROP
    panelTime = VueBase.PROP
    panelTime2Set = VueBase.PROP
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
        if (this.isOp) {
            dynamicLoading.css('/css/bulma.min.css')
        }
        console.log('stageOnlineView created!')
    }

    protected mounted() {
        canvasStage = BasePanelView.initPixi()
        // this.bracket = new BracketView()
        // this.bracket.gameId = this.$route.params.game_id
        this.gameId = this.$route.params.game_id
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
        this.initIO()
    }

    initIO() {
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
            bracketView = new Bracket(canvasStage, this.gameId)
            this.basePanelArr.push(bracketView)
        }
        this.showOnly(bracketView.name)
    }

    showScore() {
        if (!scoreView) {
            scoreView = new ScoreView(canvasStage, this.$route)
            this.basePanelArr.push(scoreView)
        }
        this.showOnly(scoreView.name)
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
            }
        },
        onClkResetTimer() {
            this.opReq(`${CommandId.cs_resetTimer}`, { _: null })
        },
        onClkSetPanelTime(timeBySec) {
            this.opReq(`${CommandId.cs_setTimer}`, { _: null,time:Number(timeBySec) })
        },
        onClkBracket() {
            this.opReq(`${CommandId.cs_showBracket}`, { _: null })
        }
    }
}
export let stageOnlineView = new StageOnlineView()