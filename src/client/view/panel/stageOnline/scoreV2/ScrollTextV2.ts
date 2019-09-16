import { FontName, ViewConst } from '../../../const';
import { newBitmap } from '../../../utils/PixiEx';
import { Text2, TextFac } from '../../../utils/TextFac';
import { TweenEx } from '../../../utils/TweenEx';
import { BasePanel } from '../../base/BasePanel';
import { bottomMoveIn } from '../../../utils/Fx';
import { imgLoader } from '../../../utils/ImgLoader';
let urlBg1 = '/img/panel/score2018v2/bottomADV2.png'
let urlBg2 = '/img/panel/score2018v2/bottomADV2_cuilian.png'
// urlBg1 = '/img/panel/notice/bottomAD.png'
const textRectLeft = 324
const textRectWidth = 940+580-324
export class ScrollTextV2 extends BasePanel {
    static cls = 'ScrollTextV2'
    rollText: Text2
    bg: PIXI.Sprite
    create() {
        console.log('scroll text creat1e');
        let imgArr = []
        imgArr.push(urlBg1)
        imgArr.push(urlBg2)
        this.load(imgArr, _ => {
            console.log('scroll text loaded');
            let ts = {
                fontFamily: FontName.MicrosoftYahei,
                fontSize: '45px', fill: "#eee",
                fontWeight: 'bold'
            }

            let texBlack = new PIXI.Graphics()
            texBlack.beginFill(0xeeeeee)
                .drawRect(textRectLeft, 944, textRectWidth, 100)
            this.texBlack = texBlack
            let bg = new PIXI.Sprite()
            this.bg = bg
            // bg.y = this.rollText.y - 10
            this.addChild(bg)
            this.addChild(texBlack)
            this.newScrollText()
        })
    }
    texBlack:PIXI.Graphics
    newScrollText(){
        if(this.rollText&&this.rollText.parent)
        {
            this.removeChild(this.rollText)
        }
        let ts = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '45px', fill: "#eee",
            fontWeight: 'bold'
        }
        this.rollText = TextFac.new_(ts, this)
        // this.rollText.style.fontSize = '25px'
        this.rollText.y = ViewConst.STAGE_HEIGHT - 118
       
        this.texBlack.mask = this.rollText
        this.addChild(this.rollText)

    }
    loop: number = 2
    _show(data) {
        if (data.visible) {
            if (data.style == 2) {
                this.bg.texture = imgLoader.getTex(urlBg2)
            }
            else {
                this.bg.texture = imgLoader.getTex(urlBg1)
            }
            if(data.loop>0)
            this.loop = data.loop
            this.p.addChild(this)
            let start_scroll = () => {
                this.rollText.x = 1510
                let sec = (this.rollText.width + this.rollText.x) / 80
                TweenEx.to(this.rollText, sec * 1000, { x: textRectLeft - 70 - this.rollText.width }, _ => {
                    this.loop--
                    if (this.loop > 0) {
                        start_scroll()
                    }
                    else
                        this.hide(null)
                })
            }
            bottomMoveIn(this, _ => {
                // TweenEx.to(this, 50, { alpha: 1 })
                this.newScrollText()
                this.rollText.text = data.text
                start_scroll()
            })
        }
        else {
            this.hide(data)
        }

    }
    hide(data) {
        let _t = this
        TweenEx.to(_t, 200, { y: 200 }, _ => {
            this.rollText.text = ''
        })
    }
}