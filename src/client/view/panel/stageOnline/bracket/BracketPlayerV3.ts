import { Text2, TextFac } from './../../../utils/TextFac';
import { FontName } from '../../../const';
export class BracketPlayerV3 extends PIXI.Container {
    pName: Text2
    pScore: Text2
    isLeft: Boolean
    alignArr = []
    constructor(isLeft, alignArr) {
        super()
        this.isLeft = isLeft
        this.alignArr = alignArr
        let ns = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '36px', fill: "#323048",
        }
        this.pName = TextFac.new_(ns, this)
            .setText('')

        ns.fontFamily = 'dinCondensedC'
        ns.fontSize = '38px'
        this.pScore = TextFac.new_(ns, this)
            .setText('')
            .setY(5)
    }
    setFont(data) {
        this.pName.style.fontSize = data.fontSize
    }
    setScore(v) {
        this.pScore.setText(v)
            .setAlignCenter(this.alignArr[1])
    }
    hideScore() {
        this.pScore.visible = false
    }
    setLeftName(name) {
        this.pName.setText(name)
            .setAlignCenter(this.alignArr[0])

    }

    setInfo(data) {
        // let nameX = 90
        // let scoreX = 200
        // if (!this.isLeft) {
        //     nameX = 135
        //     scoreX = 18
        // }
        this.pName.setText(data.name)
            .setAlignCenter(this.alignArr[0])

        this.pScore.setText(data.score)
            .setAlignCenter(this.alignArr[1])

    }
}