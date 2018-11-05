import { newBitmap } from "../../../utils/PixiEx";
import { FontName } from "../../../const";
import { TextFac, Text2 } from '../../../utils/TextFac';
import { IPopup } from "../../../utils/PopupView";
import { getCommentators } from "../../../utils/HupuAPI";
import { imgLoader } from '../../../utils/ImgLoader';

export class Commentator extends PIXI.Container implements IPopup {
    p: any
    bg1: PIXI.Sprite
    bg2: PIXI.Sprite
    bgArr: any
    create(parent: any) {
        let bg = newBitmap({ url: '/img/panel/studio/commentator.png' })
        let bg2 = newBitmap({ url: '/img/panel/studio/commentator2.png' })
        this.bg2 = bg2
        this.bg1 = bg
        this.bg1.visible = false
        this.bg2.visible = false
        this.bgArr = [this.bg1, this.bg2]
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
        this.showBg(0)
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
        // this.bg1.visible = false
        // this.bg2.visible = true
        this.showBg(1)
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
    bgV2: PIXI.Sprite
    showBg(idx) {
        for (let i = 0; i < this.bgArr.length; i++) {
            const element = this.bgArr[i];
            element.visible = i == idx
        }
    }
    _fillData3(data) {
        imgLoader.loadTexArr(['/img/panel/studio/commentatorV2.png'], _ => {
            if (!this.bgV2) {
                this.bgV2 = newBitmap({ url: '/img/panel/studio/commentatorV2.png' })
                this.addChildAt(this.bgV2, 0)
                this.bgArr.push(this.bgV2)
            }
            this.lName
                .setPos(734, 953)
            this.lInfo
                .setPos(this.lName.x, 1010)
            this.rName
                .setPos(1163, this.lName.y)
            this.rInfo
                .setPos(this.rName.x, this.lInfo.y)
            this.showBg(2)
        })
    }
    show(param: any) {
        param.lName = param.commentatorArr[0].name
        param.lInfo = param.commentatorArr[0].info
        param.rName = param.commentatorArr[1].name
        param.rInfo = param.commentatorArr[1].info

        this.lName
            .setText(param.lName)
        this.lInfo
            .setText(param.lInfo)
        this.rName
            .setText(param.rName)
        this.rInfo
            .setText(param.rInfo)

        if (param.style == 1)
            this._fillData(param)
        else if (param.style == 2)
            this._fillData2(param)
        else if (param.style == 3)
            this._fillData3(param)
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