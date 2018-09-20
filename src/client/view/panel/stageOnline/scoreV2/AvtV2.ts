import { newBitmap } from '../../../utils/PixiEx';
import { imgLoader } from '../../../utils/ImgLoader';
export class AvtV2 extends PIXI.Container {
    avt: PIXI.Sprite
    constructor(p) {
        super()
        this.avt = new PIXI.Sprite()
        this.avt.y = -3
        this.addChild(this.avt)
        let mask = newBitmap({ url: '/img/panel/group/v2/avtMask.png' })
        this.addChild(mask)
        this.avt.mask = mask
        this.addChild(newBitmap({ url: '/img/panel/group/v2/avtFg.png' }))
        p.addChild(this)
    }

    load(url) {
        imgLoader.loadTexRemote(url, _ => {
            let tex = imgLoader.getTex(url)
            let avt = this.avt
            avt.texture = tex
            let s = 90 / tex.width
            avt.scale.x = avt.scale.y = s
        })
    }
}