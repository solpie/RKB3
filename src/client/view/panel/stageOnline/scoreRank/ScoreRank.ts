import { TweenEx } from './../../../utils/TweenEx';
import { imgLoader } from './../../../utils/ImgLoader';
import { Text2, TextFac } from './../../../utils/TextFac';
import { FontName } from '../../../const';
import { newBitmap, setScale } from '../../../utils/PixiEx';
//十分钟 五人 进球多排前面 输的下
class PlayerItem extends PIXI.Container {
    pScore: Text2
    pName: Text2
    pKDA: Text2
    avt: PIXI.Sprite
    bg: PIXI.Sprite
    fg: PIXI.Sprite
    scoreFx: Text2
    isRight = true
    create(isOff, data) {

        let textY = 277
        let ns = {
            fontFamily: FontName.MicrosoftYahei,
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
            .setPos(185, textY)

        ns.fontFamily = 'dinCondensedC'
        ns.fontSize = '50px'
        this.pKDA = TextFac.new_(ns, this)
            .setText("0/0/0")
            .setPos(185, 210)

        ns.fontSize = '60px'

        this.pScore = TextFac.new_(ns, this)
            .setText(data.score)
            .setY(196)

        ns.fill = '#fff1b3'
        ns.fontSize = '70px'
        this.scoreFx = TextFac.new_(ns, this)
            .setPos(380, 196)

        this.setSide(this.isRight)
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
    setSide(isRight) {
        console.log('set side is right:', isRight)
        this.isRight = isRight
        if (this.isRight) {
            this.x = 1920
            this.scale.x =
                this.pKDA.scale.x = -1
            this.pScore.scale.x = -1
        }
        else {
            this.x = 0
            this.scale.x =
                this.pKDA.scale.x = 1
            this.pScore.scale.x = 1
        }
    }
    showScoreFx(dtScore) {
        // if (dtScore > 0) {
        //     this.scoreFx.setText("+" + dtScore)
        //     TweenEx.delayedCall(3000, _ => {
        //         this.scoreFx.setText("")
        //     })
        // }
    }
    _setDataLeft(data) {
        let alignX = 185;
        if (data.isSmall) {
        }
        else {
            alignX += 23;
        }
        this.pName.setText(data.name)
            .setX(alignX)

        this.pKDA.setText(this.getKDA(data))
            .setX(alignX + 50)

        this.pScore.setText(data.score)
            .setAlignCenter(alignX)
    }

    getKDA(data) {
        let kda = '0/0/0'
        if (data.k != null) {
            kda = `${data.k}/${data.d}/${data.a}`
        }
        return kda
    }

    _setDataRight(data) {
        let alignX = 210;
        if (data.isSmall) {
        }
        else {
            alignX += 23;
        }
        this.pName.setText(data.name)
            .setX(alignX)
        this.pName.scale.x = -1
        this.pName.x += this.pName.width - 23

        this.pKDA.setText(this.getKDA(data))
            .setX(alignX)
        this.pKDA.scale.x = -1
        this.pKDA.x += this.pKDA.width + 25

        this.pScore.setText(data.score)
            .setAlignCenter(alignX)

    }
    setScore(data) {
        let avtX = 41, avtY = 208
        if (!data.isSmall) {
            avtX += 23
        }
        if (this.isRight) {
            this._setDataRight(data)
        }
        else {
            this._setDataLeft(data)
        }
        this._loadItemTex(data.isSmall)
        imgLoader.loadTexRemote(data.avatar, _ => {
            this.avt.texture = imgLoader.getTex(data.avatar)
            setScale(this.avt, 1)

            this.avt.x = avtX
            this.avt.y = avtY
            this.avt.width = this.avt.height = 118
        })

    }
}
export class ScoreRank extends PIXI.Container {
    p: any
    itemArr: any
    isRight = true
    isShowKDA = false
    create(p, isRight?) {
        this.isRight = isRight
        this.p = p
        this.itemArr = []
    }
    _arrangeY(data) {
        for (let i = 0; i < data.scoreArr.length; i++) {
            let pi: PlayerItem = this.itemArr[i]
            let scoreData = data.scoreArr[i]
            pi.y = i * 160
            pi.pKDA.visible = this.isShowKDA
            pi.setScore(scoreData)
        }

    }
    setSide(isRight) {
        for (let i = 0; i < this.itemArr[i].length; i++) {
            const pi: PlayerItem = this.itemArr[i];
            pi.isRight = isRight
        }
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
            let imgArr = []
            for (let i = 0; i < data.scoreArr.length; i++) {
                let player = data.scoreArr[i]
                imgArr.push(player.avatar)
            }
            imgLoader.loadTexArr(imgArr, _ => {
                imgLoader.loadTexArr([
                    '/img/panel/scoreRank/itemBg_on.png',
                    '/img/panel/scoreRank/itemFg_on.png',
                    '/img/panel/scoreRank/itemFg_off.png',
                    '/img/panel/scoreRank/itemBg_off.png'], _ => {
                        for (let i = 0; i < data.scoreArr.length; i++) {
                            let pi: PlayerItem = (new PlayerItem()).create(true, { score: 8, name: '' })
                            this.itemArr.push(pi)
                            pi.setSide(this.isRight)
                            this.addChild(pi)
                        }
                        this._arrangeY(data)
                        this.p.addChild(this)
                    })
            }, true)

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