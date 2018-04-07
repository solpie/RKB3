import { newBitmap, BitmapText, loadRes, imgToTex, setScale } from '../../../utils/PixiEx';
import { loadImgArr, loadImg, paddy } from '../../../utils/JsFunc';
import { imgLoader } from '../../../utils/ImgLoader';
import { FontName } from '../../../const';
import { TextTimer } from '../../../utils/TextTimer';
import { fitWidth } from '../bracket/BracketGroup';
import { TweenEx } from '../../../utils/TweenEx';
const skin = {
    bg: '/img/panel/score2018/bg.png',
    score: '/img/panel/score2018/score.png',
    scoreTex: '/img/panel/score2018/scoreTex.png',
    maskL: '/img/panel/score2018/avtMaskL.png',
    maskR: '/img/panel/score2018/avtMaskR.png',
}
const loadAvt = (avtSp, url) => {
    imgLoader.loadTex(url, tex => {
        let s = 112 / tex.width
        avtSp.texture = tex
        avtSp.x = avtSp.mask.x
        setScale(avtSp, s)
        avtSp.y = avtSp.mask.y - (avtSp.height - avtSp.mask.height) * .5
    })
}
export class Score2018 {
    p: PIXI.Container
    lScoreText: BitmapText;
    rScoreText: BitmapText;

    lAvt: PIXI.Sprite
    rAvt: PIXI.Sprite

    lFoul: PIXI.Text
    rFoul: PIXI.Text
    timer: TextTimer

    lIcon: PIXI.Sprite
    rIcon: PIXI.Sprite

    lName: PIXI.Text
    rName: PIXI.Text

    lHeightWeight: PIXI.Text
    rHeightWeight: PIXI.Text

    lRank: PIXI.Text
    rRank: PIXI.Text

    gameTitle: PIXI.Text
    gameIdxTxt: PIXI.Text

    baseCtn: PIXI.Container
    constructor(stage) {
        this.p = stage
        let baseCtn = new PIXI.Container()
        this.baseCtn = baseCtn
        let ctn = new PIXI.Container()
        ctn.y = 890

        this.p.addChild(baseCtn)

        let bg = newBitmap({ url: skin.bg })
        baseCtn.addChild(bg)
        baseCtn.addChild(ctn)

        let imgArr = []
        imgArr.push({ name: 'score', url: skin.score });
        // imgArr.push({ name: 'scoreTex', url: skin.scoreTex });

        loadImgArr(imgArr, imgCol => {
            // loadRes(skin.score, (img) => {
            let tex = imgToTex(imgCol['score'])
            let sheet = {
                text: '0',
                animations: {
                    "7": 0, "8": 1, "9": 2, "0": 3, "1": 4,
                    "2": 5, "3": 6, "4": 7, "5": 8, "6": 9
                },
                texture: tex,
                frames: [
                    [0, 0, 54, 80],
                    [55, 0, 54, 80],
                    [0, 81, 54, 80],
                    [55, 81, 54, 80],
                    [110, 0, 54, 80],
                    [110, 81, 54, 80],
                    [165, 0, 54, 80],
                    [165, 81, 54, 80],
                    [0, 162, 54, 80],
                    [55, 162, 54, 80]]
            }

            let lScoreNum = new BitmapText(sheet)
            // leftScoreNum.frameWidth = 56
            this.lScoreText = lScoreNum
            lScoreNum.x = 840
            lScoreNum.y = 27
            lScoreNum.align = 'center'
            ctn.addChild(lScoreNum as any)

            let rScoreNum = new BitmapText(sheet)
            this.rScoreText = rScoreNum
            rScoreNum.x = lScoreNum.x + 187
            rScoreNum.y = lScoreNum.y
            rScoreNum.align = 'center'

            setScale(lScoreNum, 0.95)
            setScale(rScoreNum, 0.95)
            ctn.addChild(rScoreNum as any)
        })

        let avtMaskL = newBitmap({ url: skin.maskL })
        ctn.addChild(avtMaskL)
        avtMaskL.x = 710
        avtMaskL.y = 26

        let avtMaskR = newBitmap({ url: skin.maskR })
        ctn.addChild(avtMaskR)
        avtMaskR.x = 1099
        avtMaskR.y = avtMaskL.y


        let avtL = new PIXI.Sprite()
        this.lAvt = avtL
        avtL.mask = avtMaskL
        ctn.addChild(avtL)

        let avtR = new PIXI.Sprite()
        this.rAvt = avtR
        avtR.mask = avtMaskR
        ctn.addChild(avtR)

        let lIcon = new PIXI.Sprite()
        lIcon.x = 517
        lIcon.y = 25
        this.lIcon = lIcon
        ctn.addChild(lIcon)

        let rIcon = new PIXI.Sprite()
        rIcon.x = 1365
        rIcon.y = lIcon.y
        this.rIcon = rIcon
        ctn.addChild(rIcon)

        setScale(lIcon, 0.40)
        setScale(rIcon, 0.40)

        let fts = {
            fontFamily: FontName.Impact,
            fontSize: '30px', fill: "#c2c1d4",
            fontWeight: 'bold'
        }
        let foulL = new PIXI.Text("8", fts)
        foulL.x = 719
        foulL.y = 115
        ctn.addChild(foulL)
        this.lFoul = foulL

        let foulR = new PIXI.Text("5", fts)
        foulR.x = 1190
        foulR.y = foulL.y
        ctn.addChild(foulR)
        this.rFoul = foulR

        let tts = {
            fontFamily: FontName.Impact,
            fontSize: '37px', fill: "#ff7e00",
            fontWeight: 'bold'
        }
        let t = new TextTimer('', tts)
        ctn.addChild(t)
        t.x = 915
        t.y = 103
        TweenEx.delayedCall(1500, _ => {
            t.textInSec = 0
        })
        this.timer = t

        let ns = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '35px', fill: "#000520",
            fontWeight: 'bold'
        }

