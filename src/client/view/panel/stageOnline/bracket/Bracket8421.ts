import { VueBase } from '../../../utils/VueBase';
import { BasePanelView } from '../../BasePanelView';
import { PanelId, FontName } from '../../../const';
import { showPanel, BasePanel } from '../../base/BasePanel';
import { CommandId } from '../../../Command';
import { _c, newBitmap } from '../../../utils/PixiEx';
import { TextFac, Text2 } from '../../../utils/TextFac';


let urlBg = '/img/panel/bracket/s5/bg_8421.png'

class Bracket8421 extends BasePanel {
    static cls = 'Bracket8421'
    groupMap: any
    finalScore: Text2
    create() {
        let imgArr = [urlBg
            // , urlFg
        ]
        let x0 = 652, x1 = 421, x2 = 421 - 252
        let groupMap = {
            "1": { x: _c(-x0), y: 426 }
            , "2": { x: _c(-x0), y: 777 }

            , "3": { x: _c(x0), y: 426 }
            , "4": { x: _c(x0), y: 777 }

            , "5": { x: _c(-248), y: 606 }

            , "6": { x: _c(248), y: 606 }

            , "7": { x: 114, y: 408 }
            , "8": { x: 169, y: 214 }
        }
        this.groupMap = groupMap
        this.addChild(new PIXI.Graphics()
            .beginFill(0x000000)
            .drawRect(0, 0, 1920, 1080))
        this.load(imgArr, _ => {
            console.log('on loaded imgArr')
            let ns = {
                fontFamily: FontName.MicrosoftYahei,
                fontSize: "35px",
                dropShadow: true,
                dropShadowColor: '#222222',
                dropShadowAngle: Math.PI * 1 / 3,
                dropShadowDistance: 3,
                fontWeight: "bold",
                fill: "#acacac"
            };

            this.addChild(newBitmap({ url: urlBg }))

            for (let k in groupMap) {
                let group = groupMap[k]
                group.lName = TextFac.new_(ns, this)
                    .setText('')
                group.rName = TextFac.new_(ns, this)
                    .setText('')
                if (Number(k) > 6) {
                    group.lName.setSize('42px')
                    group.rName.setSize('42px')
                    group.lName.setPos(group.x, group.y)
                        .setAlignCenter(_c(group.x))
                    group.rName.setPos(group.x, group.y)
                        .setAlignCenter(_c(-group.x))
                }
                else {
                    group.lName.setPos(group.x, group.y)
                        .setAlignCenter(group.x)
                    group.rName.setPos(group.x, group.y + 51)
                        .setAlignCenter(group.x)
                }
            }

            this.finalScore = TextFac.new_(ns, this)
                .setY(293)
                .setSize("36px")
                .setText('')
                .setAlignCenter(_c(0))
        })
    }
    fillData(data) {
        let recArr = data.bracketRec16
        for (let rec of recArr) {
            let group = this.groupMap[rec.gameIdx]
            if (rec.gameIdx > 6) {
                group.lName.setText(rec.player[0])
                    .setAlignCenter(_c(-group.x))

                group.rName.setText(rec.player[1])
                    .setAlignCenter(_c(group.x))

                if (group.rName.width > 170) {
                    group.rName.setSize('38px')
                        .setAlignCenter(_c(group.x))
                }
            }
            else {
                group.lName.setText(rec.player[0])
                    .setAlignCenter(group.x)
                group.rName.setText(rec.player[1])
                    .setAlignCenter(group.x)
            }

            let lScore = rec.score[0], rScore = rec.score[1]

            group.lName.alpha =
                group.rName.alpha = 1
            if (rec.score[0] != 0 || rec.score[1] != 0) {
                if (lScore > rScore) {
                    group.rName.alpha = 0.4
                }
                else {
                    group.lName.alpha = 0.4
                }
            }

            if (rec.gameIdx == 8&&rec.player[0]
            ) {
                this.finalScore.setText(rec.score[0] + ' - ' + rec.score[1])
                    .setAlignCenter(_c(0))
                group.lName.alpha =
                    group.rName.alpha = 1
            }
        }
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
class Bracket8421View extends VueBase {
    protected mounted() {
        console.log('mouted Bracket8421View view');
        if (!canvasStage)
            canvasStage = BasePanelView.initPixi()
        showPanel(Bracket8421, { visible: true }, canvasStage)
        let localWs = io.connect(`/${PanelId.rkbPanel}`)
        localWs.on('connect', (msg) => {
            console.log('connect', window.location.host)
        })
            .on(CommandId.sc_bracket, data => {
                console.log('sc bracket')
                data.cid = CommandId.sc_bracket
                data.visible = true
                showPanel(Bracket8421, data, canvasStage)
            })
        // let _adept = (event) => {
        //     localWs.on(event, data => {
        //         data.cid = event
        //         data.visible = true
        //         console.log(event, data)
        //         // showPanel(BracketS5Final, data, canvasStage)
        //     })
        // }
        // _adept(CommandId.sc_bracket)
    }
}
export let bracket8421 = new Bracket8421View()