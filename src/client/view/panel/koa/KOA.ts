import { fdatasync } from 'fs';
import { ascendingProp, mapToArr } from '../../utils/JsFunc';
import { HP } from './HP';
import { getGameInfo, getPlayerDoc } from '../../utils/HupuAPI';
import { PickupAnimation } from './PickupAnimation';
import { CommandId } from '../../Command';
import { PanelId, TimerState } from '../../const';
import { dynamicLoading } from '../../utils/WebJsFunc';
import { PickupPlayerInfo, PickupScene } from './Pickup';
import { BasePanelView } from '../BasePanelView';
import { VueBase } from '../../utils/VueBase';
declare let Vue;
declare let io;
declare let $;
let pickupScene: PickupScene;
var canvasStage
class KOA extends VueBase {
    template = require('./koa.html')
    isOp = VueBase.PROP
    playerDocArr = VueBase.PROP
    isPickup1p = VueBase.PROP

    teamId1p = VueBase.PROP
    teamId2p = VueBase.PROP
    orderArr1p = VueBase.PROP
    orderPlayerDocArr1p = VueBase.PROP
    orderPlayerDocArr2p = VueBase.PROP
    orderArr2p = VueBase.PROP
    gamePlayer1p = VueBase.PROP
    gamePlayer2p = VueBase.PROP

    bracketInfo = VueBase.PROP
    bracketIdx = VueBase.PROP

    $actTab
    playerIdMap
    hp: HP
    stPlayer1p
    stPlayer2p
    opReq = (cmdId: string, param: any, callback: any) => {
        $.ajax({
            url: `/panel/${PanelId.onlinePanel}/${cmdId}`,
            type: 'post',
            data: JSON.stringify(param),
            headers: { "Content-Type": "application/json" },
            dataType: 'json',
            success: callback
        });
    }
    constructor() {
        super()
        VueBase.initProps(this)
    }
    protected created() {
        this.initCanvas()
        this.gamePlayer1p = { name: '1p' }
        this.gamePlayer2p = { name: '2p' }
        this.isOp = this.$route.params['op'] == 'op'
        if (this.isOp) {
            dynamicLoading.css('/css/bulma.min.css')
        }
        console.log('route:', this.$route['op']);
        getPlayerDoc((playerDocArr) => {
            let playerMap = {}
            for (let player of playerDocArr) {
                playerMap[player.id] = player
            }
            this.playerIdMap = playerMap
            // this.initPlayerData(playerMap)
        })
        getGameInfo((res) => {
            console.log('gameInfo', res);
            this.startGame(res)
        })
        this.initIO()
    }

    initCanvas() {
        canvasStage = BasePanelView.initPixi()
        this.hp = new HP(canvasStage)
    }

    protected mounted() {
        this.isPickup1p = true
    }

    showPickup(data) {
        pickupScene = new PickupScene(canvasStage, this.playerIdMap)
        new PickupAnimation(pickupScene).startPick(data.teamId1p, data.teamId2p, data.orderArr1p, data.orderArr2p)
    }

    startGame(data) {
        if (data.start) {
            this.hp.setPlayer(data.playerDocArr, data.partnerArr, data.stArr)
            this.hp.setBlood(true, data.playerDocArr[0].blood)
            this.hp.setBlood(false, data.playerDocArr[1].blood)
            this.hp.setFoul(true, data.playerDocArr[0].foul)
            this.hp.setFoul(false, data.playerDocArr[1].foul)
            this.hp.setSt(true, data.playerDocArr[0].st)
            this.hp.setSt(false, data.playerDocArr[1].st)
            if (data.beatBy01 && data.beatBy01[0] > -1) {
                this.hp.setBeatBy(data.beatBy01[0] == 0, data.beatBy01[1])
            }
            this.hp.resetTimer()
            this.hp.toggleTimer(TimerState.PAUSE)
        }
    }