        let lName = new PIXI.Text('', ns)
        this.lName = lName
        this.lName.y = 28
        lName.x = 600 + 113 - lName.width
        ctn.addChild(lName)


        let rName = new PIXI.Text('', ns)
        this.rName = rName
        rName.x = 1200
        this.rName.y = this.lName.y
        ctn.addChild(rName)


        let is = {
            fontFamily: FontName.Impact,
            fontSize: '25px', fill: "#000520"
        }
        let lHeightWeight = new PIXI.Text('', is)
        this.lHeightWeight = lHeightWeight
        ctn.addChild(lHeightWeight)
        lHeightWeight.x = 713 - lHeightWeight.width
        lHeightWeight.y = 78

        let rHeightWeight = new PIXI.Text('', is)
        this.rHeightWeight = rHeightWeight
        ctn.addChild(rHeightWeight)
        rHeightWeight.x = 1200
        rHeightWeight.y = lHeightWeight.y

        let rs = {
            fontFamily: FontName.Impact,
            fontSize: '30px', fill: "#000520"
        }
        let lRank = new PIXI.Text('', rs)
        this.lRank = lRank
        ctn.addChild(lRank)
        lRank.y = 32

        let rRank = new PIXI.Text('', rs)
        this.rRank = rRank
        ctn.addChild(rRank)
        rRank.x = 1410
        rRank.y = lRank.y

