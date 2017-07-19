import { FontName } from '../../../const';
import { loadImgArr } from '../../../utils/JsFunc';
import { imgToTex, loadRes } from '../../../utils/PixiEx';
import { RankingData } from './RankingData';
import { RankingItem } from './RankingItem';

export class Ranking extends PIXI.Container {
    ctn: any
    playerTextArr: Array<PIXI.Text>
    rankingItemArr: Array<RankingItem>
    dtTextArr: Array<PIXI.Text>
    dtSpArr: Array<PIXI.Sprite>
    circleSpArr: Array<PIXI.Sprite>
    avtSpArr: Array<PIXI.Sprite>
    bg: PIXI.Sprite
    titleText: PIXI.Text
    texDown: PIXI.Texture
    texUp: PIXI.Texture
    texFlat: PIXI.Texture
    texDigi: PIXI.Texture
    colorSeg = ['#e9591f',
        '#4860f6',
        '#f4cf1f',
        '#1ccdf3',
        '#6736f8']//1-10   11-30  31-100 100-300 300-
    frameArr: Array<PIXI.Graphics> = []
    //内框 颜色 身高 体重 实力榜排名
    rankingData: RankingData

    rankingItem1: RankingItem
    constructor(parent: any, rankingData) {
        super()
        this.rankingData = rankingData
        this.ctn = parent

        let bg = new PIXI.Sprite()
        this.bg = bg
        this.addChild(bg)
        let ts = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '45px', fill: "#fff",
            fontWeight: 'bold'
        }

        this.playerTextArr = []
        this.rankingItemArr = []
        this.dtSpArr = []
        this.circleSpArr = []
        this.dtTextArr = []
        this.avtSpArr = []


        for (let i = 0; i < 12; i++) {
            let pi = new RankingItem(this)
            if (i > 5) {
                pi.x = 1070
                pi.y = 280 + 120 * (i - 6)
            }
            else {
                pi.x = 140
                pi.y = 280 + 120 * i
            }
            this.rankingItemArr.push(pi)
            this.addChild(pi)
        }
        this.rankingItem1 = new RankingItem(this, true)
        this.rankingItem1.x = 140
        this.rankingItem1.y = 280
        this.addChild(this.rankingItem1)
    }
    _top10playerDataArr: Array<any>
    _curPlayerDataArr: Array<any>


    _isLoad = false
    _loadTex(callback) {
        if (!this._isLoad) {
            let imgArr = [
                { name: 'rankingDown', url: '/img/panel/score2017/rankingDown.png' },
                { name: 'rankingFlat', url: '/img/panel/score2017/rankingFlat.png' },
                { name: 'rankingDigi', url: '/img/panel/score2017/rankingDigi.png' },
                { name: 'rankingUp', url: '/img/panel/score2017/rankingUp.png' },
                { name: 'bg', url: '/img/panel/score2017/rankingBg.png' },
            ]
            loadImgArr(imgArr, res => {
                this._isLoad = true
                this.bg.texture = imgToTex(res['bg'])
                this.texDown = imgToTex(res['rankingDown'])
                this.texUp = imgToTex(res['rankingUp'])
                this.texFlat = imgToTex(res['rankingFlat'])
                this.texDigi = imgToTex(res['rankingDigi'])
                callback()
            })
        }
        else
            callback()
    }

    _renderData(data) {
        this.rankingItemArr[0].visible = true
        this.rankingItemArr[1].visible = true
        this.rankingItem1.visible = false
        for (let i = 0; i < 12; i++) {
            let playerItem = this.rankingItemArr[i]
            let pd = data.playerArr[i]
            if (pd) {
                if (pd.ranking == 1) {
                    this.rankingItem1.setInfo(pd)
                    this.rankingItem1.visible = true
                    this.rankingItemArr[0].visible = false
                    this.rankingItemArr[1].visible = false
                }
                else {
                    playerItem.setInfo(pd)
                }
            }
        }
        this.ctn.addChild(this)
    }

    show(data) {
        this._loadTex(_ => {
            if (data.isTotal) {
                // this.titleText.text = '球员实力榜'
                let playerArr = []
                if (data.page > 1) {
                    for (let i = 0; i < 12; i++) {
                        let idx = 11 + (data.page - 2) * 12 + i
                        playerArr.push(this.rankingData.top10[idx])
                    }
                }
                else {
                    playerArr = [this.rankingData.top10[0]].concat(this.rankingData.top10)
                }
                data.playerArr = playerArr
                this._renderData(data)
            }
            else {
                // this.titleText.text = '本场实力榜'
                data.playerArr = this.rankingData.cur10
                this._renderData(data)
            }
        })
    }

    _texMap = {}
    _loadAvt(avt, url, width = 84) {
        if (!this._texMap[url])
            loadRes(url, (img) => {
                let s = width / img.width
                avt.scale.x = avt.scale.y = s
                if (img)
                    this._texMap[url] = imgToTex(img)
                avt.texture = imgToTex(img)
            }, true);
        else {
            let s = width / this._texMap[url].width
            avt.texture = this._texMap[url]
            avt.scale.x = avt.scale.y = s
        }
    }

    hide() {
        if (this.parent)
            this.parent.removeChild(this)
    }
}