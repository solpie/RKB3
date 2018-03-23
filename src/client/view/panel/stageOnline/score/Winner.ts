import { FontName, ViewConst } from "../../../const";
import { paddy, loadImgArr } from '../../../utils/JsFunc';
import { setPivot, newBitmap } from '../../../utils/PixiEx';
import { TweenEx } from '../../../utils/TweenEx';
import { FramesFx } from "../../../utils/FrameFx";
import { imgLoader } from "../../../utils/ImgLoader";

export class Winner extends PIXI.Container {
    static class = 'Victory'
    winTitle: PIXI.Text
    nameText: PIXI.Text
    winLoseText: PIXI.Text

    fx: FramesFx
    bg: any
    bg2: PIXI.Sprite

    avt: PIXI.Sprite

    avtCtn: PIXI.Container
    p: PIXI.Container
    create(parent: any) {
        let imgArr = []
        for (let i = 0; i < 10; i++) {
            imgArr.push('/img/fx/win/circle_' + paddy(i, 2) + '.png')
        }
        imgArr.push('/img/panel/score2018/winnerBg.png')
        loadImgArr(imgArr, _ => {
            let bg = new PIXI.Graphics()
            this.addChild(bg)

            bg.beginFill(0x000000)
                .drawRect(0, 0, ViewConst.STAGE_WIDTH, ViewConst.STAGE_HEIGHT)
            this.addChild(bg)
            bg.alpha = .5
            // bg.scale.y =
            setPivot(bg, 960, 540)
            this.bg = bg
            bg.y = 580

            let bg2 = newBitmap({ url: '/img/panel/score2018/winnerBg.png' })
            this.addChild(bg2)
            bg2.y = 180 - 540
            this.bg2 = bg2

            let gs = {
                fontFamily: FontName.MicrosoftYahei,
                fontSize: '35px', fill: "#aaa"
                , fontWeight: 'bold'
            }
            let winTitle = new PIXI.Text('胜出', gs)
            this.addChild(winTitle)
            winTitle.x = 960
            winTitle.y = 490
            this.winTitle = winTitle

            gs.fill = '#ddd'
            gs.fontSize = '70px'
            let nameTxt = new PIXI.Text('', gs)
            this.addChild(nameTxt)
            nameTxt.x = 960
            nameTxt.y = 545
            this.nameText = nameTxt

            gs.fontSize = '40px'
            let infoTxt = new PIXI.Text('', gs)
            this.addChild(infoTxt)
            infoTxt.x = 960
            infoTxt.y = 646
            this.winLoseText = infoTxt

            let avtCtn = new PIXI.Container
            this.addChild(avtCtn)
            this.avtCtn = avtCtn
            avtCtn.x = 960 - 115
            avtCtn.y = 172 + 313 - 9 - 4
            let avt = new PIXI.Sprite()
            this.avt = avt
            avtCtn.addChild(avt)


            let avtMask = new PIXI.Graphics()
            avtMask.beginFill(0xff0000)
            avtMask.drawCircle(115, 115, 115)
            // avtMask.x = avt.x
            // avtMask.y = avt.y
            avt.mask = avtMask
            avtCtn.addChild(avtMask)


            let fx = new FramesFx('/img/fx/win/circle_', 0, 9)
            this.fx = fx
            this.fx.setSpeed(0.28)
            this.addChild(fx)
            parent.addChild(this)
            this.p = parent
            this.isLoaded = true
            this.show(this.tmpParam)
        })
    }
    tmpParam: any
    isLoaded = false
    show(param) {
        if (!this.isLoaded) {
            this.tmpParam = param
            return
        }
        this.winLoseText.text = param.rec.win + '胜' + param.rec.lose + '负'
        let win = param.winner
        this.nameText.text = win.name

        this.avtCtn.x = 960 - 115
        this.winTitle.visible = false
        this.nameText.visible = false
        this.winLoseText.visible = false
        imgLoader.loadTex(win.avatar, tex => {
            this.avt.alpha = 0
            this.p.addChild(this)
            this.fx.playOnce()

            this.bg.scale.y = 0.6
            let from = { s: 0.6 }
            TweenEx.to(from, 360, { s: 0.26 }).update(_ => {
                this.bg.scale.y = from.s
            })
            this.fx.x = 0
            TweenEx.delayedCall(680, _ => {
                this.avt.alpha = 1
                let s = 230 / tex.width
                this.avt.texture = tex
                this.avt.scale.x = this.avt.scale.y = s

                this.fx.alpha = 0.4

                let t = new TweenEx(this.fx)
                t.to({ x: 786 - 960 }, 300)
                    .update(_ => {
                        this.avtCtn.x = 960 - 115 + this.fx.x
                    })
                    .start()

                this.winTitle.x = 960 - 150
                this.winTitle.visible = true
                TweenEx.to(this.winTitle, 200, { x: 960 - 45 })
                    .call(_ => {
                        this.nameText.x = 960 - 100
                        this.nameText.visible = true
                        TweenEx.to(this.nameText, 200, { x: 960 - 20 })
                            .call(_ => {
                                this.winLoseText.x = 960 - 150
                                this.winLoseText.visible = true
                                TweenEx.to(this.winLoseText, 100, { x: 960 - 50 })
                            })
                    })

            })
            TweenEx.delayedCall(3500, _ => {
                this.hide()
            })
        })
    }
    hide() {
        if (this.parent)
            this.parent.removeChild(this)
    }
}