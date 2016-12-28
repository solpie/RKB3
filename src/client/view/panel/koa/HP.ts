import { Ready } from './Ready';
import { _avatar } from '../../utils/HupuAPI';
import { TextTimer } from '../../utils/TextTimer';
import { Winner } from './Winner';
import { WinTeam } from './Win';
import { St } from './St';
import { Direction, SpriteGroup } from '../../utils/SpriteGroup';
import { cnWrap, formatSecond } from '../../utils/JsFunc';
import { FontName, TimerState, ViewConst } from '../../const';
import { TweenEx } from '../../utils/TweenEx';
import { blink2, blink3 } from '../../utils/Fx';
import { PlayerDoc } from '../../../model/PlayerInfo';
import { imgToTex, loadRes, makeColorRatio, newBitmap } from '../../utils/PixiEx';
export class HP extends PIXI.Container {
    pointArr1p: Array<PIXI.Sprite> = []
    pointArr2p: Array<PIXI.Sprite> = []
    foulPG1p: SpriteGroup
    foulPG2p: SpriteGroup
    foulGlow1p: PIXI.Sprite
    foulGlow2p: PIXI.Sprite
    avatar1p: PIXI.Sprite
    avatar2p: PIXI.Sprite
    name1p: PIXI.Text
    name2p: PIXI.Text
    beatByNum1p: PIXI.Text
    beatByNum2p: PIXI.Text
    nameArr1p: Array<PIXI.Text> = []
    nameArr2p: Array<PIXI.Text> = []
    bloodFx1p: PIXI.Container
    bloodFx2p: PIXI.Container
    st1p: St
    st2p: St

    timeText: TextTimer

