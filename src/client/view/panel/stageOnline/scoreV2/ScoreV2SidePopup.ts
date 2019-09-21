import { Text2, TextFac } from "../../../utils/TextFac";
import { FontName } from "../../../const";
import { newBitmap } from "../../../utils/PixiEx";
import { TweenEx } from "../../../utils/TweenEx";
let url_bg_L = '/img/panel/score2018v2/popup_L.png'
let url_bg_R = '/img/panel/score2018v2/popup_R.png'
let url_mask = '/img/panel/score2018v2/popup_mask.png'
class PanelCtn extends PIXI.Container {
    txt_win: Text2
    txt_score: Text2
    txt_rank: Text2
    pos_hide = 0
    ctn: PIXI.Container
    constructor(parent, isLeft) {
        super()
        let ns = {
            fontFamily: FontName.dinCondensedC,
            fontSize: '30px', fill: "#eee",
        }
        let url_bg = isLeft ? url_bg_L : url_bg_R;


        // this.ctn = new PIXI.Container()
        // this.addChild
        let bg = newBitmap({ url: url_bg })
        this.addChild(bg)
        this.ctn = bg
        let mask = newBitmap({ url: url_mask })
        this.addChild(mask)
        bg.mask = mask
        this.txt_rank = TextFac.new_(ns, this.ctn).setY(942)
        this.txt_win = TextFac.new_(ns, this.ctn).setY(this.txt_rank.y)
        this.txt_score = TextFac.new_(ns, this.ctn).setY(this.txt_rank.y)
        if (isLeft) {
            this.pos_hide = 265

            this.txt_win.x = 260
            this.txt_score.x = 290
            this.txt_rank.x = 320
        }
        else {
            this.pos_hide = -265
            this.txt_win.x = 30
            this.txt_rank.x = 90
            this.txt_win.x = 120
        }
        parent.addChild(this)
        this.hide()
    }

    set_pos(param) {
        let isLeft = param.isLeft
        // if (isLeft) {
        //     this.txt_win.x = 122
        //     this.txt_rank.x = 90
        //     this.txt_win.x = 30
        // }
        // else {
        //     this.txt_win.x = 30
        //     this.txt_rank.x = 90
        //     this.txt_win.x = 120
        // }
        let p_win = 264
        let p_score = 345
        let p_rank = 426
        if (isLeft) {
        }
        else {
            p_win += 1232
            p_score += 1232
            p_rank += 1232
        }
        this.txt_rank.setText(Number(param.rank))
            .setAlignCenter(p_rank)
        this.txt_score.setText(Number(param.score))
            .setAlignCenter(p_score)
        this.txt_win.setText(Number(param.win) + '%')
            .setAlignCenter(p_win)
            .setSize(35)
        if (param.visible) {
            TweenEx.to(this.ctn, 100, { x: 0 }, _ => {
            })
        }
        else {
            this.hide()
        }
    }
    hide() {
        TweenEx.to(this.ctn, 100, { x: this.pos_hide }, _ => {
            // this.rollText.text = ''
        })
    }
}
export class ScoreV2SidePopup extends PIXI.Container {
    left: PanelCtn
    right: PanelCtn
    constructor(parent) {
        super()
        parent.addChild(this)
        this.y = 8
        this.left = new PanelCtn(this, true)
        this.right = new PanelCtn(this, false)
    }


    set_data(param) {
        if (param.isLeft) {
            this.left.set_pos(param)
        }
        else {
            this.right.set_pos(param)
        }
    }

}