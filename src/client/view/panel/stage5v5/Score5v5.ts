import { cnWrap } from '../../utils/JsFunc';
import { TextTimer } from '../../utils/TextTimer';
import { Direction, SpriteGroup } from '../../utils/SpriteGroup';
import { FontName, ViewConst } from '../../const';
import { TweenEx } from '../../utils/TweenEx';
import { newBitmap } from '../../utils/PixiEx';
export class Score5v5 extends PIXI.Container {
    header: PIXI.Sprite
    headerText: PIXI.Text
    queterText: PIXI.Text
    leftPlayer: SpriteGroup
    rightPlayer: SpriteGroup
    leftTimeup: SpriteGroup
    rightTimeup: SpriteGroup
    leftScore: PIXI.Text
    rightScore: PIXI.Text
    timeText: TextTimer
    constructor(parent: PIXI.Container) {
        super()
        parent.addChild(this)
        console.log('Score5v5');
        let bx = 330, by = 900
        let scorePanel = new PIXI.Container()
        scorePanel.x = bx
        scorePanel.y = by
        this.addChild(scorePanel)
        this.header = newBitmap({ url: '/img/panel/5v5/bgHeader.png' })
        this.header['y0'] = 0
        this.header['y1'] = - 40
        scorePanel.addChild(this.header)

        let msk = new PIXI.Graphics()
            .beginFill(0xff0000)
            .drawRect(0, 0, 1260, 45)

        scorePanel.addChild(msk)
        this.header.mask = msk

        let htStyle = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '25px', fill: '#fff'
        }
        let ht = new PIXI.Text('', htStyle)
        ht.x = 10
        ht.y = 48
        this.header.addChild(ht)
        this.headerText = ht

        scorePanel.addChild(newBitmap({ url: '/img/panel/5v5/scoreBg.png' }))
        let lt = new SpriteGroup({ invert: 77, count: 5, img: '/img/panel/5v5/foul.jpg' })
        lt.x = 5
        lt.y = 103
        scorePanel.addChild(lt)
        this.leftTimeup = lt

        let rt = new SpriteGroup({ invert: 77, count: 5, img: '/img/panel/5v5/foul.jpg' })
        rt.x = 481
        rt.y = lt.y
        scorePanel.addChild(rt)
        this.rightTimeup = rt


        let lp = new SpriteGroup({ dir: Direction.s, invert: 63, img: '/img/panel/5v5/playerBg.png', count: 5 })
        lp.y = 320
        this.addChild(lp)
        this.leftPlayer = lp

        let rp = new SpriteGroup({ dir: Direction.s, invert: 63, img: '/img/panel/5v5/playerBg.png', count: 5, flip: -1 })
        rp.x = ViewConst.STAGE_WIDTH
        rp.y = lp.y
        this.rightPlayer = rp
        this.addChild(rp)
        // this.test()
        let whiteLogo = newBitmap({ url: '/img/ft/white.jpg' })
        whiteLogo.y = 45
        whiteLogo.x = 5
        whiteLogo.scale.x = whiteLogo.scale.y = 56 / 120
        scorePanel.addChild(whiteLogo)

        let blackLogo = newBitmap({ url: '/img/ft/black.jpg' })
        blackLogo.y = whiteLogo.y
        blackLogo.x = 481
        blackLogo.scale.x = blackLogo.scale.y = 56 / 120
        scorePanel.addChild(blackLogo)

