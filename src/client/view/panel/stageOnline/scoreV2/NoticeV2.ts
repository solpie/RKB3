import { imgLoader } from "../../../utils/ImgLoader";
import { imgToTex, newBitmap } from '../../../utils/PixiEx';
import { Text2, TextFac } from '../../../utils/TextFac';
import { FontName } from '../../../const';
import { ScaleSprite } from '../../../utils/ScaleSprite';
import { cnWrap } from '../../../utils/JsFunc';

export class NoticeV2 extends PIXI.Container {
    topSP: PIXI.Sprite
    bottomSP: PIXI.Sprite
    midSP: PIXI.Sprite
    isLoaded = false
    tmpData: any
    p: any
    title: Text2
    content: Text2
    pad: ScaleSprite
    midTex: PIXI.BaseTexture
    midG: PIXI.Graphics
    constructor(p) {
        super()
        this.p = p
        let imgArr = []
        let topUrl = '/img/panel/notice/bg.png'
        let bottomUrl = '/img/panel/notice/bgBottom.png'
        let midUrl = '/img/panel/notice/mid.png'
        let pad = '/img/panel/notice/pad.png'
        imgArr.push(topUrl)
        imgArr.push(bottomUrl)
        imgArr.push(midUrl)
        imgArr.push(pad)
        imgLoader.loadTexArr(imgArr, _ => {
            this.topSP = newBitmap({ url: topUrl })
            this.addChild(this.topSP)
            this.bottomSP = newBitmap({ url: bottomUrl })
            this.addChild(this.bottomSP)

            this.midSP = newBitmap({ url: midUrl })
            this.addChild(this.midSP)

            let padTex = imgLoader.getTex(pad)
            this.pad = new ScaleSprite(padTex, { x: 30, y: 15, width: 330, height: 20 })
            this.addChild(this.pad)
            this.pad.x = 29
            this.pad.y = 80
            let ns = {
                fontFamily: FontName.MicrosoftYahei,
                fontSize: '32px', fill: "#28273f",
            }


            this.content = TextFac.new_(ns, this)
                .setY(87)
            ns.fill = '#eee'
            this.title = TextFac.new_(ns, this)
                .setY(18)
            this.isLoaded = true
            if (this.tmpData != null)
                this._show(this.tmpData)
        })
    }
    _show(data) {
        let content = data.content
        if (data.isWrap)
            content = cnWrap(data.content, 22)
        this.content.setText(content)
            .setAlignCenter(227)
        let contentHeight = this.content.height
        if (contentHeight % 2 == 1)
            contentHeight += 1
        this.midSP.height = contentHeight
        this.midSP.x = 0
        this.midSP.y = 82

        this.bottomSP.y = contentHeight
        // this.pad.height =contentHeight
        this.pad.resize(this.pad.width, contentHeight + 20)
        this.title.setText(data.title || "公告")
            .setAlignCenter(227)
        console.log('show notice',data)
        this.y = 540 - 70 - contentHeight * 0.5
        if (data.isLeft) {
            this.x = 0
        }
        else {
            this.x = 1920 - 440
        }
    }
    show(data) {
        if (this.isLoaded)
            this._show(data)
        else
            this.tmpData = data

        if (data.visible) {
            this.p.addChild(this)
        }
        else {
            if (this.parent)
                this.parent.removeChild(this)
        }
    }
}