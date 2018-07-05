import { newBitmap, setScale } from '../../../utils/PixiEx';
import { TextFac, Text2 } from '../../../utils/TextFac';
import { FontName } from '../../../const';
import { fitWidth } from '../bracket/BracketGroup';
import { paddy } from '../../../utils/JsFunc';
import { TextTimer } from '../../../utils/TextTimer';
import { BaseAvatar } from '../../base/BaseAvatar';
import { imgLoader } from '../../../utils/ImgLoader';
const loadAvt = (avtSp, url, left) => {
    console.log('loadAvt', url);
    imgLoader.loadTex(url, tex => {
        let s = 86 / tex.height
        // avtSp.visible = false
        avtSp.texture = tex
        avtSp.x = left
        setScale(avtSp, s)
        // avtSp.visible = true
    })
}

export class Score2018v3 extends PIXI.Container {
    lName: Text2
    rName: Text2

    lTitle: Text2
    rTitle: Text2

    lHW: Text2
    rHW: Text2

    lScore: Text2
    rScore: Text2

    lFoul: Text2
    rFoul: Text2

    lState: Text2
    rState: Text2

    gameTitle: Text2
    timer: TextTimer

    lAvt: PIXI.Sprite
    rAvt: PIXI.Sprite

    lAvtUrl: String
    rAvtUrl: String

    avtCtn: PIXI.Container
    constructor(parent) {
        super()
        parent.addChild(this)
        let bg = newBitmap({ url: '/img/panel/score2018v3/bg.png' })
        this.addChild(bg)


        this.avtCtn = new PIXI.Container()
        this.addChild(this.avtCtn)

        let ns = {
            fontFamily: FontName.NotoSansHans,
            fontSize: '32px', fill: "#303030",
        }
        this.lName = TextFac.new_(ns, this)
            .setY(958)
        this.rName = TextFac.new_(ns, this)
            .setPos(1215, this.lName.y)

        ns.fontSize = '28px'
        ns.fill = '#fff'
        this.lTitle = TextFac.new_(ns, this)
            .setY(914)

        this.rTitle = TextFac.new_(ns, this)
            .setPos(1123, this.lTitle.y)

        this.gameTitle = TextFac.new_(ns, this)
            .setY(914)


        ns.fontSize = '25px'
        ns.fill = '#6b6b6b'
        this.lHW = TextFac.new_(ns, this)
            .setY(1004)

        this.rHW = TextFac.new_(ns, this)
            .setPos(this.rName.x, this.lHW.y)

        ns.fontSize = '78px'
        ns.fill = '#fff'
        ns.fontFamily = 'dinCondensedC'
        this.lScore = TextFac.new_(ns, this.avtCtn)
            .setY(960)
        this.rScore = TextFac.new_(ns, this.avtCtn)
            .setY(this.lScore.y)


        ns.fontSize = '24px'
        ns.fill = '#505050'
        ns.fontFamily = FontName.NotoSansHans
        this.lFoul = TextFac.new_(ns, this)
            .setPos(315 + 57, 915)

        this.rFoul = TextFac.new_(ns, this)
            .setPos(1536 + 57, this.lFoul.y)

        TextFac.new_(ns, this)
            .setText('犯规:')
            .setPos(315, this.lFoul.y)

        TextFac.new_(ns, this)
            .setText('犯规:')
            .setPos(1536, this.lFoul.y)

        ns.fontSize = '40px'
        ns.fontFamily = FontName.MicrosoftYahei

        this.lState = TextFac.new_(ns, this)
            .setY(960)
        this.rState = TextFac.new_(ns, this)
            .setY(this.lState.y)

        let tts = {
            fontFamily: 'dinCondensedC',
            fontSize: '45px', fill: "#fff",
        }
        let t = new TextTimer('', tts)
        this.addChild(t)
        t.x = 918
        t.y = 973
        t.textInSec = 0
        this.timer = t

        let lMask = newBitmap({ url: '/img/panel/score2018v3/maskL.png' })
        this.avtCtn.addChild(lMask)
        let rMask = newBitmap({ url: '/img/panel/score2018v3/maskR.png' })
        this.avtCtn.addChild(rMask)

        let lAvt = new PIXI.Sprite
        this.avtCtn.addChild(lAvt)
        this.lAvt = lAvt
        lAvt.mask = lMask

        let rAvt = new PIXI.Sprite
        this.avtCtn.addChild(rAvt)
        this.rAvt = rAvt

        rAvt.mask = rMask

        this.lAvt.y = this.rAvt.y = 954
        this.resetScore()
        this.toggleState({ visible: true })
    }

    resetScore() {
        this.setLeftFoul(0)
        this.setRightFoul(0)
        this.setLeftScore(0)
        this.setRightScore(0)
    }

    state = true
    toggleState(data) {
        if (data.visible) {

            let a = ['攻', '守']
            this.state = !this.state

            if (data.isLeftPlayer != null) {
                this.state = !data.isLeftPlayer
            }
            let idx = Number(this.state)
            let idx2 = Number(!this.state)
            this.lState.setText(a[idx])
                .setAlignCenter(350)
            this.rState.setText(a[idx2])
                .setAlignCenter(1570)
        }
        else
            this.lState.text = this.rState.text = ''
    }

