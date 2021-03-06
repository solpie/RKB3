import { getPlayerDoc } from '../../utils/HupuAPI';
import { dynamicLoading, OpReq } from '../../utils/WebJsFunc';
import { CommandId } from '../../Command';
import { Score5v5 } from './Score5v5';
import { BasePanelView } from '../BasePanelView';
import { PanelId, TimerState } from '../../const';
import { VueBase } from '../../utils/VueBase';
import { StudioPanel } from './studioPanel/StudioPanel';
declare let $
declare let io
class StageStudio extends VueBase {
    template = require('./stage5v5.html')
    isOp = VueBase.PROP
    isLeftPlayer = VueBase.PROP
    isMobile = VueBase.PROP
    leftTimeup = VueBase.PROP
    rightTimeup = VueBase.PROP
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
    studioPanel: StudioPanel
    playerMap: any
    constructor() {
        super()
        VueBase.initProps(this)
    }

    initCanvas() {
        this.studioPanel = new StudioPanel(BasePanelView.initPixi(), this.$route)
    }
    protected created() {
        this.isOp = this.$route.params.op == "op"
        this.isLeftPlayer = this.$route.query.player == "left"
        console.log('studio op', this.isOp);
        this.initCanvas()
        this.initIO()

        if (this.isOp)
            this.studioPanel.parent.visible = false
    }

    initIO() {
        let localWS = io.connect(`/${PanelId.rkbPanel}`)
            .on(`${CommandId.sc_showBottle}`, (data) => {
                console.log('sc_showBottle');
                this.studioPanel.showBottle()
            })

        this.studioPanel.initLocalWS(localWS)
    }
    methods = {
        onShowHeaderText(text, sec) {
            this.opReq(`${CommandId.cs_showHeaderText}`, {
                _: null,
                text: text, sec: Number(sec)
            })
        },

        onTogglePlayerState(v) {
            this.opReq(`${CommandId.cs_togglePlayerState}`, { _: null, visible: v, isLeftPlayer: this.isLeftPlayer })
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
        onToggleTimer(b) {
            if (b < 0)
                this.opReq(`${CommandId.cs_5v5toggleTimer}`, { _: null })
            else
                this.opReq(`${CommandId.cs_5v5toggleTimer}`, { _: null, isPause: Boolean(b) })
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
export let studio = new StageStudio()