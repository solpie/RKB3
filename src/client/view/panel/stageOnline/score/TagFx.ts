import { newBitmap, imgToTex, setScale } from '../../../utils/PixiEx';
import { imgLoader } from "../../../utils/ImgLoader";
import { TextFac, Text2 } from '../../../utils/TextFac';
import { FontName } from "../../../const";
import { loadImg } from '../../../utils/JsFunc';

export class TagFx extends PIXI.Container {
    p: any
    playerName: Text2
    tagSp: PIXI.Sprite
    iconSp: PIXI.Sprite
    avtSp: PIXI.Sprite
    lTitleSp: PIXI.Sprite
    rTitleSp: PIXI.Sprite

    constructor(parent, data) {
        super()
        let imgArr = [
            '/img/panel/tagFx/bg.png',
            '/img/panel/tagFx/tag1_1.png',
            '/img/panel/tagFx/tag1_2.png',
            '/img/panel/tagFx/tag2_1.png',
            '/img/panel/tagFx/tag2_2.png',
            '/img/panel/tagFx/tag3_1.png',
            '/img/panel/tagFx/tag4_1.png',

            '/img/panel/tagFx/icon1_1.png',
            '/img/panel/tagFx/icon1_2.png',
            '/img/panel/tagFx/icon2_1.png',
            '/img/panel/tagFx/icon2_2.png',
            '/img/panel/tagFx/icon3_1.png',
            '/img/panel/tagFx/icon4_1.png',

            '/img/panel/tagFx/title1_1.png',
            '/img/panel/tagFx/title1_2.png',
            '/img/panel/tagFx/title2_1.png',
            '/img/panel/tagFx/title2_2.png',
            '/img/panel/tagFx/title3_1.png',
            '/img/panel/tagFx/title4_1.png',
        ]
        imgLoader.loadTexArr(imgArr, _ => {
            let bg = newBitmap({ url: '/img/panel/tagFx/bg.png' })
            this.addChild(bg)
            this.p = parent

            let ns = {
                fontFamily: FontName.NotoSansHans,
                fontWeight: 'bold',
                fontSize: '32px', fill: "#fff",
            }
            this.playerName = TextFac.new_(ns, this)
                .setY(853)
            this.tagSp = new PIXI.Sprite()
            this.tagSp.x = 1108
            this.tagSp.y = 710
            this.addChild(this.tagSp)

            this.iconSp = new PIXI.Sprite()
            this.iconSp.x = 960 - 149
            this.iconSp.y = 711 - 7
            this.addChild(this.iconSp)

            this.avtSp = new PIXI.Sprite()
            this.addChild(this.avtSp)
            this.avtSp.x = 643
            this.avtSp.y = 732

            this.lTitleSp = new PIXI.Sprite()
            this.lTitleSp.x = 397
            this.addChild(this.lTitleSp)

            this.rTitleSp = new PIXI.Sprite()
            this.rTitleSp.x = 1112
            this.addChild(this.rTitleSp)

            this.rTitleSp.y = this.lTitleSp.y = 909

            this.show(data)
        })
    }

    show(data) {
        this.playerName.setText(data.player.name)
            .setAlignCenter(694)

        this.tagSp.texture = imgLoader.getTex('/img/panel/tagFx/tag' + data.tag + '.png')
        this.iconSp.texture = imgLoader.getTex('/img/panel/tagFx/icon' + data.tag + '.png')

        if (data.isLeft) {
            this.lTitleSp.texture = imgLoader.getTex('/img/panel/tagFx/title' + data.tag + '.png')
        }
        else {
            this.rTitleSp.texture = imgLoader.getTex('/img/panel/tagFx/title' + data.tag + '.png')
        }
        console.log('tag fx load url ', data.player.avatar);

        imgLoader.loadTex(data.player.avatar, tex => {
            this.avtSp.texture = tex
            setScale(this.avtSp, 105 / tex.width)
        })

        this.p.addChild(this)
    }

    hide() {
        this.p.removeChild(this)
    }
}