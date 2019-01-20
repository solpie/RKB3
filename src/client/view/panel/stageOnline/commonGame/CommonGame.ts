import { CommandId } from '../../../Command';
import { FontName, PanelId, TimerEvent } from '../../../const';
import { imgLoader } from '../../../utils/ImgLoader';
import { newBitmap, setScale, _c } from '../../../utils/PixiEx';
import { Text2, TextFac } from '../../../utils/TextFac';
import { BasePanel, showPanel } from '../../base/BasePanel';
import { BasePanelView } from '../../BasePanelView';
import { TextTimer, TextTime10ms } from '../../../utils/TextTimer';
import { VueBase } from '../../../utils/VueBase';
let urlBg1 = '/html/ww/bottomBlood/commonGameBg.png'
let urlFg = '/html/ww/bottomBlood/fg2.png'
let urlMask = '/html/ww/bottomBlood/avtMask.png'
const isTest = false
const urlBase = 'http://rtmp.icassi.us:8092/img/player/915/'
const resetGameTime = 20 * 60
const resetGameTime1min = 60 * 100
const resetBuzzerTime = 14 * 100

let buzzer;
export class CommonGame extends BasePanel {
    static cls = 'CommonGame'
    lAvt: PIXI.Sprite
    rAvt: PIXI.Sprite

    // lPlayerArr: Array<___BloodPlayer>
    // rPlayerArr: Array<___BloodPlayer>
    lTimeoutMask: PIXI.Graphics
    lTimeoutMaskArr: Array<PIXI.Graphics>
    rTimeoutMaskArr: Array<PIXI.Graphics>
    rTimeoutMask: PIXI.Graphics

    lScore: Text2
    rScore: Text2
    lFoul: Text2
    rFoul: Text2
    lName: Text2
    rName: Text2

    gameTimer: TextTimer
    gameTimer1min: TextTimer
    buzzerTimer: TextTime10ms

