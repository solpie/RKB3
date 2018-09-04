import { imgLoader } from '../../utils/ImgLoader';
export class BasePanel extends PIXI.Container {
    p: any
    isLoaded: boolean
    constructor(parent) {
        super()
        this.p = parent;
    }
    load(imgArr, callback) {
        imgLoader.loadTexArr(imgArr, _ => {

        })
    }
    show(data) {
        this.p.addChild(this)
    }
    hide(data) {
        if (this.parent)
            this.parent.removeChild(this)
    }
}