import { EventDispatcher } from '../utils/EventDispatcher';

import { ViewConst } from "../const";
declare var $;
declare var PIXI;
export class BasePanelView extends EventDispatcher {
    name: string;
    stageWidth;
    stageHeight;
    ctn;
    stage;
    opReq: (cmdId: string, param: any, callback?: any) => void;

    constructor(pid) {
        super()
        this.opReq = (cmdId: string, param: any, callback?: any) => {
            $.post(`/panel/${pid}/${cmdId}`,
                param,
                callback);
        };
    }

    static initPixi() {
        console.log('initPixi')
        let renderer = new PIXI.autoDetectRenderer(ViewConst.STAGE_WIDTH, ViewConst.STAGE_HEIGHT,
            { antialias: false, transparent: true, resolution: 1 }, false);
        document.body.insertBefore(renderer.view, document.getElementById("panel"));
        renderer.stage = new PIXI.Container();
        renderer.backgroundColor = 0x00000000;
        //Loop this function 60 times per second

        // renderer.renderStage = (time) => {
        //     requestAnimationFrame(renderer.renderStage);
        //     console.log(time)
            
        //     TWEEN.update(time)
        //     renderer.render(renderer.stage);
        // };
        // renderer.renderStage();
        let time =0
        setInterval(() => {
            TWEEN.update(time)
            time += 33.3
            // time += 66.6
            // console.log(time)
            renderer.render(renderer.stage);
        }, 33.3)
        return renderer.stage;
    }

    show() {
    }

    hide() {
    }
}