import { newBitmap, setPivot } from '../../utils/PixiEx';
import { TweenEx } from '../../utils/TweenEx';
import { ViewConst } from '../../const';
export class Ready extends PIXI.Container {
    rotCtn: PIXI.Container
    constructor(parent: PIXI.Container) {
        super()
        parent.addChild(this)


        this.addChild(new PIXI.Graphics().drawRect(0, 0, ViewConst.STAGE_WIDTH, ViewConst.STAGE_HEIGHT))
        let rc = new PIXI.Container
        this.rotCtn = rc
        this.addChild(rc)
        rc.pivot = new PIXI.Point(ViewConst.STAGE_WIDTH * .5, ViewConst.STAGE_HEIGHT * .5)
        rc.x = ViewConst.STAGE_WIDTH * .5
        rc.y = ViewConst.STAGE_HEIGHT * .5
        rc.rotation = PIXI.DEG_TO_RAD * 123
        let blue = new PIXI.Graphics()
            .beginFill(0x2a6ad7)
            .drawRect(0, 0, 1920, 600)
        blue.y = 500
        blue.x = -1200
        rc.addChild(blue)

        let red = new PIXI.Graphics()
            .beginFill(0xD72A37)
            .drawRect(0, 0, 1920, 600)
        red.y = -60
        red.x = 1500
        rc.addChild(red)

        let gray = new PIXI.Graphics()
            .beginFill(0xb4b4b4)
            .drawRect(0, 0, 1920, 800)
        gray.pivot = new PIXI.Point(0, 400)
        gray.scale.x = gray.scale.y = 0
        // gray.y = -400
        gray.y = ViewConst.STAGE_HEIGHT * .5
        // gray.x = -960
        rc.addChild(gray)

        let blue2 = newBitmap({ x: -1920, url: '/img/panel/koa/ad/blue.png' })
        this.addChild(blue2)

        let red2 = newBitmap({ x: 1920, url: '/img/panel/koa/ad/red.png' })
        red2.y = ViewConst.STAGE_HEIGHT - 335
        this.addChild(red2)


        let white = new PIXI.Graphics()
        white
            // .beginFill(0xffff00)
            .beginFill(0xffffff)
            .drawRect(0, 0, 1920, 410)
        white.y = ViewConst.STAGE_HEIGHT * .5
        white.pivot = new PIXI.Point(0, 205)
        white.scale.y = 0
        this.addChild(white)

        let logo = newBitmap({ url: '/img/panel/koa/ad/logo1.png' })
        logo.pivot = new PIXI.Point(307 / 2, 307 / 2)
        logo.x = ViewConst.STAGE_WIDTH * .5
        logo.y = ViewConst.STAGE_HEIGHT * .5
        logo.scale.x = 1 / .24
        logo.scale.y = 1 / .24
        logo['1'] = newBitmap({ x: 35, y: 144, url: '/img/panel/koa/ad/1.png' })
        logo['2'] = newBitmap({ x: 85, y: 98, url: '/img/panel/koa/ad/2.png' })
        logo['3'] = newBitmap({ x: 140, y: 50, url: '/img/panel/koa/ad/3.png' })
        setPivot(logo['1'], 35, 21)
        setPivot(logo['2'], 48, 44)
        setPivot(logo['3'], 62, 78)
        // logo['1'].alpha = .3
        // logo['2'].alpha = .3
        // logo['3'].alpha = .3
        logo.addChild(logo['1'])
        logo.addChild(logo['2'])
        logo.addChild(logo['3'])
        this.addChild(logo)
        let _f = (frame) => {
            return frame * 1000 / 60
        }


        TweenEx.delayedCall(200, () => {
            TweenEx.to(gray.scale, _f(5), { x: 1 })
            TweenEx.to(gray.scale, _f(5), { y: 1 })
            TweenEx.to(white.scale, _f(7), { y: 1 })
            TweenEx.to(logo.scale, _f(8), { x: 1 })
            TweenEx.to(logo.scale, _f(8), { y: 1 })
            TweenEx.to(gray, _f(60), { height: 410 })
            TweenEx.to(blue, _f(12), { x: 0 })
            TweenEx.to(red, _f(12), { x: 0 }, () => {
                TweenEx.delayedCall(_f(4), () => {
                    TweenEx.to(gray.scale, _f(34 - 16), { y: .5 })
                })
            })
            TweenEx.delayedCall(_f(28), () => {
                TweenEx.to(rc, _f(6), { rotation: 180 * PIXI.DEG_TO_RAD }, () => {

                })
                TweenEx.delayedCall(_f(4), () => {
                    TweenEx.to(blue2, _f(28), { x: 0 })
                    TweenEx.to(red2, _f(28), { x: 0 })
                })
                let s150 = (obj) => {
                    new TweenEx(obj.scale)
                        .to({ x: 1.5 }, _f(6))
                        .to({ x: 1 }, _f(3))
                        .start()
                    new TweenEx(obj.scale)
                        .to({ y: 1.5 }, _f(6))
                        .to({ y: 1 }, _f(3))
                        .start()
                }
                TweenEx.to(logo, _f(10), { x: 300 }, () => {
                    s150(logo['1'])
                    TweenEx.delayedCall(_f(2), () => {
                        s150(logo['2'])
                        TweenEx.delayedCall(_f(2), () => {
                            s150(logo['3'])
                        })
                    })
                })
            })
        })
    }
}