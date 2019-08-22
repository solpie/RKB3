import { VueBase } from '../../../utils/VueBase';
import { CommandId } from '../../../Command';
import { showPanel, BasePanel } from '../../base/BasePanel';
import { BasePanelView } from '../../BasePanelView';
import { PanelId, FontName } from '../../../const';
import { newBitmap, _c } from '../../../utils/PixiEx';
import { TextFac, Text2 } from '../../../utils/TextFac';
import { BracketS5Team } from './BracketS5Team';

let urlBg = '/img/panel/bracket/s5/bg_16.png'

class BracketS5Final extends BasePanel {
    static cls = 'BracketS5Final'
    groupMap: any
    finalScore: Text2
    create() {
        let imgArr = [urlBg
            // , urlFg
        ]
        let x0 = 730, x1 = 421, x2 = 421 - 252
        let groupMap = {
            "1": { x: _c(-x0), y: 252 }
            , "3": { x: _c(-x0), y: 383 }
            , "5": { x: _c(-x0), y: 540 }
            , "7": { x: _c(-x0), y: 671 }

            , "2": { x: _c(x0), y: 252 }
            , "4": { x: _c(x0), y: 383 }
            , "6": { x: _c(x0), y: 540 }
            , "8": { x: _c(x0), y: 671 }

            , "9": { x: _c(-x1), y: 318 }
            , "11": { x: _c(-x1), y: 612 }

            , "10": { x: _c(x1), y: 318 }
            , "12": { x: _c(x1), y: 612 }

            , "13": { x: _c(-x2), y: 467 }
            , "14": { x: _c(x2), y: 467 }

            // , "15": { x: 125, y: 1080 }
            , "15": { x: 125, y: 220 }
        }
        // let groupMap = {
        //     "1": { x: _c(-x0), y: 252 }
        //     , "2": { x: _c(-x0), y: 383 }
        //     , "3": { x: _c(-x0), y: 540 }
        //     , "4": { x: _c(-x0), y: 671 }

        //     , "5": { x: _c(x0), y: 252 }
        //     , "6": { x: _c(x0), y: 383 }
        //     , "7": { x: _c(x0), y: 540 }
        //     , "8": { x: _c(x0), y: 671 }

        //     , "9": { x: _c(-x1), y: 318 }
        //     , "10": { x: _c(-x1), y: 612 }

        //     , "11": { x: _c(x1), y: 318 }
        //     , "12": { x: _c(x1), y: 612 }

        //     , "13": { x: _c(-x2), y: 467 }
        //     , "14": { x: _c(x2), y: 467 }

        //     , "15": { x: 125, y: 1080 }
        //     , "16": { x: 125, y: 220 }
        // }
        this.groupMap = groupMap
        this.addChild(new PIXI.Graphics()
            .beginFill(0x000000)
            .drawRect(0, 0, 1920, 1080))
        this.load(imgArr, _ => {
            console.log('on loaded imgArr')
            let ns = {
                fontFamily: FontName.MicrosoftYahei,
                fontSize: "30px",
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
                if (Number(k) > 14) {
                    group.lName.setSize('43px')
                    group.rName.setSize('43px')
                    group.lName.setPos(group.x, group.y)
                        .setAlignCenter(_c(-group.x))
                    group.rName.setPos(group.x, group.y)
                        .setAlignCenter(_c(group.x))
                }
                else {
                    group.lName.setPos(group.x, group.y)
                        .setAlignCenter(group.x)
                    group.rName.setPos(group.x, group.y + 43)
                        .setAlignCenter(group.x)
                }
            }


            this.finalScore = TextFac.new_(ns, this)
                .setY(303)
                .setSize("34px")
                .setText('')
                .setAlignCenter(_c(0))
        })
    }
    fillData(data) {
        let rec = data.bracketRec16
        for (let r of rec) {
            let group = this.groupMap[r.gameIdx]
            if (r.gameIdx > 14) {
                group.lName.setText(r.name[0])
                    .setAlignCenter(_c(-group.x))
                group.rName.setText(r.name[1])
                    .setAlignCenter(_c(group.x))
            }
            else {
                group.lName.setText(r.name[0])
                    .setAlignCenter(group.x)
                group.rName.setText(r.name[1])
                    .setAlignCenter(group.x)
            }

            let lScore = Number(r.score[0]), rScore = Number(r.score[1])

            group.lName.alpha =
                group.rName.alpha = 1
            if (lScore != 0 || rScore != 0) {
                if (lScore > rScore) {
                    group.rName.alpha = 0.4
                }
                else {
                    group.lName.alpha = 0.4
                }
            }

            if (r.gameIdx == 15) {
                if (lScore >= 0 && rScore >= 0)
                    this.finalScore.setText(lScore + ' - ' + rScore)
                        .setAlignCenter(_c(0))
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
class Bracket16View extends VueBase {
    protected mounted() {
        console.log('mouted Bracket16View view');
        if (!canvasStage)
            canvasStage = BasePanelView.initPixi()
        showPanel(BracketS5Final, { visible: true }, canvasStage)
        // showPanel(BracketS5Team, { visible: true }, canvasStage)
        let localWs = io.connect(`/${PanelId.rkbPanel}`)
        localWs.on('connect', (msg) => {
            console.log('connect', window.location.host)

            
        })
            .on(CommandId.sc_bracketS5, data => {
                data.cid = CommandId.sc_bracketS5
                data.visible = true
                showPanel(BracketS5Team, data, canvasStage)
            })
        let _adept = (event) => {
            localWs.on(event, data => {
                data.cid = event
                data.visible = true
                console.log(event, data)
                showPanel(BracketS5Final, data, canvasStage)
            })
        }
        _adept(CommandId.sc_bracket)
    }
}
export let bracket16 = new Bracket16View()
