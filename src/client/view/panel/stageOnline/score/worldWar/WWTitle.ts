import { newBitmap } from '../../../../utils/PixiEx';
import { Text2, TextFac } from '../../../../utils/TextFac';
import { FontName } from '../../../../const';
export class WWTitle extends PIXI.Container {
    lTitle: Text2
    rTitle: Text2
    constructor() {
        super()
        let bg = newBitmap({ url: '/img/panel/worldwar/titleBg.png' })
        this.addChild(bg)


        let ns = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: "28px",
            fontWeight: "",
            fill: "#ffe288"
        };
        this.lTitle = TextFac.new_(ns, this)
            .setY(842)
        this.rTitle = TextFac.new_(ns, this)
            .setY(this.lTitle.y)
    }
    test() {
        this.show({ lTitle: '南区实力榜第一人', rTitle: "前NCAA球员" })
    }
    show(data) {
        this.lTitle.setText(data.lTitle)
            .setAlignCenter(774)
        this.rTitle.setText(data.rTitle)
        .setAlignCenter(1146)
        this.visible = true
    }
    hide() {
        this.visible = false
    }
}