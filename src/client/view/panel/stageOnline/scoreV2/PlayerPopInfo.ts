import { BasePanel } from '../../base/BasePanel';
import { newBitmap } from '../../../utils/PixiEx';
import { FontName } from '../../../const';
import { Text2, TextFac } from '../../../utils/TextFac';
import { imgLoader } from '../../../utils/ImgLoader';
import { TweenEx } from '../../../utils/TweenEx';
import { bottomMoveIn } from '../../../utils/Fx';
let urlBg = '/img/panel/notice/bottomNotice.png'

export class PlayerPopInfo extends BasePanel {
    static cls = 'PlayerPopInfo'
    lName: Text2
    create() {
        let imgArr = []
        imgArr.push(urlBg)
        this.load(imgArr, _ => {
            let bg = newBitmap({ url: urlBg })
            this.addChild(bg)

            let ns = {
                fontFamily: FontName.MicrosoftYahei,
                fontSize: '35px', fill: "#eee",
            }
            this.lName = TextFac.new_(ns, this)
                .setY(975)
                .setX(552)
        })

    }
    prevVisible = false
    _show(data) {
        if (data.visible) {
            imgLoader.loadTexArr([urlBg], _ => {
                if (!this.prevVisible) {
                    bottomMoveIn(this)
                }
                else {
                    this.y = 0
                }
                this.prevVisible = data.visible
                console.log('load app logo')
            })
        }
        else {
            this.hide(data)
        }

    }
    hide(data) {
        this.prevVisible = data.visible
        let _t = this
        TweenEx.to(_t, 200, { y: 200 }, _ => {
        })
    }
}