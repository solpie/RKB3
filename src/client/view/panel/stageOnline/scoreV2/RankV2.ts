import { BasePanel } from '../../base/BasePanel';
import { newBitmap, _c } from '../../../utils/PixiEx';
import { Text2, TextFac } from '../../../utils/TextFac';
import { FontName } from '../../../const';
import { getRankSection } from '../../../utils/HupuAPI';
import { fitWidth } from '../bracket/BracketGroup';
let urlComBg = '/img/panel/com/bg.jpg'
let urlBg = '/img/panel/rank/v2/bg.png'
let isTest = true
class RankItem extends PIXI.Container {
    pName: Text2
    champion: Text2
    rankInTotal: Text2
    tend: Text2
    constructor() {
        super()
        let ns = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '30px', fill: "#fff",
            fontWeight: 'bold'
        }
        this.pName = TextFac.new_(ns, this)
        this.champion = TextFac.new_(ns, this)
        this.rankInTotal = TextFac.new_(ns, this)
        this.tend = TextFac.new_(ns, this)
        if (isTest) {
            this.setItem({ name: '好天气', champion: 4 })
        }
    }

    setItem(data) {
        this.pName.setText(data.name)
        this.champion.setText(data.champion || " ")
        fitWidth(this.pName, 270, 30)
    }
}
export class RankV2 extends BasePanel {
    static cls = 'RankV2'
    rankMap: any;
    title: Text2
    create() {
        let imgArr = []
        imgArr.push(urlComBg)
        imgArr.push(urlBg)
        this.load(imgArr, _ => {
            this.addChild(newBitmap({ url: urlComBg }))
            this.addChild(newBitmap({ url: urlBg }))
            let ns = {
                fontFamily: FontName.MicrosoftYahei,
                fontSize: '50px', fill: "#fff",
            }

            this.title = TextFac.new_(ns, this)
            for (let i = 0; i < 5; i++) {
                let item = new RankItem()
                item.x = 432
                item.y = 270 + i * 128
                this.addChild(item)
            }
        })
    }
    _show(data) {
        let sectionMap = {
            1: '东南赛区实力榜',
            2: '东北赛区实力榜',
            3: '西方赛区实力榜',
            4: '南方赛区实力榜'
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
                    hwaText: p.height + ' /cm' + p.weight + ' /kg ' + p.age,
                    avatar: p.head,
                }
            }
        })
        if (data.visible)
            this.p.addChild(this)
        else
            this.hide(data)
    }
}