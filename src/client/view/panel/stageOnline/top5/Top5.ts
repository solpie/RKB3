import { newBitmap, loadRes } from '../../../utils/PixiEx';
import { imgLoader } from '../../../utils/ImgLoader';
import { FontName } from '../../../const';
import { paddy } from '../../../utils/JsFunc';
class Tab2 extends PIXI.Container {
    playerName: PIXI.Text
    playerName2: PIXI.Text
    playerHupuID: PIXI.Text
    startGame: PIXI.Text
    gameIdx: PIXI.Text
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
        pn.x = 198
        pn.y = 20

        let gameTitle = new PIXI.Text('小组赛',
            {
                fontFamily: FontName.MicrosoftYahei,
                fontSize: '30px', fill: "#fff",
                fontWeight: 'bold'
            })
        this.addChild(gameTitle)
        gameTitle.x = 16
        gameTitle.y = 10
        // pn2.x = 198 + 738
        let gameIdx = new PIXI.Text('', {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '48px', fill: "#fff",
            fontWeight: 'bold'
        })
        gameIdx.y = 50
        this.gameIdx = gameIdx
        this.addChild(gameIdx)
    }

    setInfo(data) {
        this.playerName.text = data.name
        this.setGameIdx(0)
    }
    setGameIdx(idx) {
        this.gameIdx.text = paddy(idx, 2)
        this.gameIdx.x = 60 - this.gameIdx.width * .5
    }
}
let infoArr = [
    {
        name: '张智扬',
        hwa: [188, 80, 23],
        info: `前cuba山西大学首发球员
微博：@张智扬帆起航
路人王实力榜第一名
5次参加城市赛全部夺冠
11月&12月冠军赛冠军
        `,
        tag1: '实力榜第一人',
        hupuID: '@张韦韦韦韦韦'
    },
    {
        name: '陈鼎',
        hwa: [188, 95, 28],
        info: `微博：@少年你被包围了 
实力榜排名第18名 
路人王上海站冠军
10月冠军赛季军
        `,
        tag1: '路人王邓肯',
        hupuID: '@CD狠低调'
    },
    {
        name: '柳杨杰',
        hwa: [180, 75, 22],
        info: `微博：@传球奶 
实力榜第29名 
路人王上海站六冠王
冠军赛及总决赛选手
        `,
        tag1: '中投小王子',
        hupuID: '@打铁不算多'
    },
    {
        name: '方良超',
        hwa: [174, 73, 27],
        info: `微博：@方良超 
实力榜第48名 
X-Battle明星球员
路人王上海站冠军
9月冠军赛亚军
        `,
        tag1: '无畏大师',
        hupuID: '@方良超'
    },
    {
        name: '任泽南',
        hwa: [185, 80, 22],
        info: `微博：@RZNNNNNNN 
路人王知名主播 
北京站四强选手
        `,
        tag1: '好身体',
        hupuID: '@RZNNNNNNN'
    },
]
export class Top5 extends PIXI.Container {
    static class = 'Top5'
    p: any
    curPlayer: PIXI.Sprite
    tabArr = []

    playerName: PIXI.Text
    hupuID: PIXI.Text
    hwa: PIXI.Text
    tag1: PIXI.Text
    info: PIXI.Text
    title: PIXI.Text
    create(parent: any, data) {
        parent.addChild(this)
        this.p = parent
        let imgArr = []
        this.curPlayer = new PIXI.Sprite()
        this.addChild(this.curPlayer)
     

        let tabArr = []
        for (let i = 0; i < 5; i++) {
            let t = new Tab2()
            this.addChild(t)
            this.tabArr.push(t)
            t.x = 203
            t.y = 204 + i * 134
            imgArr.push(`/img/panel/top5/p${i + 1}.png`)
            t.visible = false
            t.setInfo(infoArr[i])
            tabArr.push(t)
        }
        imgArr.push('/img/panel/top5/bg.png')
        imgLoader.loadTexArr(imgArr, _ => {
            tabArr.forEach(t => {
                t.visible = true
            });
            let bg = newBitmap({ url: '/img/panel/top5/bg.png' })
            this.addChildAt(bg, 0)
            this.initDetail()
            this.show(data)
        })
    }
    show(data) {
        console.log('show player ', data);
        this.setTab(data.idx)
        let a = data.gameIdxArr.split(' ')
        if (a.length > 1) {
            for (let i = 0; i < this.tabArr.length; i++) {
                let t: Tab2 = this.tabArr[i];
                if (a[i])
                    t.setGameIdx(a[i])
                else
                    t.setGameIdx(0)
            }
        }
        this.p.addChild(this)
    }

    setTab(idx) {
        idx = Number(idx)
        let data = infoArr[idx - 1]
        this.curPlayer.texture = imgLoader.getTex(`/img/panel/top5/p${idx}.png`)
        this.setDetail(data)
    }


    setDetail(data) {
        console.log('show detail', data);
        this.playerName.text = data.name
        this.hupuID.text = data.hupuID
        this.hwa.text =
            data.hwa[0] + ' cm/ '
            + data.hwa[1] + ' kg/ '
            + data.hwa[2] + ' 岁';
        this.info.text = data.info
        this.tag1.text = data.tag1
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
        pn.x = 1150
        pn.y = 232

        let hupuID = new PIXI.Text('', rs)
        this.hupuID = hupuID
        this.addChild(hupuID)
        hupuID.x = pn.x
        hupuID.y = 232 + 76

        let hwa = new PIXI.Text('', rs)
        this.hwa = hwa
        this.addChild(hwa)
        hwa.x = pn.x
        hwa.y = 232 + 76 + 76

        let tag1 = new PIXI.Text('', rs)
        this.tag1 = tag1
        this.addChild(tag1)
        tag1.x = pn.x
        tag1.y = 232 + 76 + 76 + 76

        let info = new PIXI.Text('', rs)
        this.info = info
        this.addChild(info)
        info.x = pn.x
        info.y = 550

        rs.fontSize = '48px'
        let title = new PIXI.Text('夺冠热门球员',rs)
        this.addChild(title)
        title.x = 960 - title.width * .5
        title.y = 120
    }

    hide() {
        if (this.parent)
            this.parent.removeChild(this)
    }
}