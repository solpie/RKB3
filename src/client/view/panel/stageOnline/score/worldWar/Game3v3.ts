import { newBitmap } from '../../../../utils/PixiEx';
import { BasePanel } from '../../../base/BasePanel';
import { FontName } from '../../../../const';
import { Text2, TextFac } from '../../../../utils/TextFac';
import { TextTimer } from '../../../../utils/TextTimer';
import { CommandId } from '../../../../Command';
let urlBg = '/img/panel/3v3/bg.png'
const isTest = true
let _io;
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
            fill: "#ddd"
        };
        this.load(imgArr, _ => {
            this.addChild(newBitmap({ url: urlBg }))
            this.lScore = TextFac.new_(ns, this)
                .setPos(1786, 817)
                .setText('0')
            this.rScore = TextFac.new_(ns, this)
                .setPos(1782, 876)
                .setText('0')

            this.lTeamName = TextFac.new_(ts, this)
                .setPos(1750, 817)
                .setText('')
                .setAlignCenter(1476 + 169)
            this.rTeamName = TextFac.new_(ts, this)
                .setPos(1746, 876)
                .setText('')
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
            this.timer.resetTime = 15*60
            this.timer.setTimeBySec(15 * 60)
            // if (isTest) {
            //     this._show({ leftTeam: '日本somecity', rightTeam: '杭州' })
            // }

        })
    }
    _show(data) {
        if (!_io) {
            _io = data.io
            _io.on(CommandId.sc_updateScore, data => {
                console.log('sc_updateScore', data)
                this.lScore.setText(data.lScore)
                    .setAlignCenter(1786)
                this.rScore.setText(data.rScore)
                    .setAlignCenter(1782)
            })
                .on(CommandId.sc_timerEvent, data => {
                    console.log('sc_timerEvent', data)
                    this.timer.setTimerEvent(data);
                })
                .on(CommandId.sc_setTeam, data => {
                    console.log('sc_setPlayer', data)
                    this.lTeamName.setText(data.lPlayer)
                        .setAlignCenter(1635)
                    this.rTeamName.setText(data.rPlayer)
                        .setAlignCenter(1631)
                })
        }
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