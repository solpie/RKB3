import { newBitmap } from '../../utils/PixiEx';
/**
 * OrderScene
 */
export class OrderScene extends PIXI.Container {
    bg: PIXI.Sprite
    portraitArr1p: Array<PIXI.Sprite>
    portraitArr2p: Array<PIXI.Sprite>
    constructor(stage: PIXI.Container) {
        super()
        stage.addChild(this)
        this.bg = newBitmap({ url: '/img/panel/koa/order/bg.png' })
        this.addChild(this.bg)

        this.portraitArr1p = []
        this.portraitArr2p = []
        for (var i = 0; i < 4; i++) {
            let ctn1p = new PIXI.Container()
            ctn1p.x = 300
            ctn1p.y = 48 + i * 240
            this.addChild(ctn1p)
            // let msk = newBitmap({ url: '/img/panel/koa/order/mask.png' })
            // ctn1p.addChild(msk)
            // ctn1p['sp'] = new PIXI.Sprite()
            ctn1p['sp'] = newBitmap({url:'/img/player/portrait/1.png'})// PIXI.Sprite()
            // ctn1p['sp'].mask = msk
            ctn1p.addChild(ctn1p['sp'])
            let bw = newBitmap({ url: '/img/panel/koa/order/blueWave.png' })
            bw.x = -39
            bw.y = 262
            ctn1p.addChild(bw)

            let ctn2p = new PIXI.Container()
            ctn2p.x = 1200
            ctn2p.y = 48 + i * 240
            this.addChild(ctn2p)
            // let msk = newBitmap({ url: '/img/panel/koa/order/mask.png' })
            // ctn1p.addChild(msk)
            // ctn1p['sp'] = new PIXI.Sprite()
            ctn2p['sp'] = newBitmap({url:'/img/player/portrait/2.png'})// PIXI.Sprite()
            // ctn1p['sp'].mask = msk
            ctn2p.addChild(ctn2p['sp'])
            let rw = newBitmap({ url: '/img/panel/koa/order/redWave.png' })
            rw.x = -39
            rw.y = 262
            ctn2p.addChild(rw)
        }
    }
}