import { newModal } from "../../../utils/PixiEx";
import { FramesFx } from "../../../utils/FrameFx";
import { imgLoader } from '../../../utils/ImgLoader';
import { paddy } from "../../../utils/JsFunc";
import { PopupView } from '../../../utils/PopupView';
import { WebDBCmd } from "../../../WebDBCmd";
import { Commentator } from "./Commentator";
import { getAllPlayer, getCommentators, getLive } from '../../../utils/HupuAPI';
import { LiveComing } from './LiveComing';

export class StudioPanel extends PIXI.Container {
    p: any
    fx: FramesFx
    l2m: FramesFx
    bottle: FramesFx

    popupView: PopupView
    staticImg: PIXI.Sprite
    liveConf: any
    $route: any
    constructor(parent, $route) {
        super()
        this.$route = $route
        this.p = parent
        console.log('new studio panel');
        // this.addChild(newModal(0.8))
        this.staticImg = new PIXI.Sprite
        this.p.addChild(this)



        if (this.$route.query['pre'] == 1) {
            getLive(conf => {
                let liveComing = new LiveComing(conf.game_id)
                this.addChild(liveComing)
                this.liveConf = conf
            })
         
        }
        else {
            this.popupView = new PopupView(this)
            getLive(conf => {
                this.liveConf = conf
                console.log('inti live conf', conf);
                this.rotLogo()
            })
        }
    }

    rotLogo() {
        if (this.liveConf.mizone_logo) {
            let col = this.liveConf.mizone_logo
            console.log('isblue', this.$route);
            let m2l = new FramesFx(`/img/fx/logo/${col}/m2l/m2l_`, 0, 12)
            this.fx = m2l
            m2l.setSpeed(0.28)
            this.addChild(m2l)

            let l2m = new FramesFx(`/img/fx/logo/${col}/l2m/l2m_`, 0, 15)
            this.fx = l2m
            l2m.setSpeed(0.28)
            this.addChild(l2m)
            // l2m.show()
            l2m.visible = false
            m2l.visible = false
            let isl2m = false
            let turn = () => {
                isl2m = !isl2m
                if (isl2m) {
                    l2m.visible = true
                    m2l.visible = false
                    l2m.playOnce()
                }
                else {
                    m2l.visible = true
                    l2m.visible = false
                    m2l.playOnce()
                }
            }
            turn()
            setInterval(_ => {
                turn()
            }, 30000)
        }
        else {

        }

    }

    initLocalWS(io) {
        let pv = this.popupView

        io.on(WebDBCmd.sc_commentator, data => {
            if (data.visible)
                pv.show(Commentator, data)
            else
                pv.hide(Commentator)
        })
            .on(WebDBCmd.sc_staticImg, data => {
                console.log('sc_staticImg', data);
                this.showStaticImg(data)
            })
            .on(WebDBCmd.sc_staticImg, data => {

                // let isBlueLogo = this.$route.params.op == "rmop"
                // console.log('is');
            })
    }

    showStaticImg(data) {
        if (data.visible) {
            let url = data.url
            imgLoader.loadTex(url, tex => {
                this.staticImg.texture = tex
                this.p.addChild(this.staticImg)
                this.staticImg.visible = true
            })
        }
        else {
            this.staticImg.visible = false
        }
    }
    showBottle() {
        let imgArr = []
        for (let i = 0; i < 53; i++) {
            imgArr.push('/img/fx/mizone/bottle/bt_' + paddy(i, 2) + '.png')
        }
        imgLoader.loadTexArr(imgArr, _ => {
            let bt = new FramesFx('/img/fx/mizone/bottle/bt_', 0, 52)
            this.bottle = bt
            bt.setSpeed(0.28)
            this.addChild(bt)
            this.bottle.visible = false
        })
        if (this.bottle) {
            if (this.bottle.visible)
                return
            this.bottle.visible = true
            this.bottle.playOnce()
            setTimeout(_ => {
                this.bottle.visible = false
            }, 6000)
        }
    }
}