import { getPlayerDoc } from '../../utils/HupuAPI';
import { dynamicLoading, OpReq } from '../../utils/WebJsFunc';
import { CommandId } from '../../Command';
import { Score5v5 } from './Score5v5';
import { BasePanelView } from '../BasePanelView';
import { PanelId, TimerState } from '../../const';
import { VueBase } from '../../utils/VueBase';
declare let $
declare let io
class Stage5v5 extends VueBase {
    template = require('./stage5v5.html')
    isOp = VueBase.PROP
    leftScore = VueBase.PROP
    rightScore = VueBase.PROP
    leftTimeup = VueBase.PROP
    rightTimeup = VueBase.PROP
    leftPlayerArr = VueBase.PROP
    rightPlayerArr = VueBase.PROP
    headerText = VueBase.PROP
    timeString = VueBase.PROP
    headerTextSec = VueBase.PROP
    queter = VueBase.PROP
    req: OpReq
    opReq = (cmdId: string, param: any, callback: any) => {
        $.ajax({
            url: `/panel/${PanelId.onlinePanel}/${cmdId}`,
            type: 'post',
            data: JSON.stringify(param),
            headers: { "Content-Type": "application/json" },
            dataType: 'json',
            success: callback
        });
        // return this.lo
    }
    panel: Score5v5
    playerMap: any
    constructor() {
        super()
        VueBase.initProps(this)
    }
    initCanvas() {
        this.panel = new Score5v5(BasePanelView.initPixi())
    }
    protected created() {
        this.leftScore = this.rightScore = 0
        this.leftPlayerArr = [0, 0, 0, 0, 0]
        this.rightPlayerArr = [0, 0, 0, 0, 0]
        this.initCanvas()
        this.isOp = this.$route.params['op'] == 'op'
        if (this.isOp) {
            dynamicLoading.css('/css/bulma.min.css')
        }
        this.initIO()
        let m = (reqCmd, data) => {
            let on = (resCmd, callback) => {

            }
            return {
                on: (resCmd, callback) => {
                    return on
                }
            }
        }
        getPlayerDoc((playerDocArr) => {
            let pm = {}
            for (let player of playerDocArr) {
                pm[player.id] = player
            }
            this.playerMap = pm
        })
        // this.methods['onToggleTimer'] = m(`${CommandId.cs_5v5toggleTimer}`, { _: null })
        //     .on(`${CommandId.sc_5v5toggleTimer}`, (data) => {

        //     })
    }
    initIO() {
        io.connect(`/${PanelId.rkbPanel}`)
            .on(`${CommandId.sc_showHeaderText}`, (data) => {
                console.log("CommandId.sc_showHeaderText", data)
                this.panel.showText(data.text, data.sec)
            })
            .on(`${CommandId.sc_5v5score}`, (data) => {
                console.log("CommandId.sc_5v5score", data)
                var isLeft = data.isLeft
                isLeft ? this.panel.setLeftScore(data.score)
                    : this.panel.setRightScore(data.score)
            })
            .on(`${CommandId.sc_5v5timeup}`, (data) => {
                console.log("CommandId.sc_5v5timeup", data)
                var isLeft = data.isLeft
                var timeup = Number(data.timeup)
                isLeft ? this.panel.setLeftTimeup(timeup)
                    : this.panel.setRightTimeup(timeup)
            })
            .on(`${CommandId.sc_5v5queter}`, (data) => {
                console.log("CommandId.sc_5v5queter", data)
                this.panel.setQueter(data.queter)
            })
            .on(`${CommandId.sc_5v5toggleTimer}`, (data) => {
                this.panel.timeText.toggleTimer()
            })
            .on(`${CommandId.sc_5v5resetTimer}`, (data) => {
                this.panel.timeText.resetTimer()
                this.panel.timeText.setTimeBySec(12 * 60)
            })
            .on(`${CommandId.sc_5v5setPlayer}`, (data) => {
                console.log("CommandId.sc_5v5setPlayer", data)
                this.panel.setPlayer(data.isLeft, data.idx, data.playerDoc, data.isFx)
            })
            .on(`${CommandId.sc_5v5hidePlayer}`, (data) => {
                this.panel.hidePlayer(data.isLeft)
            })
            .on(`${CommandId.sc_5v5setTimeString}`, (data) => {
                this.panel.timeText.setTimeBySec(data.timeInSec)
            })
    }
    methods = {
        onShowHeaderText(text, sec) {
            this.opReq(`${CommandId.cs_showHeaderText}`, {
                _: null,
                text: text, sec: Number(sec)
            })
        },
        onTimeup(isLeft, t) {
            console.log('timeup', t);
            this.opReq(`${CommandId.cs_5v5timeup}`, {
                _: null,
                isLeft: isLeft,
                timeup: t
            })
        },
        onQueter(queter) {
            this.opReq(`${CommandId.cs_5v5queter}`, {
                _: null,
                queter: queter,
            })
        },
        onToggleTimer() {
            this.opReq(`${CommandId.cs_5v5toggleTimer}`, { _: null })
        },
        onResetTimer() {
            this.opReq(`${CommandId.cs_5v5resetTimer}`, { _: null })
        },
        onPlayer(isLeft, idOrArr, idx) {
            let u = (playerId, isFx = false) => {
                let playerDoc = this.playerMap[playerId]
                if (playerDoc) {
                    this.opReq(`${CommandId.cs_5v5setPlayer}`, {
                        _: null,
                        isLeft: isLeft,
                        idx: idx,
                        playerDoc: playerDoc, isFx: isFx
                    })
                }
            }
            if (idx < 0) {
                for (var i = 0; i < idOrArr.length; i++) {
                    var id = idOrArr[i];
                    idx = i
                    u(id, i == (idOrArr.length - 1))
                }
            }
            else
                u(idOrArr)

            // for(var id of id)

        },
        onHidePlayer(isLeft) {
            this.opReq(`${CommandId.cs_5v5hidePlayer}`, {
                _: null,
                isLeft: isLeft,
            })
        },
        onTimeString(time) {
            this.opReq(`${CommandId.cs_5v5setTimeString}`, {
                _: null,
                timeInSec: this.timeString,
            })
        },
        onScore(isLeft, score) {
            isLeft ? this.leftScore = Number(score)
                : this.rightScore = Number(score)
            this.opReq(`${CommandId.cs_5v5score}`, {
                _: null,
                isLeft: isLeft,
                score: score
            })
        }
    }
}
export let stage5v5 = new Stage5v5()