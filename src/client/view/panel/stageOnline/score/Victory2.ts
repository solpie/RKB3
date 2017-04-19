import { newBitmap } from '../../../utils/PixiEx';
function polygon(g: PIXI.Graphics, radius, sides) {
    if (sides < 3) return;
    var a = (Math.PI * 2) / sides;
    g.moveTo(radius, 0);
    for (var i = 1; i < sides; i++) {
        g.lineTo(radius * Math.cos(a * i), radius * Math.sin(a * i));
    }
}
export class Victory2 extends PIXI.Container {
    ctn: PIXI.Container
    constructor() {
        super()
        let g = newBitmap({ url: '/img/panel/victory2017/guide.png' })
        this.addChild(g)
        this.ctn = new PIXI.Container
        this.addChild(this.ctn)
        this.ctn.y = 366
        let ctn = this.ctn

        //
        let bg = newBitmap({ url: '/img/panel/victory2017/bg.png' })
        ctn.addChild(bg)
        //605 58
        let avtFrame = new PIXI.Graphics()
        ctn.addChild(avtFrame)
        avtFrame.lineStyle(2, 0xff0000)
        polygon(avtFrame, 64, 6)

        avtFrame.x = 635
        avtFrame.y = 187

    }
}