    setDtFoul(data) {
        if (data.isLeft)
            this.lFoul.setAddNum(data.dtFoul)
        else
            this.rFoul.setAddNum(data.dtFoul)
    }

    setDtScore(data) {
        if (data.isLeft) {
            this.lScore.setAddNum(data.dtScore)
                .setAlignCenter(855)
        }
        else {
            this.rScore.setAddNum(data.dtScore)
                .setAlignCenter(1068)
        }
    }
    setLeftScore(score) {
        this.lScore.setText(score + '')
            .setAlignCenter(855)
    }

    setRightScore(score) {
        this.rScore.setText(score + '')
            .setAlignCenter(1068)
    }

    setLeftFoul(data) {
        this.lFoul.setText((data || 0))
    }
    setRightFoul(data) {
        this.rFoul.setText((data || 0))
    }

    _setHWA(playerData) {
        if (playerData.hwa) {
            playerData.height = playerData.hwa[0]
            playerData.weight = playerData.hwa[1]
            playerData.age = playerData.hwa[2]
        }
    }

    setRightPlayer(rPlayer) {
        this.rTitle.setText(rPlayer.title)
            .setAlignCenter(1320)

        this.rName.setText(rPlayer.name)
            .setLimitWidth(298, 40)

        this._setHWA(rPlayer)
        let age = ''
        if (rPlayer.age)
            age = rPlayer.age + '岁'
        this.rHW.setText(rPlayer.height + 'CM  ' + rPlayer.weight + 'KG  ' + age)
        this.rAvtUrl = rPlayer.avatar
        loadAvt(this.rAvt, rPlayer.avatar, 1109)
    }

    setLeftPlayer(lPlayer) {
        this.lTitle.setText(lPlayer.title)
            .setAlignCenter(600)

        this.lName.setText(lPlayer.name)
            .setLimitWidth(298, 40)
            .setAlignRight(702)

        this._setHWA(lPlayer)
        let age = ''
        if (lPlayer.age)
            age = lPlayer.age + '岁'
        this.lHW.setText(lPlayer.height + 'CM  ' + lPlayer.weight + 'KG  ' + age)
            .setAlignRight(702)
        this.lAvtUrl = lPlayer.avatar
        loadAvt(this.lAvt, lPlayer.avatar, 725)
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

    show() {
        this.visible = true
    }
    hide() {
        this.visible = false
    }
    winSectionArr = [7, 8]
    loseSectionArr = [5, 6, 9, 10, 12]
    // last8 = [1,2,3,4]
    to8 = [1, 2, 3, 4]
    to6 = [5, 6]
    to4 = [7, 8, 9, 10]
    to2 = [11, 12]
    //1 车轮 2 大师 3 决赛    4 小组赛
    setGameIdx(gameIdx, type) {
        console.log('gameIdx22', gameIdx, 'type', type)
        let gameIdxNum = '' + paddy(gameIdx, 2)
        // this.gameIdxTxt.text = '四强'
        if (type == 2) {
            let gameIdxNum2
            gameIdxNum2 = '第' + gameIdxNum + '场'
            if (this.to8.indexOf(gameIdx) > -1)
                this.gameTitle.text = '大师赛八强'
            gameIdx = Number(gameIdx)
            if (gameIdx == 5 || gameIdx == 6) {
                this.gameTitle.text = '四强赛'
                // gameIdxNum2 = '第' + paddy(gameIdx - 6, 2) + '场'
                gameIdxNum = '第' + paddy(gameIdx - 4, 2) + '场'
            }
            else if (gameIdx == 7) {
                this.gameTitle.text = '季军赛'
                gameIdxNum = ''
            }
            else if (gameIdx == 8) {
                this.gameTitle.text = '决赛'
                gameIdxNum = ''
            }
            else
                this.gameTitle.text = '大师赛'

        }
        else if (type == 4) {
            this.gameTitle.text = '席位战'
            gameIdxNum = '第' + gameIdxNum + '场'
        }
        else if (type == 1) {
            this.gameTitle.text = '车轮赛'
        }
        else if (type == 3) {
            this.gameTitle.text = '决赛'
            gameIdxNum = ''
        }

        this.gameTitle.text += gameIdxNum
        this.gameTitle.setAlignCenter(960)
    }

    setGameTitle(str) {
        this.gameTitle.setText(str)
            .setAlignCenter(960)
    }

    getPlayerInfo(isLeft) {
        let player: any = {}
        if (isLeft) {
            player.name = this.lName.text
            player.info = this.lHW.text
            player.avatar = this.lAvtUrl
        }
        else {
            player.name = this.rName.text
            player.info = this.rHW.text
            player.avatar = this.rAvtUrl
        }
        return player
    }

    showTitle(data) {
        if (data.vs) {
            let a = data.vs.split(' ')
            console.log('show', data, a);
            if (a.length == 2) {
                let ln = a[0]
                let rn = a[1]//data.right
                this.lTitle.setText(ln)
                    .setAlignCenter(600)
                this.rTitle.setText(rn)
                    .setAlignCenter(1320)
            }
        }
        if (!data.visible)
            this.lTitle.text = this.rTitle.text = ''
    }
}