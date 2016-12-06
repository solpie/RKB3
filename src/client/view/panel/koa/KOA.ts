import { TeamScene } from './TeamScene';
import { BasePanelView } from '../BasePanelView';
import { VueBase } from '../../utils/VueBase';
let teamScene:TeamScene;
class KOA extends VueBase {
    template = require('./koa.html')
    constructor() {
        super()
        VueBase.initProps(this)
    }
    protected mounted() {
        let canvasStage = BasePanelView.initPixi()
        teamScene = new TeamScene(canvasStage)
    }
}

export let koa = new KOA()