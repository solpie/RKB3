import { newBitmap, loadRes, setScale } from '../../../utils/PixiEx';
import { imgLoader } from '../../../utils/ImgLoader';
import { FontName } from '../../../const';
import { paddy, ascendingProp } from '../../../utils/JsFunc';
import { $post } from '../../../utils/WebJsFunc';
import { getTop5Data, getTop5Data2, getLive, getPlayerArr } from '../../../utils/HupuAPI';
import { fitWidth } from '../bracket/BracketGroup';
import { Text2, TextFac } from '../../../utils/TextFac';
class Tab2 extends PIXI.Container {
    playerName: PIXI.Text
    playerName2: PIXI.Text
    playerHupuID: PIXI.Text
    startGame: PIXI.Text
    gameIdx: PIXI.Text
    constructor() {
        super()
        // let bg = newBitmap({ url: '/img/panel/top5/hotPlayerBg.png' })
        // this.addChild(bg)

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
        fitWidth(this.playerName, 275, 48)
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
    // tabArr = []
    levelSP: PIXI.Sprite
    playerName: PIXI.Text
    hupuID: PIXI.Text
    hwa: PIXI.Text
    tag1: PIXI.Text
    tag2: PIXI.Text
    info: PIXI.Text
    playerGameIdx: Text2
    // title: PIXI.Text
    cacheTime: Number
    // tag2Bg: PIXI.Sprite
    create(parent: any, data) {
        this.p = parent
        let imgArr = []
        this.curPlayer = new PIXI.Sprite()
        this.curPlayer.x = 487
        this.curPlayer.y = 157
        this.addChild(this.curPlayer)

        this.levelSP = new PIXI.Sprite()
        this.addChild(this.levelSP)
        this.levelSP.x = 495
        this.levelSP.y = 156

        getLive(conf => {
            getPlayerArr(conf.star_players, playerArr => {
                for (let player of playerArr) {
                    player.hwa = [player.height, player.weight, player.age]
                    player.name = player.live_name
                    player.info = player.brief
                }
                this.infoArr = playerArr
                imgArr = []
                imgArr.push('/img/panel/top5/hotPlayerBg.png')

                imgLoader.loadTexArr(imgArr, _ => {
                    let bg = newBitmap({ url: '/img/panel/top5/hotPlayerBg.png' })
                    this.addChildAt(bg, 0)
                    this.initDetail()
                    this.show(data)
                })
            })
        })
    }
    show(data) {
        console.log('show player ', data);
        this.setTab(data.idx)
        if (data.gameIdxArr) {
            let a = data.gameIdxArr.split(' ')
            if (a.length > 1) {
                this.playerGameIdx.setText(`即将在席位战${paddy(a[Number(data.idx - 1)], 2)}登场`)
            }
        }
        this.p.addChild(this)
    }

    infoArr: any

    texMap = {}
    setTab(idx) {
        idx = Number(idx)
        let data = this.infoArr[idx - 1]
        if (!this.texMap[idx])
            this.texMap[idx] = PIXI.Texture.fromImage(data.avatar)
        this.curPlayer.texture = this.texMap[idx]

        if (data.level&& Number(data.level) != 0) {
            let url = `/img/panel/top5/${data.level}.png`
            imgLoader.loadTexRemote(url, tex => {
                console.log('set tex');
                this.levelSP.texture = imgLoader.getTex(url)
                this.levelSP.visible = true
            })
        }
        else {
            this.levelSP.visible = false
        }

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

        this.info.y = (470 - 46 + 124) - this.info.height * .5
        this.tag2.text = ''
        let a = data.tag1.split(' ')
        if (data.tag2) {
            this.tag1.text = data.tag1 + " , " + data.tag2
        }
        else
            this.tag1.text = data.tag1
    }

    initDetail() {
        let rs = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '45px', fill: "#515151",
            fontWeight: 'bold'
        }


        let pn = new PIXI.Text('', rs)
        this.playerName = pn
        this.addChild(pn)
        pn.x = 1018
        pn.y = 228 - 70


        rs.fontSize = '28px'
        let hwa = new PIXI.Text('', rs)
        this.hwa = hwa
        this.addChild(hwa)
        hwa.x = pn.x
        hwa.y = 304 - 47

        rs.fontSize = '33px'
        let tag1 = new PIXI.Text('', rs)
        this.tag1 = tag1
        this.addChild(tag1)
        tag1.x = pn.x
        tag1.y = 380 - 36

        let tag2 = new PIXI.Text('', rs)
        this.tag2 = tag2
        this.addChild(tag2)
        tag2.x = tag1.x + 230
        tag2.y = tag1.y

        rs.fontSize = '28px'
        rs['lineHeight'] = 39
        let info = new PIXI.Text('', rs)
        this.info = info
        this.addChild(info)
        info.x = pn.x
        info.y = 470 - 46

        this.playerGameIdx = TextFac.new_(rs, this)
            .setPos(pn.x, 701)
    }

    hide() {
        if (this.parent)
            this.parent.removeChild(this)
    }
}