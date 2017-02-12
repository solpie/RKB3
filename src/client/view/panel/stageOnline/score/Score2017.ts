import { TextTimer } from '../../../utils/TextTimer';
import { Direction, SpriteGroup } from '../../../utils/SpriteGroup';
import { FontName, ViewConst } from '../../../const';
import { loadImg } from '../../../utils/JsFunc';
import { BitmapText, imgToTex, loadRes, newBitmap } from '../../../utils/PixiEx';
const skin = {
    light: {
        bg: '/img/panel/score2017/bgLight.png',
        score: '/img/panel/score2017/scoreLight.png',
        foul: '/img/panel/score2017/foul.png',
        section1: '/img/panel/score2017/section1Light.png',
        section2: '/img/panel/score2017/section2Light.png'
    },
    dark: {
        bg: '/img/panel/score2017/bgDark.png',
        score: '/img/panel/score2017/scoreDark.png',
        foul: '/img/panel/score2017/foul.png',
        section1: '/img/panel/score2017/section1Dark.png',
        section2: '/img/panel/score2017/section2Dark.png'
    }
}
interface Skin {
    bg: string
    section1: string
    section2: string
    score: string
    foul: string
}
export class Score2017 {
    stage: PIXI.Container
    //车轮战
    gameSection1: PIXI.Texture
    gameSection2: PIXI.Texture
    gameSection: PIXI.Sprite
    skin: Skin
    leftScoreText: BitmapText;
    rightScoreText: BitmapText;
    leftFoul: SpriteGroup
    rightFoul: SpriteGroup
    timer: TextTimer
    

    constructor(stage: PIXI.Container, isDark = false) {
        this.stage = stage
        if (isDark)
            this.skin = skin.dark
        else
            this.skin = skin.light
        let bg = newBitmap({ url: this.skin.bg })
        stage.addChild(bg)
        let ctn = new PIXI.Container
        bg.addChild(ctn)
        ctn.y = ViewConst.STAGE_HEIGHT - 300
        this.gameSection = new PIXI.Sprite
        this.gameSection.x = 926
        this.gameSection.y = 174
        ctn.addChild(this.gameSection)
        loadRes(this.skin.score, (img) => {
            let tex = imgToTex(img)
            let sheet = {
                text: '0',
                animations: {
                    "0": 0, "1": 1, "2": 2, "3": 3, "4": 4,
                    "5": 5, "6": 6, "7": 7, "8": 9, "9": 8
                },
                texture: tex,
                frames: [[0, 0, 110, 128],
                [111, 0, 110, 128],
                [0, 129, 110, 128],
                [111, 129, 110, 128],
                [222, 0, 110, 128],
                [222, 129, 110, 128],
                [0, 258, 110, 128],
                [111, 258, 110, 128],
                [222, 258, 110, 128],
                [333, 0, 110, 128]]
            }
            let leftScoreNum = new BitmapText(sheet)
            this.leftScoreText = leftScoreNum
            leftScoreNum.x = 765
            leftScoreNum.y = 130
            leftScoreNum.align = 'center'
            ctn.addChild(leftScoreNum)

            let rightScoreNum = new BitmapText(sheet)
            this.rightScoreText = rightScoreNum
            rightScoreNum.x = leftScoreNum.x + 275
            rightScoreNum.y = leftScoreNum.y
            rightScoreNum.align = 'center'
            ctn.addChild(rightScoreNum)
        })

        let lf = new SpriteGroup({ dir: Direction.e, invert: 29, img: this.skin.foul, count: 4 })
        ctn.addChild(lf)
        lf.x = 771
        lf.y = 262
        this.leftFoul = lf

        let rf = new SpriteGroup({ dir: Direction.w, invert: 29, img: this.skin.foul, count: 4 })
        ctn.addChild(rf)
        rf.x = 1037
        rf.y = lf.y
        this.rightFoul = rf
        // this.setGameIdx(1,true)
        let tts = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '30px', fill: "#fff",
            fontWeight: 'bold'
        }
        let t = new TextTimer('', tts)
        ctn.addChild(t)
        t.x = 917
        t.y = 90
        t.setTimeBySec(0)
        this.timer = t
    }

    set35ScoreLight(winScore) {

    }

    setGameIdx(gameIdx, isMaster = false) {
        if (isMaster) {
            console.log('isMaster', isMaster)
            if (!this.gameSection2)
                loadImg(this.skin.section2, (img) => {
                    this.gameSection2 = imgToTex(img)
                    this.gameSection.texture = this.gameSection2
                })
            else
                this.gameSection.texture = this.gameSection2
        }
        else {
            console.log('isMaster', isMaster)
            if (!this.gameSection1)
                loadImg(this.skin.section1, (img) => {
                    this.gameSection1 = imgToTex(img)
                    this.gameSection.texture = this.gameSection1
                })
            else
                this.gameSection.texture = this.gameSection1
        }
    }

    setLeftScore(v) {
        this.leftScoreText.text = v + ''
    }

    setRightScore(v) {
        this.rightScoreText.text = v + ''
    }

    setLeftFoul(v) {
        this.leftFoul.setNum(v)
    }

    setRightFoul(v) {
        this.rightFoul.setNum(v)
    }

    resetTimer() {
        this.timer.resetTimer()
    }

    toggleTimer(v) {
        this.timer.toggleTimer(v)
    }

    resetScore() {
        this.setLeftScore(0);
        this.setRightScore(0);
        this.setLeftFoul(0);
        this.setRightFoul(0);
    }

    //player
    setLeftPlayerInfo(name: string, avatar: string, ft: string) {
        //cm kg
    }
    setRightPlayerInfo(name: string, avatar: string, ft: string) {

    }
}