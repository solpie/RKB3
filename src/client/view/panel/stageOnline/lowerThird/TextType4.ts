import { BaseLowerThird } from './BaseLowerThird';
import { Text2, TextFac } from '../../../utils/TextFac';
import { newBitmap, _c } from '../../../utils/PixiEx';
import { FontName } from '../../../const';
import { cnWrap } from '../../../utils/JsFunc';
let urlType_4 = '/img/panel/lowerThird/type_4.png'

export class TextType4 extends BaseLowerThird {
    lName: Text2
    lTitle: Text2
    constructor(parent) {
        super(parent)
        this.addChild(newBitmap({ url: urlType_4 }))
        let ns = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: "28px",
            dropShadow: true,
            dropShadowColor: '#222222',
            dropShadowAngle: Math.PI * 1 / 3,
            dropShadowDistance: 3,
            fontWeight: "bold",
            fill: "#acacac"
        };
        this.lName = TextFac.new_(ns, this)
            .setY(968 - 128)
            .setAlignCenter(_c(0))
            ns.fontSize =  '34px'
        this.lTitle = TextFac.new_(ns, this)
            .setY(788)
            .setAlignCenter(_c(0))
    }
    fillData(data) {
        console.log('fill data type4', data)
        this.lTitle.setText(data.cont[0])
            .setX(687)
        this.lName.setText( cnWrap(data.cont[1],44))
            .setX(687)
        return this.lName.width
    }
}