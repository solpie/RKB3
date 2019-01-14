import { BasePanel } from '../../base/BasePanel';
import { create } from 'domain';
import { Text2, TextFac } from '../../../utils/TextFac';
import { newBitmap, _c, setScale } from '../../../utils/PixiEx';
import { FontName } from '../../../const';
let urlItem, urlBg;

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
            .setText("张梓祎队 21-6 塞尔维亚队")
            .setY(498)
            .setAlignCenter(_c(0))
    }
    setData(data) {
        if (data.score[0] == 0 && data.score[1] == 0) {
            this.lName.setText(data.name[0] + ' vs ' + data.name[1])
                .setAlignCenter()
        }
        else {
            this.lName.setText(data.name[0] + ' '+data.score[0]+':'+data.score[1]+' ' + data.name[1])
                .setAlignCenter()
        }

    }
}
export class BracketS5Team extends BasePanel {
    static cls = 'BracketS5Team'
    teamVsItemArr: Array<TeamVsItem> = []

    lName: Text2
    rName: Text2
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
                let teamBg = newBitmap({ url: `/img/panel/pickTeam/bg${i + 1}.png` })
                setScale(teamBg, 0.75)
                teamBg.y = 158
                teamBg.x = -350 + i * 350
                this.addChild(teamBg)

            }
            for (let i = 0; i < 6; i++) {
                let tvi = new TeamVsItem(this)
                tvi.x = pos[i][0]
                tvi.y = pos[i][1]
                this.teamVsItemArr.push(tvi)
            }
        })
    }
    _show(data) {
        console.log('on S5 bracket d2', data)
        this.p.addChild(this)
        for (let i = 0; i < 6; i++) {
            let tvi = this.teamVsItemArr[i]
            let rec = data.rec[i]
            let name = [
                data.team[rec.vs[0] - 1].name,
                data.team[rec.vs[1] - 1].name
            ]

            tvi.setData({ name: name, score: rec.score })
        }
    }
}