import { FontName } from '../../../const';
import { getRankSection } from '../../../utils/HupuAPI';
import { imgLoader } from '../../../utils/ImgLoader';
import { loadImg, paddy } from '../../../utils/JsFunc';
import { imgToTex, newBitmap, setScale } from '../../../utils/PixiEx';
import { fitWidth } from '../bracket/BracketGroup';
class Tab2 extends PIXI.Container {
    playerName: PIXI.Text
    playerName2: PIXI.Text
    playerHupuID: PIXI.Text
    startGame: PIXI.Text
    gameIdx: PIXI.Text
    champion: PIXI.Text
    constructor() {
        super()
        let bg = newBitmap({ url: '/img/panel/top5/tabBg.png' })
        this.addChild(bg)

        let rs = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '48px', fill: "#4d5167",
            fontWeight: 'bold'
        }
        let pn = new PIXI.Text('', rs)
        this.playerName = pn
        this.addChild(pn)
        pn.x = 168
        pn.y = 20

        let champion = new PIXI.Text('小组赛',
            {
                fontFamily: FontName.MicrosoftYahei,
                fontSize: '30px', fill: "#fff",
                fontWeight: 'bold'
            })
        this.addChild(champion)
        champion.x = 16
        champion.y = 10
        this.champion = champion
        // pn2.x = 198 + 738
        let gameIdx = new PIXI.Text('', {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '48px', fill: "#fff",
            fontWeight: 'bold'
        })
        gameIdx.y = 50
        this.gameIdx = gameIdx
        this.addChild(gameIdx)

        setScale(this, 0.9)
    }

    setInfo(data) {
        this.playerName.text = data.name
        if (data.champion)
            this.champion.text = data.champion + "冠"
        else
            this.champion.text = ""
        fitWidth(this.playerName, 270, 48)
        this.setRank(data.rank)
    }
    setRank(idx) {
        this.gameIdx.text = paddy(idx, 2)
        this.gameIdx.x = 60 - this.gameIdx.width * .5
    }
}
export class RankSection extends PIXI.Container {
    static class = 'Top5'
    p: any
    curPlayer: PIXI.Sprite
    tabArr = []

    playerName: PIXI.Text
    hupuID: PIXI.Text
    hwa: PIXI.Text
    info: PIXI.Text
    title: PIXI.Text
    cacheTime: Number
    playerArr: any
    rankMap: any
    bg: PIXI.Sprite
    create(parent: any, data) {
        this.p = parent
        let imgArr = []
        this.curPlayer = new PIXI.Sprite()
        this.addChild(this.curPlayer)
        getRankSection(data.section, res => {
            let d = res
            this.playerArr = []
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
            console.log('getRankSection', res, d);
            let tabArr = []
            for (let i = 0; i < 5; i++) {
                let t = new Tab2()
                this.tabArr.push(t)
                t.x = 253
                t.y = 204 + i * 125
                this.addChild(t)
            }
            this.cacheTime = new Date().getTime()
            let bgUrl = `/img/panel/rank/bg${data.section}_0.png`
            imgArr.push(bgUrl)

            imgLoader.loadTexArr(imgArr, _ => {
                // tabArr.forEach(t => {
                //     t.visible = true
                // });
                let bg = newBitmap({ url: bgUrl })
                this.addChildAt(bg, 0)
                this.bg = bg
                // let tagBg = newBitmap({ url: '/img/panel/top5/tag.png' })
                // this.addChild(tagBg)
                // this.tag2Bg = tagBg
                // this.tag2Bg.visible = false
                // this.initDetail()
                this.show(data)
            })
        })
    }
    start = 0
    _getData(section, callback) {
        getRankSection(section, res => {
            let d = res
            loadImg(`/img/panel/rank/bg${section}_0.png`,
            img => {
                this.bg.texture = imgToTex(img)
            })

            this.playerArr = []
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
            callback()
        })
    }
    _fillData(data) {
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
                let p = this.rankMap[s * 5 + 1 + i];
                let t: Tab2 = this.tabArr[i];
                t.visible = true
                t.setInfo(p)
            }
        }
        this.p.addChild(this)
    }
    show(data) {
        console.log('show player ', data);
        if (data.section) {
            this._getData(data.section, _ => {
                this._fillData(data)
            })
        }
        else
            this._fillData(data)
    }


    // setTab(idx) {
    //     idx = Number(idx)
    //     // let data = this.infoArr[idx - 1]
    //     this.curPlayer.texture = imgLoader.getTex(`/img/player/top5/${data.img}.png?t=` + this.cacheTime)
    //     this.setDetail(data)
    // }


    setDetail(data) {
        // if (this.playerName) {
        console.log('show detail', data);
        this.playerName.text = data.name
        // this.hupuID.text = data.hupuID
        this.hwa.text =
            data.hwa[0] + ' cm/ '
            + data.hwa[1] + ' kg/ '
            + data.hwa[2] + ' 岁';
        this.info.text = data.info
        // this.tag2.text = ''
        // this.tag2Bg.visible = false
        // let a = data.tag1.split(' ')
        // if (a.length == 2) {
        //     this.tag2Bg.x = this.tag2.x - 28
        //     this.tag2Bg.y = this.tag2.y - 14
        //     this.tag2Bg.visible = true
        //     this.tag1.text = a[0]
        //     this.tag2.text = a[1]
        // }
        // else
        //     this.tag1.text = data.tag1
    }

    initDetail() {
        let rs = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '33px', fill: "#2e3352",
            fontWeight: 'bold'
        }


        let pn = new PIXI.Text('', rs)
        this.playerName = pn
        this.addChild(pn)
        pn.x = 1146
        pn.y = 228

        let hupuID = new PIXI.Text('', rs)
        this.hupuID = hupuID
        // this.addChild(hupuID)
        hupuID.x = pn.x
        hupuID.y = 232 + 76

        let hwa = new PIXI.Text('', rs)
        this.hwa = hwa
        this.addChild(hwa)
        hwa.x = pn.x
        hwa.y = 304

        let info = new PIXI.Text('', rs)
        this.info = info
        this.addChild(info)
        info.x = pn.x
        info.y = 470

        rs.fontSize = '48px'
        let title = new PIXI.Text('夺冠热门球员', rs)
        this.addChild(title)
        title.x = 960 - title.width * .5
        title.y = 120
    }

    hide() {
        if (this.parent)
            this.parent.removeChild(this)
    }
}