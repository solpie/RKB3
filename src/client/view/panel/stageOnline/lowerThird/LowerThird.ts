import { VueBase } from '../../../utils/VueBase';
import { BasePanelView } from '../../BasePanelView';
import { showPanel, BasePanel } from '../../base/BasePanel';
import { PanelId, FontName } from '../../../const';
import { CommandId } from '../../../Command';
import { Text2, TextFac } from '../../../utils/TextFac';
import { newBitmap, _c } from '../../../utils/PixiEx';
import { BaseLowerThird } from './BaseLowerThird';
import { PickTeam } from '../pickTeam/PickTeam';

class TextType1 extends BaseLowerThird {
    lName: Text2
    rName: Text2
    lTitle: Text2
    rTitle: Text2
    constructor(parent) {
        super(parent)
        this.addChild(newBitmap({ url: urlType_1 }))
        let ns = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: "42px",
            dropShadow: true,
            dropShadowColor: '#222222',
            dropShadowAngle: Math.PI * 1 / 3,
            dropShadowDistance: 3,
            fontWeight: "bold",
            fill: "#acacac"
        };
        this.lName = TextFac.new_(ns, this)
            .setY(948)
            .setAlignCenter(_c(-340))
        this.rName = TextFac.new_(ns, this)
            .setY(this.lName.y)
            .setAlignCenter(_c(340))
        ns.fontSize = "24px"
        this.lTitle = TextFac.new_(ns, this)
            .setY(948 + 62)
            .setAlignCenter(_c(-340))

        this.rTitle = TextFac.new_(ns, this)
            .setY(this.lTitle.y)
            .setAlignCenter(_c(340))

    }
    fillData(data) {
        let l = data.cont[0].split('_')
        this.lName.setText(l[0])
            .setAlignCenter()

        this.lTitle.setText(l[1])
            .setAlignCenter()

        let r = data.cont[1].split('_')
        this.rName.setText(r[0])
            .setAlignCenter()
        this.rTitle.setText(r[1])
            .setAlignCenter()
    }
}
class TextType2 extends BaseLowerThird {
    lName: Text2
    constructor(parent) {
        super(parent)
        this.addChild(newBitmap({ url: urlType_2 }))
        let ns = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: "42px",
            dropShadow: true,
            dropShadowColor: '#222222',
            dropShadowAngle: Math.PI * 1 / 3,
            dropShadowDistance: 3,
            fontWeight: "bold",
            fill: "#acacac"
        };
        this.lName = TextFac.new_(ns, this)
            .setY(968)
            .setAlignCenter(_c(0))
    }
    fillData(data) {
        this.lName.setText(data.cont)
            .setAlignCenter()
    }
}
let urlType_1, urlType_2;
let pt: PickTeam
class LowerThird extends BasePanel {
    static cls = 'LowerThird'
    t1: TextType1
    t2: TextType2
    showOnlyMap: any
    create() {
        urlType_1 = '/img/panel/lowerThird/type_1.png'
        urlType_2 = '/img/panel/lowerThird/type_2.png'
        this.load([urlType_1
            , urlType_2
        ], _ => {
            //on loaded.......
            this.showOnlyMap = {}
        })
    }
    showOnly(type) {
        for (let t in this.showOnlyMap) {
            if (Number(t) == type) {
                this.showOnlyMap[t].show()
            }
            else {
                this.showOnlyMap[t].hide()
            }
        }
    }
    _show(param) {
        let data = param.data
        if (param.cid == CommandId.sc_showLowerThird) {
            if (data.type == 1) {
                if (!this.t1)
                    this.t1 = new TextType1(this)
                this.t1.fillData(data)
                this.showOnlyMap[1] = this.t1
                this.showOnly(1)
            }
            else if (data.type == 2) {
                if (!this.t2)
                    this.t2 = new TextType2(this)
                this.t2.fillData(data)
                this.showOnlyMap[2] = this.t2
                this.showOnly(2)
            }
        }

        if (param.cid == CommandId.sc_showPickup) {
            pt.setData(param)
            pt.visible = true
            this.p.addChild(pt)
         }
        if (param.cid == CommandId.sc_setTeamColor) {
            pt.setColor(param)
            pt.visible = true
            this.p.addChild(pt)
          }

        if (param.cid == CommandId.sc_bracket) {
            pt.setAvtByRec(param)
            pt.visible = true
            this.p.addChild(pt)
        }

        this.p.addChild(this)
    }
}
let canvasStage
declare let io;
class LowerThirdView extends VueBase {
    protected mounted() {
        console.log('mouted LowerThirdView view');
        if (!canvasStage)
            canvasStage = BasePanelView.initPixi()
        
        showPanel(LowerThird, { visible: true }, canvasStage)
        let localWs = io.connect(`/${PanelId.rkbPanel}`)
        localWs.on('connect', (msg) => {
            console.log('connect', window.location.host)
        })



        let _adept = (event) => {
            localWs.on(event, data => {
                data.cid = event
                if (data.visible == null)
                    data.visible = true
                console.log(event, data)
                showPanel(LowerThird, data, canvasStage)
            })
        }
        _adept(CommandId.sc_showLowerThird)
        _adept(CommandId.sc_showPickup)
        _adept(CommandId.sc_setTeamColor)
        _adept(CommandId.sc_bracket)

        pt = new PickTeam(canvasStage)
        pt.visible = false
    }
}
export let lowerThird = new LowerThirdView()
