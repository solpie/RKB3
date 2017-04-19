import { getFtId, getFtLineUrl, getFtlogoUrl, getFtLogoUrl2 } from '../score/Com2017';
import { proxy } from '../../../utils/WebJsFunc';
import { loadImg } from '../../../utils/JsFunc';
import { fitWidth } from '../bracket/BracketGroup';
import { FontName, ViewConst } from '../../../const';
import { imgToTex, loadRes, newBitmap } from '../../../utils/PixiEx';
const skinConf: any = {
    'dark': {
        bg: '/img/panel/bracket/preRoundBgBlue.png',
        ftBg: '/img/panel/bracket/preRoundFtBlue.png',
        playerBg: '/img/panel/bracket/preRoundPlayerBlue.png'
    },
    'light': {
        bg: '/img/panel/bracket/preRoundBg.png',
        ftBg: '/img/panel/bracket/preRoundFt.png',
        playerBg: '/img/panel/bracket/preRoundPlayer.png'
    }
}
let skin;
class PlayerCtn extends PIXI.Container {
    avt: PIXI.Sprite
    ft: PIXI.Sprite
    playerName: PIXI.Text
    bg: PIXI.Sprite
    constructor() {
        super()
        let bg = newBitmap({ url: '/img/panel/bracket/preRoundPlayer.png' })
        this.bg = bg
        this.addChild(bg)

        this.avt = new PIXI.Sprite()
        this.avt.x = 1
        this.avt.y = 1
        this.addChild(this.avt)

        this.ft = new PIXI.Sprite()
        this.ft.x = 60
        this.ft.y = -6
        // this.addChild(this.ft)

        this.playerName = new PIXI.Text('')
        this.playerName.x = 60
        let s = this.playerName.style
        s.fontFamily = FontName.MicrosoftYahei
        s.fontSize = '30px'
        s.fill = 0xffffff
        this.addChild(this.playerName)
    }

    setAvatar(name, avtUrl, ftId) {
        loadRes(avtUrl, (img) => {
            // loadImg(avtUrl, (img) => {
            this.avt.texture = imgToTex(img)
            this.avt.width = this.avt.height = 52
        }, true)
        loadImg(getFtLineUrl(ftId), (img) => {
            this.ft.texture = imgToTex(img)
        })
        this.playerName.text = name
        fitWidth(this.playerName, 220, 30)
        this.playerName.y = 30 - this.playerName.height * .5
    }
    setDark(isDark) {
        isDark ? this.bg.texture.baseTexture.updateSourceImage(skinConf['dark'].playerBg)
            : this.bg.texture.baseTexture.updateSourceImage(skinConf['light'].playerBg)
    }
}
class FtCtn extends PIXI.Container {
    ftId: string
    leftText: PIXI.Text
    bg: PIXI.Sprite
    constructor(ftId) {
        super()
        this.ftId = ftId + ''
        let ftLogo = newBitmap({ url: getFtLogoUrl2(ftId) })
        ftLogo.x = 1
        ftLogo.y = 1
        ftLogo.width = ftLogo.height = 45
        this.addChild(ftLogo)
        let bg = newBitmap({ url: '/img/panel/bracket/preRoundFt.png' })
        this.bg = bg
        this.addChild(bg)

        this.leftText = new PIXI.Text()
        this.leftText.x = 30
        this.leftText.y = 32
        let s = this.leftText.style
        s.fill = '#2cfff8'
        s.fontFamily = FontName.MicrosoftYahei
        s.fontSize = '18px'
        s.fontWeight = 'bold'
        this.addChild(this.leftText)
    }
    setNum(num) {
        if (!num)
            num = 0
        if (num < 1) {
            this.alpha = .3
        }
        this.leftText.text = num + ''
    }
    setDark(isDark) {
        isDark ? this.bg.texture.baseTexture.updateSourceImage(skinConf['dark'].ftBg)
            : this.bg.texture.baseTexture.updateSourceImage(skinConf['light'].ftBg)

    }
}
export class PreRound extends PIXI.Container {
    playerArr: Array<PlayerCtn>
    ftArr: Array<FtCtn>
    ftMap: any = {}
    imgTex: any = {}
    playerLeftText: PIXI.Text
    bg: PIXI.Sprite
    constructor(stage, isDark = false) {
        super()
        stage.addChild(this)
        this.x = ViewConst.STAGE_WIDTH - 500
        this.y = 220
        let bg = newBitmap({ url: '/img/panel/bracket/preRoundBg.png' })
        this.bg = bg
        this.addChild(bg)

        this.playerArr = []
        for (var i = 0; i < 6; i++) {
            let p = new PlayerCtn()
            p.y = 74 * i + 160
            p.x = 175
            this.addChild(p)
            this.playerArr.push(p)
        }

        this.ftArr = []
        for (var i = 0; i < 8; i++) {
            let f = new FtCtn(i + 1)
            this.ftMap[f.ftId] = f
            f.x = 51 + i * 50
            f.y = 20
            this.addChild(f)
            this.ftArr.push(f)
        }

        this.playerLeftText = new PIXI.Text()
        this.playerLeftText.y = 90
        let s = this.playerLeftText.style
        s.fontFamily = FontName.MicrosoftYahei
        s.fontSize = '50px'
        s.fontWeight = 'bold'
        s.fill = '#2cfff8'
        this.addChild(this.playerLeftText)
    }
    //drop header 2 players
    setPlayerArr(playerDataArr) {
        let sum = {}
        for (var i = 0; i < playerDataArr.length; i++) {
            var pf = playerDataArr[i];
            // pf.groupId = getFtId(pf.group) || '6'
            if (!sum[pf.groupId])
                sum[pf.groupId] = 0
            sum[pf.groupId]++
        }
        for (let ftId in this.ftMap) {
            this.ftMap[ftId].setNum(sum[ftId])
        }
        console.log(sum)
        for (var i = 2; i < 8; i++) {
            let p = playerDataArr[i]
            this.playerArr[i - 2].setAvatar(p.name, p.avatar, p.groupId)
        }
        this.playerLeftText.text = playerDataArr.length + ''
        this.playerLeftText.x = 90 - this.playerLeftText.width * .5
    }
    showRight(isRight) {
        if (isRight) {
            this.x = ViewConst.STAGE_WIDTH - 500
        }
        else {
            this.x = -20
        }
    }

    isDark = false
    setDark(isDark) {
        isDark ? this.bg.texture.baseTexture.updateSourceImage(skinConf['dark'].bg)
            : this.bg.texture.baseTexture.updateSourceImage(skinConf['light'].bg)
    }
    toggleTheme() {
        this.isDark = !this.isDark
        this.setDark(this.isDark)
        for (let p of this.playerArr) {
            p.setDark(this.isDark)
        }
        for (let f of this.ftArr) {
            f.setDark(this.isDark)
        }
    }
    setTheme(isDark) {
        this.isDark = isDark
        this.setDark(this.isDark)
        for (let p of this.playerArr) {
            p.setDark(this.isDark)
        }
        for (let f of this.ftArr) {
            f.setDark(this.isDark)
        }
    }
}