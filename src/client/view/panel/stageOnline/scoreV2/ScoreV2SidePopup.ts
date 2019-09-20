import { Text2, TextFac } from "../../../utils/TextFac";
import { FontName } from "../../../const";
import { newBitmap } from "../../../utils/PixiEx";
let url_bg = ''
let url_mask = ''
export class ScoreV2SidePopup extends PIXI.Container {
    txt_win: Text2
    txt_score: Text2
    txt_rank: Text2
    ctn: PIXI.Container

    constructor(parent) {
        super()

        let ctn = new PIXI.Container()
        this.ctn = ctn
        this.addChild(ctn)
        let ns = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '32px', fill: "#eee",
        }

        let bg = newBitmap({ url: url_bg })
        this.ctn.addChild(bg)
        let mask = newBitmap({url:url_mask})
        this.addChild(mask)
bg.mask = mask
        this.txt_rank = TextFac.new_(ns, this.ctn)
        this.txt_win = TextFac.new_(ns, this.ctn)
        this.txt_score = TextFac.new_(ns, this.ctn)
        parent.addChild(this)
    }

    set_pos(isLeft) {
        if (isLeft) {
            this.txt_win.x = 122
            this.txt_rank.x = 90
            this.txt_win.x = 30
        }
        else {
            this.txt_win.x = 30
            this.txt_rank.x = 90
            this.txt_win.x = 120
        }
    }
    set_data(param) {
        this.set_pos(param.isLeft)
        this.txt_rank.setText(Number(param.rank))
        this.txt_score.setText(Number(param.score))
        this.txt_win.setText(Number(param.win) + '%')
    }

}