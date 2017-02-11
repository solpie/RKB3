
import { ViewConst } from "../const";
declare var $;
declare var PIXI;
export class BasePanelView {
    name: string;
    stageWidth;
    stageHeight;
    ctn;
    stage;
    opReq: (cmdId: string, param: any, callback?: any) => void;

    constructor(pid) {
        this.opReq = (cmdId: string, param: any, callback?: any) => {
            $.post(`/panel/${pid}/${cmdId}`,
                param,
                callback);
        };
    }

    static initPixi() {
        let renderer = new PIXI.autoDetectRenderer(ViewConst.STAGE_WIDTH, ViewConst.STAGE_HEIGHT,
            { antialias: false, transparent: true, resolution: 1 }, false);
        document.body.insertBefore(renderer.view, document.getElementById("panel"));
        renderer.stage = new PIXI.Container();
        renderer.backgroundColor = 0x00000000;
        //Loop this function 60 times per second
        renderer.renderStage = (time) => {
            requestAnimationFrame(renderer.renderStage);
            TWEEN.update(time)
            renderer.render(renderer.stage);
        };
        renderer.renderStage();
        return renderer.stage;
    }

    show() {
    }

    hide() {
    }
}