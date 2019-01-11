export class BaseLowerThird extends PIXI.Container {
    p: any
    constructor(parent) {
        super()
        this.p = parent
    }
    show() {
        this.p.addChild(this)
    }
    hide() {
        if (this.parent)
            this.parent.removeChild(this)
    }
}