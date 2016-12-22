import { dynamicLoading, OpReq } from '../../utils/WebJsFunc';
import { CommandId } from '../../Command';
import { Score5v5 } from './Score5v5';
import { BasePanelView } from '../BasePanelView';
import { PanelId } from '../../const';
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
    }
    panel: Score5v5
    $this: Stage5v5
    constructor() {
        super()
        VueBase.initProps(this)
    }
    initCanvas() {
        this.panel = new Score5v5(BasePanelView.initPixi())
    }
    protected created() {
        this.initCanvas()
        this.isOp = this.$route.params['op'] == 'op'
        if (this.isOp) {
            dynamicLoading.css('/css/bulma.min.css')
        }
        this.initIO()
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
                console.log("CommandId.sc_5v5score", data)
                var isLeft = data.isLeft
                isLeft ? this.panel.setLeftTimeup(data.timeup)
                    : this.panel.setRightTimeup(data.timup)
            })
    }
    methods = {
        onShowHeaderText() {
            this.opReq(`${CommandId.cs_showHeaderText}`,
                {
                    _: null,
                    text: 'test', sec: 5
                })
        },
        onTimeup(isLeft, t) {
            console.log('timeup',t);
            
            this.opReq(`${CommandId.cs_5v5timeup}`,
                {
                    _: null,
                    isLeft: isLeft,
                    timeup: t
                })
        },
        onQueter(queter) {
            this.opReq(`${CommandId.cs_5v5queter}`,
                {
                    _: null,
                    queter: queter,
                })
        },
        onScore(isLeft, score) {
            this.opReq(`${CommandId.cs_5v5score}`,
                {
                    _: null,
                    isLeft: isLeft,
                    score: score
                })
        }
    }
}
export let stage5v5 = new Stage5v5()