import { gradientG, loadRes, setScale } from '../../../utils/PixiEx';
import { FontName } from "../../../const";
import { imgLoader } from "../../../utils/ImgLoader";

export class PlayerNow extends PIXI.Container {
    bg: PIXI.Graphics
    titleBg: PIXI.Graphics
    title: PIXI.Text
    avtSP: PIXI.Sprite
    constructor() {
        super()
        this.bg = new PIXI.Graphics()
        this.addChild(this.bg)



        this.avtSP = new PIXI.Sprite()
        this.addChild(this.avtSP)
        this.avtSP.x = 25
        this.avtSP.y = 25

        this.titleBg = new PIXI.Graphics()
        this.addChild(this.titleBg)


        let ts = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '35px', fill: "#3d4470",
            fontWeight: 'bold'
        }

        this.title = new PIXI.Text('蓝方球员', ts)
        this.title.style.fontSize = '25px'
        this.title.y = 12
        this.title.x = 125 - this.title.width * .5
        this.addChild(this.title)

       
    }

    show(data) {
        imgLoader.loadTex2(data.avatar, _ => {
            // this.y = 285
            // this.x = 20
            this.y = data.y
            this.x = data.x
            this.title.text = data.title
            this.bg.clear()
            let t = this.title
            let fw = 250, fh = 400
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
            this.titleBg.beginFill(0xffffff, 1)
                .moveTo(t.x - 15, t.y + t.height * .5)
                .lineTo(t.x - 5, t.y + t.height + 5)
                .lineTo(t.x + t.width + 5, t.y + t.height + 5)
                .lineTo(t.x + t.width + 15, t.y + t.height * .5)
                .drawRect(5, 5, fw - 10, 24)


            let tex = imgLoader.getTex(data.avatar)
            this.avtSP.texture = tex
            setScale(this.avtSP, 200 / tex.width)
        })
    }
}