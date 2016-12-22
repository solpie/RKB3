import { FontName } from '../../const';
import { TweenEx } from '../../utils/TweenEx';
import { newBitmap } from '../../utils/PixiEx';
export class Score5v5 extends PIXI.Container {
    header: PIXI.Sprite
    headerText: PIXI.Text
    constructor(parent: PIXI.Container) {
        super()
        parent.addChild(this)
        console.log('Score5v5');
        let bx = 330, by = 900
        this.header = newBitmap({ x: bx, y: by, url: '/img/panel/5v5/bgHeader.png' })
        this.header['y0'] = by
        this.header['y1'] = by - 40
        this.addChild(this.header)

        let msk = new PIXI.Graphics()
            .beginFill(0xff0000)
            .drawRect(0, 0, 1260, 45)

        msk.x = bx
        msk.y = by
        this.addChild(msk)
        this.header.mask = msk

        let htStyle = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '25px', fill: '#fff'
        }
        let ht = new PIXI.Text('text header-------', htStyle)
        ht.x = 10
        ht.y = 48
        this.header.addChild(ht)
        this.headerText = ht

        this.addChild(newBitmap({ x: bx, y: by, url: '/img/panel/5v5/bgMain.png' }))
        this.test()
    }

    test() {
        TweenEx.delayedCall(500, () => {
            // this.showHeader()
            this.showText('fsfsasasfasdadf', 5)

        })

        // TweenEx.delayedCall(1500, () => {
        //     this.hideHeader()
        // })

    }

    showText(text, sec, isRoll?) {
        this.headerText.text = text
        this.showHeader()
        TweenEx.delayedCall(sec * 1000, () => {
            this.hideHeader()
        })
    }

    showHeader(callback?) {
        TweenEx.to(this.header, 80, { y: this.header['y1'] }, callback)
    }
    hideHeader() {
        TweenEx.to(this.header, 80, { y: this.header['y0'] })

    }
}