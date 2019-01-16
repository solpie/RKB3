import { newBitmap } from '../../../../utils/PixiEx';
import { MaskAvatar } from '../../../base/MaskAvatar';
import { TextFac, Text2 } from '../../../../utils/TextFac';
import { FontName } from '../../../../const';
import { imgLoader } from '../../../../utils/ImgLoader';


export class TeamMateBlood extends PIXI.Container {
    ctnArr = []
    avtArr: Array<MaskAvatar> = []
    bloodArr: Array<Text2> = []
    bg: PIXI.Sprite
    constructor() {
        super()
        let ns = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: "30px",
            dropShadow: true,
            dropShadowColor: '#222222',
            dropShadowAngle: Math.PI * 1 / 3,
            dropShadowDistance: 3,
            fontWeight: "bold",
            fill: "#acacac"
        };
        this.bg = newBitmap({ url: '/img/panel/worldwar/teamMate/bg.png' })
        this.addChild(this.bg)
        for (let i = 0; i < 8; i++) {
            let ctn = new PIXI.Container()
            ctn.x = i * 99
            if (i > 3)
                ctn.x += 398
            this.addChild(ctn)
            this.ctnArr.push(ctn)

            let avt = new MaskAvatar(null)
            avt.setAvtPos(375, 930, 83)
            ctn.addChild(avt)
            this.avtArr.push(avt)

            let item = newBitmap({ url: '/img/panel/worldwar/teamMate/item.png' })
            ctn.addChild(item)
            let blood = TextFac.new_(ns, ctn)
                .setText("")
                .setY(914)
                .setAlignCenter(370 + 21)
            this.bloodArr.push(blood)
        }
    }
    teamMateBloodLayer: PIXI.Container
    addCtn(parent) {
        let teamMateBloodLayer = new PIXI.Container()
        parent.addChild(teamMateBloodLayer)
        this.teamMateBloodLayer = teamMateBloodLayer
        for (let ctn of this.ctnArr) {
            teamMateBloodLayer.addChild(ctn)
        }
        teamMateBloodLayer.addChild(newBitmap({ url: '/img/panel/worldwar/teamMate/fg.png' }))
        this.setVisible(false)
    }
    show(data) {
        if (data.visible) {
            let avtArr = []
            for (let i = 0; i < 4; i++) {
                let lp = data.lScoreArr[i]
                let rp = data.rScoreArr[i]
                avtArr.push(lp.avatar)
                avtArr.push(rp.avatar)
            }
            imgLoader.loadTexArr(avtArr, _ => {
                for (let i = 0; i < 4; i++) {
                    let lAvt = this.avtArr[i]
                    let lp = data.lScoreArr[i]
                    lAvt.load(lp.avatar)

                    let lt = this.bloodArr[i]
                    lt.setText(lp.score)
                        .setAlignCenter()

                    let rAvt = this.avtArr[i + 4]
                    let rp = data.rScoreArr[i]
                    rAvt.load(rp.avatar)

                    let rt = this.bloodArr[i + 4]
                    rt.setText(rp.score)
                        .setAlignCenter()
                }
                this.setVisible(true)
            },true)
        }
        else {
            this.setVisible()
        }
        // for()

    }
    setVisible(v = false) {
        this.bg.visible = v
        this.teamMateBloodLayer.visible = v
    }
}