    methods = {
        onShowPickup() {
            let getNumberArr = (str) => {
                let a = str.split(' ')
                for (var i = 0; i < a.length; i++) {
                    a[i] = Number(a[i]);
                }
                return a
            }

            this.opReq(`${CommandId.cs_showPickup}`, {
                _: null,
                teamId1p: this.teamId1p,
                orderArr1p: this.orderArr1p,
                orderArr2p: this.orderArr2p,
                teamId2p: this.teamId2p
            })
        },
        onTabTeam(e, teamIdx) {
            console.log('onTabTeam:', e, teamIdx);
            if (this.$actTab) {
                this.$actTab.removeClass('is-active')
            }
            this.$actTab = $(e.target.parentElement)
            this.$actTab.addClass('is-active')

            let a = []
            for (var i = 1; i < 5; i++) {
                a.push(this.playerIdMap[(teamIdx - 1) * 4 + i])
            }
            console.log('playerDocArr', a);

            this.playerDocArr = a
            if (this.isPickup1p)
                this.teamId1p = teamIdx
            else
                this.teamId2p = teamIdx
        },
        onPickup(is1p) {
            this.isPickup1p = is1p
            if (is1p) {
                this.orderPlayerDocArr1p = []
                this.orderArr1p = []
            }
            else {
                this.orderPlayerDocArr2p = []
                this.orderArr2p = []
            }
        },
        onPickupPlayer(player) {
            if (this.isPickup1p) {
                this.orderPlayerDocArr1p.push(player)
                this.orderArr1p.push(player.id)
            }
            else {
                this.orderPlayerDocArr2p.push(player)
                this.orderArr2p.push(player.id)
            }
        },
        onStartPlayer(is1p, playerDoc) {
            is1p > 0 ? this.gamePlayer2p = playerDoc : this.gamePlayer1p = playerDoc
            var a;
            is1p > 0 ? a = this.orderPlayerDocArr2p : a = this.orderPlayerDocArr1p
            var isAfterPlayer = false
            for (var i = 0; i < a.length; i++) {
                var pdc = a[i];
                if (pdc.id != playerDoc.id) {
                    pdc.isPlay = false
                    isAfterPlayer ? pdc.isDead = false
                        : pdc.isDead = true
                }
                else {
                    pdc.isDead = false
                    pdc.isPlay = true
                    isAfterPlayer = true
                }
            }
        },
        onStartGame() {
            if (this.gamePlayer1p.id && this.gamePlayer2p.id)
                this.opReq(`${CommandId.cs_startGame}`, {
                    // _: null,
                    playerDocArr: [this.gamePlayer1p, this.gamePlayer2p],
                    partnerArr: [this.orderPlayerDocArr1p, this.orderPlayerDocArr2p],
                    stArr: [this.orderPlayerDocArr1p[3], this.orderPlayerDocArr2p[3]],
                })
            else {
                alert('没选人！')
            }
        },
        onToggleTimer() {
            this.opReq(`${CommandId.cs_toggleTimer}`, {
                _: null
            })
        },
        onResetTimer() {
            this.opReq(`${CommandId.cs_resetTimer}`, {
                _: null
            })
        },
        onSetBlood(is1p: boolean, dt) {
            this.opReq(`${CommandId.cs_setBlood}`, {
                is1p: is1p,
                dt: dt
            })
        },
        onSetFoul(is1p: boolean, dt) {
            this.opReq(`${CommandId.cs_setFoul}`, {
                is1p: is1p,
                dt: dt
            })
        },
        onSetSt(is1p: boolean, dt) {
            this.opReq(`${CommandId.cs_setSt}`, {
                is1p: is1p,
                dt: dt
            })
        },
        onCommitGame() {
            var bracketIdx = Number(this.bracketIdx)
            if (bracketIdx) {
                this.opReq(`${CommandId.cs_commitGame}`, { duration: (this.hp as HP).timeText.timeInSec, bracketIdx: bracketIdx })
            }
        },
        onReloadDB() {
            this.opReq('cs_reloadDB', {})
        },
        onCommitTeam() {
            var a = []
            if (this.bracketInfo)
                a = this.bracketInfo.split('-').concat([this.bracketIdx])
            if (a.length) {
                if (a.length == 3) {
                    // var bracketIdx = a[0]
                    // var scoreBlueTeam = a[1]
                    // var scoreRedTeam = a[2]
                    this.opReq(`${CommandId.cs_commitTeam}`, {
                        bracketIdx: Number(a[0]),
                        scoreArr: [Number(a[1]), Number(a[2])]
                    })
                }
                else
                    alert('数据录入错误！')
            }
            else {
                if (this.bracketIdx)
                    this.opReq(`${CommandId.cs_commitTeam}`, {
                        bracketIdx: Number(this.bracketIdx)
                    })
                else
                    alert('数据录入错误！')
            }
        }
    }

    initIO() {
        let localWs = io.connect(`/${PanelId.rkbPanel}`)
        localWs.on('connect', (msg) => {
            console.log('connect', window.location.host)
            // localWs.emit("opUrl", { opUrl: window.location.host })
        })
            .on(`${CommandId.sc_showPickup}`, (data) => {
                console.log("CommandId.sc_showPickup", data)
                this.showPickup(data)
            })
            .on(`${CommandId.sc_startGame}`, (data) => {
                console.log('sc_startGame', data);
                this.startGame(data)
            })
            .on(`${CommandId.sc_toggleTimer}`, (data) => {
                this.hp.toggleTimer()
            })
            .on(`${CommandId.sc_resetTimer}`, (data) => {
                this.hp.resetTimer()
            })
            .on(`${CommandId.sc_setBlood}`, (data) => {
                this.hp.setBlood(data.is1p, data.blood)
            })
            .on(`${CommandId.sc_setFoul}`, (data) => {
                this.hp.setFoul(data.is1p, data.foul)
            })
            .on(`${CommandId.sc_setSt}`, (data) => {
                this.hp.setSt(data.is1p, data.st)
            })
            .on(`${CommandId.sc_commitGame}`, (data) => {
                this.hp.toggleTimer(TimerState.PAUSE)
                if (data.sus)
                    this.hp.showWinner(data.winner == 0)
                console.log('cs_commitGame', data);
            })
            .on(`${CommandId.sc_commitTeam}`, (data) => {
                console.log('sc_commitTeam', data);
                var winTeam;
                let g = data.group
                var is1pWin = g.left.score > g.right.score
                is1pWin ? winTeam = g.left
                    : winTeam = g.right
                var winGameDocArr = []
                if (data.gameDocArr) {
                    // winGameDocArr.sort()
                    data.gameDocArr = data.gameDocArr.sort(ascendingProp('end'))
                    for (var i = 0; i < data.gameDocArr.length; i++) {
                        var gameDoc = data.gameDocArr[i];
                        var loser = gameDoc.playerDocArr[Number(is1pWin)]
                        if (loser.blood == 0) {
                            var playerArr = []
                            playerArr.push(this.playerIdMap[gameDoc.playerDocArr[0].id])
                            playerArr.push(this.playerIdMap[gameDoc.playerDocArr[1].id])
                            winGameDocArr.push(playerArr)
                        }
                    }
                }
                console.log('winGameDocArr', winGameDocArr);
                winTeam.winPlayerDocArr = winGameDocArr
                winTeam.is1pWin = is1pWin
                winTeam.scoreArr = data.scoreArr
                this.hp.showWinTeam(winTeam)
            })
    }
}

export let koa = new KOA()