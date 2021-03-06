import { loadImg, paddy } from "./JsFunc";
import { proxy } from "./WebJsFunc";
import { ViewConst } from "../const";
export function imgToTex(img): PIXI.Texture {
    return new PIXI.Texture(new PIXI.BaseTexture(img))
}
function makeSprite(parameters): PIXI.Sprite {
    let url = parameters.url;
    let isCrossOrigin = parameters.isCrossOrigin;
    let callback = parameters.callback;

    let s = new PIXI.Sprite();

    loadRes(url, (img) => {
        s.texture = imgToTex(img);
        if (callback)
            callback(s)
    }, isCrossOrigin);
    return s;
}
export const _c = v => {
    return 960 + v;
};
export function loadRes(url: string, callback, isCrossOrigin?: boolean) {
    if (isCrossOrigin) {
        let req = new XMLHttpRequest();
        req.open('GET', proxy(url), true);
        req.onload = function (res) {
            loadImg(req.responseText, callback);
        };
        req.send();
    }
    else {
        loadImg(url, callback);
    }
}

export function loadJson(url: string, callback) {
    let req = new XMLHttpRequest();
    req.open('GET', proxy(url), true);
    req.onload = function (res) {
        let json = JSON.parse(req.responseText)
        callback(json)
    };
    req.send();
}

let _nullTex = imgToTex(null);
function makeTilingSprite(options): PIXI.extras.TilingSprite {
    let width = options.width;
    let height = options.height;
    let url = options.url;
    let callback = options.callback;
    let isCrossOrigin = options.isCrossOrigin;
    loadRes(url, (img) => {
        t.texture = imgToTex(img);
        if (callback)
            callback(t)
    }, isCrossOrigin);
    let t = new PIXI.extras.TilingSprite(_nullTex, width, height);
    return t
}
export function newBitmap(options: {
    url: string
    isCrossOrigin?: boolean
    callback?,
    isTiling?: boolean,
    x?: number,
    y?: number,
    width?: number,
    height?: number
}): PIXI.Sprite {
    let isTiling = options.isTiling;
    let s;
    if (isTiling) {
        s = makeTilingSprite(options);
    }
    else {
        s = makeSprite(options);
    }
    s.x = options.x ? options.x : 0;
    s.y = options.y ? options.y : 0;
    return s
}

export class BitmapText extends PIXI.Container {
    _tex: PIXI.Texture
    private mapSprite = {}
    private animations
    private frames: Array<Array<number>>
    private digis: any//<PIXI.Sprite>

    private _frameWidth: number
    private _frameHeight: number
    private _digiWidth: number
    private _digiCtn: PIXI.Container
    public ofs: number = 0
    constructor(options: { img?: string, texture?: PIXI.Texture, text: string, frames: Array<Array<number>>, animations: any }) {
        super()
        let text = options.text
        this.animations = options.animations
        this.frames = options.frames
        this.digis = {}
        this._digiCtn = new PIXI.Container
        this.addChild(this._digiCtn)
        this.text = text;
        if (options.texture) {
            this._tex = options.texture
            this.updateTex()
        }
        else if (options.img) {
            loadRes(options.img, (img) => {
                this._tex = imgToTex(img)
                this.updateTex()
            })
        }
    }
    private updateTex() {
        for (var k in this.digis) {
            var digi = this.digis[k]
            digi['sp'].texture = this._tex
        }
    }
    set text(v: string) {
        var digiIdx = 0
        var num = v.charAt(digiIdx)
        for (let i in this.digis) {
            let df = this.digis[i]
            df.visible = false
        }
        while (num != '') {
            let idx = this.animations[num]
            if (idx > -1) {
                let frame = this.frames[idx]
                let ofsX = frame[0]
                let ofsY = frame[1]
                if (!this._frameWidth)
                    this._frameWidth = frame[2]
                if (!this._frameHeight)
                    this._frameHeight = frame[3]
                if (!this.digis[digiIdx]) {
                    this.digis[digiIdx] = this._makeFrame(this._frameWidth, this._frameHeight)
                }
                let digiFrame = this.digis[digiIdx]
                digiFrame.visible = true

                digiFrame.x = digiIdx * (this._frameWidth + this.ofs)
                digiFrame['idx'] = digiIdx
                digiFrame['sp'].x = - ofsX
                digiFrame['sp'].y = - ofsY

                digiIdx += 1
                num = v.charAt(digiIdx)
            }
        }
        this._digiWidth = (digiIdx - 1) * this._frameWidth
    }

