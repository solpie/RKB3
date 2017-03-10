import { getFtlogoUrl, getFtLogoUrl2, getFtName } from './Com2017';
import { loadImg } from '../../../utils/JsFunc';
import { FontName, ViewConst } from '../../../const';
import { imgToTex, loadRes, newBitmap } from '../../../utils/PixiEx';
export class Champion extends PIXI.Container {
    title: PIXI.Text
    playerName: PIXI.Text
    playerInfo: PIXI.Text
    ftLogo: PIXI.Sprite
    lLight: PIXI.Sprite
    rLight: PIXI.Sprite
    constructor() {
        super()
        let bg = newBitmap({ url: '/img/panel/score2017/champion.png' })
        this.addChild(bg)

        this.lLight = newBitmap({ url: '/img/panel/score2017/champion.light.png' })
        this.addChild(this.lLight)

        this.rLight = newBitmap({ url: '/img/panel/score2017/champion.light.png' })
        this.rLight.y = this.lLight.y = 894
        this.addChild(this.rLight)

        let t = new PIXI.Text()
        t.y = ViewConst.STAGE_HEIGHT - 216
        let s = t.style
        s.fill = '#fff'
        s.fontSize = '30px'
        s.fontFamily = FontName.MicrosoftYahei
        this.addChild(t)
        this.title = t

        t = new PIXI.Text()
        t.y = ViewConst.STAGE_HEIGHT - 162
        s = t.style
        s.fill = '#fff'
        s.fontSize = '65px'
        s.fontWeight = 'bold'
        s.fontFamily = FontName.MicrosoftYahei
        this.addChild(t)
        this.playerName = t

        t = new PIXI.Text()
        t.y = ViewConst.STAGE_HEIGHT - 57
        s = t.style
        s.fill = '#fff'
        s.fontSize = '25px'
        s.fontFamily = FontName.MicrosoftYahei
        this.addChild(t)
        this.playerInfo = t

        this.ftLogo = new PIXI.Sprite()
        this.addChild(this.ftLogo)
    }

    setChampion(title, name, info, ftId) {
        let w = ViewConst.STAGE_WIDTH
        this.title.text = title
        this.title.x = .5 * (w - this.title.width)
        this.lLight.x = this.title.x - 128 - 10
        this.rLight.x = this.title.x + this.title.width + 10
        this.playerName.text = name
        this.playerName.x = .5 * (w - this.playerName.width)
        this.playerInfo.text = getFtName(ftId) + " | " + info
        loadImg(getFtLogoUrl2(ftId), (img) => {
            this.ftLogo.x = .5 * (w - (65 + this.playerInfo.width))
            this.playerInfo.x = this.ftLogo.x + 65
            this.ftLogo.y = this.playerInfo.y - 3
            this.ftLogo.texture = imgToTex(img)
            this.ftLogo.width = this.ftLogo.height = 42
        })
    }

    show() {
        this.visible = true
    }

    hide() {
        this.visible = false
    }
}