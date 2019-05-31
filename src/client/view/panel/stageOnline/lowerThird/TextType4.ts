import { BaseLowerThird } from './BaseLowerThird';
import { Text2, TextFac } from '../../../utils/TextFac';
import { newBitmap, _c } from '../../../utils/PixiEx';
import { FontName } from '../../../const';
import { cnWrap } from '../../../utils/JsFunc';
import { imgLoader } from '../../../utils/ImgLoader';
import { fitWidth } from '../bracket/BracketGroup';
let urlType_4 = '/img/panel/lowerThird/type_4.png'

export class TextType4 extends BaseLowerThird {
    lCont: Text2
    lTitle: Text2
    icon: PIXI.Sprite
    constructor(parent) {
        super(parent)
        this.y = 60

        this.icon = new PIXI.Sprite()
        this.addChild(this.icon)
        this.icon.x = 541+109
        this.icon.y = 782
        this.addChild(newBitmap({ url: urlType_4 }))
        let ns = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: "20px",
            dropShadow: false,
            dropShadowColor: '#ffffff',
            dropShadowAngle: Math.PI * 1 / 3,
            dropShadowDistance: 3,
            fontWeight: "bold",
            fill: "#bbbbbb"
        };
        this.lCont = TextFac.new_(ns, this)
            .setY(968 - 108)
            .setAlignCenter(_c(0))
        ns.fontSize = '30px'
        this.lTitle = TextFac.new_(ns, this)
            .setY(788)
            .setAlignCenter(_c(0))
            .setFill('#1a87df')

    }
    fillData(data) {
        console.log('fill data type4', data)
        this.lTitle.setText(data.cont[0])
            .setX(814)
        fitWidth(this.lTitle,460,30)
        this.lCont.setText(cnWrap(data.cont[1], 44))
            .setX(814)
        if (data.icon) {
            imgLoader.loadTexRemote(data.icon, tex => {
                console.log('textType4')
                this.icon.texture = imgLoader.getTex(data.icon)
                this.icon.width = 136
                this.icon.height = 136
            })
        }
        return this.lCont.width
    }
}