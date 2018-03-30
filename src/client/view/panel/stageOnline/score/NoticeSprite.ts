import { newBitmap, gradientG } from '../../../utils/PixiEx';
import { FontName, ViewConst } from '../../../const';
import { loadImg } from '../../../utils/JsFunc';
import { ScaleSprite } from '../../../utils/ScaleSprite';
export class NoticeSprite extends PIXI.Container {
    content: PIXI.Text
    title: PIXI.Text
    imgWidth: number
    imgHeight: number
    bg: PIXI.Graphics
    titleBg: PIXI.Graphics
    _content: string
    _title: string
    _isLeft: boolean
    _isBold: String
    constructor() {
        super()

        this.bg = new PIXI.Graphics()
        this.addChild(this.bg)


        let ts = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '35px', fill: "#3d4470",
            fontWeight: 'bold'
        }


        this.title = new PIXI.Text('', ts)
        this.title.style.fontSize = '25px'
        this.title.y = 12
        this.addChild(this.title)
        this.y = 85

        ts.fill = '#e1dfed'

        this.content = new PIXI.Text('', ts)
        this.content.y = 60
        this.addChild(this.content)

        this.setText(this._content, this._title, this._isLeft, this._isBold)

    }
    show() {
        this.visible = true
    }
    hide() {
        this.visible = false
    }
    setText(content, title, isLeft, isBold) {
        if (!title)
            title = '公告'
        this._content = content
        this._title = title
        this._isLeft = isLeft
        this._isBold = isBold

        this.content.style.fontWeight = isBold
        let lineGap = 15
        if (isBold == 'bold') {
            lineGap = 18
        }
        this.content.style.lineHeight = Number(this.content.style.fontSize.replace('px', '')) + lineGap
        this.content.text = content
        this.title.text = title
        let textWidth = Math.max(this.content.width, this.title.width)
        if (textWidth < this.imgWidth)
            textWidth = this.imgWidth
        let h = this.content.height
        if (h < this.imgHeight)
            h = this.imgHeight
        let fw = textWidth + 40
        let fh = this.content.height + 15 + this.content.y

        this.content.x = 0.5 * (fw - this.content.width)
        this.title.x = 0.5 * (fw - this.title.width)

        this.bg.clear()
        let t = this.title

        this.bg.beginFill(0xffffff, 0.38)
            .drawRect(0, 0, fw, fh)
            .endFill()

            .beginFill(0x000000, 1)
            .drawRect(5, 5, fw - 10, fh - 10)
            .endFill()
           // let c1 = [0xf0, 0xfa, 0xff]
    // let c2 = [0xcb, 0xd1, 0xd4]
        gradientG(this.bg, 5, 5, fw - 10, fh - 10,
            0x414665, 0x1a203e)
        this.bg.beginFill(0xffffff, 1)
            .moveTo(t.x - 15, t.y + t.height * .5)
            .lineTo(t.x - 5, t.y + t.height + 5)
            .lineTo(t.x + t.width + 5, t.y + t.height + 5)
            .lineTo(t.x + t.width + 15, t.y + t.height * .5)
            .drawRect(5, 5, fw - 10, 24)
        if (isLeft) {
            this.x = 15
        }
        else {
            this.x = ViewConst.STAGE_WIDTH - fw - 15
        }
        this.y = (1 - .618) * (ViewConst.STAGE_HEIGHT - fh)
    }
}