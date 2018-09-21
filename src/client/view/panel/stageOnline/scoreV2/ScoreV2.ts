import { newBitmap, setScale, _c } from '../../../utils/PixiEx';
import { TextFac, Text2 } from '../../../utils/TextFac';
import { FontName } from '../../../const';
import { fitWidth } from '../bracket/BracketGroup';
import { paddy } from '../../../utils/JsFunc';
import { TextTimer } from '../../../utils/TextTimer';
// import { BaseAvatar } from '../../base/BaseAvatar';
import { imgLoader } from '../../../utils/ImgLoader';
const loadAvt = (avtSp, url, left) => {
    console.log('loadAvt', url);
    imgLoader.loadTexArr([url], tex2 => {
        let tex = imgLoader.getTex(url)
        let s = 86 / tex.height
        avtSp.texture = tex
        // avtSp.texture = tex2
        avtSp.x = left
        setScale(avtSp, s)
    }, true)
}

export class ScoreV2 extends PIXI.Container {
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
    lFoulHint: PIXI.Sprite
    rFoulHint: PIXI.Sprite
    lState: Text2
    rState: Text2

    gameTitle: Text2
    gameTitle2: Text2
    timer: TextTimer

    lAvt: PIXI.Sprite
    rAvt: PIXI.Sprite

    lAvtUrl: String
    rAvtUrl: String

    avtCtn: PIXI.Container
    titleCtn: PIXI.Container

    constructor(parent) {
        super()
        parent.addChild(this)
        let bg = newBitmap({ url: '/img/panel/score2018v2/scoreBottom.png' })
        bg.y = 8
        this.avtCtn = new PIXI.Container()
        this.avtCtn.y = bg.y
        this.addChild(this.avtCtn)
        this.addChild(bg)

        let top = newBitmap({ url: '/img/panel/score2018v2/scoreTop.png' })
        this.addChild(top)

        let lFoulHint = newBitmap({ url: '/img/panel/score2018v2/foulHintL.png' })
        top.addChild(lFoulHint)
        this.lFoulHint = lFoulHint

        let rFoulHint = newBitmap({ url: '/img/panel/score2018v2/foulHintR.png' })
        top.addChild(rFoulHint)
        this.rFoulHint = rFoulHint
        lFoulHint.alpha =
        rFoulHint.alpha =0.8
        lFoulHint.visible =
            rFoulHint.visible = true



        let ns = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '32px', fill: "#303030",
        }
        this.lName = TextFac.new_(ns, this)
            .setY(941)
        this.rName = TextFac.new_(ns, this)
            .setPos(1215, this.lName.y)

        this.titleCtn = new PIXI.Container()
        this.addChild(this.titleCtn)
        this.titleCtn.addChild(newBitmap({ url: '/img/panel/score2018v2/titleBg.png' }))
        ns.fontSize = '28px'
        ns.fill = '#28263e'
        this.lTitle = TextFac.new_(ns, this.titleCtn)
            .setY(865)

        this.rTitle = TextFac.new_(ns, this.titleCtn)
            .setPos(1123, this.lTitle.y)

        ns.fill = '#444'
        this.gameTitle = TextFac.new_(ns, this)
            .setY(947)
        this.gameTitle2 = TextFac.new_(ns, this)
            .setY(987)


        ns.fontSize = '25px'
        ns.fill = '#6b6b6b'
        this.lHW = TextFac.new_(ns, this)
            .setY(1002)

        this.rHW = TextFac.new_(ns, this)
            .setPos(this.rName.x, this.lHW.y)

        ns.fontSize = '60px'
        ns.fill = '#fff'
        ns.fontFamily = 'dinCondensedC'
        this.lScore = TextFac.new_(ns, this)
            .setY(2)
        this.rScore = TextFac.new_(ns, this)
            .setY(this.lScore.y)
        this.lScore.alpha = this.rScore.alpha = 0.8
        //4foul to hint 决赛5foul
        ns.fontSize = '35px'
        ns.fill = '#eee'
        ns.fontFamily = FontName.MicrosoftYahei
        this.lFoul = TextFac.new_(ns, this)
            .setPos(315 + 57,4)

        this.rFoul = TextFac.new_(ns, this)
            .setPos(1536 + 57, this.lFoul.y)


        ns.fontSize = '40px'
        ns.fontFamily = FontName.MicrosoftYahei