    winTeam: WinTeam
    winner: Winner
    ready: Ready
    constructor(stage: PIXI.Container) {
        super()
        stage.addChild(this)
        let titleCtn = new PIXI.Container
        this.addChild(titleCtn)

        titleCtn.addChild(newBitmap({ url: '/img/panel/koa/hp/bg.png' }))
        titleCtn.y = ViewConst.STAGE_HEIGHT - 136


        let _b = () => {
            let bFx = new PIXI.Container()
            bFx['blood'] = newBitmap({ url: '/img/panel/koa/hp/bloodMask.png' })
            bFx['msk'] = newBitmap({ url: '/img/panel/koa/hp/bloodMask.png' })
            bFx['blink'] = newBitmap({ url: '/img/panel/koa/hp/blood.png' })
            bFx['blink'].visible = false
            bFx['blink'].x = -5
            bFx['blink'].y = -5
            bFx.addChild(bFx['blink'])
            bFx.addChild(bFx['blood'])
            bFx.addChild(bFx['msk'])
            bFx['blood'].mask = bFx['msk']
            titleCtn.addChild(bFx)
            return bFx
        }
        this.bloodFx1p = _b()
        this.bloodFx1p.x = 519
        this.bloodFx1p.y = 42

        this.bloodFx2p = _b()
        this.bloodFx2p.scale.x = -1
        this.bloodFx2p.x = 1400
        this.bloodFx2p.y = this.bloodFx1p.y


        let initPoint = (is1p: boolean) => {
            for (var i = 0; i < 5; i++) {
                let p = newBitmap({ url: '/img/panel/koa/hp/point.png' })
                if (is1p) {
                    p.x = 787 - 67 * i
                    this.pointArr1p.push(p)
                }
                else {
                    p.scale.x = -1
                    p.x = 1132 + 67 * i
                    this.pointArr2p.push(p)
                }
                p.y = 42
                titleCtn.addChild(p)
            }
        }
        initPoint(true)
        initPoint(false)

        let fpg = { dir: Direction.w, invert: 30, img: '/img/panel/koa/hp/foul.png', count: 5, flip: 1 }
        this.foulPG1p = new SpriteGroup(fpg)
        this.foulPG1p.x = 708
        this.foulPG1p.y = 89
        // this.foulPG1p.alpha = .5
        titleCtn.addChild(this.foulPG1p)
        fpg.flip = -1
        fpg.dir = Direction.e
        this.foulPG2p = new SpriteGroup(fpg)
        this.foulPG2p.x = 1098
        this.foulPG2p.y = this.foulPG1p.y
        titleCtn.addChild(this.foulPG2p)

        // this.foulPG1p.setNum(5)
        // this.foulPG2p.setNum(5)
        var fg = newBitmap({ x: 692, y: 75, url: '/img/panel/koa/hp/foulGlow.png' })
        this.foulGlow1p = fg
        fg.visible = false
        titleCtn.addChild(fg)
        fg = newBitmap({ x: 1045, y: fg.y, url: '/img/panel/koa/hp/foulGlow.png' })
        this.foulGlow2p = fg
        fg.visible = false
        titleCtn.addChild(fg)

        //120 x 120
        let initAvatar = (is1p: boolean) => {
            let url = _avatar('1p.png')
            let avt = newBitmap({ url: url })
            let msk1 = new PIXI.Graphics()
            msk1.beginFill(0xff0000)
            msk1.moveTo(0, 0)
            msk1.lineTo(0, 117)
            msk1.lineTo(100, 117)
            msk1.lineTo(112, 92)
            msk1.lineTo(120, 92)
            msk1.lineTo(120, 0)
            if (is1p) {
                avt.x = 380
                msk1.x = avt.x
                this.avatar1p = avt
            }
            else {
                avt.x = 1420 + 120
                msk1.scale.x = -1
                msk1.x = avt.x
                this.avatar2p = avt
                avt.scale.x = -1
            }
            titleCtn.addChild(avt)
            titleCtn.addChild(msk1)
            avt.mask = msk1
        }


        initAvatar(true)
        initAvatar(false)

        titleCtn.addChild(newBitmap({ url: '/img/panel/koa/hp/deco.png' }))
        // init name
        //         两遍暗的 dc6b17
        // 亮的 debc1d
        let ns = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '25px',
            fontStyle: 'normal',
            fontWeight: 'bold',
            stroke: '#000',
            strokeThickness: 3,
            fill: ['#dc6b17', '#debc1d', '#debc1d', '#dc6b17'],
            // fill: ['#dc6b17', '#debc1d', '#debc1d', '#debc1d', '#dc6b17'],
            fillGradientType: PIXI['TEXT_GRADIENT'].LINEAR_VERTICAL,
        }


        ns.fill = ['#c0dbff', '#c0dbff', '#3b52b3']
        let n1 = new PIXI.Text("player1", ns)
        this.name1p = n1
        n1.x = 495
        n1.y = 93
        // n1.style.fill = makeColorRatio(['#dc6b17', '#debc1d', '#dc6b17'], [2, 7, 2])
        titleCtn.addChild(n1)

        ns.fill = ['#fff0f0', '#fff0f0', '#b33b3b']
        let n2 = new PIXI.Text("player1", ns)
        this.name2p = n2
        n2['x0'] = 1420
        n2.x = n2['x0'] - n2.width
        n2.y = n1.y
        // n2.style.fill = makeColorRatio(['#dc6b17', '#debc1d', '#dc6b17'], [2, 7, 2])
        titleCtn.addChild(n2)

