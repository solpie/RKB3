import { newBitmap } from '../../../utils/PixiEx';
import { getPreRoundPlayer } from "../../../utils/HupuAPI";
export class TopInfo extends PIXI.Container {

    constructor(parent) {
        super()
        parent.addChild(this)
        let bg = newBitmap({ url: '/img/panel/score2017/top.png' })
        this.addChild(bg)

        let progressText = new PIXI.Text
        progressText.style.fill = '#fff'
        progressText.style.fontSize = '40px'
        this.addChild(progressText)

        let roundText = new PIXI.Text
        roundText.style.fill = '#fff'
        roundText.style.fontSize = '40px'
        this.addChild(roundText)


        let gameId        
        this.setInfo = (t: string, r: string) => {
            console.log('setProgressInfo')
            if (!t) {
                getPreRoundPlayer(gameId, (res) => {
                    
                })
            }
            else
                progressText.text = t
            roundText.text = r
            this.visible = true
        }

        this.hide = () => {
            this.visible = false
        }
    }

    hide: () => void
    setInfo: (progressText: string, roundText: string) => void
}