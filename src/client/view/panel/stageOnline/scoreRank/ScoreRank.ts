import { TweenEx } from './../../../utils/TweenEx';
import { imgLoader } from './../../../utils/ImgLoader';
import { Text2, TextFac } from './../../../utils/TextFac';
import { FontName } from '../../../const';
import { newBitmap, setScale } from '../../../utils/PixiEx';
//十分钟 五人 进球多排前面 输的下
class PlayerItem extends PIXI.Container {
    pScore: Text2
    pName: Text2
    avt: PIXI.Sprite
    bg: PIXI.Sprite
    fg: PIXI.Sprite
    scoreFx: Text2
    create(isOff, data) {
        let textY = 277
        let ns = {
            fontFamily: FontName.NotoSansHans,
            fontSize: '50px', fill: "#ccc",
            fontWeight: 'bold'
        }
        this.bg = new PIXI.Sprite()
        this.addChild(this.bg)
        this.avt = new PIXI.Sprite
        this.addChild(this.avt)
        this.fg = new PIXI.Sprite()
        this.addChild(this.fg)


        if (isOff) {
            ns.fontSize = '35px'
        }
        else {
        }
        this._loadItemTex(isOff)
        this.pName = TextFac.new_(ns, this)
            .setText(data.name)
            .setPos(185, textY + 8)

        ns.fontFamily = 'dinCondensedC'
        ns.fontSize = '60px'

        this.pScore = TextFac.new_(ns, this)
            .setText(data.score)
            .setY(220 - 24)

        ns.fill = '#ff0000'
        ns.fontSize = '70px'
        this.scoreFx = TextFac.new_(ns, this)
            .setPos(380, textY - 80)

        return this
    }
    _loadItemTex(isOff) {
        if (isOff) {
            this.bg.texture = imgLoader.getTex('/img/panel/scoreRank/itemBg_off.png')
            this.fg.texture = imgLoader.getTex('/img/panel/scoreRank/itemFg_off.png')
        }
        else {
            this.bg.texture = imgLoader.getTex('/img/panel/scoreRank/itemBg_on.png')
            this.fg.texture = imgLoader.getTex('/img/panel/scoreRank/itemFg_on.png')
        }

    }
    showScoreFx(dtScore) {
        if (dtScore > 0) {
            this.scoreFx.setText("+" + dtScore)
            TweenEx.delayedCall(3000, _ => {
                this.scoreFx.setText("")
            })
        }

    }
    setScore(data) {


        let alignX = 185;
        let avtX = 41, avtY = 208
        if (data.isSmall) {
        }
        else {
            alignX += 23;
            avtX += 23
        }
        this._loadItemTex(data.isSmall)

        imgLoader.loadTex2(data.avatar, _ => {
            this.avt.texture = imgLoader.getTex(data.avatar)
            setScale(this.avt, 1)

            this.avt.x = avtX
            this.avt.y = avtY
            this.avt.width = this.avt.height = 122
        })
        this.pName.setText(data.name)
            .setX(alignX)
        this.pScore.setText(data.score)
            .setAlignCenter(alignX)
    }
}
export class ScoreRank extends PIXI.Container {
    p: any
    itemArr: any
    create(p) {
        this.p = p
        this.itemArr = []
    }
    _arrangeY(data) {
        let lastY = 0
        let isLastSmall = true
        for (let i = 0; i < 5; i++) {
            let pi: PlayerItem = this.itemArr[i]
            let scoreData = data.scoreArr[i]
            pi.y = i * 160
            if (scoreData.scoreFx) {
                pi.showScoreFx(scoreData.scoreFx)
            }

            pi.setScore(scoreData)

        }

    }

    showScoreFx(data) {

    }
    hide() {
        if (this.parent) {
            this.parent.removeChild(this)
        }
    }
    _show(data) {
        console.log('show socre rank', data)
        if (this.itemArr.length) {
            this._arrangeY(data)
            this.p.addChild(this)
        }
        else {
            imgLoader.loadTexArr([
                '/img/panel/scoreRank/itemBg_on.png',
                '/img/panel/scoreRank/itemFg_on.png',
                '/img/panel/scoreRank/itemFg_off.png',
                '/img/panel/scoreRank/itemBg_off.png'], _ => {
                    for (let i = 0; i < 5; i++) {
                        let isSmall = i > 1
                        let pi = (new PlayerItem()).create(true, { score: 8, name: '' })
                        this.itemArr.push(pi)
                        this.addChild(pi)
                    }
                    this._arrangeY(data)
                    this.p.addChild(this)
                })
        }
    }
    show(data) {
        if (data.visible) {
            this._show(data)
        }
        else {
            this.hide()
        }
    }
}