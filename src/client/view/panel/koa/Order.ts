import { pickNameStyle, PickupPlayerInfo } from './Pickup';
import { ViewConst } from '../../const';
import { newBitmap } from '../../utils/PixiEx';
/**
 * OrderScene
 */
export class OrderScene extends PIXI.Container {
    bg: PIXI.Sprite
    portraitArr1p: Array<PIXI.Container>
    portraitArr2p: Array<PIXI.Container>

    select1p: PIXI.Sprite
    select2p: PIXI.Sprite
    blackTop: PIXI.Graphics
    blackBottom: PIXI.Graphics
    constructor(stage: PIXI.Container, playerPortraitArr: Array<PickupPlayerInfo>) {
        super()
        stage.addChild(this)
        this.bg = newBitmap({ url: '/img/panel/koa/order/bg.png' })
        this.addChild(this.bg)

        this.portraitArr1p = []
        this.portraitArr2p = []
        let style = JSON.parse(JSON.stringify(pickNameStyle))
        style['fontSize'] = '30px'


        let ctn = new PIXI.Container()
        this.addChildAt(ctn, 1)
        for (var i = 0; i < 4; i++) {
            let ctn1p = new PIXI.Container()
            ctn1p.x = 300
            ctn1p.y = -300
            ctn.addChildAt(ctn1p, 0)
            ctn1p.addChild(newBitmap({ x: -250, y: 200, url: '/img/panel/koa/pickup/blueName.png' }))

            let pickInfo: PickupPlayerInfo = playerPortraitArr.shift()
            let name1p = new PIXI.Text(pickInfo.name, style);
            name1p.x = -230
            name1p.y = 215
            ctn1p.addChild(name1p)

            ctn1p['sp'] = newBitmap({ url: pickInfo.portrait })

            ctn1p['pickupIdx'] = pickInfo.pickupIdx
            ctn1p.addChild(ctn1p['sp'])
            let bw = newBitmap({ url: '/img/panel/koa/order/blueWave.png' })
            bw.x = -39
            bw.y = 262
            ctn1p.addChild(bw)
            this.portraitArr1p.push(ctn1p)
        }

        ctn = new PIXI.Container()
        this.addChildAt(ctn, 1)

        for (var i = 0; i < 4; i++) {
            let ctn2p = new PIXI.Container()
            ctn2p.x = 1200
            ctn2p.y = -300

            ctn.addChildAt(ctn2p, 0)
            ctn2p.addChild(newBitmap({ x: 250, y: 200, url: '/img/panel/koa/pickup/redName.png' }))

            let pickInfo: PickupPlayerInfo = playerPortraitArr.shift()
            let name2p = new PIXI.Text(pickInfo.name, style);
            name2p.x = 230 + 420 - name2p.width
            name2p.y = 215
            ctn2p.addChild(name2p)
            ctn2p['sp'] = newBitmap({ url: pickInfo.portrait })
            ctn2p['pickupIdx'] = pickInfo.pickupIdx
            // ctn1p['sp'].mask = msk
            ctn2p.addChild(ctn2p['sp'])
            let rw = newBitmap({ url: '/img/panel/koa/order/redWave.png' })
            rw.x = -39
            rw.y = 262
            ctn2p.addChild(rw)
            this.portraitArr2p.push(ctn2p)
        }

        let pivot = new PIXI.Point(210, 39)

        let blue1st = newBitmap({ url: '/img/panel/koa/order/blue1st.jpg' })
        blue1st.pivot = pivot
        this.select1p = blue1st
        blue1st['spArr'] =
            [newBitmap({ url: '/img/panel/koa/order/blue2nd.png' }),
            newBitmap({ url: '/img/panel/koa/order/blue3rd.png' })]
        blue1st['numArr'] = [
            newBitmap({ x: 345, y: 110, url: '/img/panel/koa/order/1.png' }),
            newBitmap({ x: 345, y: 110, url: '/img/panel/koa/order/2.png' }),
            newBitmap({ x: 345, y: 110, url: '/img/panel/koa/order/3.png' }),
            newBitmap({ x: 345, y: 110, url: '/img/panel/koa/order/st.png' }),
        ]
        // blue1st.x = 375
        blue1st.y = 970 + pivot.y
        this.addChild(blue1st)

        let red1st = newBitmap({ url: '/img/panel/koa/order/red1st.jpg' })
        red1st.pivot = pivot
        this.select2p = red1st
        red1st['spArr'] = [newBitmap({ url: '/img/panel/koa/order/red2nd.png' })
            , newBitmap({ url: '/img/panel/koa/order/red3rd.png' })]
        red1st['numArr'] = [
            newBitmap({ x: -40, y: 110, url: '/img/panel/koa/order/1.png' }),
            newBitmap({ x: -40, y: 110, url: '/img/panel/koa/order/2.png' }),
            newBitmap({ x: -40, y: 110, url: '/img/panel/koa/order/3.png' }),
            newBitmap({ x: -40, y: 110, url: '/img/panel/koa/order/st.png' }),
        ]
        // red1st.x = 1275
        red1st.x = ViewConst.STAGE_WIDTH
        red1st.y = blue1st.y
        this.addChild(red1st)

        ///black top bottom

        this.blackTop = new PIXI.Graphics()
        this.blackTop.beginFill(0x000000)
        this.blackTop.drawRect(0, 0, ViewConst.STAGE_WIDTH, ViewConst.STAGE_HEIGHT * .5)
        this.blackTop.y = -ViewConst.STAGE_HEIGHT * .5
        this.addChild(this.blackTop)

        this.blackBottom = new PIXI.Graphics()
        this.blackBottom.drawRect(0, 0, ViewConst.STAGE_WIDTH, ViewConst.STAGE_HEIGHT * .5)
        this.blackBottom.y = ViewConst.STAGE_HEIGHT
        this.addChild(this.blackBottom)
    }

}