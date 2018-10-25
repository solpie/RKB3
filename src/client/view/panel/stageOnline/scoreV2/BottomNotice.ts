import { BasePanel } from '../../base/BasePanel';
import { newBitmap } from '../../../utils/PixiEx';
import { FontName } from '../../../const';
import { Text2, TextFac } from '../../../utils/TextFac';
import { imgLoader } from '../../../utils/ImgLoader';
import { TweenEx } from '../../../utils/TweenEx';
let urlBg = '/img/panel/notice/bottomNotice.png'

export class BottomNotice extends BasePanel {
    static cls = 'BottomNotice'
    lName: Text2
    rName: Text2
    lIcon: PIXI.Sprite
    rIcon: PIXI.Sprite
    iconCtn: PIXI.Container
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
            this.rName = TextFac.new_(ns, this)
                .setY(this.lName.y)
                .setX(1080)
            this.iconCtn = new PIXI.Container()
            this.addChild(this.iconCtn)
            this.iconCtn.y = 960
        })

    }
    prevVisible = false
    _show(data) {
        if (data.visible) {

            let nameMap = {
                '1': ['抖音:路人王篮球', '快手:路人王篮球'],
                '2': ['今日头条:路人王篮球', '西瓜视频:路人王篮球'],
                '3': ['微博:路人王篮球', '微信:虎扑路人王'],
                '4': ['优酷:路人王篮球', 'UC:路人王篮球'],
                '5': ['B站:路人王篮球', '微视:路人王篮球'],
                '6': ['腾讯视频:路人王篮球', 'YouTube:路人王篮球'],
                '7': ['知乎:路人王篮球', '网易新闻:路人王篮球'],
            }
            let t = nameMap[data.idx]
            this.lName.setText(t[0])
            this.rName.setText(t[1])
            let lUrl = '/img/panel/notice/appLogo/' + data.idx + '_0.png'
            let rUrl = '/img/panel/notice/appLogo/' + data.idx + '_1.png'
            imgLoader.loadTexArr([lUrl, rUrl], _ => {
                if (!this.prevVisible) {
                    this.y = 200
                    let _t = this
                    TweenEx.to(_t, 200, { y: 0 })
                }
                else {
                    this.y = 0
                }
                this.prevVisible = data.visible
                console.log('load app logo')
                this.iconCtn.removeChildren()
                let lIcon = newBitmap({ url: lUrl })
                lIcon.x = 450
                this.iconCtn.addChild(lIcon)
                lIcon = newBitmap({ url: rUrl })
                lIcon.x = 980
                this.iconCtn.addChild(lIcon)
                this.p.addChild(this)
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
            // this.hide(data)
        })
    }
}