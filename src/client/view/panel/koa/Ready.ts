import { newBitmap, setPivot } from '../../utils/PixiEx';
import { TweenEx } from '../../utils/TweenEx';
import { FontName, ViewConst } from '../../const';
export class Ready extends PIXI.Container {
    rotCtn: PIXI.Container
    constructor(parent: PIXI.Container, playerDocArr?) {
        super()
        parent.addChild(this)


        let player1p = playerDocArr[0]
        let player2p = playerDocArr[1]

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

        let playerAvt1p = newBitmap({ x: -100, y: 35, url: player1p.portrait })
        let ns = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '50px',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fill: '#fff',
            stroke: '#222',
            strokeThickness: 3,
        }
        let name1p = new PIXI.Text(player1p.name, ns)
        name1p.x = 430
        name1p.y = 200
        playerAvt1p.addChild(name1p)
        this.addChild(playerAvt1p)

        let playerAvt2p = newBitmap({ x: ViewConst.STAGE_WIDTH - 300, y: ViewConst.STAGE_HEIGHT - 300, url: player2p.portrait })
        let name2p = new PIXI.Text(player2p.name, ns)
        name2p.x = -30 - name2p.width
        name2p.y = 200
        playerAvt2p.addChild(name2p)
        this.addChild(playerAvt2p)

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
        logo['yiqi'] = newBitmap({ x: ViewConst.STAGE_WIDTH * .5 - 200, y: 400, url: '/img/panel/koa/ad/yiqi.png' })
        logo['shoeMsk'] = newBitmap({ url: '/img/panel/koa/ad/msk.png' })
        logo.addChild(logo['shoeMsk'])
        logo['shoe'] = newBitmap({ x: 400, y: 0, url: '/img/panel/koa/ad/shoe.png' })
        logo['shoe'].mask = logo['shoeMsk']
        logo['shoe'].alpha = 0
        logo.addChild(logo['shoe'])
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

        let whiteEnd = new PIXI.Graphics().beginFill(0xffffff).drawRect(0, 0, ViewConst.STAGE_WIDTH, ViewConst.STAGE_HEIGHT)
        whiteEnd.alpha = 0

        let _f = (frame) => {
            return frame * 1000 / 60 * 2
        }

        ///animate
        TweenEx.delayedCall(200, () => {
            new TweenEx(playerAvt1p)
                .to({ x: 200 }, _f(5))
                .to({ x: 250 }, _f(28))
                .to({ x: 1000 }, _f(5))
                .start()
            new TweenEx(playerAvt2p)
                .to({ x: ViewConst.STAGE_WIDTH - 400 - 200 }, _f(5))
                .to({ x: ViewConst.STAGE_WIDTH - 400 - 250 }, _f(28))
                .to({ x: ViewConst.STAGE_WIDTH - 400 - 1000 }, _f(5))
                .start()

            TweenEx.to(gray.scale, _f(5), { x: 1, y: 1 })
            TweenEx.to(white.scale, _f(10), { y: 1 })
            TweenEx.to(logo.scale, _f(8), { x: 1, y: 1 }, () => {
                logo['shoe'].alpha = 0
                new TweenEx(logo['shoe'])
                    .delay(_f(15))
                    .to({ alpha: 1, x: 0 }, _f(3))
                    .delay(_f(5))
                    .call(() => {

                        new TweenEx(logo['shoe'])
                            .to({ x: 300 }, _f(8))
                            .call(() => {
                                logo['shoe'].mask = null
                                logo['shoe'].x = logo.x
                                logo['shoe'].y = 400
                                logo['shoeMsk'].visible = false
                                this.addChild(logo['shoe'])
                            })
                            .to({ x: 1200 }, _f(3))
                            .to({ x: 1300 }, _f(20))
                            .start()
                    })
                    .start()
            })
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
                        .to({ x: 1.8, y: 1.8 }, _f(6))
                        .to({ x: 1, y: 1 }, _f(3))
                        .start()
                    // new TweenEx(obj.scale)
                    //     .to({ y: 1.5 }, _f(6))
                    //     .to({ y: 1 }, _f(3))
                    //     .start()
                }
                new TweenEx(logo)
                    .call(() => {
                        s150(logo['1'])
                        TweenEx.delayedCall(_f(2), () => {
                            s150(logo['2'])
                            TweenEx.delayedCall(_f(2), () => {
                                s150(logo['3'])
                            })
                        })
                    })
                    .call(() => {
                        logo['yiqi'].alpha = 0
                        this.addChild(logo['yiqi'])
                        new TweenEx(logo['yiqi'])
                            .delay(_f(12))
                            .to({ alpha: 1, x: ViewConst.STAGE_WIDTH * .5 - 250 }, _f(2))
                            .to({ alpha: 1, x: ViewConst.STAGE_WIDTH * .5 - 150 }, _f(20))
                            .start()
                    })
                    .delay(_f(5))
                    .to({ x: ViewConst.STAGE_WIDTH * .5 - 150 }, _f(5))
                    .to({ x: ViewConst.STAGE_WIDTH * .5 - 600 }, _f(3))
                    .to({ x: ViewConst.STAGE_WIDTH * .5 - 550 }, _f(8))
                    .start()

            })
            new TweenEx(whiteEnd)
                .delay(_f(70))
                .call(() => [
                    this.addChild(whiteEnd)
                ])
                .to({ alpha: 1 }, _f(8))
                .call(() => {
                    // logo['shoe'].parent.removeChild(logo['shoe'])
                    while (this.children.length > 1) {
                        this.removeChildAt(0)
                    }
                })
                .to({ alpha: 0 }, _f(8))
                .call(() => {
                    whiteEnd.parent.removeChild(whiteEnd)
                })
                .start()

        })
    }
}