import { newBitmap } from "../../../../utils/PixiEx";
import { Text2, TextFac } from '../../../../utils/TextFac';
import { FontName } from '../../../../const';
const isTest = true;
export class WorldWar extends PIXI.Container {
    lName: Text2
    rName: Text2

    lTitle: Text2
    rTitle: Text2


    constructor() {
        super()
        let bg = newBitmap({ url: "/img/panel/worldWar/bg.png" })
        this.addChild(bg)

        let ns = {
            fontFamily: FontName.NotoSansHans,
            fontSize: '30px', fill: "#aaa",
        }
        this.lName = TextFac.new_(ns, this)
            .setY(958)
        this.rName = TextFac.new_(ns, this)
            .setPos(1215, this.lName.y)

        ns.fontSize = '28px'
        ns.fill = '#fff'
        this.lTitle = TextFac.new_(ns, this)
            .setY(914+8)

        this.rTitle = TextFac.new_(ns, this)
            .setPos(1123, this.lTitle.y)
        
        if (isTest) {
            this.setLeftPlayer({ name: '好哦天气',title:"呼噗噗哈哈哈" })
            this.setRightPlayer({ name: '好哦天气' ,title:"呼噗噗哈哈哈" })
        }
    }


    setRightPlayer(rPlayer) {
        this.rTitle.setText(rPlayer.title)
            .setAlignCenter(1320)

        this.rName.setText(rPlayer.name)
            .setLimitWidth(298, 40)

        // this._setHWA(rPlayer)
        // let age = ''
        // if (rPlayer.age)
        //     age = rPlayer.age + '岁'
        // this.rHW.setText(rPlayer.height + 'CM  ' + rPlayer.weight + 'KG  ' + age)
        // this.rAvtUrl = rPlayer.avatar
        // loadAvt(this.rAvt, rPlayer.avatar, 1109)
    }

    setLeftPlayer(lPlayer) {
        this.lTitle.setText(lPlayer.title)
            .setAlignCenter(600)

        this.lName.setText(lPlayer.name)
            .setLimitWidth(298, 40)
            .setAlignRight(702)

        // this._setHWA(lPlayer)
        // let age = ''
        // if (lPlayer.age)
        //     age = lPlayer.age + '岁'
        // this.lHW.setText(lPlayer.height + 'CM  ' + lPlayer.weight + 'KG  ' + age)
        //     .setAlignRight(702)
        // this.lAvtUrl = lPlayer.avatar
        // loadAvt(this.lAvt, lPlayer.avatar, 725)
    }
}