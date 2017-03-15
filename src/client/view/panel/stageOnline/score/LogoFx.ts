import { paddy } from '../../../utils/JsFunc';
export class LogoFx extends PIXI.Container {
    mc: any
    constructor() {
        super()
        let alienImages = [];
        for (var i = 1; i < 19; i++) {
            alienImages.push('/img/panel/logo/logo_' + paddy(i, 5) + '.png')
        }
        let textureArray = [];

        for (let i = 0; i < alienImages.length; i++) {
            let texture = PIXI.Texture.fromImage(alienImages[i]);
            textureArray.push(texture);
        };

        let mc = new PIXI.extras['AnimatedSprite'](textureArray);
        mc.animationSpeed = .3
        mc.scale.x = mc.scale.y = 2
        mc.play()
        this.addChild(mc)
        console.log('mc', mc)
    }
    
    show() {
        this.mc.play()
    }
}