        let ts = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '35px', fill: '#fff'
        }
        let whiteText = new PIXI.Text('路人王白队', ts)
        whiteText.x = 140
        whiteText.y = 49
        scorePanel.addChild(whiteText)

        let blackText = new PIXI.Text('路人王黑队', ts)
        blackText.x = 620
        blackText.y = whiteText.y
        scorePanel.addChild(blackText)

        let ss = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '43px', fill: '#fff'
            , fontWeight: 'bold'
        }
        let ls = new PIXI.Text('', ss)
        ls.y = 46
        scorePanel.addChild(ls)
        this.leftScore = ls
        this.setLeftScore(0)

        let rs = new PIXI.Text('', ss)
        rs.y = ls.y
        this.rightScore = rs
        scorePanel.addChild(rs)
        this.setRightScore(0)

        let qs = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '25px', fill: '#bcbcbc'
        }
        let qt = new PIXI.Text('', qs)
        qt.x = 985
        qt.y = 56
        this.queterText = qt
        scorePanel.addChild(qt)
        this.setQueter(1)

        let tts = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '25px', fill: '#fff'
        }
        let tt = new TextTimer('', tts)
        tt.isMin = true
        tt.y = 56
        tt.x = 1150
        tt.setTimeBySec(12 * 60)
        this.timeText = tt
        scorePanel.addChild(tt)

        this.hidePlayer(true)
        this.hidePlayer(false)
    }

    setLeftScore(score) {
        this.leftScore.text = String(score)
        this.leftScore.x = 435 - this.leftScore.width * .5
    }

    setRightScore(score) {
        this.rightScore.text = String(score)
        this.rightScore.x = 910 - this.rightScore.width * .5
    }

    setLeftTimeup(score) {
        this.leftTimeup.setNum(score)
    }

    setRightTimeup(score) {
        this.rightTimeup.setNum(score)
    }
    test() {
        TweenEx.delayedCall(500, () => {
            // this.showHeader()
            this.showText('fsfsasasfasdadf', 5)
        })

        // TweenEx.delayedCall(1500, () => {
        //     this.hideHeader()
        // })

    }

    setQueter(queter) {
        let qmap = { '1': '1ST', '2': '2ND', '3': '3RD', '4': '4TH' }
        this.queterText.text = qmap[queter] + ' QTR'
    }

    showText(text, sec, isRoll?) {
        this.headerText.text = text
        this.showHeader()
        TweenEx.delayedCall(sec * 1000, () => {
            this.hideHeader()
        })
    }

    showHeader(callback?) {
        TweenEx.to(this.header, 80, { y: this.header['y1'] }, callback)
    }

    hideHeader() {
        TweenEx.to(this.header, 80, { y: this.header['y0'] })
    }

    setPlayer(isLeft, idx, playerDoc, isFx?) {
        var spArr
        var sp
        var flip = 1
        isLeft ? spArr = this.leftPlayer.spArr
            : spArr = this.rightPlayer.spArr
        sp = spArr[idx]
        var from
        var to
        if (isLeft) {
            from = -301
        }
        else {
            from = 301
            flip = -1
        }
        sp.removeChildren()

        let avt = newBitmap({ url: '/img/player/avatar/' + playerDoc.avatar })
        avt.x = 58
        avt.y = 2
        avt.scale.x = avt.scale.y = 56 / 120
        sp.addChild(avt)

        let nt = new PIXI.Text(cnWrap(playerDoc.name, 30, 12))
        nt.style.fill = '#fff'
        nt.x = 205 - nt.width * .5 * flip
        nt.y = 12
        nt.scale.x = flip
        sp.addChild(nt)

        let nbt = new PIXI.Text(playerDoc.number)
        nbt.style.fill = '#fff'
        nbt.style['fontSize'] = '36px'
        nbt.style['fontWeight'] = 'bold'
        nbt.x = 30 - nbt.width * .5 * flip
        nbt.y = 10
        nbt.scale.x = flip
        sp.addChild(nbt)

        if (isFx)
            for (var i = 0; i < spArr.length; i++) {
                spArr[i].x = from
                new TweenEx(spArr[i])
                    .delay(i * 30)
                    .to({ x: 0 }, 100)
                    .start()
            }
    }

    hidePlayer(isLeft) {
        // isLeft
        //todo
        var spArr
        var to
        isLeft ? spArr = this.leftPlayer.spArr
            : spArr = this.rightPlayer.spArr
        isLeft ? to = -301
            : to = 301
        for (var i = 0; i < spArr.length; i++) {
            new TweenEx(spArr[i])
                .delay(i * 30)
                .to({ x: to }, 100)
                .start()
        }
    }
}