import { TweenEx } from '../../utils/TweenEx';
import { blink2, blink3 } from '../../utils/Fx';
import { PlayerDoc } from '../../../model/PlayerInfo';
import { imgToTex, loadRes, newBitmap } from '../../utils/PixiEx';
export class HP extends PIXI.Container {
    pointArr1p: Array<PIXI.Sprite> = []
    pointArr2p: Array<PIXI.Sprite> = []
    foulArr1p: Array<PIXI.Sprite> = []
    foulArr2p: Array<PIXI.Sprite> = []
    avatar1p: PIXI.Sprite
    avatar2p: PIXI.Sprite
    name1p: PIXI.Text
    name2p: PIXI.Text
    bloodFx1p: PIXI.Container
    bloodFx2p: PIXI.Container
    constructor(stage: PIXI.Container) {
        super()
        stage.addChild(this)
        this.addChild(newBitmap({ url: '/img/panel/koa/hp/bg.png' }))

        let _b = () => {
            let bFx = new PIXI.Container()
            bFx['blood'] = newBitmap({ url: '/img/panel/koa/hp/bloodMask.png' })
            bFx['msk'] = newBitmap({ url: '/img/panel/koa/hp/bloodMask.png' })
            bFx['blink'] = newBitmap({ url: '/img/panel/koa/hp/blood.png' })
            bFx['blink'].visible = false
            bFx['blink'].x = -5
            bFx['blink'].y = -5
            bFx.addChild(bFx['blink'])
            bFx.addChild(bFx['blood'])
            bFx.addChild(bFx['msk'])
            bFx['blood'].mask = bFx['msk']
            this.addChild(bFx)
            return bFx
        }
        this.bloodFx1p = _b()
        this.bloodFx1p.x = 518
        this.bloodFx1p.y = 42

        this.bloodFx2p = _b()
        this.bloodFx2p.scale.x = -1
        this.bloodFx2p.x = 1400
        this.bloodFx2p.y = this.bloodFx1p.y
        // this.bloodFx2p = new PIXI.Container()
        // this.addChild(this.bloodFx2p)


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
            let url = '/img/player/avatar/'
            is1p ? url += '1p.png' : url += '2p.png'
            let avt = newBitmap({ url: url })
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
        // init name
        let n1 = new PIXI.Text("1234567")
        this.name1p = n1
        n1.x = 495
        n1.y = 93
        this.addChild(n1)

        let n2 = new PIXI.Text("12345678")
        this.name2p = n2
        n2['x0'] = 1420
        n2.x = n2['x0'] - n2.width
        n2.y = n1.y
        this.addChild(n2)

        this.test()
    }

    test() {
        TweenEx.delayedCall(200, () => {
            this.setBlood(true, 3)
            this.setBlood(false, 1)
            TweenEx.delayedCall(1000, () => {
                this.setBlood(false, 0)
            })
        })
    }

    setPlayer(playerDocArr) {
        loadRes('/img/player/avatar/' + playerDocArr[0].avatar, (img) => {
            this.avatar1p.texture = imgToTex(img);
        });
        loadRes('/img/player/avatar/' + playerDocArr[1].avatar, (img) => {
            this.avatar2p.texture = imgToTex(img);
        });
        this.name1p.text = playerDocArr[0].name
        this.name2p.text = playerDocArr[1].name
        this.name2p.x = this.name2p['x0'] - this.name2p.width
    }

    setBlood(is1p, num) {
        let _f = (bloodArr: Array<PIXI.Sprite>) => {
            for (var i = 0; i < bloodArr.length; i++) {
                var b = bloodArr[i];
                if (i < num) {
                    b.visible = true
                    blink3(b)
                }
                else {
                    b.visible = false
                }
            }
        }
        is1p ? _f(this.pointArr1p) : _f(this.pointArr2p)
        var bFx
        is1p ? bFx = this.bloodFx1p : bFx = this.bloodFx2p
        TweenEx.to(bFx['msk'], 140 * (5 - num), { x: (5 - num) * 67 })
        if (num == 1) {
            bFx['blink'].visible = true
            blink2({ target: bFx['blink'], time: 70 })
        }
        else if (num == 0) {
            bFx['blink'].visible = false
            TweenEx.delayedCall(100, () => {
                bFx['blink'].visible = true
            })
        }
        else
            bFx['blink'].visible = false
    }

}