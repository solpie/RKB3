import { cnWrap } from '../../../utils/JsFunc';
import { proxy } from '../../../utils/WebJsFunc';
import { RollFx } from './RollFx';
import { fitWidth } from '../bracket/BracketGroup';
import { FontName, ViewConst } from '../../../const';
import { imgToTex, loadRes, newBitmap, PIXI_MOUSE_EVENT, setPivot } from '../../../utils/PixiEx';
import { RandomFx } from './RandomFx';
// import { nameArr } from './testName';
declare let $;
export class Lottery extends PIXI.Container {
    nameArr: Array<string>
    fxArr: Array<RandomFx>
    isRunning: Boolean
    titleText: PIXI.Text
    resultPreviewText: PIXI.Text
    stateText: PIXI.Text
    fxCtn: PIXI.Container

    pinRCtn: PIXI.Container
    pinLCtn: PIXI.Container
    pinL: PIXI.Sprite
    pointL: PIXI.Sprite
    pinR: PIXI.Sprite
    pointR: PIXI.Sprite

    fx: RollFx
    rewardCtn: PIXI.Container
    //中奖次序
    k: number

    id: any
    constructor(parent, k, id) {
        super()
        this.k = k
        this.id = id
        parent.addChild(this)
        let modal = new PIXI.Graphics()
        modal.beginFill(0, .8)
            .drawRect(0, 0, ViewConst.STAGE_WIDTH, ViewConst.STAGE_HEIGHT)
        this.addChild(modal)

        this.fxCtn = new PIXI.Container()
        this.addChild(this.fxCtn)
        let modal2 = new PIXI.Graphics()
        modal2.beginFill(0, .6)
            .drawRect(0, 0, ViewConst.STAGE_WIDTH, ViewConst.STAGE_HEIGHT)
        this.addChild(modal2)

        let bg = newBitmap({ url: '/img/panel/lottery/bg.png' })
        this.addChild(bg)

        this.titleText = new PIXI.Text('')
        this.titleText.style.fontFamily = FontName.MicrosoftYahei
        this.titleText.style.fill = 0xffffff
        this.titleText.style.fontSize = '70px'
        this.titleText.style.fontWeight = 'bold'
        this.addChild(this.titleText)

        this.stateText = new PIXI.Text('START')
        this.stateText.style.fontFamily = FontName.MicrosoftYahei
        this.stateText.style.fill = 0xffffff
        this.stateText.style.fontSize = '40px'
        this.stateText.style.fontWeight = 'bold'
        this.stateText.visible = false
        this.stateText.x = 905
        this.stateText.y = 890
        this.addChild(this.stateText)

        // this.resultPreviewText = new PIXI.Text('???')
        // this.resultPreviewText.style.fill = 0xff0000
        // this.resultPreviewText.x = 2000
        // this.resultPreviewText.y = 1200
        // this.addChild(this.resultPreviewText)

        this.pinLCtn = new PIXI.Container
        this.pinLCtn.x = 742
        this.pinLCtn.y = 761
        this.addChild(this.pinLCtn)

        this.pinRCtn = new PIXI.Container
        this.pinRCtn.x = 1200
        this.pinRCtn.y = 765
        this.addChild(this.pinRCtn)

        this.pointL = newBitmap({ url: '/img/panel/lottery/pointL.png' })
        this.pointL.x = -21
        this.pointL.y = -42
        // this.pointL.alpha =.3
        this.pinLCtn.addChild(this.pointL)
        this.pinL = newBitmap({ url: '/img/panel/lottery/pinL.png' })
        this.pinL.x = this.pinLCtn.x + this.pointL.x
        this.pinL.y = this.pinLCtn.y + this.pointL.y
        this.addChild(this.pinL)

        this.pointR = newBitmap({ url: '/img/panel/lottery/pointR.png' })
        this.pointR.x = -81
        this.pointR.y = -42
        // this.pointR.alpha =.3
        this.pinRCtn.addChild(this.pointR)
        this.pinR = newBitmap({ url: '/img/panel/lottery/pinR.png' })
        this.pinR.x = this.pinRCtn.x + this.pointR.x
        this.pinR.y = this.pinRCtn.y + this.pointR.y
        this.addChild(this.pinR)


        this.fx = new RollFx()
        this.fx.x = 785
        this.fx.y = 560
        this.addChild(this.fx)
        // let p1 = new PIXI.Graphics
        // p1.beginFill(0xffff00)
        //     .drawRect(0, 0, 2, 2)
        // this.pinRCtn.addChild(p1)
        this.rewardCtn = new PIXI.Container
        // this.rewardCtn.x = 430
        // this.rewardCtn.y = 270
        // let b = newBitmap({ url: '/img/panel/lottery/reward.png' })
        // b.x = 420
        // this.rewardCtn.addChild(b)

        this.addChild(this.rewardCtn)

        window.onkeyup = (e) => {
            console.log(e)
            if (e.key == 'Enter') {
                console.log(e, this)
                if (this.nameArr) {
                    // let arr = this.nameArr
                    // this.setResult(arr, arr[Math.floor(Math.random() * arr.length)])
                    // this.fxArr[1].alpha = 0
                    // this.fxCtn.addChild(this.fxArr[1])
                }
                // this.isRunning ? this.stop()
                //     : this.start()
            }
            else if (e.key == 'Down') {

            }
            // console.log(e)
        }
        window.onmouseup = (e) => {
            let mx = e.clientX
            let my = e.clientY
            let t = this.stateText
            if (mx > t.x && mx < t.x + t.width && my > t.y && my < t.y + t.height) {
                this.isRunning ? this.stop()
                    : this.start()
            }
        }
        this.getResult(id)
        //test
        // this.test()
        // this.start()
    }
    test() {
        // this.setResult(nameArr, '东南西北抽中东南西北抽中')
        this.setTitle('哈登第二代ad战靴', null)
    }
    getResult(id, callback?) {
        //http
        $.get(proxy('http://api.liangle.com/api/lot/list/' + id), (res) => {
            console.log(res.data)
            if (res.data.list && this.k) {
                let resultName = ''
                if (Number(this.k) == 0) {
                    let arr = res.data.list
                    resultName = arr[Math.floor(Math.random() * arr.length)]
                }
                if (res.data.winner.length) {
                    resultName = res.data.winner[Number(this.k) - 1]
                    resultName = cnWrap(resultName, 20, 20).replace('\n', '')
                }
                // this.resultPreviewText.text = resultName
                this.setResult(res.data.list, resultName)
                this.stateText.visible = true
                this.setTitle(res.data.title, res.data.img)
                if (callback)
                    callback()
            }
        })
    }
    rewardImg: PIXI.Sprite
    setTitle(title, rewardImgArr) {
        this.titleText.text = title
        fitWidth(this.titleText, 765, 115)
        this.titleText.x = 960 - this.titleText.width * .5
        this.titleText.y = 165 - this.titleText.height * .5
        this.rewardImg = new PIXI.Sprite()
        this.rewardCtn.addChild(this.rewardImg)
        loadRes(rewardImgArr, (img) => {
            let avt = this.rewardImg
            avt.texture = imgToTex(img)
            avt.x = 960 - img.width * .5
            avt.y = 460 - img.height * .5
        }, true);
    }

