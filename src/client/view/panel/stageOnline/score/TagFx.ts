import { newBitmap } from "../../../utils/PixiEx";
import { imgLoader } from "../../../utils/ImgLoader";

export class TagFx extends PIXI.Container {
    p: any
    constructor(parent, data) {
        super()
        let imgArr = [
            '/img/panel/tagFx/bg.png',
            '/img/panel/tagFx/tag1_1.png',
            '/img/panel/tagFx/tag1_2.png',
            '/img/panel/tagFx/tag2_1.png',
            '/img/panel/tagFx/tag2_2.png',
            '/img/panel/tagFx/tag3_1.png',
            '/img/panel/tagFx/tag4_1.png',

            '/img/panel/tagFx/title1_1.png',
            '/img/panel/tagFx/title1_2.png',
            '/img/panel/tagFx/title2_1.png',
            '/img/panel/tagFx/title2_2.png',
            '/img/panel/tagFx/title3_1.png',
            '/img/panel/tagFx/title4_1.png',
        ]
        imgLoader.loadTexArr(imgArr, _ => {
            let bg = newBitmap({ url: '/img/panel/tagFx/bg.png' })
            this.addChild(bg)
            this.p = parent
            this.show(data)
        })
    }

    show(data) {
        this.p.addChild(this)
    }
}