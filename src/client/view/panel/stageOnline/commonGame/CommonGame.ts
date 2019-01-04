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
let urlBloodFrame = '/html/ww/bottomBlood/frame.png'
let urlLBlood = '/html/ww/bottomBlood/lBlood.png'
let urlRBlood = '/html/ww/bottomBlood/rBlood.png'
let urlFg = '/html/ww/bottomBlood/fg2.png'
let urlMask = '/html/ww/bottomBlood/avtMask.png'
const isTest = false
const urlBase = 'http://rtmp.icassi.us:8092/img/player/915/'
// class ___BloodPlayer extends PIXI.Container {
//     blood: number
//     initBlood: number
//     playerId: string
//     pName: Text2
//     isRight: Boolean
//     bloodMask: PIXI.Graphics
//     avt: PIXI.Sprite
//     kda: Text2

//     bloodText: Text2

//     constructor(parent, isRight = false) {
//         super()
//         this.isRight = isRight
//         this.addChild(newBitmap({ url: urlBloodFrame }))

//         let fg = newBitmap({ url: urlBloodFrame })
//         let blood;

//         this.bloodMask = new PIXI.Graphics()
//             .beginFill(0xff0000)

//         let ctn = new PIXI.Container()
//         this.addChild(ctn)

//         let avtMask = newBitmap({ url: urlMask })
//         ctn.addChild(avtMask)

//         this.avt = new PIXI.Sprite()
//         this.avt.x = 324
//         this.avt.y = 420
//         this.avt.mask = avtMask
//         ctn.addChild(this.avt)
//         // this.avt = new MaskAvatar(urlMask)
//         // this.addChild(this.avt)
//         let bs = {
//             fontFamily: FontName.dinCondensedC,
//             fontSize: "65px",
//             fontWeight: "",
//             stroke: '#333',
//             strokeThickness: 2,
//             fill: "#ddd"
//         };

//         this.bloodText = TextFac.new_(bs, this)
//             .setY(456)

//         if (isRight) {
//             this.bloodMask
//                 .drawRect(1015, 449, 400, 90)
//             fg.scale.x = -1
//             fg.x = 1920
//             ctn.x = 1173
//             blood = newBitmap({ url: urlRBlood })
//         }
//         else {
//             this.bloodMask
//                 .drawRect(505, 449, 400, 90)
//             blood = newBitmap({ url: urlLBlood })
//         }

//         this.addChild(blood)
//         blood.mask = this.bloodMask
//         this.addChild(this.bloodMask)

//         let ns = {
//             fontFamily: FontName.MicrosoftYahei,
//             fontSize: "45px",
//             fontWeight: "",
//             stroke: '#333',
//             strokeThickness: 2,
//             fill: "#ddd"
//         };

//         this.pName = TextFac.new_(ns, this)
//             .setY(459)

//         this.addChild(fg)

//         ns.fontSize = '30px'
//         this.kda = TextFac.new_(ns, this)
//             .setY(418)

//         parent.addChild(this)

//         if (isTest)
//             this.setInfo({ name: '黄玉军', bloodRaito: Math.random() })
//     }
//     isAvtLoaded = false
//     setInfo(data) {
//         if (data.name) {
//             this.pName.setText(data.name)
//                 .setAlignCenter(645)
//         }
//         if (data.bloodRaito != null) {
//             let bloodWidth = 400 * (1 - data.bloodRaito)
//             if (data.bloodRaito == 0) {
//                 bloodWidth = 397
//             }
//             if (this.isRight) {
//                 this.bloodMask.x = bloodWidth
//                 this.pName.setAlignCenter(_c(267))
//             }
//             else {
//                 this.bloodMask.x = -bloodWidth
//                 this.pName.setAlignCenter(_c(-267))
//             }
//         }
//         let curBlood;
//         if (data.curBlood != null) {
//             curBlood = data.curBlood
//         }
//         else if (data.blood != null) {
//             curBlood = data.blood
//         }
//         if (this.isRight)
//             this.bloodText.setText(curBlood)
//                 .setAlignCenter(_c(492))
//         else
//             this.bloodText.setText(curBlood)
//                 .setAlignCenter(_c(-492))

