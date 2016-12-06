import { BasePanelView } from '../BasePanelView';
import { VueBase } from '../../utils/VueBase';
class KOA extends VueBase {
    template = require('./koa.html')
    constructor() {
        super()
        VueBase.initProps(this)
    }
    protected mounted() {
        let canvasStage = BasePanelView.initPixi()
        
    }
}

export let koa = new KOA()