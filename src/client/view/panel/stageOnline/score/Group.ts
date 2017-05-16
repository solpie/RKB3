import { getFtName } from './Com2017';
import { ViewConst } from '../../../const';
import { newBitmap } from '../../../utils/PixiEx';
export class Group extends PIXI.Container {
    groupText: PIXI.Text
    p: any
    playerTextArr: Array<PIXI.Text> = []
    constructor(parent) {
        super()
        this.p = parent
        let gt = this.groupText = new PIXI.Text
        gt.style.fill = '#fff'
        gt.style.fontSize = '40px'
        let bg = newBitmap({ url: '/img/panel/groupBg.png' })
        this.addChild(bg)
        bg.addChild(this.groupText)
        let xs = [20, 335, 365, 390]
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                let pt = new PIXI.Text
                pt.x = xs[j]
                pt.y = 155 + i * 45
                this.playerTextArr.push(pt)
            }
        }
        this.x = (ViewConst.STAGE_WIDTH - 400) * .5
        this.y = 300
    }

    show(group, playerArr) {
        this.groupText.text = group
        for (let i = 0; i < 4; i++) {
            let p = playerArr[i]
            let ptName = this.playerTextArr[i * 4]
            ptName.text = p.name
            let ptFt = this.playerTextArr[i * 4 + 1]
            ptFt.text = getFtName(p.groupId)
            let ptWin = this.playerTextArr[i * 4 + 2]
            ptWin.text = p.win
            let ptScore = this.playerTextArr[i * 4 + 3]
            ptScore.text = p.dtScore
        }
        this.p.addChild(this)
    }

    hide() {
        this.p.removeChild(this)
    }
}