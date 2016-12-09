import { newBitmap } from '../../utils/PixiEx';
/**
 * OrderScene
 */
export class OrderScene extends PIXI.Container {
    bg:PIXI.Sprite
    constructor(stage: PIXI.Container) {
        super()
        stage.addChild(this)
        this.bg = newBitmap({url:'/img/panel/koa/order/bg.png'})
        this.addChild(this.bg)

    }
}