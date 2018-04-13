import { newBitmap, loadRes, setScale } from '../../../utils/PixiEx';
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
        pn.x = 168
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

        setScale(this, 0.9)
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
export class Top5 extends PIXI.Container {
    static class = 'Top5'
    p: any
    curPlayer: PIXI.Sprite
    tabArr = []

    playerName: PIXI.Text
    hupuID: PIXI.Text
    hwa: PIXI.Text
    tag1: PIXI.Text
    tag2: PIXI.Text
    info: PIXI.Text
    title: PIXI.Text
    cacheTime: Number
    tag2Bg: PIXI.Sprite
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
            this.cacheTime = new Date().getTime()
            for (let i = 0; i < 5; i++) {
                if (this.infoArr[i]) {
                    let t = new Tab2()
                    this.addChild(t)
                    this.tabArr.push(t)
                    t.x = 253
                    t.y = 204 + i * 125
                    imgArr.push(`/img/player/top5/${this.infoArr[i].img}.png?t=` + this.cacheTime)
                    t.visible = false
                    t.setInfo(this.infoArr[i])
                    tabArr.push(t)
                }
            }
            imgArr.push('/img/panel/top5/bg.png')

            imgLoader.loadTexArr(imgArr, _ => {
                tabArr.forEach(t => {
                    t.visible = true
                });
                let bg = newBitmap({ url: '/img/panel/top5/bg.png' })
                this.addChildAt(bg, 0)
                let tagBg = newBitmap({ url: '/img/panel/top5/tag.png' })
                this.addChild(tagBg)
                this.tag2Bg = tagBg
                this.tag2Bg.visible = false
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

    infoArr: any

    setTab(idx) {
        idx = Number(idx)
        let data = this.infoArr[idx - 1]
        this.curPlayer.texture = imgLoader.getTex(`/img/player/top5/${data.img}.png?t=` + this.cacheTime)
        this.setDetail(data)
    }


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
        this.tag2.text = ''
        this.tag2Bg.visible = false
        let a = data.tag1.split(' ')
        if (a.length == 2) {
            this.tag2Bg.x = this.tag2.x - 28
            this.tag2Bg.y = this.tag2.y - 14
            this.tag2Bg.visible = true
            this.tag1.text = a[0]
            this.tag2.text = a[1]
        }
        else
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

        let tag1 = new PIXI.Text('', rs)
        this.tag1 = tag1
        this.addChild(tag1)
        tag1.x = pn.x
        tag1.y = 380

        let tag2 = new PIXI.Text('', rs)
        this.tag2 = tag2
        this.addChild(tag2)
        tag2.x = tag1.x + 280
        tag2.y = tag1.y

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