import { VueBase } from '../../../utils/VueBase';
import { BasePanelView } from '../../BasePanelView';
import { PanelId, FontName } from '../../../const';
import { CommandId } from '../../../Command';
import { TextFac, Text2 } from '../../../utils/TextFac';
import { _c, newBitmap } from '../../../utils/PixiEx';
import { BasePanel } from '../../base/BasePanel';

let urlBg = '/img/panel/bracket/s5/bg.png'

class VsInfo extends BasePanel {
    static cls = 'VsInfo'
    lZhiye: Text2
    rZhiye: Text2

    lCity: Text2
    rCity: Text2

    lCollege: Text2
    rCollege: Text2

    lInfo: Text2
    rInfo: Text2

    lStart: Text2
    rStart: Text2

    create() {
        let imgArr = [urlBg
            // , urlFg
        ]
        // this.addChild(new PIXI.Graphics()
        //     .beginFill(0x000000)
        //     .drawRect(0, 0, 1920, 1080))
        this.load(imgArr, _ => {
            console.log('on loaded imgArr')
            let ns = {
                fontFamily: FontName.MicrosoftYahei,
                fontSize: "36px",
                dropShadow: true,
                dropShadowColor: '#222222',
                dropShadowAngle: Math.PI * 1 / 3,
                dropShadowDistance: 3,
                fontWeight: "bold",
                fill: "#acacac"
            };
            this.lZhiye = TextFac.new_(ns, this)
                .setY(30)
            this.rZhiye = TextFac.new_(ns, this)
                .setY(this.lZhiye.y)
            
            this.addChild(newBitmap({ url: urlBg }))
        })
    }
    fillData(data) {

    }
    _show(data) {
        if (data.cid == CommandId.sc_bracket) {
            this.fillData(data)
        }
        this.p.addChild(this)
    }
}

let canvasStage
declare let io;
class VsInfoView extends VueBase {
    protected mounted() {
        console.log('mouted VsInfoView view');
        if (!canvasStage)
            canvasStage = BasePanelView.initPixi()
        let localWs = io.connect(`/${PanelId.rkbPanel}`)
        localWs.on('connect', (msg) => {
            console.log('connect', window.location.host)
        })
        let _adept = (event) => {
            localWs.on(event, data => {
                data.cid = event
                data.visible = true
                console.log(event, data)
                // showPanel(BracketS5Final, data, canvasStage)
            })
        }
        _adept(CommandId.sc_vsInfo)
    }
}
export let vsInfo = new VsInfoView()
//gameStart even
// http://api.liangle.com/api/passerbyking/game/group/711
// http://api.liangle.com/api/passerbyking/player/info/3242
