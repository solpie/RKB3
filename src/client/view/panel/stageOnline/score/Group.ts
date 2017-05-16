import { getFtName } from './Com2017';
import { ViewConst } from '../../../const';
import { loadRes, newBitmap, imgToTex } from '../../../utils/PixiEx';
export class Group extends PIXI.Container {
    groupText: PIXI.Text
    p: any
    playerTextArr: Array<PIXI.Text> = []
    avatarArr: Array<PIXI.Sprite> = []
    constructor(parent) {
        super()
        this.p = parent
        let modal = new PIXI.Graphics().drawRect(0, 0, ViewConst.STAGE_WIDTH, ViewConst.STAGE_HEIGHT)
        modal.alpha = 0.8
        this.addChild(modal)
        let gt = this.groupText = new PIXI.Text
        gt.style.fill = '#fff'
        gt.style.fontSize = '50px'
        gt.x = 345
        gt.y = 170
        let bg = newBitmap({ url: '/img/panel/group/bg.png' })
        this.addChild(bg)
        bg.addChild(this.groupText)
        let xs = [100, 525, 835, 990]
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                let pt = new PIXI.Text
                pt.x = xs[j]
                pt.y = 262 + i * 80
                pt.style.fontSize = '35px'
                pt.style.fontWeight = 'bold'
                this.playerTextArr.push(pt)
                bg.addChild(pt)
            }
            let avt = new PIXI.Sprite()
            avt.y = 252 + i * 80
            avt.x = 20
            bg.addChild(avt)
            this.avatarArr.push(avt)
        }
        bg.x = (ViewConst.STAGE_WIDTH - 1200) * .5
        bg.y = 280
    }

    show(group, playerArr) {
        this.groupText.text = group.toLocaleUpperCase() + '组'
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
            let avt = this.avatarArr[i]
            loadRes(p.avatar, (img) => {
                avt.texture = imgToTex(img)
                // avt.width
                let s = 60 / img.width
                // avt.x = avt.mask.x - avt.texture.width * .5 * s
                // avt.y = avt.mask.y - avt.texture.height * .5 * s
                avt.scale.x = avt.scale.y = s
            }, true);
        }

        this.p.addChild(this)
    }

    hide() {
        this.p.removeChild(this)
    }
}