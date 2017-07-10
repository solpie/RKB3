import { FontName, ViewConst } from '../../../const';
import { loadImg } from '../../../utils/JsFunc';
import { imgToTex, newBitmap, loadRes } from '../../../utils/PixiEx';
import { proxy } from '../../../utils/WebJsFunc';

export class Ranking extends PIXI.Container {
    ctn: any
    playerTextArr: Array<PIXI.Text>
    dtTextArr: Array<PIXI.Text>
    dtSpArr: Array<PIXI.Sprite>
    circleSpArr: Array<PIXI.Sprite>
    avtSpArr: Array<PIXI.Sprite>

    titleText: PIXI.Text
    texDown: PIXI.Texture
    texUp: PIXI.Texture
    texFlat: PIXI.Texture

    //内框 颜色
    constructor(parent: any) {
        super()
        this.ctn = parent
        let back = new PIXI.Graphics()
        back.beginFill(0, .7)
            .drawRect(0, 0, ViewConst.STAGE_WIDTH * .5, ViewConst.STAGE_HEIGHT)

        this.addChild(back)

        let bg = newBitmap({ url: '/img/panel/score2017/rankingBg.png' })
        bg.x = 150
        this.addChild(bg)
        let ts = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '45px', fill: "#fff",
            fontWeight: 'bold'
        }
        this.titleText = new PIXI.Text('球员实力榜', ts)
        this.titleText.x = 236
        this.titleText.y = 54
        bg.addChild(this.titleText)

        this.playerTextArr = []
        this.dtSpArr = []
        this.circleSpArr = []
        this.dtTextArr = []
        this.avtSpArr = []
        let ns = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '30px', fill: "#454545",
            fontWeight: 'bold'
        }
        let dts = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '35px', fill: "#f00",
        }

        for (let i = 0; i < 10; i++) {
            let t = new PIXI.Text('安云鹏', ns)
            t.x = 150
            t.y = 155 + i * 92
            this.playerTextArr.push(t)
            bg.addChild(t)

            let sp = new PIXI.Sprite()
            sp.x = 538 + 45
            sp.y = t.y + 10
            bg.addChild(sp)
            this.dtSpArr.push(sp)

            let dtText = new PIXI.Text('2', dts)
            dtText.x = 610
            dtText.y = t.y + -5
            bg.addChild(dtText)
            this.dtTextArr.push(dtText)

            let c = new PIXI.Graphics()
            c.beginFill(0xffff00)
                .drawCircle(34, 34, 34)
            c.x = 460
            c.y = t.y + -15
            bg.addChild(c)
            this.x = ViewConst.STAGE_WIDTH * .5

            let avtMask = new PIXI.Graphics()
            avtMask.beginFill(0xff0000)
                .drawCircle(28, 28, 28)
            avtMask.x = c.x + 6
            avtMask.y = c.y + 6
            bg.addChild(avtMask)

            let avt = new PIXI.Sprite()
            avt.x = c.x + 6
            avt.y = c.y + 6
            avt.mask = avtMask
            this.avtSpArr.push(avt)
            bg.addChild(avt)
        }


        // loadImg('/img/panel/score2017/rankingUp.png', img => {
        //     this.texUp = imgToTex(img)
        // })
    }
    _fillSp(data) {
        for (let i = 0; i < 10; i++) {
            let dtSp = this.dtSpArr[i]
            dtSp.texture = this.texDown
        }
    }

    show(data) {
        data.isTotal ?
            this.titleText.text = '球员实力榜'
            : this.titleText.text = '球员实力榜'
        if (!this.texDown)
            loadImg('/img/panel/score2017/rankingDown.png', img => {
                this.texDown = imgToTex(img)
                this._fillSp(data)
            })
        else
            this._fillSp(data)

        if (!this.texUp)
            loadImg('/img/panel/score2017/rankingUp.png', img => {
                this.texUp = imgToTex(img)
                this._fillSp(data)
            })
        else
            this._fillSp(data)
        // let avtUrlArr = []
        for (let i = 0; i < 10; i++) {
            let avtUrl = 'http://w1.hoopchina.com.cn/huputv/resource/img/amateur.jpg'
            this._loadAvt(this.avtSpArr[i], avtUrl)
        }
        this.ctn.addChild(this)
    }
    _loadAvt(avt, url) {
        loadRes(url, (img) => {
            avt.texture = imgToTex(img)
            let s = 56 / img.width
            avt.scale.x = avt.scale.y = s
        }, true);
    }
    hide() {
        this.ctn.removeChild(this)
    }
}