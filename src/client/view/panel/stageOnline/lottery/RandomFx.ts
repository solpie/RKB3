import { fitWidth } from '../bracket/BracketGroup';
import { FontName, ViewConst } from '../../../const';
import { TweenEx } from '../../../utils/TweenEx';
export class RandomFx extends PIXI.Container {
    mc: any
    nameArr: Array<string>
    nameText: PIXI.Text
    timer: any
    result: string = ''
    resultCtn: PIXI.Container


    constructor(nameArr) {
        super()
        this.nameArr = nameArr
        this.nameText = new PIXI.Text('')
        this.nameText.style.fontFamily = FontName.MicrosoftYahei
        this.nameText.style.fill = 0xffffff
        this.addChild(this.nameText)
    }

    _x: number
    _y: number
    start() {
        let arr = this.nameArr
        if (!this._x) {
            this._x = this.x
            this._y = this.y
        }
        this.alpha = 1
        // this.x = ViewConst.STAGE_WIDTH * .5
        // this.y = ViewConst.STAGE_WIDTH * .5
        // TweenEx.to(this, 200, { x: this._x, y: this._y }, () => {

        // })

        this.timer = setInterval(() => {
            let name = arr[Math.floor(Math.random() * arr.length)]
            this.nameText.text = name
            this.x = this._x + Math.random() * 100 + (this.x) % 1000
            this.y = this._y + Math.random() * 100
            this.scale.x =
                this.scale.y = 1 + Math.random() * .8
        }, 40)
    }
    // reset() {

    // }
    stop() {
        // this.x = this._x
        // this.y = this._y
        clearInterval(this.timer)
        let cx = 970 - this.nameText.width * .5
        let cy = 760 - this.nameText.height * .5
        TweenEx.to(this, 100, { x: cx, y: cy }, () => {
            if (this.result != "") {
                this.nameText.text = this.result
                fitWidth(this.nameText, 377, 75)
                this.scale.x = this.scale.y = 1
                this.nameText.x = 970 - this.nameText.width * .5
                this.nameText.y = 760 - this.nameText.height * .5

                if (this.resultCtn)
                    this.resultCtn.addChild(this.nameText)
            }
            else {
                this.alpha = 0
            }
        })
    }
}