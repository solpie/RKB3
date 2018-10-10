import { newBitmap } from '../../../utils/PixiEx';
export class MapSprite extends PIXI.Container {
    m = {}
    load(mapUrl) {
        for (let k in mapUrl) {
            let sp = newBitmap({ url: mapUrl[k] })
            this.m[k] = sp
        }
    }
    setKey(key) {
        this.removeChildren()
        let sp = this.m[key]
        if (sp) {
            this.addChild(sp)
        }
    }
}