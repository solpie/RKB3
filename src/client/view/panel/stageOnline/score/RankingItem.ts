import { RankingData } from './RankingData';
import { cnWrap } from '../../../utils/JsFunc';
import { Ranking } from "./Ranking";
import { newBitmap, BitmapText } from "../../../utils/PixiEx";
import { FontName } from "../../../const";
function polygon(g: PIXI.Graphics, radius, sides) {
    if (sides < 3) return;
    var a = (Math.PI * 2) / sides;
    g.moveTo(radius, 0);
    for (var i = 1; i < sides; i++) {
        g.lineTo(radius * Math.cos(a * i), radius * Math.sin(a * i));
    }
}

export class RankingItem extends PIXI.Container {
    _rankingColorG: PIXI.Graphics
    _playerName: PIXI.Text
    _dtRanking: PIXI.Text
    _ranking: Ranking
    _rankingSp: PIXI.Sprite
    _avt: PIXI.Sprite
    isLarge = false
    constructor(ranking: Ranking, isLarge = false) {
        super()
        this.isLarge = isLarge
        this._ranking = ranking
        let url
        if (isLarge)
            url = '/img/panel/score2017/rankingItemLarge.png'
        else
            url = '/img/panel/score2017/rankingItemSmall.png'
        let bg = newBitmap({ url: url })
        this.addChild(bg)
        let c = new PIXI.Graphics()
        c.beginFill(0xe9591f)
            .drawRect(0, 0, 12, 104)
        // .drawCircle(34, 34, 34)
        if (!isLarge)
            bg.addChild(c)
        this._rankingColorG = c

        let avt = new PIXI.Sprite()
        this._avt = avt
        avt.x = 180 - 2
        avt.y = 8
        this.addChild(avt)
        // loadRes(this.skin.score, (img) => {

        let urlFrame
        if (isLarge)
            urlFrame = '/img/panel/score2017/rankingFrameLarge.png'
        else
            urlFrame = '/img/panel/score2017/rankingFrameSamll.png'
        let avtFrame = newBitmap({ url: urlFrame })

        let avtMask = new PIXI.Graphics()
        avtMask.beginFill(0xff0000)
        if (isLarge) {
            avt.x = 180 - 2
            avt.y = 18
            avtFrame.x = 180
            avtFrame.y = 18
            polygon(avtMask, 98, 6)
            avtMask.x = avtFrame.x + 87
            avtMask.y = avtFrame.y + 100
        }
        else {
            avt.x = 180 - 2
            avt.y = 12
            avtFrame.x = 180
            avtFrame.y = 8
            polygon(avtMask, 45, 6)
            avtMask.x = avtFrame.x + 41
            avtMask.y = avtFrame.y + 45
        }

        avtMask.rotation = 30 * PIXI.DEG_TO_RAD

        avt.mask = avtMask
        this.addChild(avtMask)
        this.addChild(avtFrame)

        let ts = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '30px', fill: "#e1e2e3",
            fontWeight: 'bold'
        }

        let playerName = new PIXI.Text('郝天吉', ts)
        this._playerName = playerName
        if (isLarge) {
            playerName.style.fontSize = '40px'
            playerName.x = 400
            playerName.y = 75
        }
        else {
            playerName.x = 280
            playerName.y = 31
        }
        this.addChild(playerName)

        let dts = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '35px', fill: "#f00",
        }

        let dtRanking = new PIXI.Text('5', dts)
        this._dtRanking = dtRanking

        this.addChild(dtRanking)

        let dtRankingSp = new PIXI.Sprite()
        this._rankingSp = dtRankingSp
        if (isLarge) {
            dtRankingSp.x = 714
            dtRanking.y = 88
        }
        else {
            dtRankingSp.x = 530
            dtRanking.y = 32
        }
        dtRanking.x = dtRankingSp.x + 45
        dtRankingSp.y = dtRanking.y + 5

        this.addChild(dtRankingSp)
    }

    rankingDigi: BitmapText
    _initDigi() {
        if (!this.rankingDigi) {
            let tex = this._ranking.texDigi
            let sheet = {
                text: '0',
                animations: {
                    "1": 0, "2": 1, "3": 2, "4": 3, "5": 4,
                    "6": 5, "7": 6, "8": 7, "9": 8, "0": 9
                },
                texture: tex,
                frames: [
                    [0, 0, 62, 82],
                    [63, 0, 62, 82],
                    [0, 83, 62, 82],
                    [63, 83, 62, 82],
                    [126, 0, 62, 82],
                    [126, 83, 62, 82],
                    [63, 166, 62, 82],
                    [126, 166, 62, 82],
                    [0, 166, 62, 82],
                    [189, 0, 62, 82]]
            }
            this.rankingDigi = new BitmapText(sheet)
            this.rankingDigi.x = 15
            this.rankingDigi.y = 12
            if (!this.isLarge)
                this.addChild(this.rankingDigi)
        }
    }
    setInfo(playerData) {
        this._initDigi()

        let dtSp = this._rankingSp
        let dtRanking = this._dtRanking

        let pd = playerData
        this._playerName.text = cnWrap(pd.playerName, 16, 14)
        this.rankingDigi.text = pd.ranking + ""
        // console.log(pd.ranking, pd.playerName);
        pd.dtRanking = Number(pd.dtRanking)
        if (pd.dtRanking < 0) {
            dtSp.texture = this._ranking.texDown
            dtRanking.text = pd.dtRanking + ""
            dtRanking.style.fill = '#ff0000'

        }
        else if (pd.dtRanking > 0) {
            dtSp.texture = this._ranking.texUp
            dtRanking.text = pd.dtRanking + ""
            dtRanking.style.fill = '#7abe39'
        }
        else {
            dtSp.texture = this._ranking.texFlat
            dtRanking.text = ""
            dtRanking.style.fill = '#33cf14'
        }
        let col = RankingData.getPlayerColor(pd.ranking)
        this._rankingColorG.beginFill(col)
            .drawRect(0, 0, 12, 106)
        if (this.isLarge)
            this._ranking._loadAvt(this._avt, pd.photoUrl, 195)
        else
            this._ranking._loadAvt(this._avt, pd.photoUrl)
    }
}