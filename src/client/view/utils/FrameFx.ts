import { paddy } from './JsFunc';
export class FramesFx extends PIXI.Container {
    mc: any
    constructor(imgUrlBase, from, to, numPad = 2, is_tex_map = false) {
        super()
        if (!is_tex_map) {
            let imgArr = [];
            for (var i = from; i < to + 1; i++) {
                imgArr.push(imgUrlBase + paddy(i, numPad) + '.png')
            }
            let textureArray = [];

            for (let i = 0; i < imgArr.length; i++) {
                let texture = PIXI.Texture.fromImage(imgArr[i]);
                textureArray.push(texture);
            };
            this._init_by_tex_arr(textureArray)
        }
        // console.log('mc', mc)
    }
    _init_by_tex_arr(tex_arr) {
        let mc = new PIXI.extras['AnimatedSprite'](tex_arr);
        mc.animationSpeed = .3
        mc.loop = false;
        this.addChild(mc)
        this.mc = mc
        mc.onComplete = () => {
            this.emit('complete')
        }
    }
    set_loop(val) {
        this.mc.loop = val
    }
    _init_by_tex_map(tex_map, base_name, from, to, num_pad = 3) {
        let imgArr = [];
        for (var i = from; i < to + 1; i++) {
            imgArr.push(base_name.replace('{x}', paddy(i, num_pad)))
        }
        let textureArray = [];
        for (let i = 0; i < imgArr.length; i++) {
            textureArray.push(tex_map[imgArr[i]]);
        };
        this._init_by_tex_arr(textureArray)
    }
    static new_from_texture_map(tex_map, base_name, from, to, num_pad = 3): FramesFx {
        let ff =
            new FramesFx(null, 0, 0, 0, true)
        ff._init_by_tex_map(tex_map, base_name, from, to, num_pad)
        return ff
    }
    onComplete(callback) {

    }
    show() {
        this.mc.play()
    }
    setSpeed(sp) {
        this.mc.animationSpeed = sp
    }

    gotoAndStop(frame) {
        this.mc.gotoAndStop(frame)
    }

    playOnce() {
        this.mc.gotoAndStop(0)
        this.mc.play()
    }
}