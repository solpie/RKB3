import { VueBase } from '../../../utils/VueBase';
import { CommandId } from '../../../Command';
import { showPanel, BasePanel } from '../../base/BasePanel';
import { BasePanelView } from '../../BasePanelView';
import { PanelId, FontName } from '../../../const';
import { newBitmap, _c } from '../../../utils/PixiEx';
import { TextFac } from '../../../utils/TextFac';

let urlBg = '/img/panel/bracket/s5/bg.png'

class BracketS5Final extends BasePanel {
    static cls = 'BracketS5Final'

    create() {
        let imgArr = [urlBg
            // , urlFg
        ]
        let x0 = 730, x1 = 421, x2 = 421 - 252
        let groupMap = {
            "1": { x: _c(-x0), y: 252 }
            , "2": { x: _c(-x0), y: 383 }
            , "3": { x: _c(-x0), y: 540 }
            , "4": { x: _c(-x0), y: 671 }

            , "5": { x: _c(x0), y: 252 }
            , "6": { x: _c(x0), y: 383 }
            , "7": { x: _c(x0), y: 540 }
            , "8": { x: _c(x0), y: 671 }

            , "9": { x: _c(-x1), y: 318 }
            , "10": { x: _c(-x1), y: 612 }

            , "11": { x: _c(x1), y: 318 }
            , "12": { x: _c(x1), y: 612 }

            , "13": { x: _c(x2), y: 467 }
            , "14": { x: _c(-x2), y: 467 }

            , "15": { x: 125, y: 749 }
            , "16": { x: 125, y: 220 }
        }
        this.addChild(new PIXI.Graphics()
            .beginFill(0x000000)
            .drawRect(0, 0, 1920, 1080))
        this.load(imgArr, _ => {
            console.log('on loaded imgArr')
            let ns = {
                fontFamily: FontName.MicrosoftYahei,
                fontSize: "30px",
                fontWeight: "normal",
                fill: "#ddd"
            };

            this.addChild(newBitmap({ url: urlBg }))

            for (let k in groupMap) {
                let group = groupMap[k]
                group.lName = TextFac.new_(ns, this)
                    .setText('郝天佶')
                group.rName = TextFac.new_(ns, this)
                    .setText('郝天佶')
                if (Number(k) > 14) {
                    group.lName.setSize('43px')
                    group.rName.setSize('43px')
                    group.lName.setPos(group.x, group.y)
                        .setAlignCenter(_c(group.x))
                    group.rName.setPos(group.x, group.y)
                        .setAlignCenter(_c(-group.x))
                }
                else {
                    group.lName.setPos(group.x, group.y)
                        .setAlignCenter(group.x)
                    group.rName.setPos(group.x, group.y + 43)
                        .setAlignCenter(group.x)
                }
            }
        })
    }
    _show(data) {
        if (data.cid == CommandId.sc_timerEvent_buzzer) {
            // this.setBuzzerTimerEvent(data)
        }
        this.p.addChild(this)
    }
}

let canvasStage
declare let io;
class BracketS5FinalView extends VueBase {
    protected mounted() {
        console.log('mouted BracketS5FinalView view');
        if (!canvasStage)
            canvasStage = BasePanelView.initPixi()
        showPanel(BracketS5Final, { visible: true }, canvasStage)
        let localWs = io.connect(`/${PanelId.rkbPanel}`)
        localWs.on('connect', (msg) => {
            console.log('connect', window.location.host)
        })

        let _adept = (event) => {
            localWs.on(event, data => {
                data.cid = event
                data.visible = true
                console.log(event, data)
                showPanel(BracketS5Final, data, canvasStage)
            })
        }
        // _adept(CommandId.sc_timerEvent_buzzer)
    }
}
export let bracketS5Final = new BracketS5FinalView()
