import { imgLoader } from '../../utils/ImgLoader';
import { newBitmap, setScale } from '../../utils/PixiEx';
export class MaskAvatar extends PIXI.Container {
    maskSp: PIXI.Sprite
    avtSp: PIXI.Sprite
    testSp: PIXI.Graphics
    constructor(maskUrl, callback?) {
        super()
        // imgLoader.loadTexArr([maskUrl], _ => {
        if (maskUrl) {
            this.maskSp = newBitmap({ url: maskUrl })
            this.addChild(this.maskSp)
            this.maskSp.visible = false
        }

        this.avtSp = new PIXI.Sprite()
        this.addChild(this.avtSp)

        if (callback)
            callback
    }
    xyw = []
    setAvtPos(x, y, width) {
        this.xyw = [x, y, width]
    }

    setTest(width, height, x, y) {
        if (this.maskSp)
            this.maskSp.visible = true
        this.testSp = new PIXI.Graphics()
        this.addChild(this.testSp)
        this.testSp.beginFill(0xffff00)
        this.testSp.drawRect(0, 0, width, height)
        this.testSp.x = x
        this.testSp.y = y
        this.testSp.alpha = 0.4
    }
    load(avtUrl) {
        imgLoader.loadTexRemote(avtUrl, tex => {
            this.avtSp.texture = imgLoader.getTex(avtUrl)
            setScale(this.avtSp, this.xyw[2] / this.avtSp.texture.width)
            this.avtSp.x = this.xyw[0]
            this.avtSp.y = this.xyw[1]
            if (this.maskSp)
                this.avtSp.mask = this.maskSp
        })
    }
}