    rotTimer: any
    rotFx() {
        this.rotTimer = setInterval(() => {
            this.pinLCtn.rotation = (Math.random() * 30 * PIXI.DEG_TO_RAD)
            this.pinRCtn.rotation = ((-25 + Math.random() * 45) * PIXI.DEG_TO_RAD)
        }, 50)
    }

    setResult(nameArr1, name) {
        this.isRunning = false
        let resultIdx = 1
        if (!this.fxArr) {
            this.fxArr = []
            this.nameArr = nameArr1
            for (var i = 0; i < 20; i++) {
                let rf = new RandomFx(this.nameArr)
                rf.x = i * 20 + Math.random() * 100
                rf.y = i * 40 + Math.random() * 100
                this.fxCtn.addChild(rf)
                if (i == resultIdx) {
                    rf.result = name
                    rf.resultCtn = this
                    // this.addChild(rf)    
                    rf.nameText.style.fontSize = '50px'
                }
                this.fxArr.push(rf)
            }
        }
        else {
            this.fxArr[resultIdx].result = name
        }
    }

    reset(name) {
        this.isRunning = false
    }

    start() {
        this.getResult(this.id, _ => {
            for (var i = 0; i < this.fxArr.length; i++) {
                var f = this.fxArr[i];
                f.start()
            }
            this.rotFx()
            this.fx.playOne()

            this.isRunning = true
            this.stateText.text = ' STOP '
        })
    }

    stop() {
        for (var i = 0; i < this.fxArr.length; i++) {
            var f = this.fxArr[i];
            f.stop()
        }

        clearInterval(this.rotTimer)
        this.pinLCtn.rotation = (70 * PIXI.DEG_TO_RAD)
        this.pinRCtn.rotation = ((-65) * PIXI.DEG_TO_RAD)
        this.fx.stop()
        this.stateText.text = '  '
    }

}