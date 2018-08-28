import { newBitmap } from "../../../../utils/PixiEx";

export class WorldWar extends PIXI.Container {
    constructor() {
        super()
        let bg = newBitmap({url:"/img/panel/worldWar/bg.png"})
        this.addChild(bg)
    }
}