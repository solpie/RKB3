import { FontName, ViewConst } from "../../../const";
import { newModal, newBitmap } from "../../../utils/PixiEx";
import { TweenEx } from "../../../utils/TweenEx";

export class RollText extends PIXI.Container {
    static class = 'RollText'
    rollText: PIXI.Text
    public create(parent) {
        parent.addChild(this)
        let ts = {
            fontFamily: FontName.NotoSansHans,
            fontSize: '35px', fill: "#000",
            fontWeight: 'bold'
        }

        this.rollText = new PIXI.Text('', ts)
        // this.rollText.style.fontSize = '25px'
        this.rollText.y = ViewConst.STAGE_HEIGHT - 55
        let texBlack = new PIXI.Graphics()
        texBlack.beginFill(0xffffff)
            .drawRect(112, 1012, 1920, 100)
        this.addChild(texBlack)
        // texBlack.mask = this.rollText
        let bg = newBitmap({ url: '/img/panel/score2018/scrollBg.png' })
        // bg.y = this.rollText.y - 10
        this.addChild(this.rollText)
        this.addChild(bg)
    }

    public show(param: any) {
        console.log('show roll text');
        TweenEx.to(this, 50, { alpha: 1 })
        this.rollText.text = param.text
        this.rollText.x = ViewConst.STAGE_WIDTH - 100
        let sec = (this.rollText.width + this.rollText.x) / 80
        TweenEx.to(this.rollText, sec * 1000, { x: -this.rollText.width }, _ => {
            this.hide()
        })
    }

    public hide() {
        console.log('hide roll text');
        TweenEx.to(this, 200, { alpha: 0 })
    }
}