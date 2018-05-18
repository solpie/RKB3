import { newBitmap } from "../../../utils/PixiEx";
import { FontName } from "../../../const";
import { TextFac, Text2 } from '../../../utils/TextFac';
import { IPopup } from "../../../utils/PopupView";

export class Commentator extends PIXI.Container implements IPopup {
    p: any
    create(parent: any) {
        let bg = newBitmap({ url: '/img/panel/studio/commentator.png' })
        this.addChild(bg)
        let ns = {
            fontFamily: FontName.NotoSansHans,
            fontSize: '46px', fill: "#2d2d2d"
            , fontWeight: 'bold'
        }

        this.lName = TextFac.new_(ns, this)
        this.rName = TextFac.new_(ns, this)

        ns.fill = '#808080'
        ns.fontSize = '20px'
        this.lInfo = TextFac.new_(ns, this)
        this.rInfo = TextFac.new_(ns, this)
        this.p = parent
    }
    show(param: any) {
        this.lName
            .setText(param.lName)
            .setPos(170, 628)
        this.lInfo
            .setText(param.lInfo)
            .setPos(this.lName.x, 685)

        this.rName
            .setText(param.lName)
            .setPos(1570, 628)
        this.rInfo
            .setText(param.lInfo)
            .setPos(this.rName.x, this.lInfo.y)
        this.p.addChild(this)
    }
    hide: (param?: any) => void;
    static class = 'Commentator'
    lName: Text2
    rName: Text2
    lInfo: Text2
    rInfo: Text2
}