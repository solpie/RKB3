import { BasePanel } from '../../../base/BasePanel';
import { newBitmap, _c } from '../../../../utils/PixiEx';
import { Text2, TextFac } from '../../../../utils/TextFac';
import { FontName } from '../../../../const';
import { CommandId } from '../../../../Command';
let urlBg1 = '/html/ww/bottomBlood/bg2.png'
let urlBloodFrame = '/html/ww/bottomBlood/frame.png'
let urlLBlood = '/html/ww/bottomBlood/lBlood.png'
let urlRBlood = '/html/ww/bottomBlood/rBlood.png'
let urlFg = '/html/ww/bottomBlood/fg2.png'
const isTest = true
class ___BloodPlayer extends PIXI.Container {
    blood: number
    initBlood: number
    playerId: string
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

            stroke: '#333',
            strokeThickness: 2,
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
        if (data.name) {
            this.pName.setText(data.name)
                .setAlignCenter(645)
        }
        if (data.bloodRaito != null) {
            let bloodWidth = 425 * (1 - data.bloodRaito)
            if (data.bloodRaito == 0) {
                bloodWidth = 422
            }
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
}

export class BigBlood extends BasePanel {
    static cls = 'BigBlood'
    lPlayerArr: Array<___BloodPlayer>
    rPlayerArr: Array<___BloodPlayer>
    lTimeoutMask: PIXI.Graphics
    lTimeoutMaskArr: Array<PIXI.Graphics>
    rTimeoutMaskArr: Array<PIXI.Graphics>
    rTimeoutMask: PIXI.Graphics

    lBlood: Text2
    rBlood: Text2
    lFoul: Text2
    rFoul: Text2
    lName: Text2
    rName: Text2

    create() {
        console.log('scroll text creat1e');
        let imgArr = [urlBg1
            , urlBloodFrame
            , urlLBlood
            , urlRBlood
            , urlFg
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
                fontFamily: FontName.dinCondensedC,
                fontSize: "70px",
                fontWeight: "bold",
                fill: "#ddd"
            };

            this.lFoul = TextFac.new_(ns, this)
                .setY(300)
                .setText("0")
                .setAlignCenter(_c(-133))

            this.rFoul = TextFac.new_(ns, this)
                .setY(this.lFoul.y)
                .setText("0")
                .setAlignCenter(_c(133))

            ns.fontSize = "120px"
            this.lBlood = TextFac.new_(ns, this)
                .setY(218 - 37)
                .setText("0")
                .setAlignCenter(_c(-280))

            this.rBlood = TextFac.new_(ns, this)
                .setY(this.lBlood.y)
                .setText("0")
                .setAlignCenter(_c(280))
            this.addChild(newBitmap({ url: urlFg }))
            ns.fontFamily = FontName.MicrosoftYahei
            ns.fontSize = "43px"
            this.lName = TextFac.new_(ns, this)
                .setText('player1')
                .setY(312)
                .setAlignCenter(_c(-516))

            this.rName = TextFac.new_(ns, this)
                .setText('player2')
                .setY(this.lName.y)
                .setAlignCenter(_c(516))
        })
    }

    _fillBlood(dataArr, bloodPlayerArr: Array<___BloodPlayer>, curPlayer?) {
        for (let i = 0; i < dataArr.length; i++) {
            let data = dataArr[i]
            let b = bloodPlayerArr[i]
            if (curPlayer.playerId == data.playerId) {
                data.blood = curPlayer.blood
            }
            b.initBlood = data.initBlood
            b.blood = data.blood
            b.playerId = data.playerId
            data.bloodRaito = data.blood / data.initBlood
            b.setInfo(data)
        }
    }
    _setCurBlood(data) {
        let curBloodArr = [0, 0]
        for (let i = 0; i < this.lPlayerArr.length; i++) {
            let b = this.lPlayerArr[i]
            if (b.playerId == data.lPlayer) {
                curBloodArr[0] = b.blood - data.rScore
                data.bloodRaito = curBloodArr[0] / b.initBlood;
                b.setInfo(data)
            }
        }
        for (let i = 0; i < this.rPlayerArr.length; i++) {
            let b = this.rPlayerArr[i]
            if (b.playerId == data.rPlayer) {
                curBloodArr[1] = b.blood - data.lScore
                data.bloodRaito = curBloodArr[1] / b.initBlood;
                b.setInfo(data)
            }
        }
        return curBloodArr
    }
    _show(data) {
        if (data.cid == CommandId.sc_setFoul) {
            this.lFoul.setText(data.lFoul)
                .setAlignCenter(805)
            this.rFoul.setText(data.rFoul)
                .setAlignCenter(1146)
        }

        if (data.cid == CommandId.sc_setBlood) {
            let curBloodArr = this._setCurBlood(data)
            this.lBlood.setText(curBloodArr[0])
                .setAlignCenter(_c(-300))
            this.rBlood.setText(curBloodArr[1])
                .setAlignCenter(_c(300))
        }

        if (data.cid == CommandId.sc_setPlayer) {
            this.lBlood.setText(data.leftPlayer.blood)
                .setAlignCenter(_c(-300))
            this.rBlood.setText(data.rightPlayer.blood)
                .setAlignCenter(_c(300))

            this.lFoul.setText(0)
                .setAlignCenter(_c(-133))
            this.rFoul.setText(0)
                .setAlignCenter(_c(133))

            this.lName.setText(data.leftPlayer.name)
                .setAlignCenter(_c(-516))
            this.rName.setText(data.rightPlayer.name)
                .setAlignCenter(_c(516))

            this._fillBlood(data.leftTeam, this.lPlayerArr, data.leftPlayer)
            this._fillBlood(data.rightTeam, this.rPlayerArr, data.rightPlayer)
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