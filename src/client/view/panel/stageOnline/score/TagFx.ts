import { newBitmap, imgToTex, setScale } from '../../../utils/PixiEx';
import { imgLoader } from "../../../utils/ImgLoader";
import { TextFac, Text2 } from '../../../utils/TextFac';
import { FontName } from "../../../const";
import { loadImg } from '../../../utils/JsFunc';
import { TweenEx } from '../../../utils/TweenEx';

export class TagFx extends PIXI.Container {
    p: any
    playerName: Text2
    tagSp: PIXI.Sprite
    iconSp: PIXI.Sprite
    avtSp: PIXI.Sprite
    lTitleSp: PIXI.Sprite
    rTitleSp: PIXI.Sprite
    popupCtn: PIXI.Container
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

            '/img/panel/tagFx/title2_.png',
            '/img/panel/tagFx/title1_.png',
        ]
        imgLoader.loadTexArr(imgArr, _ => {
            this.popupCtn = new PIXI.Container()
            this.addChild(this.popupCtn)

            let bg = newBitmap({ url: '/img/panel/tagFx/bg.png' })
            this.popupCtn.addChild(bg)

            this.p = parent

            let ns = {
                fontFamily: FontName.NotoSansHans,
                fontWeight: 'bold',
                fontSize: '32px', fill: "#fff",
            }
            this.playerName = TextFac.new_(ns, this.popupCtn)
                .setY(853)
            this.tagSp = new PIXI.Sprite()
            this.tagSp.x = 1108
            this.tagSp.y = 710
            this.popupCtn.addChild(this.tagSp)

            this.iconSp = new PIXI.Sprite()
            this.iconSp.x = 960 - 149
            this.iconSp.y = 711 - 7
            this.popupCtn.addChild(this.iconSp)

            this.avtSp = new PIXI.Sprite()
            this.popupCtn.addChild(this.avtSp)
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
        if (data.is2Title) {
            data.tag = data.tag.substring(0, 2)
        }
        if (data.isLeft) {
            this.lTitleSp.texture = imgLoader.getTex('/img/panel/tagFx/title' + data.tag + '.png')
            this.lTitleSp.visible  = true
        }
        else {
            this.rTitleSp.texture = imgLoader.getTex('/img/panel/tagFx/title' + data.tag + '.png')
            this.rTitleSp.visible  = true
        }
        console.log('tag fx load url ', data.player.avatar);

        imgLoader.loadTex(data.player.avatar, tex => {
            this.avtSp.texture = tex
            setScale(this.avtSp, 105 / tex.width)
        })
        this.popupCtn.visible = true
        TweenEx.delayedCall(3000, _ => {
            this.popupCtn.visible = false
        })
        this.p.addChild(this)
    }

    hide(data) {
        if (data.isHideAll) {
            this.lTitleSp.visible =false
            this.rTitleSp.visible =false
            this.p.removeChild(this)
        }
        else
            this.popupCtn.visible = false
    }
}