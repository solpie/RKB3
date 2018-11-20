import { BasePanel } from '../../../base/BasePanel';
import { newBitmap } from '../../../../utils/PixiEx';
import { Text2, TextFac } from '../../../../utils/TextFac';
import { FontName } from '../../../../const';
import { CommandId } from '../../../../Command';
let urlBg1 = '/html/ww/bottomBlood/bg2.png'
let urlBloodFrame = '/html/ww/bottomBlood/frame.png'
let urlLBlood = '/html/ww/bottomBlood/lBlood.png'
let urlRBlood = '/html/ww/bottomBlood/rBlood.png'
const isTest = true
class ___BloodPlayer extends PIXI.Container {
    pName: Text2
    isRight: Boolean
    bloodMask: PIXI.Graphics
    constructor(parent, isRight = false) {
        super()
        this.isRight = isRight
        this.addChild(newBitmap({ url: urlBloodFrame }))


        let fg = newBitmap({ url: urlBloodFrame })
        let blood;

        this.bloodMask = new PIXI.Graphics()
            .beginFill(0xff0000)
        if (isRight) {
            this.bloodMask
                .drawRect(1060, 449, 425, 90)
            fg.scale.x = -1
            fg.x = 1920
            blood = newBitmap({ url: urlRBlood })
        }
        else {
            this.bloodMask
                .drawRect(436, 449, 425, 90)
            blood = newBitmap({ url: urlLBlood })
        }

        this.addChild(blood)
        blood.mask = this.bloodMask
        this.addChild(this.bloodMask)

        let ns = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: "45px",
            fontWeight: "",
            fill: "#ddd"
        };
        this.pName = TextFac.new_(ns, this)
            .setY(459)

        this.addChild(fg)

        parent.addChild(this)
        if (isTest)
            this.setInfo({ name: '黄玉军', bloodRaito: Math.random() })
    }
    setInfo(data) {
        this.pName.setText(data.name)
            .setAlignCenter(645)
        let bloodWidth = 425 * data.bloodRaito
        if (this.isRight) {
            this.bloodMask.x = bloodWidth
            this.pName.setAlignCenter(1920 - 645)
        }
        else {
            this.bloodMask.x = -bloodWidth
            this.pName.setAlignCenter(645)
        }

    }
}

export class BigBlood extends BasePanel {
    static cls = 'BigBlood'
    lPlayerArr: Array<___BloodPlayer>
    rPlayerArr: Array<___BloodPlayer>
    lTimeoutMask: PIXI.Graphics
    lTimeoutMaskArr: Array<PIXI.Graphics>
    rTimeoutMaskArr: Array<PIXI.Graphics>
    rTimeoutMask: PIXI.Graphics

    lFoul: Text2
    rFoul: Text2
    lBlood: Text2
    rBlood: Text2
    create() {
        console.log('scroll text creat1e');
        let imgArr = [urlBg1
            , urlBloodFrame
            , urlLBlood
            , urlRBlood
        ]
        this.load(imgArr, _ => {
            this.addChild(newBitmap({ url: urlBg1 }))
            let lA = [], rA = []
            for (let i = 0; i < 5; i++) {
                let lP = new ___BloodPlayer(this)
                lP.x = 0
                lP.y = i * 115
                lA.push(lP)

                let rP = new ___BloodPlayer(this, true)
                rP.x = 0
                rP.y = lP.y
                rA.push(rP)
            }
            this.lPlayerArr = lA
            this.rPlayerArr = rA

            this.lTimeoutMaskArr = []
            this.rTimeoutMaskArr = []
            let tm = new PIXI.Graphics()
                .beginFill(0x020206)
                .drawRect(600, 145, 130, 50)
            this.addChild(tm)
            this.lTimeoutMaskArr.push(tm)

            tm = new PIXI.Graphics()
                .beginFill(0x020206)
                .drawRect(730, 145, 130, 50)
            this.addChild(tm)
            this.lTimeoutMaskArr.push(tm)

            tm = new PIXI.Graphics()
                .beginFill(0x020206)
                .drawRect(1190, 145, 130, 50)
            this.addChild(tm)
            this.rTimeoutMaskArr.push(tm)

            tm = new PIXI.Graphics()
                .beginFill(0x020206)
                .drawRect(1060, 145, 130, 50)
            this.addChild(tm)
            this.rTimeoutMaskArr.push(tm)



            let ns = {
                fontFamily: FontName.MicrosoftYahei,
                fontSize: "45px",
                fontWeight: "",
                fill: "#ddd"
            };
            this.lFoul = TextFac.new_(ns, this)
                .setY(326)

            this.rFoul = TextFac.new_(ns, this)
                .setY(this.lFoul.y)

            this.lBlood = TextFac.new_(ns, this)
                .setY(238)

            this.rBlood = TextFac.new_(ns, this)
                .setY(this.lBlood.y)
        })
    }
    _show(data) {
        if (data.cid ==CommandId.sc_setFoul) {
            this.lFoul.setText(data.lFoul)
                .setAlignCenter(805)
            this.rFoul.setText(data.rFoul)
                .setAlignCenter(1146)
        }

        if (data.cid == CommandId.sc_setBlood) {
            if (data.isLeft)
                this.lBlood.setText(data.blood)
                    .setAlignCenter(805)
            else
                this.rBlood.setText(data.blood)
                    .setAlignCenter(1146)
        }

        if (data.cid == CommandId.sc_timeOut) {
            this.lTimeoutMaskArr[0].visible = data.lTimeOut < 2
            this.lTimeoutMaskArr[1].visible = data.lTimeOut < 1

            this.rTimeoutMaskArr[0].visible = data.rTimeOut < 2
            this.rTimeoutMaskArr[1].visible = data.rTimeOut < 1
        }

        this.p.addChild(this)
    }
}