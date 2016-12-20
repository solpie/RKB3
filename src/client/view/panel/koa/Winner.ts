import { ViewConst } from '../../const';
import { TweenEx } from '../../utils/TweenEx';
import { newBitmap, newWhiteMask } from '../../utils/PixiEx';
export class Winner extends PIXI.Container {
    spArr: Array<PIXI.Sprite>
    constructor(parent: PIXI.Container) {
        super()
        parent.addChild(this)
        this.hide()
        
        this.spArr = []
        let a = ['W', 'I', 'N', 'N', 'E', 'R']
        let px = [0, 20, -3, -3, -3, -6]
        for (var i = 0; i < a.length; i++) {
            var chr = a[i];
            var sp = newBitmap({ url: '/img/panel/koa/hp/' + chr + '.png' })
            sp.pivot = new PIXI.Point(0, 35)
            sp.y = sp.pivot.y
            sp.x = i * 65 + px[i]
            this.addChild(sp)
            this.spArr.push(sp)

            sp['white'] = newWhiteMask('/img/panel/koa/hp/' + chr + '.png')
            sp['white'].alpha = 0
            sp.addChild(sp['white'])
        }
    }

    show(is1p) {
        this.visible = false
        let spArrWidth = 72 * 6
        is1p ? this.x = 100
            : this.x = ViewConst.STAGE_WIDTH - spArrWidth - 100
        this.visible = true            
        let d1 = 70
        let d2 = 90
        let d3 = 70
        var isodd = true
        for (var i = 0; i < this.spArr.length; i++) {
            var sp = this.spArr[i];
            isodd ? sp.y = -60
                : sp.y = sp.height + 60
            TweenEx.to(sp, i * d1 + 5, { y: 0 }, (t) => {
                new TweenEx(t.target)
                    .delay(i * d1)
                    .call((t) => {
                        console.log('target', t);
                        new TweenEx(t.target.scale)
                            .to({ x: 1.5 }, d2)
                            .to({ x: 1 }, d3)
                            .start()
                        new TweenEx(t.target.white)
                            .to({ alpha: .2 }, d2 + 10)
                            .to({ alpha: 0 }, d3 + 20)
                            .to({ alpha: .1 }, 5)
                            .start()
                        new TweenEx(t.target.scale)
                            .to({ y: 1.5 }, d2)
                            .to({ y: 1 }, d3)
                            .start()
                    })
                    .start()
            })
            isodd = !isodd
        }
        TweenEx.delayedCall(3000, () => {
            is1p ? TweenEx.to(this, 50, { x: -spArrWidth })
                : TweenEx.to(this, 50, { x: ViewConst.STAGE_WIDTH })
        })
    }

    hide() {
        this.visible = false
    }
}