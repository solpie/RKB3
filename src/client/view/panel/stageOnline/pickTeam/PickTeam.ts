import { newBitmap } from '../../../utils/PixiEx';
import { imgLoader } from '../../../utils/ImgLoader';
import { Text2, TextFac } from '../../../utils/TextFac';
import { FontName } from '../../../const';
export class PickTeam extends PIXI.Container {
    bg1: PIXI.Sprite
    bg2: PIXI.Sprite
    bg3: PIXI.Sprite
    teamName1: Text2
    teamName2: Text2
    teamName3: Text2

    teamNameArr: Array<Text2> = []
    playerNameArr1: Array<Text2> = []
    playerNameArr2: Array<Text2> = []
    playerNameArr3: Array<Text2> = []
    colorMap: any
    posArr = [-480 - 77, -77, 480 - 77]
    constructor(parent) {
        super()
        parent.addChild(this)
        //季军 冠军 亚军
        let bg = newBitmap({ url: '/img/panel/pickTeam/bg.png' })
        this.addChild(bg)

        this.bg1 = new PIXI.Sprite()
        this.bg1.x = -77 //冠军
        this.addChild(this.bg1)

        this.bg2 = new PIXI.Sprite()
        this.bg2.x = 480 - 77//亚军
        this.addChild(this.bg2)

        this.bg3 = new PIXI.Sprite()
        this.bg3.x = -480 - 77//季军
        this.addChild(this.bg3)
        this.colorMap = { '红': this.bg1, '白': this.bg2, '绿': this.bg3 }

        imgLoader.loadTexArr([
            '/img/panel/pickTeam/bg.png',
            '/img/panel/pickTeam/bg1.png',
            '/img/panel/pickTeam/bg2.png',
            '/img/panel/pickTeam/bg3.png',
        ], _ => {
            this.bg1.texture =
                imgLoader.getTex('/img/panel/pickTeam/bg1.png')
            this.bg2.texture =
                imgLoader.getTex('/img/panel/pickTeam/bg2.png')
            this.bg3.texture =
                imgLoader.getTex('/img/panel/pickTeam/bg3.png')

            let ns = {
                fontFamily: FontName.MicrosoftYahei,
                fontSize: "32px",
                dropShadow: true,
                dropShadowColor: '#222222',
                dropShadowAngle: Math.PI * 1 / 3,
                dropShadowDistance: 3,
                fontWeight: "bold",
                fill: "#acacac"
            };
            let name: Text2
            let name2: Text2
            let name3: Text2
            let a = []
            for (let i = 0; i < 3; i++) {
                name = TextFac.new_(ns, this)
                    .setText('')
                    .setPos(520, 878 + i * 51)
                this.playerNameArr1.push(name)

                name2 = TextFac.new_(ns, this)
                    .setText('')
                    .setPos(1000, name.y)
                this.playerNameArr2.push(name2)

                name3 = TextFac.new_(ns, this)
                    .setText('')
                    .setPos(1476, name.y)
                this.playerNameArr3.push(name3)
                name = TextFac.new_(ns, this)
                    .setY(986)
                    .setSize("24px")
                    .setText("")
                    .setAlignCenter(406 + i * 480)
                a.push(name)
            }
            this.playerNameArr1 = [a[0]].concat(this.playerNameArr1)
            this.playerNameArr2 = [a[1]].concat(this.playerNameArr2)
            this.playerNameArr3 = [a[2]].concat(this.playerNameArr3)
        })
    }

    setData(data) {
        for (let i = 0; i < 4; i++) {
            this.playerNameArr1[i]
                .setText(data.teamArr1[i])

            // .setAlignCenter()
            this.playerNameArr2[i]
                .setText(data.teamArr2[i])
            // .setAlignCenter()
            this.playerNameArr3[i]
                .setText(data.teamArr3[i])
            if (i == 0) {
                console.log('set align')
                this.playerNameArr1[i].setAlignCenter()
                this.playerNameArr2[i].setAlignCenter()
                this.playerNameArr3[i].setAlignCenter()
            }
            // .setAlignCenter()
        }
    }

    setColor(data) {
        for (let i = 0; i < 3; i++) {
            let color = data.colorArr[i]
            let sp = this.colorMap[color]
            sp.x = this.posArr[i]
        }
    }
}