        this.lState = TextFac.new_(ns, this)
            .setY(960)
        this.rState = TextFac.new_(ns, this)
            .setY(this.lState.y)
        this.lState.visible = this.rState.visible = false
        let tts = {
            fontFamily: 'dinCondensedC',
            fontSize: '45px', fill: "#222",
        }
        let t = new TextTimer('', tts)
        this.addChild(t)
        t.x = 918
        t.y = 10
        t.textInSec = 0
        this.timer = t

        let lMask = newBitmap({ url: '/img/panel/score2018v2/maskL.png' })
        this.avtCtn.addChild(lMask)
        let rMask = newBitmap({ url: '/img/panel/score2018v2/maskR.png' })
        this.avtCtn.addChild(rMask)

        let lAvt = new PIXI.Sprite
        this.avtCtn.addChild(lAvt)
        lAvt.mask = lMask
        this.lAvt = lAvt

        let rAvt = new PIXI.Sprite
        rAvt.mask = rMask
        this.avtCtn.addChild(rAvt)
        this.rAvt = rAvt


        this.lAvt.y = this.rAvt.y = 937 - 8
        this.resetScore()
        this.toggleState({ visible: true })

        this.todo()
    }
    todo() {
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

    _isShowFoulHint(foulHintSp, foul) {
        foulHintSp.visible = (foul >= this.foulHint)
    }
    setDtFoul(data) {
        if (data.isLeft) {
            this.lFoul.setAddNum(data.dtFoul)
            this._isShowFoulHint(this.lFoulHint, Number(this.lFoul.text))
        }
        else {
            this.rFoul.setAddNum(data.dtFoul)
            this._isShowFoulHint(this.rFoulHint, Number(this.rFoul.text))
        }
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
            .setAlignCenter(_c(-82))
    }

    setRightScore(score) {
        this.rScore.setText(score + '')
            .setAlignCenter(_c(82))
    }

    foulHint = 4
    setLeftFoul(data) {
        let foul = Number(data || 0)
        this.lFoul.setText((data || 0))
            .setAlignCenter(_c(-165))

        this._isShowFoulHint(this.lFoulHint, Number(this.lFoul.text))
    }

    setRightFoul(data) {
        let foul = Number(data || 0)
        this.rFoul.setText((data || 0))
            .setAlignCenter(_c(205))
        this._isShowFoulHint(this.rFoulHint, Number(this.rFoul.text))

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
            .setAlignCenter(_c(208))

        this.rName.setText(rPlayer.name)
            .setLimitWidth(298, 40)

        this._setHWA(rPlayer)
        let age = ''
        if (rPlayer.age)
            age = rPlayer.age + '岁'
        this.rHW.setText(rPlayer.height + 'CM  ' + rPlayer.weight + 'KG  ' + age)
            .setAlignCenter(_c(319))
        this.rAvtUrl = rPlayer.avatar
        loadAvt(this.rAvt, rPlayer.avatar, 1045 + 15)
    }

    setLeftPlayer(lPlayer) {
        this.lTitle.setText(lPlayer.title)
            .setAlignCenter(_c(-208))

        this.lName.setText(lPlayer.name)
            .setLimitWidth(298, 40)
            .setAlignRight(702)

        this._setHWA(lPlayer)
        let age = ''
        if (lPlayer.age)
            age = lPlayer.age + '岁'
        this.lHW.setText(lPlayer.height + 'CM  ' + lPlayer.weight + 'KG  ' + age)
            .setAlignCenter(_c(-319))
        this.lAvtUrl = lPlayer.avatar
        loadAvt(this.lAvt, lPlayer.avatar, 788 - 14)
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
        this.foulHint = 4
        if (type == 2) {
            let gameIdxNum2
            gameIdxNum2 = '第' + gameIdxNum + '场'
            if (this.to8.indexOf(gameIdx) > -1)
                this.gameTitle.text = '大师赛八强'
            gameIdx = Number(gameIdx)
            if (gameIdx == 5 || gameIdx == 6) {
                this.gameTitle.text = '四强晋级赛'
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
            {
                this.gameTitle.text = '八强晋级赛'
                gameIdxNum = '第' + paddy(gameIdx , 2) + '场'

            }
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
            this.foulHint = 5
        }

        // this.gameTitle.text
        this.gameTitle2.setText(gameIdxNum)
        .setAlignCenter(960)
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
                    .setAlignCenter(_c(-208))
                this.rTitle.setText(rn)
                    .setAlignCenter(_c(208))
            }
        }
        this.titleCtn.visible = data.visible
        if (!data.visible) {
            this.lTitle.text = this.rTitle.text = ''
        }
    }
}