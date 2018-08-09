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
    scoreFx: Text2
    create(isSmall, data) {
        let textY = 277
        let ns = {
            fontFamily: FontName.NotoSansHans,
            fontSize: '50px', fill: "#fff",
            fontWeight: 'bold'
        }
        this.bg = new PIXI.Sprite()
        this.addChild(this.bg)
        this.avt = new PIXI.Sprite
        this.addChild(this.avt)


        if (isSmall) {
            textY = 282
            ns.fontSize = '35px'
            this.bg.texture = imgLoader.getTex('/img/panel/scoreRank/itemBg_small1.png')
        }
        else {
            this.bg.texture = imgLoader.getTex('/img/panel/scoreRank/itemBg_big1.png')
        }

        this.pName = TextFac.new_(ns, this)
            .setText(data.name)
            .setPos(150, textY + 8)

        ns.fontFamily = 'dinCondensedC'
        ns.fontSize = '60px'
        this.pScore = TextFac.new_(ns, this)
            .setText(data.score)
            .setPos(90, textY)

        ns.fill = '#ff0000'
        ns.fontSize = '70px'
        this.scoreFx = TextFac.new_(ns, this)
            .setPos(380, textY - 80)

        return this
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
        this.pScore.setText(data.score)
            .setAlignCenter(90)
        if (data.isSmall) {
            this.pName.setText(data.name)
                .setAlignCenter(288)
            this.bg.texture = imgLoader.getTex('/img/panel/scoreRank/itemBg_small1.png')
            imgLoader.loadTexArr([data.avatar], _ => {
                this.avt.texture = imgLoader.getTex(data.avatar)
                let s = 0.7625
                setScale(this.avt, s)
                this.avt.x = 14
                this.avt.y = 73
            })
        }
        else {
            this.bg.texture = imgLoader.getTex('/img/panel/scoreRank/itemBg_big1.png')
            imgLoader.loadTexArr([data.avatar], _ => {
                this.avt.texture = imgLoader.getTex(data.avatar)
                setScale(this.avt, 1)

                this.avt.x = 0
                this.avt.y = 0
            })
            this.pName.setText(data.name)
                .setAlignCenter(360)
        }
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
            pi.y = i * 130 + lastY
            if (!scoreData.isSmall) {
                lastY += 10
            }
            if (scoreData.scoreFx) {
                pi.showScoreFx(scoreData.scoreFx)
            }

            pi.setScore(scoreData)

        }

    }
    _showScoreFx(data) {
        if (data.scoreFx == 2) {

        }
        else if (data.scoreFx == 3) {

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
            imgLoader.loadTexArr(['/img/panel/scoreRank/itemBg_big1.png', '/img/panel/scoreRank/itemBg_small1.png'], _ => {
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