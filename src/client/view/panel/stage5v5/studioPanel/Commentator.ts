import { newBitmap } from "../../../utils/PixiEx";
import { FontName } from "../../../const";
import { TextFac, Text2 } from '../../../utils/TextFac';
import { IPopup } from "../../../utils/PopupView";
import { getCommentators } from "../../../utils/HupuAPI";

export class Commentator extends PIXI.Container implements IPopup {
    p: any
    bg1: PIXI.Sprite
    bg2: PIXI.Sprite
    create(parent: any) {
        let bg = newBitmap({ url: '/img/panel/studio/commentator.png' })
        let bg2 = newBitmap({ url: '/img/panel/studio/commentator2.png' })
        this.bg2 = bg2
        this.bg1 = bg
        this.bg1.visible = false
        this.bg2.visible = false
        this.addChild(bg)
        this.addChild(bg2)
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
        this.bg2.visible = false
        this.bg1.visible = true
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
    _fillData2(data) {
        this.bg1.visible = false
        this.bg2.visible = true
        this.lName
            .setText(data.lName)
            .setPos(170, 628)
        this.lInfo
            .setText(data.lInfo)
            .setPos(this.lName.x, 685)

        this.rName
            .setText(data.rName)
            .setPos(495, 628)
        this.rInfo
            .setText(data.rInfo)
            .setPos(this.rName.x, this.lInfo.y)
    }
    show(param: any) {
        param.lName = param.commentatorArr[0].name
        param.lInfo = param.commentatorArr[0].info
        param.rName = param.commentatorArr[1].name
        param.rInfo = param.commentatorArr[1].info
        if (param.style == 1)
            this._fillData(param)
        else
            this._fillData2(param)
        console.log('sc_commentator', param);
        this.p.addChild(this)
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