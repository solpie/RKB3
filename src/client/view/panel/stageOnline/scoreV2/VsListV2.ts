import { imgLoader } from "../../../utils/ImgLoader";
import { newModal, newBitmap, _c } from '../../../utils/PixiEx';
import { AvtV2 } from './AvtV2';
import { BasePanel } from '../../base/BasePanel';
import { Text2, TextFac } from '../../../utils/TextFac';
import { FontName } from '../../../const';

let isTest = false

let urlBg = '/img/panel/vsList/bg.png'
let urlItem = '/img/panel/vsList/itemBg.png'

class VsItem extends PIXI.Container {
    lAvt: AvtV2
    rAvt: AvtV2

    lName: Text2
    rName: Text2

    lTitle: Text2
    rTitle: Text2
    constructor() {
        super()
        let bg = newBitmap({ url: urlItem })
        this.addChild(bg)
        this.lAvt = new AvtV2(this)
        this.rAvt = new AvtV2(this)
        this.lAvt.x = 790
        this.rAvt.x = 1150
        this.rAvt.scale.x = -1
        this.lAvt.y = this.rAvt.y = 190
        let ns = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '28px', fill: "#444",
        }
        this.lTitle = TextFac.new_(ns, this)

        this.rTitle = TextFac.new_(ns, this)
        this.lTitle.y = this.rTitle.y = 190

        ns.fill = '#eee'
        ns.fontSize = '32px'
        this.lName = TextFac.new_(ns, this)

        this.rName = TextFac.new_(ns, this)
        this.lName.y = this.rName.y = 190+8 + 32
    }
    show(data) {
        let lp  = data[0]
        let rp  = data[1]
        this.lTitle.setText(lp.title)
            .setAlignCenter(_c(-348))
        this.rTitle.setText(rp.title)
            .setAlignCenter(_c(348+12))

        this.lName.setText(lp.name)
            .setAlignRight(_c(-197))
        this.rName.setText(rp.name)
        this.rName.x = _c(197+12)

        this.lAvt.load(lp.avatar)
        this.rAvt.load(rp.avatar)
    }
}
export class VsListV2 extends BasePanel {
    static cls = 'VsListV2'
    title: Text2
    vsItemArr = []
    create() {
        console.log('show vs list')
        let imgArr = []
        imgArr.push(urlBg)
        imgArr.push(urlItem)
        this.load(imgArr, _ => {
            let bg = newModal()
            this.addChild(bg)
            this.addChild(newBitmap({ url: urlBg }))

            let ns = {
                fontFamily: FontName.MicrosoftYahei,
                fontSize: '35px', fill: "#eee",
            }
            this.title = TextFac.new_(ns, this)
                .setY(92)
        })
    }

    _show(data) {
        if (data.visible) {
            if (isTest) {
                this.title.setText("上海城市冠军赛 八强对阵")
                    .setAlignCenter(_c(0))

                data.vsPlayerArr = [
                    [{ name: '好天气', avatar: 'http://i2.hoopchina.com.cn/user/108/27138108/27138108-1503133926.jpg@194h_194w_2e', title: '上海站32冠王湖南置业大学' }, { name: '好天气', avatar: 'http://i2.hoopchina.com.cn/user/108/27138108/27138108-1503133926.jpg@194h_194w_2e', title: '上海站32冠王湖南置业大学' }],
                    [{ name: '好天气', avatar: 'http://i2.hoopchina.com.cn/user/108/27138108/27138108-1503133926.jpg@194h_194w_2e', title: '上海站32冠王湖南置业大学' }, { name: '好天气', avatar: 'http://i2.hoopchina.com.cn/user/108/27138108/27138108-1503133926.jpg@194h_194w_2e', title: '上海站32冠王湖南置业大学' }],
                    [{ name: '好天气', avatar: 'http://i2.hoopchina.com.cn/user/108/27138108/27138108-1503133926.jpg@194h_194w_2e', title: '上海站32冠王湖南置业大学' }, { name: '好天气', avatar: 'http://i2.hoopchina.com.cn/user/108/27138108/27138108-1503133926.jpg@194h_194w_2e', title: '上海站32冠王湖南置业大学' }],
                    [{ name: '好天气', avatar: 'http://i2.hoopchina.com.cn/user/108/27138108/27138108-1503133926.jpg@194h_194w_2e', title: '上海站32冠王湖南置业大学' }, { name: '好天气', avatar: 'http://i2.hoopchina.com.cn/user/108/27138108/27138108-1503133926.jpg@194h_194w_2e', title: '上海站32冠王湖南置业大学' }],
                    [{ name: '好天气', avatar: 'http://i2.hoopchina.com.cn/user/108/27138108/27138108-1503133926.jpg@194h_194w_2e', title: '上海站32冠王湖南置业大学' }, { name: '好天气', avatar: 'http://i2.hoopchina.com.cn/user/108/27138108/27138108-1503133926.jpg@194h_194w_2e', title: '上海站32冠王湖南置业大学' }],
                ]
            }


            if (this.vsItemArr.length < data.vsPlayerArr.length) {
                for (let i = 0; i < (data.vsPlayerArr.length - this.vsItemArr.length); i++) {
                    let item = new VsItem()
                    item.y = i * 128
                    item.show(data.vsPlayerArr[i])
                    this.addChild(item)
                }
            }
            this.p.addChild(this)
        }
        else
            this.hide(data)
    }
}