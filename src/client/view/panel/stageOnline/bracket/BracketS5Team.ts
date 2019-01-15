import { BasePanel } from '../../base/BasePanel';
import { create } from 'domain';
import { Text2, TextFac } from '../../../utils/TextFac';
import { newBitmap, _c, setScale } from '../../../utils/PixiEx';
import { FontName } from '../../../const';
import { MaskAvatar } from '../../base/MaskAvatar';
let urlItem, urlBg;
class Team extends PIXI.Container {
    nameArr: Array<Text2> = []
    constructor() {
        super()
        let ns = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: "26px",
            dropShadow: true,
            dropShadowColor: '#222222',
            dropShadowAngle: Math.PI * 1 / 3,
            dropShadowDistance: 3,
            fontWeight: "bold",
            fill: "#acacac"
        };
        let cName = TextFac.new_(ns, this)
            .setText('马克队')
            .setY(737)
            .setAlignCenter(_c(-240))
        this.nameArr.push(cName)
    }

    setNameArr(nameArr) {
        //todo
    }
}
class TeamVsItem extends PIXI.Container {
    lName: Text2
    rName: Text2
    lWinSp: PIXI.Sprite
    rWinSp: PIXI.Sprite
    constructor(parent) {
        super()
        parent.addChild(this)
        this.addChild(newBitmap({ url: urlItem }))
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
        this.lName = TextFac.new_(ns, this)
            .setText("")
            .setY(498)
            .setAlignCenter(_c(0))
    }
    setData(data) {
        if (data.score[0] == 0 && data.score[1] == 0) {
            this.lName.setText(data.name[0] + ' vs ' + data.name[1])
                .setAlignCenter()
        }
        else {
            this.lName.setText(data.name[0] + ' ' + data.score[0] + ':' + data.score[1] + ' ' + data.name[1])
                .setAlignCenter()
        }

    }
}
export class BracketS5Team extends BasePanel {
    static cls = 'BracketS5Team'
    teamVsItemArr: Array<TeamVsItem> = []
    teamAvtArr: Array<MaskAvatar> = []
    lName: Text2
    rName: Text2
    finalScore: Text2
    finalMask: PIXI.Graphics
    create() {
        urlItem = '/img/panel/bracket/s5/item2.png'
        urlBg = '/img/panel/bracket/s5/bg2.png'
        this.load([
            urlItem,
            urlBg,
            "/img/panel/pickTeam/bg1.png",
            "/img/panel/pickTeam/bg2.png",
            "/img/panel/pickTeam/bg3.png",
            "/img/panel/pickTeam/bg4.png",
        ], _ => {
            this.addChild(newBitmap({ url: urlBg }))
            let pos = [
                [-460, 0], [0, 0], [460, 0],
                [-460, 120], [0, 120], [460, 120]
            ]

            for (let i = 0; i < 4; i++) {
                // this.avtArr.push(sp)

                let teamBg = newBitmap({ url: `/img/panel/pickTeam/bg${i + 1}.png` })
                setScale(teamBg, 0.75)
                teamBg.y = 158
                teamBg.x = -350 + i * 350
                let team = new Team()
                team.x = teamBg.x
                team.y = teamBg.y

                let sp = new MaskAvatar(null)
                sp.setAvtPos(teamBg.x + 660, teamBg.y + 737 - 102, 120)
                sp.load('http://rtmp.icassi.us:8092/img/player/915/p0.png')
                this.addChild(sp)
                this.teamAvtArr.push(sp)

                this.addChild(teamBg)
                this.addChild(team)
            }

            for (let i = 0; i < 3; i++) {

            }

            for (let i = 0; i < 6; i++) {
                let tvi = new TeamVsItem(this)
                tvi.x = pos[i][0]
                tvi.y = pos[i][1]
                this.teamVsItemArr.push(tvi)
            }

            let ns = {
                fontFamily: FontName.MicrosoftYahei,
                fontSize: "40px",
                dropShadow: true,
                dropShadowColor: '#222222',
                dropShadowAngle: Math.PI * 1 / 3,
                dropShadowDistance: 3,
                fontWeight: "bold",
                fill: "#acacac"
            };
            this.lName = TextFac.new_(ns, this)
                .setY(208)
                .setText('')
                .setAlignCenter(_c(-162))
            this.rName = TextFac.new_(ns, this)
                .setY(208)
                .setText('')
                .setAlignCenter(_c(162))

            this.finalMask = new PIXI.Graphics()
                .beginFill(0x111017)
                .drawRect(897, 293, 123, 33)
            this.finalMask.visible = false
            this.addChild(this.finalMask)

            this.finalScore = TextFac.new_(ns, this)
                .setY(283)
                .setSize("36px")
                .setText('')
                .setAlignCenter(_c(0))


        })
    }
    _show(data) {
        console.log('on S5 bracket d2', data)
        this.p.addChild(this)
        for (let i = 0; i < 4; i++) {
            let sp = this.teamAvtArr[i]
            sp.load(data.avatarUrlBase + data.team[i].c + '.png')
        }
        for (let i = 0; i < 6; i++) {
            let tvi = this.teamVsItemArr[i]
            let rec = data.rec[i]
            let name = [
                data.team[rec.vs[0] - 1].name,
                data.team[rec.vs[1] - 1].name
            ]

            tvi.setData({ name: name, score: rec.score })
        }
        let recFinal = data.rec[6]

        if (recFinal.score[0] != 0 || recFinal.score[0] != 0) {
            this.finalMask.visible = true
            this.finalScore.setText(recFinal.score[0] + '-' + recFinal.score[1])
                .setAlignCenter(_c(0))
        }
        if (recFinal.vs[0] != 0) {
            this.lName.setText(data.team[recFinal.vs[0] - 1].name)
                .setAlignCenter()
            this.rName.setText(data.team[recFinal.vs[1] - 1].name)
                .setAlignCenter()
        }
    }
}