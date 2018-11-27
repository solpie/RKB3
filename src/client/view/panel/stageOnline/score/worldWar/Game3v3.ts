import { newBitmap } from '../../../../utils/PixiEx';
import { BasePanel } from '../../../base/BasePanel';
import { FontName } from '../../../../const';
import { Text2, TextFac } from '../../../../utils/TextFac';
import { TextTimer } from '../../../../utils/TextTimer';
let urlBg = '/img/panel/3v3/bg.png'
const isTest = true
export class Game3v3 extends BasePanel {
    static cls = 'Game3v3'
    lScore: Text2
    rScore: Text2
    timer: TextTimer
    lTeamName: Text2
    rTeamName: Text2
    create() {
        console.log('game 3v3 created.')
        let imgArr = [
            urlBg
        ]
        let ns = {
            fontFamily: FontName.dinCondensedC,
            fontSize: "50px",
            fontWeight: "bold",
            fill: "#ddd"
        };
        let ts = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: "38px",
            fontWeight: "bold",
            fill: "#ff0000"
        };
        this.load(imgArr, _ => {
            this.addChild(newBitmap({ url: urlBg }))
            this.lScore = TextFac.new_(ns, this)
                .setPos(1750, 817)
                .setText('11')
            this.rScore = TextFac.new_(ns, this)
                .setPos(1747, 876)
                .setText('11')

            this.lTeamName = TextFac.new_(ts, this)
                .setPos(1750, 817)
                .setText('日本')
                .setAlignCenter(1476 + 169)
            this.rTeamName = TextFac.new_(ts, this)
                .setPos(1747, 876)
                .setText('杭州')
                .setAlignCenter(1472 + 169)

            let s = {
                fontFamily: FontName.dinCondensedC,
                fontSize: '45px',
                fill: '#eee',
                fontWeight: 'bold'
            }
            this.timer = new TextTimer('', s)
            // this.timeText.x = 203
            this.timer.isMin = true
            this.timer.x = 1685
            this.timer.y = 932
            this.addChild(this.timer)
            this.timer.setTimeBySec(15 * 60)
            // if (isTest) {
            //     this._show({ leftTeam: '日本somecity', rightTeam: '杭州' })
            // }

        })
    }
    _show(data) {
        this.timer.toggleTimer()
        // this.lTeamName.setText(data.leftTeam)
        //     .setAlignCenter(1476)
        // this.rTeamName.setText(data.rightTeam)
        //     .setAlignCenter(1472)
        this.p.addChild(this)
    }

    resetTimer() {
        this.timer.resetTimer()
    }

    setTimer(v) {
        this.timer.setTimeBySec(v)
    }

    toggleTimer(v) {
        this.timer.toggleTimer(v)
    }
    setScoreFoul(data) {
        this.lScore.text = data.leftScore
        this.rScore.text = data.rightScore
    }
}