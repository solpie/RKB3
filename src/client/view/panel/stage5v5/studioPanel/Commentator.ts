import { newBitmap } from "../../../utils/PixiEx";
import { FontName } from "../../../const";
import { TextFac, Text2 } from '../../../utils/TextFac';
import { IPopup } from "../../../utils/PopupView";
import { getCommentators } from "../../../utils/HupuAPI";
import { imgLoader } from '../../../utils/ImgLoader';
import { bottomMoveIn, bottomMoveOut } from '../../../utils/Fx';

export class Commentator extends PIXI.Container implements IPopup {
    p: any
    bg1: PIXI.Sprite
    bg2: PIXI.Sprite
    bgArr: any
    bgMap: any
    create(parent: any) {
        let bg = newBitmap({ url: '/img/panel/studio/commentator.png' })
        let bg2 = newBitmap({ url: '/img/panel/studio/commentator2.png' })
        // this.bgMap = { 1: bg, 2: bg2 }

        this.bg2 = bg2
        this.bg1 = bg
        this.bg1.visible = false
        this.bg2.visible = false
        this.bgArr = new Array(4)
        this.bgArr[0] = this.bg1
        this.bgArr[1] = this.bg2
        // this.bgArr = [this.bg1, this.bg2]
        // this.bgMap = { 0: this.bg1, 1: this.bg2 }
        this.addChild(bg)
        this.addChild(bg2)
        let ns = {
            fontFamily: FontName.NotoSansHans,
            fontSize: '38px', fill: "#2d2d2d"
            , fontWeight: 'bold'
        }

        this.lName = TextFac.new_(ns, this)
        this.rName = TextFac.new_(ns, this)

        ns.fill = '#808080'
        ns.fontSize = '24px'
        this.lInfo = TextFac.new_(ns, this)
        this.rInfo = TextFac.new_(ns, this)
        this.p = parent
    }
    _fillData(data) {
        this.lName.style.fill =
            this.rName.style.fill = '#2d2d2d'
        this.lInfo.style.fill =
            this.rInfo.style.fill = '#808080'
        this.showBg(0)
        this.lName
            .setPos(170, 628)
        this.lInfo
            .setPos(this.lName.x, 673)
        this.rName
            .setPos(1570, this.lName.y)
        this.rInfo
            .setPos(this.rName.x, this.lInfo.y)
    }
    _fillData2(data) {
        this.lName.style.fill =
            this.rName.style.fill = '#2d2d2d'
        this.lInfo.style.fill =
            this.rInfo.style.fill = '#808080'
        this.showBg(1)
        this.lName
            .setPos(170, 628)
        this.lInfo
            .setPos(this.lName.x, 673)
        this.rName
            .setPos(495, this.lName.y)
        this.rInfo
            .setPos(this.rName.x, this.lInfo.y)
    }
    bgV2: PIXI.Sprite
    bgV2_mid: PIXI.Sprite
    showBg(idx) {
        for (let i = 0; i < this.bgArr.length; i++) {
            const element = this.bgArr[i];
            if (element)
                element.visible = i == idx
        }
    }
    _fillData3(data) {
        this.lName.visible =
            this.rName.visible =
            this.lInfo.visible =
            this.rInfo.visible = false

        imgLoader.loadTexArr(['/img/panel/studio/commentatorV2.png'], _ => {
            if (!this.bgV2) {
                this.bgV2 = newBitmap({ url: '/img/panel/studio/commentatorV2.png' })
                this.bgArr[2] = this.bgV2
                this.addChildAt(this.bgV2, 0)
                // this.bgArr.push(this.bgV2)
            }
            this.lName.style.fill =
                this.lInfo.style.fill =
                this.rName.style.fill =
                this.rInfo.style.fill = '#fff'
            this.lName
                .setPos(783, 953)
            this.lInfo
                .setPos(this.lName.x, 1006)
            this.rName
                .setPos(1163, this.lName.y)
            this.rInfo
                .setPos(this.rName.x, this.lInfo.y)

            this.showBg(2)
            this.lName.visible =
                this.rName.visible =
                this.lInfo.visible =
                this.rInfo.visible = true
            bottomMoveIn(this)
        })
    }
    _fillData4(data) {
        console.log("fill data4")
        this.lName.visible =
            this.rName.visible =
            this.lInfo.visible =
            this.rInfo.visible = false

        imgLoader.loadTexArr(['/img/panel/studio/commentatorV2_mid.png'], _ => {
            console.log("fill data4222")
            if (!this.bgV2) {
                this.bgV2_mid = newBitmap({ url: '/img/panel/studio/commentatorV2_mid.png' })
                this.addChildAt(this.bgV2_mid, 0)
                this.bgArr[3] = this.bgV2_mid
                // this.bgArr.push(this.bgV2_mid)
            }
            this.lName.style.fill =
                this.lInfo.style.fill =
                this.rName.style.fill =
                this.rInfo.style.fill = '#fff'
            this.lName
                .setPos(483, 953)
            this.lInfo
                .setPos(this.lName.x, 1006)
            this.rName
                .setPos(1163, this.lName.y)
            this.rInfo
                .setPos(this.rName.x, this.lInfo.y)

            this.showBg(3)
            this.lName.visible =
                this.rName.visible =
                this.lInfo.visible =
                this.rInfo.visible = true
            bottomMoveIn(this)
        })
    }
    show(param: any) {
        let _fillInfo = (d) => {
            this.lName
                .setText(d.lName)
            this.lInfo
                .setText(d.lInfo)
            this.rName
                .setText(d.rName)
            this.rInfo
                .setText(d.rInfo)
        }
        if (param.isInfo2) {
            param.lName = param.commentatorArr[0].name
            param.lInfo = param.commentatorArr[0].info2
            param.rName = param.commentatorArr[1].name
            param.rInfo = param.commentatorArr[1].info2
            _fillInfo(param)
        }
        else {
            param.lName = param.commentatorArr[0].name
            param.lInfo = param.commentatorArr[0].info
            param.rName = param.commentatorArr[1].name
            param.rInfo = param.commentatorArr[1].info
            _fillInfo(param)
            this.showingStyle = param.style
            if (param.style == 1)
                this._fillData(param)
            else if (param.style == 2)
                this._fillData2(param)
            else if (param.style == 3)
                this._fillData3(param)
            else if (param.style == 4)
                this._fillData4(param)
            console.log('sc_commentator', param);
        }
        this.p.addChild(this)
    }
    showingStyle = -1
    hide(param?: any) {
        if (this.showingStyle == 3) {
            bottomMoveOut(this)
        }
        else {
            if (this.parent)
                this.parent.removeChild(this)
        }
    }
    static class = 'Commentator'
    lName: Text2
    rName: Text2
    lInfo: Text2
    rInfo: Text2
}