    timer10ms: TextTime10ms
    preLoadFont(fontName) {
        let t = new PIXI.Text('', {
            fontFamily: fontName,
        })
        t.text = '0'
        t.alpha = 0
        return t
    }
    create() {
        console.log('scroll text creat1e');
        let f3 = this.preLoadFont(FontName.Industry)
        this.p.addChild(f3)
        let f2 = this.preLoadFont(FontName.DigiLED2)
        this.p.addChild(f2)
        let imgArr = [urlBg1
            , urlFg
            , urlMask
        ]
        this.load(imgArr, _ => {
            let bg = new PIXI.Graphics()
                .beginFill(0x000000)
                .drawRect(0, 0, 1920, 1080)
            this.addChild(bg)
            this.addChild(newBitmap({ url: urlBg1 }))

            this.lTimeoutMaskArr = []
            this.rTimeoutMaskArr = []
            let tm = new PIXI.Graphics()
                .beginFill(0x020206)
                .drawRect(600, 145 - 62, 130, 50)
            this.addChild(tm)
            this.lTimeoutMaskArr.push(tm)

            tm = new PIXI.Graphics()
                .beginFill(0x020206)
                .drawRect(730, 145 - 62, 130, 50)
            this.addChild(tm)
            this.lTimeoutMaskArr.push(tm)

            tm = new PIXI.Graphics()
                .beginFill(0x020206)
                .drawRect(1190, 145 - 62, 130, 50)
            this.addChild(tm)
            this.rTimeoutMaskArr.push(tm)

            tm = new PIXI.Graphics()
                .beginFill(0x020206)
                .drawRect(1060, 145 - 62, 130, 50)
            this.addChild(tm)
            this.rTimeoutMaskArr.push(tm)

            let ns = {
                fontFamily: FontName.Industry,
                fontSize: "140px",
                fontWeight: "normal",
                fill: "#ddd"
            };
            ns.fill = '#d76102'
            this.lFoul = TextFac.new_(ns, this)
                .setY(180)
                .setText("0")
                .setAlignCenter(_c(-140))

            this.rFoul = TextFac.new_(ns, this)
                .setY(this.lFoul.y)
                .setText("0")
                .setAlignCenter(_c(150))

            ns.fontSize = "160px"
            ns.fill = '#ddd'
            this.lScore = TextFac.new_(ns, this)
                .setY(80)
                .setText("0")
                .setAlignCenter(_c(-290))

            this.rScore = TextFac.new_(ns, this)
                .setY(this.lScore.y)
                .setText("0")
                .setAlignCenter(_c(290))

            this.lAvt = new PIXI.Sprite()
            this.addChild(this.lAvt)

            this.rAvt = new PIXI.Sprite()
            this.addChild(this.rAvt)

            this.addChild(newBitmap({ url: urlFg }))



            ns.fontFamily = FontName.MicrosoftYahei
            ns.fontSize = "43px"
            this.lName = TextFac.new_(ns, this)
                .setText('')
                .setY(315 - 62)
                .setAlignCenter(_c(-516))

            this.rName = TextFac.new_(ns, this)
                .setText('')
                .setY(this.lName.y)
                .setAlignCenter(_c(516))


            ns.fontFamily = FontName.DigiLED2
            ns.fontWeight = "normal"
            ns.fontSize = '130px'


            this.gameTimer = new TextTimer('', ns)
            this.gameTimer.isMin = true
            this.gameTimer.resetTime = resetGameTime
            this.gameTimer.setTimeBySec(resetGameTime)
            this.gameTimer.x = 640 + 90
            this.gameTimer.y = 450
            this.gameTimer.on('tick', sec => {
                if (sec < 61) {
                    this.gameTimer1min.visible = true
                    this.gameTimer.visible = false
                }
            })
            this.addChild(this.gameTimer)

            this.gameTimer1min = new TextTime10ms('', ns)
            this.gameTimer1min.isMin = true
            this.gameTimer1min.isSecOnly = true
            this.gameTimer1min.resetTime = resetGameTime1min
            // this.gameTimer1min.on('timeout', _ => {
            //     console.log('buzzer timer timeout')
            // })
            this.gameTimer1min.setTimeBySec(resetGameTime1min)
            // this.gameTimer1min.x = 240
            // this.gameTimer1min.y = 400
            this.gameTimer1min.visible = false
            this.gameTimer1min.x = this.gameTimer.x
            this.gameTimer1min.y = this.gameTimer.y
            // this.gameTimer1min.on('timeout', _ => {
            //     buzzer.play();
            // })
            this.addChild(this.gameTimer1min)


            ns.fill = '#ad1515'
            this.buzzerTimer = new TextTime10ms('', ns)
            this.buzzerTimer.isMin = true
            this.buzzerTimer.isSecOnly = true
            this.buzzerTimer.resetTime = resetBuzzerTime
            this.buzzerTimer.on('timeout', _ => {
                console.log('buzzer timer timeout')
                if (this.gameTimer.timeInSec < 61 ||
                    this.gameTimer1min.timeInSec<60*100)
                    this.timer10ms.pauseTimer()
                buzzer.play();
            })
            this.buzzerTimer.setTimeBySec(resetBuzzerTime)
            this.buzzerTimer.x = this.gameTimer.x
            this.buzzerTimer.y = 676 + 50
            this.addChild(this.buzzerTimer)


            this.timer10ms = new TextTime10ms('', ns)
            this.timer10ms.isMin = true
            this.timer10ms.minUnit = 1
            this.gameTimer1min.minUnit = 10
            this.buzzerTimer.minUnit = 10

            this.timer10ms.setTimeBySec(8 * 60 * 60 * 1000)
            this.timer10ms.on('tick', _ => {
                // console.log('10 ms tick')
                if (this.gameTimer.visible)
                    this.gameTimer.tick(0.101)
                if (this.gameTimer1min.visible)
                    this.gameTimer1min.tick(100)
                if (!this.isBlockBuzzer)
                    this.buzzerTimer.tick(100)
            })

        })
    }
    isBlockBuzzer = false
    setBuzzerTimerEvent(data) {
        console.log('setBuzzerTimerEvent');
        if (data.event == TimerEvent.TOGGLE) {
            this.isBlockBuzzer = false
            this.buzzerTimer.isTimeOut = false
            this.timer10ms.setTimerEvent(data)
        }
        else {
            if (data.isToggle) {
                this.isBlockBuzzer = !this.isBlockBuzzer
                if (!this.isBlockBuzzer)
                    this.buzzerTimer.isTimeOut = false
            }
            this.buzzerTimer.setTimerEvent(data);
        }
    }
    setGameTimerEvent(data) {
        console.log('setGameTimerEvent');
        if (data.event == TimerEvent.SETTING) {
            let secOr10ms = Number(data.param)
            if (data.isSec) {
                this.gameTimer.visible = true
                this.gameTimer1min.visible = false
                this.gameTimer.setTimeBySec(secOr10ms)
                this.gameTimer1min.setTimeBySec(resetGameTime1min)
            }
            else {
                this.gameTimer1min.visible = true
                this.gameTimer.visible = false
                this.gameTimer1min.setTimeBySec(secOr10ms)
            }
            this.gameTimer.setTimerEvent(data)
        }
    }
    setScoreFoulEvent(data) {
        this.lFoul.setText(data.lFoul)
            .setAlignCenter(_c(-140))
        this.rFoul.setText(data.rFoul)
            .setAlignCenter(_c(150))
        this.lScore.setText(data.lScore)
            .setAlignCenter(_c(-290))
        this.rScore.setText(data.rScore)
            .setAlignCenter(_c(290))
    }
    _show(data) {
        if (data.cid == CommandId.sc_timerEvent_buzzer) {
            this.setBuzzerTimerEvent(data)
        }
        if (data.cid == CommandId.sc_timerEvent_common) {
            this.setGameTimerEvent(data)
        }
        if (data.cid == CommandId.sc_scoreFoul_common) {
            this.setScoreFoulEvent(data)
        }

        if (data.cid == CommandId.sc_setPlayer) {
            // this.lScore.setText(data.leftPlayer.blood)
            //     .setAlignCenter(_c(-300))
            // this.rScore.setText(data.rightPlayer.blood)
            //     .setAlignCenter(_c(300))

            // this.lFoul.setText(0)
            //     .setAlignCenter(_c(-133))
            // this.rFoul.setText(0)
            //     .setAlignCenter(_c(133))

            this.lName.setText(data.leftPlayer.name)
                .setAlignCenter(_c(-516))
            this.rName.setText(data.rightPlayer.name)
                .setAlignCenter(_c(516))

            let lAvtUrl = urlBase + data.leftPlayer.playerId + '.png'
            this.lAvt.x = 351
            this.lAvt.y = 144 - 62
            imgLoader.loadTexRemote(lAvtUrl, _ => {
                this.lAvt.texture = imgLoader.getTex(lAvtUrl)
                setScale(this.lAvt, 190 / this.lAvt.texture.width)
            })

            this.rAvt.x = 1380
            this.rAvt.y = this.lAvt.y
            let rAvtUrl = urlBase + data.rightPlayer.playerId + '.png'
            imgLoader.loadTexRemote(rAvtUrl, _ => {
                this.rAvt.texture = imgLoader.getTex(rAvtUrl)
                setScale(this.rAvt, 190 / this.rAvt.texture.width)
            })

        }
        this.p.addChild(this)
    }
}
let canvasStage
declare let io;
class CommonGameView extends VueBase {
    protected mounted() {
        buzzer = new Audio('/sound/buzzer.mp3');
        console.log('mouted commonGame view');
        if (!canvasStage)
            canvasStage = BasePanelView.initPixi()
        showPanel(CommonGame, { visible: true }, canvasStage)
        let localWs = io.connect(`/${PanelId.rkbPanel}`)
        localWs.on('connect', (msg) => {
            console.log('connect', window.location.host)
        })

        let _adept = (event) => {
            localWs.on(event, data => {
                data.cid = event
                data.visible = true
                console.log(event, data)
                showPanel(CommonGame, data, canvasStage)
            })
        }
        _adept(CommandId.sc_timerEvent_buzzer)
        _adept(CommandId.sc_timerEvent_common)
        _adept(CommandId.sc_scoreFoul_common)
        _adept(CommandId.sc_setPlayer)
    }
}
export let commonGame = new CommonGameView()
