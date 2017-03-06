import { FontName } from '../../../const';
import { loadImg } from '../../../utils/JsFunc';
import { ScaleSprite } from '../../../utils/ScaleSprite';
export class NoticeSprite extends PIXI.Container {
    frame: ScaleSprite
    label: PIXI.Text
    imgWidth: number
    imgHeight: number
    constructor() {
        super()
        loadImg('/img/panel/score2017/noticeBg.png', (img) => {
            this.imgWidth = img.width
            this.imgHeight = img.height

            this.frame = new ScaleSprite(img, { x: 185, y: 100, width: 155, height: 300 })
            // this.frame.resize(1000, 800)
            this.addChildAt(this.frame, 0)
            this.setText(this.label.text)
        })        // super()
        let ts = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '20px', fill: "#000",
            fontWeight: 'bold'
        }
        this.label = new PIXI.Text('', ts)
        this.addChild(this.label)
    }

    setText(text) {

        this.label.text = text
        let w = this.label.width
        if (w > this.imgWidth)
            w = this.imgWidth
        let h = this.label.height
        if (h > this.imgHeight)
            h = this.imgHeight
        this.frame.resize(this.label.width + 40, this.label.height + 80)
        this.label.x = 0.5 * (this.frame.width - this.label.width)
        this.label.y = 100
    }
}