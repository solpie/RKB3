import { FontName } from "../../../const";
import { setScale } from '../../../utils/PixiEx';

export class BracketGroup2018 extends PIXI.Container {
    lName: PIXI.Text
    rName: PIXI.Text
    gameIdx: PIXI.Text
    constructor(bgTex) {
        super()
        let bg = new PIXI.Sprite()
        bg.texture = bgTex
        this.addChild(bg)
        setScale(bg, 1)

        let ns = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '30px', fill: "#fff",
            fontWeight: 'bold'
        }

        let lName = new PIXI.Text('', ns)
        this.lName = lName
        this.lName.y = 5
        lName.x = 6
        this.addChild(lName)


        let rName = new PIXI.Text('', ns)
        this.rName = rName
        rName.y = 80
        this.rName.x = this.lName.x
        this.addChild(rName)

        let gs = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '28px', fill: "#333",
            fontWeight: 'bold'
        }
        let gameIdx = new PIXI.Text('', gs)
        this.addChild(gameIdx)
        gameIdx.x = -15
        gameIdx.y = 49
        this.gameIdx = gameIdx
    }

    setLeftName(str, isHint = false) {
        this.lName.text = str.toUpperCase()
        this.lName.x = 111 - 0.5 * this.lName.width
        if (isHint)
            this.lName.alpha = 0.3
        else
            this.lName.alpha = 1
    }

    setRightName(str, isHint = false) {
        this.rName.text = str.toUpperCase()
        this.rName.x = 111 - 0.5 * this.rName.width
        if (isHint)
            this.rName.alpha = 0.3
        else
            this.rName.alpha = 1
    }

    setGameIdx(gameIdx) {
        this.gameIdx.text = gameIdx + '.'
        this.gameIdx.x = -3 - this.gameIdx.width
    }
}