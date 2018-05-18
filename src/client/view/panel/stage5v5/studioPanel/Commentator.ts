import { newBitmap } from "../../../utils/PixiEx";
import { FontName } from "../../../const";
import { TextFac, Text2 } from '../../../utils/TextFac';
import { IPopup } from "../../../utils/PopupView";
import { getCommentators } from "../../../utils/HupuAPI";

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
        ns.fontSize = '16px'
        this.lInfo = TextFac.new_(ns, this)
        this.rInfo = TextFac.new_(ns, this)
        this.p = parent
    }
    _fillData(data) {
        this.lName
            .setText(data.lName)
            .setPos(170, 628)
        this.lInfo
            .setText(data.lInfo)
            .setPos(this.lName.x, 685)

        this.rName
            .setText(data.rName)
            .setPos(1570, 628)
        this.rInfo
            .setText(data.rInfo)
            .setPos(this.rName.x, this.lInfo.y)
    }
    show(param: any) {
        getCommentators(data => {
            console.log('get data', param);
            for (let c of data) {
                if (c.c_id == param.CIdArr[0]) {
                    param.lName = c.name
                    param.lInfo = c.info
                }
                if (c.c_id == param.CIdArr[1]) {
                    param.rName = c.name
                    param.rInfo = c.info
                }
            }
            this._fillData(param)
            console.log('sc_commentator', data);
            this.p.addChild(this)
        })


    }
    hide(param?: any) {
        if (this.parent)
            this.parent.removeChild(this)
    }
    static class = 'Commentator'
    lName: Text2
    rName: Text2
    lInfo: Text2
    rInfo: Text2
}