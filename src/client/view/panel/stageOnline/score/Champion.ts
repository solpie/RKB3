import { FontName, ViewConst } from '../../../const';
import { loadImgArr } from '../../../utils/JsFunc';
import { newBitmap } from '../../../utils/PixiEx';
import { TweenEx } from '../../../utils/TweenEx';
export class Champion extends PIXI.Container {
    title: PIXI.Text
    playerName: PIXI.Text
    playerInfo: PIXI.Text
    // lLight: PIXI.Sprite
    // rLight: PIXI.Sprite
    constructor() {
        super()
        let bg = newBitmap({ url: '/img/panel/score2018/championBg.png' })
        this.addChild(bg)

        let titleCtn = new PIXI.Container()
        this.titleCtn = titleCtn
        this.addChild(titleCtn)

        let t = new PIXI.Text()
        t.y = ViewConst.STAGE_HEIGHT - 230
        let s = t.style
        s.fill = '#fff'
        // s.fill = '#aaa'
        s.fontWeight = 'bold'
        s.fontSize = '40px'
        s.fontFamily = FontName.MicrosoftYahei
        titleCtn.addChild(t)
        this.title = t

        t = new PIXI.Text()
        t.y = ViewConst.STAGE_HEIGHT - 162
        s = t.style
        s.fill = '#fff'
        s.fontSize = '68px'
        s.fontWeight = 'bold'
        s.fontFamily = FontName.MicrosoftYahei
        this.addChild(t)
        this.playerName = t

        t = new PIXI.Text()
        t.y = ViewConst.STAGE_HEIGHT - 70
        s = t.style
        s.fill = '#bbb'
        s.fontSize = '25px'
        s.fontFamily = FontName.MicrosoftYahei
        this.addChild(t)
        this.playerInfo = t



        loadImgArr(['/img/panel/score2018/championTex1.png', '/img/panel/score2018/championTex2.png'], _ => {
            let titleTex = newBitmap({ url: '/img/panel/score2018/championTex1.png' })
            titleTex.width = 800
            titleTex.x = 960 - 0.5 * 800
            // titleTex.x = 960 - 0.5 * (titleTex.width * titleTex.scale.x)
            titleTex.y = 850

            titleCtn.addChild(titleTex)
            //    =
            titleTex.visible = false
            this.title['m'] = titleTex
            // titleTex.cacheAsBitmap = true

            let nameTex = newBitmap({ url: '/img/panel/score2018/championTex2.png' })
            nameTex.scale.x = 500
            nameTex.x = 960 - 0.5 * nameTex.scale.x
            nameTex.y = 925
            // nameTex.alpha = 0.6
            this.addChild(nameTex)
            nameTex.mask = this.playerName

            if (!this.isLoaded) {
                this._onLoad(this.tmpData)
                this.isLoaded = true
                this.tmpData = null
            }
        })
    }
    titleCtn: PIXI.Container
    tmpData: any
    isLoaded = false
    _onLoad(data) {
        let w = ViewConst.STAGE_WIDTH
        this.titleCtn.cacheAsBitmap = false
        // this.title['m'].mask = null
        // this.title['m'].visible = false
        this.title.text = data.title
        this.title.x = .5 * (w - this.title.width)
        this.title['m'].visible = true
        this.title['m'].mask = this.title
        this.titleCtn.cacheAsBitmap = true
        // this.title.text = data.title
        // this.title.mask = this.title['m']
        // this.title['m'].cacheAsBitmap = true



        TweenEx.delayedCall(500, _ => {
            this.playerName.visible = false
            this.playerName.text = data.name
            this.playerName.text = data.name
            this.playerName.visible = true
            this.playerName.x = .5 * (w - this.playerName.width)
            this.playerInfo.text = data.info.toUpperCase()
            this.playerInfo.x = 960 - this.playerInfo.width * .5
        })
    }
    setChampion(title, name, info, ftId) {
        let tmpData = { title: title, name: name, info: info }
        if (!this.isLoaded) {
            this.tmpData = tmpData
        }
        else
            this._onLoad(tmpData)
    }

    show() {
        this.visible = true
    }

    hide() {
        this.visible = false
    }
}