import { loadImg } from './JsFunc';
export class ScaleSprite extends PIXI.Container {
    lt: PIXI.Sprite
    t: PIXI.Sprite
    rt: PIXI.Sprite
    r: PIXI.Sprite
    rb: PIXI.Sprite
    lb: PIXI.Sprite
    constructor(img: string, scaleRect: { x: number, y: number, width: number, height: number }) {
        super()
        loadImg('/img/panel/score2017/noticeBg.png', (img) => {
            let bt = new PIXI.BaseTexture(img)
            let _sp = (x, y, w, h) => {
                return new PIXI.Sprite(new PIXI.Texture(bt,
                    new PIXI.Rectangle(x, y, w, h)))
            }
            let lt = _sp(0, 0, scaleRect.x, scaleRect.y)
            this.addChild(lt)
            this.lt = lt

            this.t = _sp(scaleRect.x, 0, scaleRect.width, scaleRect.y)
            this.t.x = scaleRect.x
            this.addChild(this.t)

            let rt = _sp(scaleRect.x + scaleRect.width, 0, bt.width - scaleRect.x - scaleRect.width, scaleRect.y)
            rt.x = scaleRect.x + scaleRect.width
            this.addChild(rt)
            this.rt = rt

            this.r = _sp(scaleRect.x + scaleRect.width, scaleRect.y, bt.width - scaleRect.x - scaleRect.width, scaleRect.height)
            this.r.x = scaleRect.x + scaleRect.width
            this.r.y = scaleRect.y
            this.addChild(this.r)

            this.rb = _sp(scaleRect.x + scaleRect.width, scaleRect.y + scaleRect.height, bt.width - scaleRect.x - scaleRect.width, bt.height - scaleRect.y - scaleRect.height)
            this.rb.x = scaleRect.x + scaleRect.width
            this.rb.y = scaleRect.y + scaleRect.height
            this.addChild(this.rb)
        })
    }

    resize(width, height) {

    }
} 