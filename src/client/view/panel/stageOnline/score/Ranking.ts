import { FontName, ViewConst } from '../../../const';
import { getAllPlayer, getCurRanking, getRanking, getRoundList } from '../../../utils/HupuAPI';
import { loadImg, loadImgArr } from '../../../utils/JsFunc';
import { imgToTex, loadRes, newBitmap } from '../../../utils/PixiEx';
import { proxy } from '../../../utils/WebJsFunc';
import { RankingData } from './RankingData';

export class Ranking extends PIXI.Container {
    ctn: any
    playerTextArr: Array<PIXI.Text>
    dtTextArr: Array<PIXI.Text>
    dtSpArr: Array<PIXI.Sprite>
    circleSpArr: Array<PIXI.Sprite>
    avtSpArr: Array<PIXI.Sprite>
    bg: PIXI.Sprite
    titleText: PIXI.Text
    texDown: PIXI.Texture
    texUp: PIXI.Texture
    texFlat: PIXI.Texture
    colorSeg = ['#e9591f',
        '#4860f6',
        '#f4cf1f',
        '#1ccdf3',
        '#6736f8']//1-10   11-30  31-100 100-300 300-
    frameArr: Array<PIXI.Graphics> = []
    //内框 颜色 身高 体重 实力榜排名
    rankingData: RankingData
    constructor(parent: any, rankingData) {
        super()
        this.rankingData = rankingData
        this.ctn = parent
        let back = new PIXI.Graphics()
        back.beginFill(0, .7)
            .drawRect(0, 0, ViewConst.STAGE_WIDTH * .5, ViewConst.STAGE_HEIGHT)

        this.addChild(back)

        let bg = new PIXI.Sprite()
        this.bg = bg
        bg.x = 150
        this.addChild(bg)
        let ts = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '45px', fill: "#fff",
            fontWeight: 'bold'
        }

        this.titleText = new PIXI.Text('球员实力榜', ts)
        this.titleText.x = 236
        this.titleText.y = 54
        bg.addChild(this.titleText)

        this.playerTextArr = []
        this.dtSpArr = []
        this.circleSpArr = []
        this.dtTextArr = []
        this.avtSpArr = []

        let ns = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '30px', fill: "#454545",
        }

        let dts = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '35px', fill: "#f00",
        }

        for (let i = 0; i < 10; i++) {
            let t = new PIXI.Text('', ns)
            t.x = 150
            t.y = 155 + i * 92
            this.playerTextArr.push(t)
            bg.addChild(t)

            let sp = new PIXI.Sprite()
            sp.x = 538 + 15
            sp.y = t.y + 10
            bg.addChild(sp)
            this.dtSpArr.push(sp)

            let dtText = new PIXI.Text('2', dts)
            dtText.x = 610 - 30
            dtText.y = t.y + -5
            bg.addChild(dtText)
            this.dtTextArr.push(dtText)

            let c = new PIXI.Graphics()
            c.beginFill(0xe9591f)
                .drawRect(0, 0, 68, 68)
            // .drawCircle(34, 34, 34)
            c.x = 460
            c.y = t.y + -15
            this.frameArr.push(c)
            bg.addChild(c)
            this.x = ViewConst.STAGE_WIDTH * .5

            let avtMask = new PIXI.Graphics()
            avtMask.beginFill(0xff0000)
                .drawRect(0, 0, 56, 56)
            avtMask.x = c.x + 6
            avtMask.y = c.y + 6
            bg.addChild(avtMask)
            // bg.addChild(avtMask)

            let avt = new PIXI.Sprite()
            avt.x = c.x + 6
            avt.y = c.y + 6
            avt.mask = avtMask
            this.avtSpArr.push(avt)
            bg.addChild(avt)
        }
    }
    _fillSp(data) {
        for (let i = 0; i < 10; i++) {
            let dtSp = this.dtSpArr[i]
            let dtRanking = this.dtTextArr[i]
            let frame = this.frameArr[i]
            let playerText = this.playerTextArr[i]
            if (data.playerArr[i]) {
                let pd = data.playerArr[i]
                playerText.text = pd.playerName
                pd.dtRanking = Number(pd.dtRanking)
                if (pd.dtRanking < 0) {
                    dtSp.texture = this.texDown
                    dtRanking.text = pd.dtRanking + ""
                    dtRanking.style.fill = '#ff0000'
                }
                else if (pd.dtRanking > 0) {
                    dtSp.texture = this.texUp
                    dtRanking.text = pd.dtRanking + ""
                    dtRanking.style.fill = '#33cf14'
                }
                else {
                    dtSp.texture = this.texFlat
                    dtRanking.text = ""
                    dtRanking.style.fill = '#33cf14'
                }
            }
        }
    }
    _top10playerDataArr: Array<any>
    _curPlayerDataArr: Array<any>


    _isLoad = false
    _loadTex(callback) {
        if (!this._isLoad) {
            let imgArr = [
                { name: 'rankingDown', url: '/img/panel/score2017/rankingDown.png' },
                { name: 'rankingFlat', url: '/img/panel/score2017/rankingFlat.png' },
                { name: 'rankingUp', url: '/img/panel/score2017/rankingUp.png' },
                { name: 'bg', url: '/img/panel/score2017/rankingBg.png' },
            ]
            loadImgArr(imgArr, res => {
                this._isLoad = true
                this.bg.texture = imgToTex(res['bg'])
                this.texDown = imgToTex(res['rankingDown'])
                this.texUp = imgToTex(res['rankingUp'])
                this.texFlat = imgToTex(res['rankingFlat'])
                callback()
            })
        }
        else
            callback()
    }

    _renderData(data) {
        for (let i = 0; i < 10; i++) {
            let dtSp = this.dtSpArr[i]
            dtSp.texture = this.texDown
            let dtRanking = this.dtTextArr[i]

            let playerText = this.playerTextArr[i]
            if (data.playerArr[i]) {
                let pd = data.playerArr[i]
                playerText.text = pd.playerName
                pd.dtRanking = Number(pd.dtRanking)
                if (pd.dtRanking < 0) {
                    dtSp.texture = this.texDown
                    dtRanking.text = pd.dtRanking + ""
                    dtRanking.style.fill = '#ff0000'
                }
                else if (pd.dtRanking > 0) {
                    dtSp.texture = this.texUp
                    dtRanking.text = pd.dtRanking + ""
                    dtRanking.style.fill = '#33cf14'
                }
                else {
                    dtSp.texture = this.texFlat
                    dtRanking.text = ""
                    dtRanking.style.fill = '#33cf14'
                }
                this._loadAvt(this.avtSpArr[i], pd.photoUrl)

            }
        }
        this.ctn.addChild(this)
    }

    show(data) {
        this._loadTex(_ => {
            if (data.isTotal) {
                this.titleText.text = '球员实力榜'
                data.playerArr = this.rankingData.top10
                this._renderData(data)
            }
            else {
                this.titleText.text = '本场实力榜'
                data.playerArr = this.rankingData.cur10
                this._renderData(data)
            }
        })
    }

    _texMap = {}
    _loadAvt(avt, url) {
        if (!this._texMap[url])
            loadRes(url, (img) => {
                this._texMap[url] = avt.texture = imgToTex(img)
                let s = 56 / img.width
                avt.scale.x = avt.scale.y = s
            }, true);
        else
            avt.texture = this._texMap[url]
    }

    hide() {
        if (this.parent)
            this.parent.removeChild(this)
    }
}