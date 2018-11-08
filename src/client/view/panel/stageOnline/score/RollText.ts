import { FontName, ViewConst } from "../../../const";
import { newModal, newBitmap } from "../../../utils/PixiEx";
import { TweenEx } from "../../../utils/TweenEx";

export class RollText extends PIXI.Container {
    static class = 'RollText'
    rollText: PIXI.Text
    public create(parent) {
        parent.addChild(this)
        let ts = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '45px', fill: "#eee",
            fontWeight: 'bold'
        }

        this.rollText = new PIXI.Text('', ts)
        // this.rollText.style.fontSize = '25px'
        this.rollText.y = ViewConst.STAGE_HEIGHT - 118
        let texBlack = new PIXI.Graphics()
        texBlack.beginFill(0xeeeeee)
            .drawRect(662, 944,857, 100)
        texBlack.mask = this.rollText
        let bg = newBitmap({ url: '/img/panel/score2018v2/bottomAD.png' })
        // bg.y = this.rollText.y - 10
        this.addChild(bg)
        this.addChild(texBlack)
        this.addChild(this.rollText)
    }

    public show(param: any) {
        console.log('show roll text');
        TweenEx.to(this, 50, { alpha: 1 })
        this.rollText.text = param.text
        this.rollText.x = 1510
        let sec = (this.rollText.width + this.rollText.x) / 80
        TweenEx.to(this.rollText, sec * 1000, { x: 600-this.rollText.width }, _ => {
            this.hide()
        })
    }

    public hide() {
        console.log('hide roll text');
        TweenEx.to(this, 200, { alpha: 0 })
    }
}