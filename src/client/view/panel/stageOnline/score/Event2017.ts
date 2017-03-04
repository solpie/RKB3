import { ScaleSprite } from '../../../utils/ScaleSprite';
import { fitWidth } from '../bracket/BracketGroup';
import { cnWrap, loadImg } from '../../../utils/JsFunc';
import { proxy } from '../../../utils/WebJsFunc';
import { imgToTex, loadRes, newBitmap } from '../../../utils/PixiEx';
import { TweenEx } from '../../../utils/TweenEx';
import { FontName, ViewConst } from '../../../const';
export class Event2017 extends PIXI.Container {
    modal: PIXI.Graphics
    pName: PIXI.Text
    pWeight: PIXI.Text
    pHeight: PIXI.Text
    pIntro: PIXI.Text
    pRankScore: PIXI.Text
    ftName: PIXI.Text
    avatar: PIXI.Sprite
    ftLogo: PIXI.Sprite
    medal: PIXI.Sprite

    winLose: PIXI.Text
    winPanel: PIXI.Container
    _texMap: any = {}
    constructor(stage: PIXI.Container, isDark = false) {
        super()
        stage.addChild(this)
        this.winPanel = new PIXI.Container()
        this.addChild(this.winPanel)

        this.winPanel.visible = false
        this.modal = new PIXI.Graphics()
            .beginFill(0x000000, .7)
            .drawRect(0, 0, ViewConst.STAGE_WIDTH, ViewConst.STAGE_HEIGHT)
        this.winPanel.addChild(this.modal)
        let bgUrl = '/img/panel/score2017/winBg.png'
        if (isDark)
            bgUrl = '/img/panel/score2017/winBgDark.png'

        let bg = newBitmap({
            url: bgUrl,
        })
        this.winPanel.addChild(bg)

        let ts = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '22px', fill: '#fff',
            fontWeight: 'bold'
        }
        let t = new PIXI.Text("", ts)
        this.winPanel.addChild(t)
        t.x = 923
        t.y = 318
        t.style['fontSize'] = '40px'
        this.pName = t

        t = new PIXI.Text("", ts)
        this.winPanel.addChild(t)
        t.style['fontSize'] = '34px'
        t.x = 540
        t.y = 750
        this.pIntro = t

        t = new PIXI.Text("", ts)
        this.winPanel.addChild(t)
        t.style['fontSize'] = '32px'
        t.x = 1240
        t.y = 427
        this.pWeight = t

        t = new PIXI.Text("", ts)
        this.winPanel.addChild(t)
        t.style['fontSize'] = '30px'
        t.x = 897
        t.y = this.pWeight.y
        this.pHeight = t

        t = new PIXI.Text("", ts)
        this.winPanel.addChild(t)
        t.style['fontSize'] = '40px'
        t.x = 570
        t.y = 647
        this.ftName = t

        t = new PIXI.Text("", ts)
        this.winPanel.addChild(t)
        t.style['fontSize'] = '40px'
        t.x = 805
        t.y = 617
        this.winLose = t

        t = new PIXI.Text("", ts)
        this.winPanel.addChild(t)
        t.style['fontSize'] = '40px'
        t.x = 330
        t.y = this.winLose.y
        this.pRankScore = t

        this.avatar = new PIXI.Sprite()
        this.avatar.x = 511
        this.avatar.y = 314
        this.winPanel.addChild(this.avatar)

        // let amsk = new PIXI.Graphics()
        //     .beginFill(0xff0000)
        //     .drawRect(0, 0, 200, 200)
        // amsk.x = 500
        // amsk.y = 340
        // this.addChild(amsk)

        this.ftLogo = new PIXI.Sprite()
        this.ftLogo.x = 498
        this.ftLogo.y = 644
        this.winPanel.addChild(this.ftLogo)

        this.medal = new PIXI.Sprite()
        this.medal.x = 566
        this.medal.y = 544
        this.winPanel.addChild(this.medal)
    }

    showWin(player) {
        // let name = player.name
        let champion = Number(player.totalChampion)
        var medal = Math.ceil(champion / 5)
        // medal = 2
        if (medal > 0) {
            let medalUrl = '/img/panel/score2017/medal' + medal + '.png'
            if (!this._texMap[medalUrl])
                loadImg(medalUrl, (img) => {
                    this.medal.texture = this._texMap[medalUrl] = imgToTex(img)
                })
            else
                this.medal.texture = this._texMap[medalUrl]
            this.medal.visible = true
        }
        else
            this.medal.visible = false
        // let intro = player.intro
        // let weight = player.weight
        // let height = player.height
        let avatar = player.avatar
        let ftName = player.group

        this.pName.text = player.name
        this.pIntro.text = cnWrap('参赛宣言：' + player.intro, 49, 98)
        this.pWeight.text = player.weight + " KG"
        this.pHeight.text = player.height + " CM"
        this.ftName.text = player.group

        fitWidth(this.ftName, 155, 50)
        this.winLose.text = player.winAmount + ' 胜 / ' + player.loseAmount + ' 负'
        this.winLose.x = 935 - this.winLose.width * .5
        this.pRankScore.text = player.roundScore
        this.pRankScore.x = 1265 - this.pRankScore.width * 0.5
        if (!this._texMap[avatar])
            loadRes(avatar, (img) => {
                this.avatar.texture = this._texMap[avatar] = imgToTex(img)
                this.avatar.texture['w'] = img.width
                this.avatar.texture['h'] = img.height
            }, true)
        else
            this.avatar.texture = this._texMap[avatar]
        console.log('tex width', this.avatar.texture['w'])
        // this.avatar.scale.x = this.avatar.scale.y = 213
        this.avatar.height = this.avatar.width = 213

        let ftUrl = '/img/ft/' + ftName + '.jpg'
        if (!this._texMap[ftUrl])
            loadImg(ftUrl, (img) => {
                this.ftLogo.texture = this._texMap[ftUrl] = imgToTex(img)
                this.ftLogo.visible = true
            }, (e) => {
                console.log('fterror', e)
                this.ftLogo.visible = false
            })
        else {
            this.ftLogo.texture = this._texMap[ftUrl]
            this.ftLogo.visible = true
        }
        this.ftLogo.width = this.ftLogo.height = 56
        this.winPanel.visible = true

        TweenEx.delayedCall(6000, () => {
            this.winPanel.visible = false
        })
    }

    noticeSprite: ScaleSprite
    showNotice(text, x, y) {
        if (!this.noticeSprite) {
                this.noticeSprite = new ScaleSprite('/img/panel/score2017/noticeBg.png', { x: 185, y: 100, width: 155, height: 300 })
                this.addChild(this.noticeSprite)
        }
    }
}