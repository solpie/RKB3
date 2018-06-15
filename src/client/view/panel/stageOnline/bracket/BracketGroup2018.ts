import { FontName } from "../../../const";
import { setScale } from '../../../utils/PixiEx';

export class BracketGroup2018 extends PIXI.Container {
    lName: PIXI.Text
    rName: PIXI.Text
    // gameIdx: PIXI.Text

    lScore: PIXI.Text
    rScore: PIXI.Text
    p2: PIXI.Sprite
    constructor(bgTex, isLarge?) {
        super()
        let bg = new PIXI.Sprite()
        bg.texture = bgTex
        this.addChild(bg)

        let p2 = new PIXI.Sprite()
        p2.texture = bgTex
        this.addChild(p2)
        this.p2 = p2
        this.p2.visible = false


        // else
        //     setScale(bg, 294 / 388)

        setScale(p2, bg.scale.x)


        let ns = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '32px', fill: "#8f8f8f",
            fontWeight: 'bold'
        }

        let lName = new PIXI.Text('', ns)
        this.lName = lName
        this.lName.y = 5
        lName.x = 6
        this.addChild(lName)


        let rName = new PIXI.Text('', ns)
        this.rName = rName
        rName.y = 84
        this.rName.x = this.lName.x
        this.addChild(rName)
        // let gs = {
        //     fontFamily: FontName.MicrosoftYahei,
        //     fontSize: '28px', fill: "#333",
        //     fontWeight: 'bold'
        // }

        let ss = {
            fontFamily: FontName.dinCondensedC,
            fontSize: '32px', fill: "#9ba0bd",
            // stroke: '#4a1850',
            // strokeThickness: 5,
            // dropShadow: true,
            // dropShadowColor: '#000000',
            // dropShadowBlur: 2,
            // dropShadowAngle: Math.PI / 6,
            // dropShadowDistance: 2,
            // fontWeight: 'bold'
        }

        let lScore = new PIXI.Text('', ss)
        this.lScore = lScore
        this.addChild(lScore)
        // ss.fill = '#ff1919'
        let rScore = new PIXI.Text('', ss)
        this.rScore = rScore
        this.addChild(rScore)

        if (isLarge)
            setScale(this, 390 / 294)
    }

    setP2Y(y) {
        this.p2.visible = true
        this.p2.y = y
        this.rName.y = y + 5
    }

    setLeftName(str, isHint = false) {
        this.lName.text = str.toUpperCase()
        this.lName.x = 164 - 0.5 * this.lName.width
        // if (isHint)
        //     this.lName.alpha = 0.3
        // else
        //     this.lName.alpha = 1
    }

    setRightName(str, isHint = false) {
        this.rName.text = str.toUpperCase()
        this.rName.x = 164 - 0.5 * this.rName.width
        // if (isHint)
        //     this.rName.alpha = 0.3
        // else
        //     this.rName.alpha = 1
    }

    setScore(left, right) {
        this.lScore.text = left + ""
        this.rScore.text = right + ""
        this.lScore.x =// 75 - this.lScore.width
            this.rScore.x = 19
        this.lScore.y = this.lName.y + 5
        this.rScore.y = this.rName.y + 5
    }
    setGameIdx(gameIdx) {
        // this.gameIdx.text = gameIdx + '.'
        // this.gameIdx.x = -3 - this.gameIdx.width
    }
}