//         console.log('set info', data.cid);
//         let avtUrl = urlBase + data.playerId + '.png'
//         imgLoader.loadTexRemote(avtUrl, _ => {
//             this.avt.texture = imgLoader.getTex(avtUrl)
//             setScale(this.avt, 104 / this.avt.texture.width)
//         })
//     }
// }
const resetGameTime = 1 * 60 + 2// 7 * 60
const resetGameTime1min = 60 * 100 - 3 // 7 * 60
const resetBuzzerTime = 5 * 100// 20 * 100
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

    lBlood: Text2
    rBlood: Text2
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
        let f3 = this.preLoadFont(FontName.dinCondensedC)
        this.p.addChild(f3)
        let f2 = this.preLoadFont(FontName.DigiLED2)
        this.p.addChild(f2)
        let imgArr = [urlBg1
            , urlBloodFrame
            , urlLBlood
            , urlRBlood
            , urlFg
            , urlMask
        ]
        this.load(imgArr, _ => {
            let bg = new PIXI.Graphics()
                .beginFill(0x000000)
                .drawRect(0, 0, 1920, 1080)
            this.addChild(bg)
            this.addChild(newBitmap({ url: urlBg1 }))
            let lA = [], rA = []
            // for (let i = 0; i < 5; i++) {
            //     let lP = new ___BloodPlayer(this)
            //     lP.x = 0
            //     lP.y = i * 115
            //     lA.push(lP)

            //     let rP = new ___BloodPlayer(this, true)
            //     rP.x = 0
            //     rP.y = lP.y
            //     rA.push(rP)
            // }
            // this.lPlayerArr = lA
            // this.rPlayerArr = rA

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
                fontFamily: FontName.dinCondensedC,
                fontSize: "80px",
                fontWeight: "bold",
                fill: "#ddd"
            };
            ns.fill = '#d76102'
            this.lFoul = TextFac.new_(ns, this)
                .setY(300 - 62)
                .setText("0")
                .setAlignCenter(_c(-133))

            this.rFoul = TextFac.new_(ns, this)
                .setY(this.lFoul.y)
                .setText("0")
                .setAlignCenter(_c(133))

            ns.fontSize = "120px"
            ns.fill = '#ddd'
            this.lBlood = TextFac.new_(ns, this)
                .setY(218 - 37 - 62)
                .setText("0")
                .setAlignCenter(_c(-280))

            this.rBlood = TextFac.new_(ns, this)
                .setY(this.lBlood.y)
                .setText("0")
                .setAlignCenter(_c(280))

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
            ns.fontSize = '140px'


            this.gameTimer = new TextTimer('', ns)
            this.gameTimer.isMin = true
            this.gameTimer.resetTime = resetGameTime
            this.gameTimer.setTimeBySec(resetGameTime)
            this.gameTimer.x = 640 + 50
            this.gameTimer.y = 400
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
            this.addChild(this.gameTimer1min)



            this.buzzerTimer = new TextTime10ms('', ns)
            this.buzzerTimer.isMin = true
            this.buzzerTimer.isSecOnly = true
            this.buzzerTimer.resetTime = resetBuzzerTime
            this.buzzerTimer.on('timeout', _ => {
                console.log('buzzer timer timeout')
                this.timer10ms.pauseTimer()
            })
            this.buzzerTimer.setTimeBySec(resetBuzzerTime)
            this.buzzerTimer.x = 640 + 50
            this.buzzerTimer.y = 676
            this.addChild(this.buzzerTimer)


            this.timer10ms = new TextTime10ms('', ns)
            this.timer10ms.isMin = true

            this.timer10ms.setTimeBySec(8 * 60 * 60 * 100)
            this.timer10ms.on('tick', _ => {
                console.log('10 ms tick')
                if (this.gameTimer.visible)
                    this.gameTimer.tick(0.01)
                if (this.gameTimer1min.visible)
                    this.gameTimer1min.tick(1)
                this.buzzerTimer.tick()
            })

        })
    }

    setBuzzerTimerEvent(data) {
        console.log('game timer');
        if (data.event == TimerEvent.TOGGLE) {
            this.timer10ms.setTimerEvent(data)
        }
        else {
            this.buzzerTimer.setTimerEvent(data);
        }
    }

    _show(data) {
        if (data.cid == CommandId.sc_setFoul) {
            this.lFoul.setText(data.lFoul)
                .setAlignCenter(805)
            this.rFoul.setText(data.rFoul)
                .setAlignCenter(1146)
        }


        if (data.cid == CommandId.sc_timerEvent_buzzer) {
            this.setBuzzerTimerEvent(data)
        }

        if (data.cid == CommandId.sc_setPlayer) {
            this.lBlood.setText(data.leftPlayer.blood)
                .setAlignCenter(_c(-300))
            this.rBlood.setText(data.rightPlayer.blood)
                .setAlignCenter(_c(300))

            this.lFoul.setText(0)
                .setAlignCenter(_c(-133))
            this.rFoul.setText(0)
                .setAlignCenter(_c(133))

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

            // this._fillBlood(data.leftTeam, this.lPlayerArr, data.leftPlayer)
            // this._fillBlood(data.rightTeam, this.rPlayerArr, data.rightPlayer)
        }
        // if (data.cid == CommandId.sc_timeOut) {
        //     this.lTimeoutMaskArr[0].visible = data.lTimeOut < 2
        //     this.lTimeoutMaskArr[1].visible = data.lTimeOut < 1

        //     this.rTimeoutMaskArr[0].visible = data.rTimeOut < 2
        //     this.rTimeoutMaskArr[1].visible = data.rTimeOut < 1
        // }

        this.p.addChild(this)
    }
}
let canvasStage
declare let io;
class CommonGameView extends VueBase {
    protected mounted() {
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
    }
}
export let commonGame = new CommonGameView()
