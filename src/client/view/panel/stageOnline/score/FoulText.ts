import { blink2 } from '../../../utils/Fx';
import { newBitmap } from '../../../utils/PixiEx';
import { FontName } from '../../../const';
export class FoulText extends PIXI.Container {
    label: PIXI.Text
    hint: PIXI.Sprite
    constructor(hintUrl) {
        super()
        let h = newBitmap({ url: hintUrl })
        this.hint = h
        this.addChild(h)

        let fts = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '30px', fill: "#fff",
            fontWeight: 'bold'
        }
        let l = new PIXI.Text('', fts)
        this.addChild(l)
        this.label = l
    }
    setFoul(v) {
        let s = v + ' Foul'
        this.hint.visible = false
        if (Number(v) > 3) {
            s = '犯 满'
            this.hint.visible = true
            blink2({
                target: this.hint, time: 130, loop: 31
            })
        }
        this.label.text = s
        this.label.x = (109 - this.label.width) * .5
    }
}