import { paddy } from '../../../utils/JsFunc';
export class ScoreFx extends PIXI.Container {
    mc: any
    constructor() {
        super()
        let alienImages = [];
        for (var i = 1; i < 11; i++) {
            alienImages.push('/img/fx/score/FX_' + paddy(i, 2) + '.png')
        }
        let textureArray = [];

        for (let i = 0; i < alienImages.length; i++) {
            let texture = PIXI.Texture.fromImage(alienImages[i]);
            textureArray.push(texture);
        };

        let mc = new PIXI.extras['AnimatedSprite'](textureArray);
        mc.animationSpeed = .3
        mc.loop = false;
        // mc.scale.x = mc.scale.y = 2
        // mc.play()
        this.addChild(mc)
        this.mc = mc
        console.log('mc', mc)
    }

    show() {
        this.mc.play()
    }
    playOne() {
        this.mc.gotoAndStop(0)
        this.mc.play()
    }
}