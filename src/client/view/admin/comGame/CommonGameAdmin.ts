import { VueBase } from '../../utils/VueBase';
import { PanelId, TimerEvent } from '../../const';
import { CommandId } from '../../Command';
declare let $;
let opReq = (cmdId: string, param: any) => {
    param._ = null;
    $.ajax({
        url: `/panel/${PanelId.onlinePanel}/${cmdId}`,
        type: "post",
        data: JSON.stringify(param),
        headers: { "Content-Type": "application/json" },
        dataType: "json"
    });
};
export class BaseGame {
    lScore: number = 0;
    rScore: number = 0;
    lFoul: number = 0;
    rFoul: number = 0;
    lName: string = "";
    rName: string = "";
    lPlayerId: string = "";
    rPlayerId: string = "";
    gameTime: number = 0//in sec
    buzzerTime: number = 24//
    constructor() { }
}
const baseGame = new BaseGame();
class _CommonGameAdmin extends VueBase {
    template = require('./commonGame.html');
    timeInSec = VueBase.PROP;
    buzzerTimeInSec = VueBase.PROP;
    updateTime = VueBase.PROP;
    lTeamScore = VueBase.PROP
    rTeamScore = VueBase.PROP
    isFocusBuzzer = VueBase.PROP

    constructor() {
        super();
        VueBase.initProps(this);
    }
    baseGame: any;
    created() {
        this.baseGame = baseGame;
        this.timeInSec = 0;
        this.buzzerTimeInSec = 0;
        this.lTeamScore = this.rTeamScore = 0
        window.onkeydown = (e) => {
            let isFocus = $("#buzzer").is(":focus")
            if (isFocus) {
                console.log(e.keyCode, 'key code')
                if (e.keyCode == 32) {
                    console.log('buzzer toggle')
                    opReq(CommandId.cs_timerEvent_buzzer, { event: "toggle" })
                }
                else if (e.keyCode == 82) {
                    this.resetBuzzer()
                }
                else if (e.keyCode == 81) {
                    this.resetBuzzer(true)
                }
            }
        }
    }
    initView(data) {
        baseGame.lName = data.leftPlayer.name;
        baseGame.rName = data.rightPlayer.name;
        baseGame.lPlayerId = data.leftPlayer.playerId
        baseGame.rPlayerId = data.rightPlayer.playerId
        baseGame.lScore = baseGame.rScore = baseGame.lFoul = baseGame.rFoul = 0;
        console.log("init base game view", data, baseGame.lName);
        this.vueUpdate();
        document.getElementById("vudp").click();
    }
    vueUpdate() {
        this.updateTime = new Date().getTime();
    }
    watch = {
        "baseGame.lName": function (val) {
            console.log("lname", val);
        },
    };
    resetBuzzer(isToggle = false) {
        // if (isToggle)
        //     opReq(CommandId.cs_timerEvent_buzzer, { event: TimerEvent.TOGGLE })
        opReq(CommandId.cs_timerEvent_buzzer, { event: TimerEvent.RESET ,isToggle:isToggle})
    }
    methods = {
        onSetTimerEvent(event, v) {
            let isNum = /(-?\d*)\-?\d+/.test(v) || /(-?\d*)\.?\d+/.test(v)
            let isSec = true;
            if (isNum) {
                let sec;
                if (/\./.test(v)) {
                    isSec = false
                    let a = v.split('.')
                    sec = Number(a[1]) + Number(a[0]) * 100
                }
                else {
                    if (/\-/.test(v)) {
                        let a = v.split('-')
                        sec = Number(a[0]) * 60 + Number(a[1])
                    }
                    else {
                        sec = v
                    }
                    if (sec < 60) {
                        sec *= 100
                        isSec = false
                    }
                }
                opReq(CommandId.cs_timerEvent_common, { event: event, param: sec, isSec: isSec })
            }
            console.log('onSetTimerEvent', isNum, v)
        },
        onSetBuzzer(v) {
            let ms10;
            let isNum = /(-?\d*)\.?\d+/.test(v)
            if (isNum) {
                if (!/\./.test(v)) {
                    v += '.0'
                }
                let a = v.split('.')
                ms10 = Number(a[1]) + Number(a[0]) * 100
                opReq(CommandId.cs_timerEvent_buzzer, { event: TimerEvent.SETTING, param: ms10 })
            }
            console.log('set buzzer', isNum, v, Number(v) * 100, ms10)
        },
        onRestTeamScore() {
            this.lTeamScore = this.rTeamScore = 0
            opReq(CommandId.cs_teamScore, { lScore: this.lTeamScore, rScore: this.rTeamScore });
        },
        onSetScore(isLeft, dtScore) {
            // isLeft ? (baseGame.lScore += dtScore) : (baseGame.rScore += dtScore);
            let score;
            if (isLeft) {
                baseGame.lScore += dtScore;
                score = baseGame.lScore;
            } else {
                baseGame.rScore += dtScore;
                score = baseGame.rScore;
            }
            opReq(CommandId.cs_scoreFoul_common, baseGame);
            this.vueUpdate();
        },
        onSetFoul(isLeft, dtFoul) {
            isLeft ? (baseGame.lFoul += dtFoul) : (baseGame.rFoul += dtFoul);
            opReq(CommandId.cs_scoreFoul_common, baseGame);
            this.vueUpdate();
        },
        onResetFoul() {
            this.onSetFoul(true, -baseGame.lFoul)
            this.onSetFoul(false, -baseGame.rFoul)
            opReq(CommandId.cs_scoreFoul_common, baseGame);
        },
        onVueUpdate() {
            this.vueUpdate();
        }
    };
}

export var CommonGameAdmin = new _CommonGameAdmin();
