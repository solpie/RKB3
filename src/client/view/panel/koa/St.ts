import { _avatar } from '../../utils/HupuAPI';
import { FontName } from '../../const';
import { Direction, SpriteGroup } from '../../utils/SpriteGroup';
import { imgToTex, loadRes, makeColorRatio, newBitmap } from '../../utils/PixiEx';

export class St extends PIXI.Container {
    spg: SpriteGroup
    avatar: PIXI.Sprite
    is1p: boolean
    nameText: PIXI.Text

    constructor(parent: PIXI.Container, is1p) {
        super()
        parent.addChild(this)
        this.is1p = is1p
        var bg;
        var dir
        this.ay = 10
        var fill
        if (is1p) {
            dir = Direction.e
            this.addChild(newBitmap({ url: '/img/panel/koa/hp/blueSt.png' }))
            bg = new SpriteGroup({
                dir: Direction.e,
                invert: 60,
                img: '/img/panel/koa/hp/bgSt.png',
                count: 2
            })
            bg.x = 82
            bg.y = 50
            this.addChild(bg)
            this.ax = 9
            fill = ['#c0dbff', '#c0dbff', '#3b52b3']
        }
        else {
            this.ax = 213
            dir = Direction.w
            this.addChild(newBitmap({ url: '/img/panel/koa/hp/redSt.png' }))
            bg = new SpriteGroup({
                dir: Direction.w,
                invert: 60,
                img: '/img/panel/koa/hp/bgSt.png',
                count: 2
            })
            bg.x = 282 - bg.width - 78
            bg.y = 50
            this.addChild(bg)
            fill = ['#fff0f0', '#fff0f0', '#b33b3b']
        }
        this.spg = new SpriteGroup({
            dir: dir,
            invert: 60,
            img: '/img/panel/koa/hp/st.png',
            count: 2
        })
        this.spg.x = bg.x
        this.spg.y = bg.y
        this.addChild(this.spg)

        this.setAvatar(_avatar('st.png'))


        //         蓝：亮c0dbff 暗3b52b3
        // 红：亮fff0f0  暗b33b3b        
        let ns = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fill: fill,
            stroke: '#000',
            strokeThickness: 3,
            fillGradientType: PIXI['TEXT_GRADIENT'].LINEAR_VERTICAL,
        }
        let nt = new PIXI.Text('', ns)
        nt.y = 15
        nt.x = 82
        this.nameText = nt
        this.addChild(nt)
    }
    ax
    ay
    setNum(n) {
        this.spg.setNum(n)
    }

    setAvatar(url) {
        if (this.avatar) {
            this.avatar.parent.removeChild(this.avatar)
            this.avatar = null
        }
        this.avatar = newBitmap({
            url: url, x: this.ax, y: this.ay, callback: (img) => {
                this.avatar.scale.x = this.avatar.scale.y = 60 / img.width
                if(!this.is1p)
                {

                this.avatar.scale.x *= -1
                this.avatar.x = this.ax + 60
                }
            }
        })
        this.addChildAt(this.avatar, 0)
    }

    setName(name: string) {
        this.nameText.text = name
        if (!this.is1p) {
            this.nameText.x = 282 - 82 - this.nameText.width
        }
    }
}