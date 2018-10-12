import { BasePanel } from '../../base/BasePanel';
import { newBitmap, _c } from '../../../utils/PixiEx';
import { Text2, TextFac } from '../../../utils/TextFac';
import { FontName } from '../../../const';
import { getRankSection } from '../../../utils/HupuAPI';
import { fitWidth } from '../bracket/BracketGroup';
import { AvtV2 } from './AvtV2';
import { imgLoader } from '../../../utils/ImgLoader';
import { MapSprite } from './MapSprite';
let urlComBg = '/img/panel/com/bg.jpg'
let urlBg = '/img/panel/rank/v2/bg.png'
let iconArr = [
    '/img/panel/rank/v2/arrowUp.png',
    '/img/panel/rank/v2/arrowDown.png',
    '/img/panel/rank/v2/icon0.png',
    '/img/panel/rank/v2/icon1.png',
    '/img/panel/rank/v2/icon2.png',
    '/img/panel/rank/v2/icon3.png'
]
let isTest = true
class RankItem extends PIXI.Container {
    pName: Text2
    champion: Text2
    rankInTotal: Text2
    changeIcon: MapSprite
    rankChange: Text2
    avt: AvtV2
    rank: Text2
    rankIcon: PIXI.Sprite
    constructor() {
        super()
        let ns = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '40px', fill: "#333",
            fontWeight: 'bold'
        }
        this.rank = TextFac.new_(ns, this)



        this.pName = TextFac.new_(ns, this)
        this.champion = TextFac.new_(ns, this)
        this.rankInTotal = TextFac.new_(ns, this)
        this.changeIcon = new MapSprite()
        this.changeIcon.load({
            up: '/img/panel/rank/v2/arrowUp.png',
            down: '/img/panel/rank/v2/arrowDown.png'
        })
        this.addChild(this.changeIcon)
        this.rankChange = TextFac.new_(ns, this)
        this.avt = new AvtV2(this)
        this.avt.y = -15
        this.avt.x = 816
    }

    setItem(data) {
        // console.log('rank set item', data);
        this.rank.setText(data.rank)
            .setAlignCenter(490)
        this.pName.setText(data.name)
            .setAlignCenter(680)
        this.champion.setText(data.champion || "--")
            .setAlignCenter(1030)
        this.rankInTotal.setText(data.rankInTotal)
            .setAlignCenter(1228)


        let urlArrow = '/img/panel/rank/v2/arrowUp.png'
        // if(this.r)
        let change = data.rankChange

        if (change > 0) {
            this.changeIcon.setKey('up')
        }
        else if (change < 0) {
            data.rankChange *= -1
            this.changeIcon.setKey('down')
        }
        else {
            data.rankChange = '--'
            this.changeIcon.setKey(null)
        }
        this.rankChange.setText(data.rankChange)
            .setAlignCenter(1428)
        this.changeIcon.x = this.rankChange.x - 50

        this.avt.load(data.avatar)
        fitWidth(this.pName, 270, 30)

        let urlRank = '/img/panel/rank/v2/icon0.png'
        if (Number(data.rank) < 4) {
            urlRank = '/img/panel/rank/v2/icon' + data.rank + '.png'
        }

        if (this.rankIcon) {
            this.removeChild(this.rankIcon)
        }
        let icon = newBitmap({ url: urlRank })
        icon.x = 430
        if (Number(data.rank) < 4) {
            icon.y = -22
            this.addChild(icon)
        }
        else {
            icon.y = -26
            this.addChildAt(icon, 0)
        }
        this.rankIcon = icon



    }
}
export class RankV2 extends BasePanel {
    static cls = 'RankV2'
    rankMap: any;
    title: Text2
    itemArr: any
    create() {
        let imgArr = []
        imgArr.push(urlComBg)
        imgArr.push(urlBg)
        imgArr = imgArr.concat(iconArr)
        this.load(imgArr, _ => {
            this.addChild(newBitmap({ url: urlComBg }))
            this.addChild(newBitmap({ url: urlBg }))
            let ns = {
                fontFamily: FontName.MicrosoftYahei,
                fontSize: '50px', fill: "#fff",
            }

            this.title = TextFac.new_(ns, this)
            this.itemArr = []
            for (let i = 0; i < 5; i++) {
                let item = new RankItem()
                item.y = 282 + i * 128
                this.addChild(item)
                this.itemArr.push(item)
            }
        })
    }
    start = 0
    _showPage(data) {
        if (this.rankMap) {
            let s = this.start
            if (data.page == 3)
                s += 1
            else if (data.page == 2)
                s -= 1
            else if (data.page == 1)
                s = 0
            if (s < 0)
                s = 0
            if (s > 9)
                s = 9
            this.start = s
            for (let i = 0; i < 5; i++) {
                let item: RankItem = this.itemArr[i]
                let p = this.rankMap[s * 5 + 1 + i]
                if (p) {
                    item.setItem(p)
                    item.visible = true
                }
                else {
                    item.visible = false
                }
            }
        }
    }
    _show(data) {
        if (data.section < 0) {
            this._showPage(data)
        }
        else {
            let sectionMap = {
                0: '路人王全国实力榜',
                1: '路人王东南赛区实力榜',
                2: '路人王东北赛区实力榜',
                3: '路人王西方赛区实力榜',
                4: '路人王南方赛区实力榜'
            }
            let title = sectionMap[data.section]
            this.title.setText(title)
                .setAlignCenter(_c(0))
                .setY(72)

            getRankSection(data.section, res => {
                let d = res
                this.rankMap = {}
                for (let i = 0; i < d.data.length; i++) {
                    let p = d.data[i];
                    this.rankMap[p.rank] = {
                        name: p.name,
                        champion: p.total_champion,
                        rank: p.rank,
                        rankInTotal: p.major_rank,
                        rankChange: p.rank_change,
                        hwaText: p.height + ' /cm' + p.weight + ' /kg ' + p.age,
                        avatar: p.header,
                    }
                }
                //SHOW PAGE
                this._showPage(data)
            })
        }

        if (data.visible)
            this.p.addChild(this)
        else
            this.hide(data)
    }
}