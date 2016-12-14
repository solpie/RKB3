import { fdatasync } from 'fs';
import { mapToArr } from '../../utils/JsFunc';
import { HP } from './HP';
import { getPlayerDoc } from '../../utils/HupuAPI';
import { PickupAnimation } from './PickupAnimation';
import { CommandId } from '../../Command';
import { PanelId } from '../../const';
import { dynamicLoading } from '../../utils/WebJsFunc';
import { PickupPlayerInfo, PickupScene } from './Pickup';
import { BasePanelView } from '../BasePanelView';
import { VueBase } from '../../utils/VueBase';
declare let Vue;
declare let io;
declare let $;
let canvasStage = BasePanelView.initPixi()
let pickupScene: PickupScene;

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

    $actTab
    playerIdMap
    hp: HP
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
        this.initIO()
    }

    initCanvas() {
        this.hp = new HP(canvasStage)
    }

    protected mounted() {
        this.isPickup1p = true
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
            if (is1p > 0) {
                this.gamePlayer2p = playerDoc
            }
            else
                this.gamePlayer1p = playerDoc

        },
        onStartGame() {
            if (this.gamePlayer1p.id && this.gamePlayer2p.id)
                this.opReq(`${CommandId.cs_startGame}`, {
                    _: null,
                    playerDocArr: [this.gamePlayer1p, this.gamePlayer2p],
                })
            else {
                alert('没选人！')
            }
        },
        onToggleTimer(){
             this.opReq(`${CommandId.cs_toggleTimer}`, {
                    _: null
                })
        },
        onResetTimer(){
            this.opReq(`${CommandId.cs_resetTimer}`, {
                    _: null
                })
        },
        onSetBlood(is1p:boolean,dt){
            this.opReq(`${CommandId.cs_setBlood}`, {
                    // _: null,
                    is1p:is1p,
                    dt:dt
                })
        }
    }


    showPickup(data) {
        pickupScene = new PickupScene(canvasStage, this.playerIdMap)
        new PickupAnimation(pickupScene).startPick(data.teamId1p, data.teamId2p, data.orderArr1p, data.orderArr2p)
    }

    startGame(data) {
        let playerDocArr = data.playerDocArr
         this.hp.setPlayer(data.playerDocArr)
    }

    initIO() {
        let localWs = io.connect(`/${PanelId.rkbPanel}`)
        localWs.on('connect', (msg) => {
            console.log('connect', window.location.host)
            localWs.emit("opUrl", { opUrl: window.location.host })
        })
            .on(`${CommandId.sc_showPickup}`, (data) => {
                console.log("CommandId.sc_showPickup", data)
                this.showPickup(data)
            })
            .on(`${CommandId.sc_startGame}`, (data) => {
                this.startGame(data)
            })
            .on(`${CommandId.sc_toggleTimer}`, (data) => {
                this.hp.toggleTimer() 
            })
            .on(`${CommandId.sc_resetTimer}`, (data) => {
                this.hp.resetTimer()
            })
            .on(`${CommandId.sc_setBlood}`, (data) => {
                this.hp.setBlood(data.is1p,data.blood)
            })
    }
}

export let koa = new KOA()