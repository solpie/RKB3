import { BaseLowerThird } from './BaseLowerThird';
import { Text2, TextFac } from '../../../utils/TextFac';
import { newBitmap, _c } from '../../../utils/PixiEx';
import { FontName } from '../../../const';
let urlType_3 = '/img/panel/lowerThird/type_3.png'

export class TextType3 extends BaseLowerThird {
    lName: Text2
    constructor(parent) {
        super(parent)
        this.addChild(newBitmap({ url: urlType_3 }))
        let ns = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: "42px",
            dropShadow: true,
            dropShadowColor: '#222222',
            dropShadowAngle: Math.PI * 1 / 3,
            dropShadowDistance: 3,
            fontWeight: "bold",
            fill: "#acacac"
        };
        this.lName = TextFac.new_(ns, this)
            .setY(968)
            .setAlignCenter(_c(0))
    }
    fillData(data) {
        this.lName.setText(data.cont)
            .setAlignCenter()
        return this.lName.width
    }
}