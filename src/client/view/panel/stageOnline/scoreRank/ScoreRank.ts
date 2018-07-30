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
    create(isSmall, data) {
        let textY = 285-8
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
            textY = 290-8
            ns.fontSize = '35px'
            this.bg.texture = imgLoader.getTex('/img/panel/scoreRank/itemBg_small1.png')
        }
        else {
            this.bg.texture = imgLoader.getTex('/img/panel/scoreRank/itemBg_big1.png')
        }

        this.pName = TextFac.new_(ns, this)
            .setText(data.name)
            .setPos(150, textY)

        ns.fontFamily = 'dinCondensedC'
        ns.fontSize = '60px'
        this.pScore = TextFac.new_(ns, this)
            .setText(data.score)
            .setPos(90, textY)
        return this
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
                setScale(this.avt,s)
                this.avt.x= 14  
                this.avt.y= 73
            })
        }

        else {
            this.bg.texture = imgLoader.getTex('/img/panel/scoreRank/itemBg_big1.png')
            imgLoader.loadTexArr([data.avatar], _ => {
                this.avt.texture = imgLoader.getTex(data.avatar)
                setScale(this.avt, 1)

                this.avt.x= 0
                this.avt.y= 0
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
        for (let i = 0; i < 5; i++) {
            let pi: PlayerItem = this.itemArr[i]
            pi.setScore(data.scoreArr[i])
            pi.y = lastY
            if (data.scoreArr[i].isSmall)
                lastY += 130
            else
                lastY += 120

        }
    }
    show(data) {

        if (this.itemArr.length) {
            this._arrangeY(data)
        }
        else {
            imgLoader.loadTexArr(['/img/panel/scoreRank/itemBg_big1.png', '/img/panel/scoreRank/itemBg_small1.png'], _ => {
                for (let i = 0; i < 5; i++) {
                    let isSmall = i > 1
                    let pi = (new PlayerItem()).create(true, { score: 8, name: '好天气' })
                    this.itemArr.push(pi)
                    this.addChild(pi)
                }
                this._arrangeY(data)
                this.p.addChild(this)
            })
        }

    }
}