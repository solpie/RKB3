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
    req: OpReq = new OpReq(io.connect(`/${PanelId.rkbPanel}`), (cmdId: string, param: any, callback: any) => {
        $.ajax({
            url: `/panel/${PanelId.onlinePanel}/${cmdId}`,
            type: 'post',
            data: JSON.stringify(param),
            headers: { "Content-Type": "application/json" },
            dataType: 'json',
            success: callback
        });
    })
    panel: any
    constructor() {
        super()
        VueBase.initProps(this)
    }
    initCanvas() {
        this.panel = new Score5v5(BasePanelView.initPixi())
    }
    protected created() {
        
        this.isOp = this.$route.params['op'] == 'op'
        if (this.isOp) {
            dynamicLoading.css('/css/bulma.min.css')
        }
    }
    protected mounted() {
        console.log('this is', this);

        this.initCanvas()
    }

    // onShowHeaderText = VueBase.$method(() => {
    //     this.req.send(`${CommandId.cs_showHeaderText}`,
    //         {
    //             _: null,
    //             text: 'test', sec: 5
    //         })
    //         .on(`${CommandId.sc_showHeaderText}`, (data) => {
    //             console.log("CommandId.sc_showHeaderText", data)
    //         })
    // })

}
export let stage5v5 = new Stage5v5()