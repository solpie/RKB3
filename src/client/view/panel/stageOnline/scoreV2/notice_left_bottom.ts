import { BasePanel } from '../../base/BasePanel';
import { create } from 'domain';
import { FontName } from '../../../const';
import { imgLoader } from '../../../utils/ImgLoader';
import { Text2, TextFac } from '../../../utils/TextFac';
import { TweenEx } from '../../../utils/TweenEx';
let urlBg = '/img/panel/notice/left_bottom_notice.png'
let urlBg_small = '/img/panel/notice/left_bottom_notice_small.png'

export class NoticeLeftBottom extends BasePanel {
    static cls = 'NoticeLeftBottom'
    tex_bg1: PIXI.Texture
    tex_bg_small: PIXI.Texture

    cont: Text2
    bg: PIXI.Sprite
    create() {
        let imgArr = [
            urlBg
            , urlBg_small
        ]
        this.load(imgArr, _ => {
            this.tex_bg1 = imgLoader.getTex(urlBg)
            this.tex_bg_small = imgLoader.getTex(urlBg_small)
            this.bg = new PIXI.Sprite()
            this.addChild(this.bg)
            this.bg.texture = this.tex_bg_small
            let ns = {
                fontFamily: FontName.MicrosoftYahei,
                fontSize: '48px', fill: "#eee",
                fontWeight: 'bold'
            }
            this.cont = TextFac.new_(ns, this)
                .setPos(194, 968)
                .setText('本场赛事集锦')
        })
    }

    _show(data) {
        console.log('show notice left bottom', data)
        if (data.visible) {

            if (data.cont) {
                this.cont.setText(data.cont)
                if (this.cont.width > 230) {
                    this.bg.texture = this.tex_bg1
                    this.cont
                        .setAlignCenter(375)
                }
                else {
                    this.bg.texture = this.tex_bg_small
                    this.cont
                        .setAlignCenter(312)
                }
            }
            this.p.addChild(this)
            this.x = -600
            TweenEx.to(this, 100, { x: -580 }, _ => {
            })
            TweenEx.delayedCall(1500, _ => {
                TweenEx.to(this, 200, { x: 0 }, _ => {
                })
            })
        }
    }
    hide(data) {
        let _t = this
        TweenEx.to(_t, 200, { x: -650 }, _ => {
        })
    }
}