    set align(align: string) {
        console.log('align right', this._digiWidth)
        if (align == 'left') {
            this._digiCtn.x = 0
        }
        else if (align == 'center') {
            this._digiCtn.x = -this._digiWidth * .5
        }
        else if (align == 'right') {
            this._digiCtn.x = -this._digiWidth
        }

    }

    _makeFrame(width, height) {
        let ctn = new PIXI.Container
        this._digiCtn.addChild(ctn)

        let msk = new PIXI.Graphics
        msk.beginFill(0xff0000)
            .drawRect(0, 0, width, height)
            .endFill()
        ctn.addChild(msk)

        let s = new PIXI.Sprite(this._tex)
        ctn.addChild(s)
        s.mask = msk
        ctn['sp'] = s
        return ctn
    }
}

export let newWhiteMask = (url) => {
    let sp = newBitmap({
        url: url, callback: () => {
            var filter = new PIXI.filters.ColorMatrixFilter();
            filter.brightness(100)
            sp.filters = [filter]
            sp.cacheAsBitmap = true
        }
    })
    return sp
}

export let makeColorRatio = (colorArr: Array<string>, ratioArr: Array<number>) => {
    var a = []
    for (var i = 0; i < colorArr.length; i++) {
        var col = colorArr[i];
        for (var j = 0; j < ratioArr[i]; j++) {
            a.push(col)
        }
    }
    return a
}
// namespace PIXI{
class TextEx extends PIXI.Text {
    align
    set text(t) {
        this._text = t
        if (this.align == 'center') {

        }
        // super.text = t
    }
}
// }

export let setPivot = (obj, x, y) => {
    //set obj x y before call this
    obj.pivot = new PIXI.Point(x, y)
    obj.x += x
    obj.y += y
}
export let PIXI_MOUSE_EVENT = {
    mousedown: 'mousedown',
    click: 'click',
}
export function setScale(obj, s) {
    obj.scale.x = obj.scale.y = s
}

export const newModal = (alpha = 0.8, width?, height?, color?) => {
    if (!width)
        width = ViewConst.STAGE_WIDTH
    if (!height)
        height = ViewConst.STAGE_HEIGHT
    let m = new PIXI.Graphics()
    let c = 0x000000
    if (color)
        c = color
    m.beginFill(c)
        .drawRect(0, 0, width, height)
        .alpha = alpha
    return m
}

export function polygon(g: PIXI.Graphics, radius, sides) {
    if (sides < 3) return;
    var a = (Math.PI * 2) / sides;
    g.moveTo(radius, 0);
    for (var i = 1; i < sides; i++) {
        g.lineTo(radius * Math.cos(a * i), radius * Math.sin(a * i));
    }
}

export function gradientG(g: PIXI.Graphics, x, y, w, h, col1, col2) {
    let c1 = [col1 >> 16, (col1 & 0x00ff00) >> 8, col1 & 0x0000ff]
    let c2 = [col2 >> 16, (col2 & 0x00ff00) >> 8, col2 & 0x0000ff]
    let colorR, colorG, colorB
    for (let i = 0; i < h; i++) {
        colorR = c1[0] - Math.floor((c1[0] - c2[0]) * i / h)
        colorG = c1[1] - Math.floor((c1[1] - c2[1]) * i / h)
        colorB = c1[2] - Math.floor((c1[2] - c2[2]) * i / h)
        g.beginFill((colorR << 16) + (colorG << 8) + colorB)
        g.drawRect(x, y + i, w, 1)
    }
    g.endFill()
}