import { newModal } from "../../../utils/PixiEx";
import { FramesFx } from "../../../utils/FrameFx";

export class StudioPanel extends PIXI.Container {
    p: any
    fx: FramesFx
    l2m: FramesFx
    bottle: FramesFx
    constructor(parent) {
        super()
        this.p = parent
        console.log('new studio panel');
        // this.addChild(newModal(0.8))
        this.p.addChild(this)

        let m2l = new FramesFx('/img/fx/logo/m2l_', 0, 12)
        this.fx = m2l
        m2l.setSpeed(0.28)
        this.addChild(m2l)

        let l2m = new FramesFx('/img/fx/logo/l2m/l2m_', 0, 15)
        this.fx = l2m
        l2m.setSpeed(0.28)
        this.addChild(l2m)
        // l2m.show()
        l2m.visible = false
        m2l.visible = false
        let isl2m = false
        let turn = () => {
            isl2m = !isl2m
            if (isl2m) {
                l2m.visible = true
                m2l.visible = false
                l2m.playOnce()
            }
            else {
                m2l.visible = true
                l2m.visible = false
                m2l.playOnce()
            }
        }
        turn()
        setInterval(_ => {
            turn()
        }, 30000)

        let bt = new FramesFx('/img/fx/mizone/bottle/bt_', 0, 52)
        this.bottle = bt
        bt.setSpeed(0.28)
        this.addChild(bt)
    }

    showBottle() {
        this.bottle.visible = true        
        this.bottle.playOnce()
        setTimeout(_ => {
            this.bottle.visible = false
        }, 6000)
    }
}