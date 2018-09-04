import { newBitmap } from "../../../utils/PixiEx";
import { imgLoader } from "../../../utils/ImgLoader";
import { BasePanel } from '../../base/BasePanel';
import { Text2, TextFac } from '../../../utils/TextFac';
import { FontName } from '../../../const';
const isTest = true;
export class Pick8 extends BasePanel {
    vsPlayerArr: any
    isLoaded = false
    tmpData: any
    constructor(parent) {
        super(parent)
        imgLoader.loadTexArr(['/img/panel/worldwar/pick8/bg.png'], _ => {
            let bg = newBitmap({ url: '/img/panel/worldwar/pick8/bg.png' })

            this.addChild(bg)

            this.vsPlayerArr = []
            let ps = {
                fontFamily: FontName.MicrosoftYahei,
                fontSize: "28px",
                fill: "#aaa"
            };
            let x1 = 420, y1 = 853, x2 = 1185-47
            for (let i = 0; i < 8; i++) {
                let lPlayerText: Text2 = TextFac.new_(ps, this)
                let rPlayerText: Text2 = TextFac.new_(ps, this)
                if (i < 4) {
                    lPlayerText.setPos(x1, y1 + i * 48).alignRight = 566
                    rPlayerText.setPos(x1 + 160, y1 + i * 48)
                }
                else {
                    lPlayerText.setPos(x2, y1 + (i - 4) * 48).alignRight = 1280
                    rPlayerText.setPos(x2 + 160, y1 + (i - 4) * 48)
                }
                this.vsPlayerArr.push([lPlayerText, rPlayerText])
            }

            this.isLoaded = true
            if (this.tmpData) {
                this.show(this.tmpData)
                this.tmpData = null
            }
        })
    }
    test() {
        this.show({
            playerArr: [
                [{ name: '郝天吉' }, { name: "???" }],
                [{ name: '郝天吉' }, { name: "黄宇军" }],
                [{ name: '郝天吉' }, { name: "黄宇军" }],
                [{ name: '郝天吉' }, { name: "黄宇军" }],
                [{ name: '郝天吉' }, { name: "???" }],
                [{ name: '郝天吉' }, { name: "黄宇军" }],
                [{ name: '郝天吉' }, { name: "黄宇军" }],
                [{ name: '郝天吉' }, { name: "黄宇军" }],
            ]
        })
    }

    show(data) {
        if (this.isLoaded) {
            super.show(data)
            for (let i = 0; i < this.vsPlayerArr.length; i++) {
                const playerTextArr = this.vsPlayerArr[i];
                playerTextArr[0].setText(data.playerArr[i][0].name)
                    .setAlignRight()
                playerTextArr[1].setText("vs " + data.playerArr[i][1].name)
            }
        }
        else {
            this.tmpData = data
        }

    }
}

export class Pick8Layer {
    static cls = 'Pick8'
    static get(parent): Pick8 {
        if (!window[Pick8Layer.cls])
            window[Pick8Layer.cls] = new Pick8(parent)
        return window[Pick8Layer.cls]
    }
} 