        let gs = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '20px', fill: "#c2c1d4"
            , fontWeight: 'bold'
        }

        let gameTitle = new PIXI.Text('', gs)
        this.gameTitle = gameTitle
        ctn.addChild(gameTitle)
        gameTitle.y = 12
        
        gs.fontSize = '30px'
        gs.fontFamily = FontName.Impact
        let gameIdxTxt = new PIXI.Text('', gs)
        this.gameIdxTxt = gameIdxTxt
        ctn.addChild(gameIdxTxt)
        gameIdxTxt.style.fontWeight = 'normal'
        gameIdxTxt.y = 35

        // this.test()
    }


    set35ScoreLight(data) {

    }
    winSectionArr = [7, 8]
    loseSectionArr = [5, 6, 9, 10, 12]
    //1 车轮 2 大师 3 决赛    4 小组赛
    setGameIdx(gameIdx, type) {
        console.log('gameIdx',gameIdx,'type',type)
        if (type == 2) {
            if (this.winSectionArr.indexOf(gameIdx) > -1)
                this.gameTitle.text = '胜者组'
            else if (this.loseSectionArr.indexOf(gameIdx) > -1)
                this.gameTitle.text = '败者组'
            else if (gameIdx == 11)
                this.gameTitle.text = '胜者组'
            else if (gameIdx == 13)
                this.gameTitle.text = '败者组'
            else if (gameIdx == 14)
                this.gameTitle.text = '决赛'
            else
                this.gameTitle.text = '大师赛'
        }
        else if (type == 4) {
            this.gameTitle.text = '小组赛'
        }
        else if (type == 1) {
            this.gameTitle.text = '车轮赛'
        }
        else if (type == 3) {
            this.gameTitle.text = '决赛'
        }

        this.gameIdxTxt.text = '' + paddy(gameIdx, 2)
        this.gameIdxTxt.x = 960 - 0.5 * this.gameIdxTxt.width
        this.gameTitle.x = 960 - 0.5 * this.gameTitle.width
    }
    resetScore() {
        this.setLeftFoul(0)
        this.setRightFoul(0)
        this.setLeftScore(0)
        this.setRightScore(0)
    }
    setLeftScore(data) {
        this.lScoreText.text = data + ''
    }

    setRightScore(data) {
        this.rScoreText.text = data + ''
    }
    setLeftFoul(data) {
        this.lFoul.text = data+''
    }
    setRightFoul(data) {
        this.rFoul.text = data+''
    }
    setLeftPlayerInfo(lPlayer) {
        let lIconUrl = '/img/icon/rankIcon_b' + lPlayer.powerRankType + '.png'
        loadRes(lIconUrl, tex => {
            this.lIcon.texture = imgToTex(tex)
        }, false)

        this.lName.text = lPlayer.name
        fitWidth(this.lName, 258, 35)
        this.lName.x = 718 - this.lName.width

        loadAvt(this.lAvt, lPlayer.avatar)


        this.lHeightWeight.text = lPlayer.height + 'cm | ' + lPlayer.weight + 'kg'
        this.lHeightWeight.x = 713 - this.lHeightWeight.width

        this.lRank.text = lPlayer.powerRank
        this.lRank.x = 510 - this.lRank.width
    }
    setRightPlayerInfo(rPlayer) {
        let rIconUrl = '/img/icon/rankIcon_b' + rPlayer.powerRankType + '.png'
        loadRes(rIconUrl, tex => {
            this.rIcon.texture = imgToTex(tex)
        }, false)
        this.rName.text = rPlayer.name
        fitWidth(this.rName, 258, 35)
        loadAvt(this.rAvt, rPlayer.avatar)
        this.rHeightWeight.text = rPlayer.height + 'cm | ' + rPlayer.weight + 'kg'
      
        this.rRank.text = rPlayer.powerRank
    }

    resetTimer() {
        this.timer.resetTimer()
    }

    setTimer(v) {
        this.timer.setTimeBySec(v)
    }

    toggleTimer(v) {
        this.timer.toggleTimer(v)
    }
    hide() {
        this.baseCtn.visible = false
    }
    show() {
        this.baseCtn.visible = true
    }
    getPlayerInfo(isLeft) {
        let player: any = {}
        if (isLeft) {
            player.name = this.lName.text
            player.info = this.lHeightWeight.text
            player.rank = this.lRank.text
        }
        else {
            player.name = this.rName.text
            player.info = this.rHeightWeight.text
            player.rank = this.rRank.text
        }
        return player
    }
}