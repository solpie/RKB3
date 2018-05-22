import { newBitmap } from '../../../utils/PixiEx';
import { TextFac, Text2 } from '../../../utils/TextFac';
import { FontName } from '../../../const';
import { fitWidth } from '../bracket/BracketGroup';
export class Score2018v3 extends PIXI.Container {
    lName: Text2
    rName: Text2

    lTitle: Text2
    rTitle: Text2

    lHW: Text2
    rHW: Text2
    constructor(parent) {
        super()
        // parent.addChild(this)
        let bg = newBitmap({ url: '/img/panel/score2018v3/bg.png' })
        this.addChild(bg)


        let ns = {
            fontFamily: FontName.NotoSansHans,
            fontSize: '32px', fill: "#c2c1d4",
        }
        this.lName = TextFac.new_(ns, this)
            .setY(965)
            .setFill("#484848")
        this.rName = TextFac.new_(ns, this)
            .setPos(1215, this.lName.y)
            .setFill("#484848")

        ns.fontSize = '28px'
        ns.fill = '#fff'
        this.lTitle = TextFac.new_(ns, this)
            .setY(914)

        this.rTitle = TextFac.new_(ns, this)
            .setPos(1123, this.lTitle.y)
    }

    setRightPlayer(rPlayer) {
        this.rName.setText(rPlayer.name)
            .setLimitWidth(298, 40)

        this.rTitle.setText(rPlayer.title)
    }

    setLeftPlayer(lPlayer) {
        this.lName.setText(lPlayer.name)
            .setLimitWidth(298, 40)
            .setAlignCenter(600)

        this.lTitle.setText(lPlayer.title)
            .setAlignRight(795)

        // loadAvt(this.lAvt, lPlayer.avatar)

        // let rankText;
        // if (lPlayer.divisionRank == 0 || !lPlayer.divisionRank)
        //     rankText = '冲榜'
        // else
        //     rankText = lPlayer.divisionName + ' ' + lPlayer.divisionRank

        // this.lHeightWeight.text = lPlayer.height + 'cm | ' + lPlayer.weight + 'kg'
        // // this.lHeightWeight.text = rankText + lPlayer.height + 'cm | ' + lPlayer.weight + 'kg   '
        // this.lHeightWeight.x = 713 - this.lHeightWeight.width

        // this.lRank.text = rankText
        // this.lRank.x = 660 - this.lRank.width
    }
}