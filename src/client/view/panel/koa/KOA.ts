import { PickupScene } from './Pickup';
import { BasePanelView } from '../BasePanelView';
import { VueBase } from '../../utils/VueBase';
let pickupScene:PickupScene;
class KOA extends VueBase {
    template = require('./koa.html')
    constructor() {
        super()
        VueBase.initProps(this)
    }
    protected mounted() {
        let canvasStage = BasePanelView.initPixi()
        pickupScene = new PickupScene(canvasStage)
    }
}

export let koa = new KOA()