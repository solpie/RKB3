import { HP } from './HP';
import { getPlayerDoc } from '../../utils/HupuAPI';
import { PickupAnimation } from './PickupAnimation';
import { CommandId } from '../../Command';
import { PanelId } from '../../const';
import { dynamicLoading } from '../../utils/WebJsFunc';
import { PickupPlayerInfo, PickupScene } from './Pickup';
import { BasePanelView } from '../BasePanelView';
import { VueBase } from '../../utils/VueBase';
declare let io;
declare let $;
let canvasStage = BasePanelView.initPixi()
let pickupScene: PickupScene;

class KOA extends VueBase {
    template = require('./koa.html')
    isOp = VueBase.PROP
    teamId1p = VueBase.PROP
    teamId2p = VueBase.PROP

    orderArr1p: Array<number>
    orderArr2p: Array<number>

    orderArr1pStr = VueBase.PROP
    orderArr2pStr = VueBase.PROP
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
        this.teamId1p = '1'
        this.teamId2p = '2'
        this.orderArr1pStr = '1 2 3 4'
        this.orderArr2pStr = '6 5 7 8'
        // this.teamId1p = '3'
        // this.teamId2p = '6'
        // this.orderArr1pStr = '12 9 10 11'
        // this.orderArr2pStr = '22 23 21 24'
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
                orderArr1p: getNumberArr(this.orderArr1pStr),
                orderArr2p: getNumberArr(this.orderArr2pStr),
                teamId2p: this.teamId2p
            })
        }
    }

    showPickup(data) {
        pickupScene = new PickupScene(canvasStage, this.playerIdMap)
        new PickupAnimation(pickupScene).startPick(data.teamId1p, data.teamId2p, data.orderArr1p, data.orderArr2p)
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
    }
}

export let koa = new KOA()