import { blink3 } from './Fx';
import { newBitmap } from './PixiEx';
export enum Direction {
    e,
    w,
    s,
    n
}
export class SpriteGroup extends PIXI.Container {
    dir: Direction
    spArr: Array<PIXI.Sprite>
    constructor(options: { dir: Direction, invert: number, img: string, count: number,flip?:number }) {
        super()
        this.spArr = []
        let dir = options.dir || Direction.e
        let flip = options.flip || 1
        let count = options.count
        let invert = options.invert
        for (var i = 0; i < count; i++) {
            var sp = newBitmap({ url: options.img })
            if (dir == Direction.e){
                sp.x = i * options.invert
                sp.scale.x = flip
            }
            else if (dir == Direction.w) {
                sp.x = (count - 1 - i) * invert
                sp.scale.x = flip
            }
            else if (dir == Direction.s) {
                sp.y = i * invert
                sp.scale.y = flip
            }
            else if (dir == Direction.n) {
                sp.y = (count - 1 - i) * invert
                sp.scale.y = flip
            }
            this.spArr.push(sp)
            this.addChild(sp)
        }
    }

    setNum(num) {
        for (var i = 0; i < this.spArr.length; i++) {
            var sp = this.spArr[i];
            if (i < num)
                this.onShowPoint(sp)
            else
                this.onHidePoint(sp)
        }
    }

    onShowPoint(sp) {
        sp.visible = true
        blink3(sp)
    }
    onHidePoint(sp) {
        sp.visible = false
    }
}