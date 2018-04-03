import { newBitmap, loadRes } from '../../../utils/PixiEx';
import { imgLoader } from '../../../utils/ImgLoader';
import { FontName } from '../../../const';
import { paddy } from '../../../utils/JsFunc';
import { $post } from '../../../utils/WebJsFunc';
import { getTop5Data } from '../../../utils/HupuAPI';
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
// let infoArr = [
//     {
//         name: '徐长龙',
//         hwa: [195, 95, 29],
//         info: `前cubs山东大学队长
// 实力榜第5名 
// 山东赛区7冠王 
// 9月&12月冠军赛季军
//         `,
//         tag1: '沉着冷静',
//         hupuID: '@浩扬篮球阿清'
//     },
//     {
//         name: '于潇',
//         hwa: [203, 95, 28],
//         info: `实力榜排名第48名 
// 路人王烟台站冠军 
// 两次参与冠军赛
//         `,
//         tag1: '高瘦远投王',
//         hupuID: '@把球给我六六'
//     },
//     {
//         name: '矫凯文',
//         hwa: [188, 90, 25],
//         info: `前NBL广西威壮球员 
// NBL全明星 
// 2014年随队拿下NBL冠军 
// 曾单场砍下三双
//         `,
//         tag1: '球队大脑',
//         hupuID: '矫凯文'
//     },
//     {
//         name: '蓝震海',
//         hwa: [186, 80, 28],
//         info: `前NBL香港新丽宝球员
//         `,
//         tag1: '实力干将',
//         hupuID: '@蓝震海'
//     },
//     {
//         name: '刘晨',
//         hwa: [190, 100, 28],
//         info: `2017全国三对三联赛冠军
//         `,
//         tag1: '三对三大师',
//         hupuID: '@刘晨'
//     },
// ]
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
        this.p = parent
        let imgArr = []
        this.curPlayer = new PIXI.Sprite()
        this.addChild(this.curPlayer)
        getTop5Data(res => {
            let d = JSON.parse(res)
            console.log('top5 data', res, d);
            this.infoArr = d// JSON.parse(res)
            let tabArr = []
            for (let i = 0; i < 5; i++) {
                let t = new Tab2()
                this.addChild(t)
                this.tabArr.push(t)
                t.x = 203
                t.y = 204 + i * 134
                imgArr.push(`/img/player/top5/${this.infoArr[i].img}.png`)
                t.visible = false
                t.setInfo(this.infoArr[i])
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
        })
    }
    show(data) {
        console.log('show player ', data);
        this.setTab(data.idx)
        if (data.gameIdxArr) {
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
        }
        this.p.addChild(this)
    }
    infoArr:any
    setTab(idx) {
        idx = Number(idx)
        let data = this.infoArr[idx - 1]
        this.curPlayer.texture = imgLoader.getTex(`/img/player/top5/${data.img}.png`)
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