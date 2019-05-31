import { BaseLowerThird } from './BaseLowerThird';
import { newBitmap } from '../../../utils/PixiEx';
import { imgLoader } from '../../../utils/ImgLoader';
import { TweenEx } from '../../../utils/TweenEx';
let img_left_url = '/img/panel/lowerThird/image_left.png'
export class LeftImage extends BaseLowerThird {
    lastVisible: boolean = false
    leftImg1: PIXI.Sprite
    showImage(data) {
        imgLoader.loadTexRemote(img_left_url, tex => {
            if (data.visible) {
                if (!this.leftImg1) {
                    this.leftImg1 = newBitmap({ url: img_left_url })
                    this.addChild(this.leftImg1)
                }
                if (!this.lastVisible) {
                    this.moveIn_type4(this)
                    this.lastVisible = true
                }
                this.show()
            }
            else {
                this.hide()
                this.lastVisible = false
            }
        })
    }
    moveIn_type4(ctn) {
        console.log('move in type 4')
        ctn.x = -310
        TweenEx.to(ctn, 200, { x: 0 }, _ => {
        })
    }
}