        //beat by 01
        let beatStyle = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '23px',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fill: ['#dc6b17', '#debc1d', '#debc1d', '#dc6b17'],
            // fill: ['#dc6b17', '#debc1d', '#debc1d', '#debc1d', '#dc6b17'],
            fillGradientType: PIXI['TEXT_GRADIENT'].LINEAR_VERTICAL,
        }
        let bb = new PIXI.Text('', beatStyle)
        bb.x = 540
        bb.y = 2
        titleCtn.addChild(bb)
        this.beatByNum1p = bb
        let bb2 = new PIXI.Text('', beatStyle)
        bb2.x = 1240
        bb2.y = bb.y
        titleCtn.addChild(bb2)
        this.beatByNum2p = bb2

        let ns2 = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '18px',
            fontStyle: 'normal',
            stroke: '#000',
            strokeThickness: 2,
            fill: null,
            fillGradientType: PIXI['TEXT_GRADIENT'].LINEAR_VERTICAL,
        }
        let _ns1 = () => {
            // return ['#c0dbff', '#c0dbff', '#3b52b3']
            return '#3b52b3'
        }
        let _ns2 = () => {
            // return ['#fff0f0', '#fff0f0', '#b33b3b']
            return '#b33b3b'
        }
        for (var i = 0; i < 2; i++) {
            // var bg1p = newBitmap({ url: '/img/panel/koa/hp/blueBg.png' })
            // this.addChild(bg1p)
            ns2.fill = _ns1()
            var n1p = new PIXI.Text('player' + (i + 2), ns2)
            // n1p['bg'] = bg1p
            n1p['fill'] = _ns1()
            n1p['x0'] = 360 //+ 115
            n1p.x = n1p['x0'] - n1p.width
            n1p.y = 75 + i * 26
            // bg1p.x = n1p['x0'] - 120
            // bg1p.y = n1p.y + 2
            titleCtn.addChild(n1p)
            this.nameArr1p.push(n1p)

            // var bg2p = newBitmap({ url: '/img/panel/koa/hp/redBg.png' })
            // this.addChild(bg2p)
            ns2.fill = _ns2()
            var n2p = new PIXI.Text('player' + (i + 2), ns2)
            // n2p['bg'] = bg2p
            n2p['fill'] = _ns2()
            n2p.x = 1555// - 115
            n2p.y = n1p.y
            // bg2p.x = n2p.x - 5
            // bg2p.y = bg1p.y
            titleCtn.addChild(n2p)
            this.nameArr2p.push(n2p)
        }
        // console.log('n1p')
        //
        let ts = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '50px',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fill: '#fff',
            stroke: '#222',
            strokeThickness: 3,
        }
        let t = new TextTimer("00:00", ts)
        this.timeText = t
        t.x = 889
        t.y = 35
        titleCtn.addChild(t)


        this.st1p = new St(this, true)
        this.st1p.y = 500
        this.st2p = new St(this, false)
        this.st2p.x = ViewConst.STAGE_WIDTH - 282
        this.st2p.y = this.st1p.y

        this.setFoul(true, 0)
        this.setFoul(false, 0)


        this.winner = new Winner(this)
        this.winner.y = 300
        this.winTeam = new WinTeam(this)


        this.test()

    }

    test() {
        TweenEx.delayedCall(200, () => {
            // this.winTeam.test()
            // this.showWinner(true)
            // this.showWinner(false)
            // this.win.show()

            // this.setBlood(true, 3)
            // this.setBlood(false, 1)
            // this.setFoul(true, 1)
            // this.setFoul(false, 4)
            // this.foulPG1p.setNum(1)
            // this.foulPG2p.setNum(4)
            // TweenEx.delayedCall(1000, () => {
            //     this.setBlood(false, 0)
            //     this.toggleTimer()
            // })
        })
    }

    setPlayer(playerDocArr, partnerArr, stArr) {
        loadRes(_avatar(playerDocArr[0].avatar), (img) => {
            this.avatar1p.texture = imgToTex(img);
        });
        loadRes(_avatar(playerDocArr[1].avatar), (img) => {
            this.avatar2p.texture = imgToTex(img);
        });
        this.st1p.setName(stArr[0].name)
        this.st1p.setAvatar(_avatar(stArr[0].avatar))
        this.st2p.setName(stArr[1].name)
        this.st2p.setAvatar(_avatar(stArr[1].avatar))

        this.name1p.text = cnWrap(playerDocArr[0].name, 30, 12)
        this.name2p.text = cnWrap(playerDocArr[1].name, 30, 12)
        this.name2p.x = this.name2p['x0'] - this.name2p.width
        // let ns2 = {
        //     fontFamily: FontName.MicrosoftYahei,
        //     fontSize: '20px',
        //     fontStyle: 'normal',
        //     fill: '#ddd',
        // }
        let setPartner = (idx, nameArr: Array<PIXI.Text>) => {
            var isAfter = false;
            var j = 0
            var head = []
            var tail = []
            for (var i = 0; i < partnerArr[idx].length - 1; i++) {
                var pn = partnerArr[idx][i];
                if (pn.id != playerDocArr[idx].id) {
                    isAfter ? head.push(pn) : tail.push(pn)
                }
                else {
                    isAfter = true
                }
            }
            var f = new PIXI.filters.ColorMatrixFilter()
            f.greyscale(1)
            var reOrder = head.concat(tail)
            for (var j = 0; j < reOrder.length; j++) {
                var pn = reOrder[j];
                var nt = nameArr[j]
                nt.text = pn.name
                idx == 0 ? nt.x = nt['x0'] - nt.width : nt;
                if (pn.isDead) {
                    // nt['bg'].filters = [f]
                    nt.style.fill = '#ddd'
                }
                else {
                    nt.style.fill = nt['fill']
                    // nt['bg'].filters = null
                }
            }
        }
        setPartner(0, this.nameArr1p)
        setPartner(1, this.nameArr2p)
    }

    _pFx(bloodArr: Array<PIXI.Sprite>, num) {
        for (var i = 0; i < bloodArr.length; i++) {
            var b = bloodArr[i];
            if (i < num) {
                b.visible = true
                blink3(b)
            }
            else
                b.visible = false
        }
    }

    setBlood(is1p, num) {
        is1p ? this._pFx(this.pointArr1p, num) : this._pFx(this.pointArr2p, num)
        var bFx
        is1p ? bFx = this.bloodFx1p : bFx = this.bloodFx2p
        TweenEx.to(bFx['msk'], 140 * (5 - num), { x: (5 - num) * 67 })
        if (num == 1) {
            bFx['blink'].visible = true
            blink2({ target: bFx['blink'], time: 70 })
        }
        else if (num == 0) {
            bFx['blink'].visible = false
            TweenEx.delayedCall(100, () => {
                bFx['blink'].visible = true
            })
        }
        else
            bFx['blink'].visible = false
    }

    setSt(is1p, st) {
        var st12;
        is1p ? st12 = this.st1p
            : st12 = this.st2p
        st12.setNum(st)
        new TweenEx(this.st1p)
            .to({ alpha: 1 }, 100)
            .start()
        new TweenEx(this.st2p)
            .to({ alpha: 1 }, 100)
            .start()
    }
    hideSt() {
        this.st1p.alpha = 0
        this.st2p.alpha = 0
    }

    setFoul(is1p, foul) {
        is1p ? this.foulPG1p.setNum(foul)
            : this.foulPG2p.setNum(foul)
        var fg;
        is1p ? fg = this.foulGlow1p
            : fg = this.foulGlow2p
        if (foul > 4) {
            fg.visible = true
            blink2({ target: fg, loop: Infinity })
        }
        else
            fg.visible = false
    }

    toggleTimer(state?) {
        this.timeText.toggleTimer(state)
    }

    resetTimer() {
        this.timeText.resetTimer()
    }

    setBeatBy(is1p, num) {
        var bt: PIXI.Text
        is1p ? bt = this.beatByNum1p
            : bt = this.beatByNum2p
        bt.text = 'BEAT BY 0' + num
    }

    showWinner(is1p: boolean) {
        this.winner.show(is1p)
    }

    showWinTeam(team) {
        this.winTeam.setTeam(team)
    }
}