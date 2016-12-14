import { newBitmap } from '../../utils/PixiEx';
export class HP extends PIXI.Container {
    pointArr1p: Array<PIXI.Sprite> = []
    pointArr2p: Array<PIXI.Sprite> = []
    foulArr1p: Array<PIXI.Sprite> = []
    foulArr2p: Array<PIXI.Sprite> = []
    avatar1p: PIXI.Sprite
    avatar2p: PIXI.Sprite
    constructor(stage: PIXI.Container) {
        super()
        stage.addChild(this)
        this.addChild(newBitmap({ url: '/img/panel/koa/hp/bg.png' }))
        let initPoint = (is1p: boolean) => {
            for (var i = 0; i < 5; i++) {
                let p = newBitmap({ url: '/img/panel/koa/hp/point.png' })
                if (is1p) {
                    p.x = 787 - 67 * i
                    this.pointArr1p.push(p)
                }
                else {
                    p.scale.x = -1
                    p.x = 1132 + 67 * i
                    this.pointArr2p.push(p)
                }
                p.y = 42
                this.addChild(p)
            }
        }
        initPoint(true)
        initPoint(false)

        let initFoul = (is1p: boolean) => {
            for (var i = 0; i < 4; i++) {
                let f = newBitmap({ y: 89, url: '/img/panel/koa/hp/foul.png' })
                if (is1p) {
                    f.x = 820 - 38 * i
                    this.foulArr1p.push(f)
                }
                else {
                    f.x = 1098 + 38 * i
                    f.scale.x = -1
                    this.foulArr2p.push(f)
                }
                this.addChild(f)
            }
        }
        initFoul(true)
        initFoul(false)

        //120 x 120
        let initAvatar = (is1p: boolean) => {
            let avt = newBitmap({ url: '/img/player/avatar/1.jpg' })

            let msk1 = new PIXI.Graphics()
            msk1.beginFill(0xff0000)
            msk1.moveTo(0, 0)
            msk1.lineTo(0, 117)
            msk1.lineTo(100, 117)
            msk1.lineTo(112, 92)
            msk1.lineTo(120, 92)
            msk1.lineTo(120, 0)
            if (is1p) {
                avt.x = 380
                msk1.x = avt.x
                this.avatar1p = avt
            }
            else {
                avt.x = 1420
                msk1.scale.x = -1
                msk1.x = avt.x + 120
                this.avatar2p = avt
            }

            this.addChild(avt)
            this.addChild(msk1)
            avt.mask = msk1
        }


        initAvatar(true)
        initAvatar(false)
     
        // let avt2 = newBitmap({ url: '/img/player/avatar/1.jpg' })
        // avt2.x = 1420
        // this.addChild(avt2)

        this.addChild(newBitmap({ url: '/img/panel/koa/hp/deco.png' }))
    }

}