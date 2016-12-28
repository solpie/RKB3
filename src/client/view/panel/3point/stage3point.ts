import { PanelId } from '../../const';
import { ascendingProp } from '../../utils/JsFunc';
import { _avatar, getPlayerDoc } from '../../utils/HupuAPI';
import { BasePanelView } from '../BasePanelView';
import { dynamicLoading } from '../../utils/WebJsFunc';
import { VueBase } from '../../utils/VueBase';
import { newBitmap, PIXI_MOUSE_EVENT } from '../../utils/PixiEx';
class Game3 extends PIXI.Container {
    avtArr
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
    constructor(parent: PIXI.Container, playerDocArr) {
        super()
        parent.addChild(this)
        let bg = newBitmap({ x: 220, y: 0, url: "/img/panel/3/title.png" })
        this.addChild(bg)
        var gidx = {}
        gidx['0'] = gidx['4'] = 68
        gidx['1'] = gidx['5'] = gidx['0'] + 275
        gidx['2'] = gidx['6'] = 883
        gidx['3'] = gidx['7'] = gidx['6'] + 275
        var flipIdx = {}
        flipIdx['2'] = -1
        flipIdx['3'] = -1
        flipIdx['6'] = -1
        flipIdx['7'] = -1
        var  y
        let avtArr = []
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 4; j++) {
                i < 4 ? y = 2 : y = 65
                var avtBg = newBitmap({ x: gidx[i] + j * 65, y: y, url: '/img/panel/koa/pickup/avatar.png' })
                avtBg.width = 60
                avtBg.height = 60
                var msk = this.makeMsk(avtBg.x, avtBg.y)
                bg.addChild(msk)
               
                var avt = newBitmap({ x: avtBg.x, y: avtBg.y, url: _avatar(playerDocArr[i * 4 + j].avatar) })
                avt['id'] = playerDocArr[i * 4 + j].id
                avt['mx'] = avtBg.x
                avtArr.push(avt)
                avt.width = 56
                avt.height = 56
                if (flipIdx[i]) {
                    avt.x += 56
                    avt.scale.x = -1
                }
                bg.addChild(avt)
                avt.mask = msk
                bg.addChild(avtBg)
            }
        }
        this.avtArr = avtArr

        document.onclick = (e) => {
            console.log('click ', e);
            var mx = e.clientX - bg.x
            var my = e.clientY - bg.y
            for (var a of avtArr) {
                if (a.mx < mx && a.mx + a.width > mx && a.y < my && a.y + a.height > my) {
                    this.opReq('cs_3pointTogglePlayer', { _: null, id: a.id }, () => {

                    })
                }
            }
        }
    }
    makeMsk(ax, ay) {
        var r = 13, ax, ay
        let msk = new PIXI.Graphics()
        msk.beginFill(0xff0000, 0.5)
        msk.moveTo(17, 4)
        msk.lineTo(72, 4)
        msk.lineTo(72 + r, 4 + r)
        msk.lineTo(72 + r, 72)
        msk.lineTo(72, 72 + r)
        msk.lineTo(17, 72 + r)
        msk.lineTo(17 - r, 72)
        msk.lineTo(17 - r, 4 + r)
        msk.x = ax
        msk.y = ay
        msk.width = 56
        msk.height = 56
        return msk
    }

    togglePlayer(playerId) {
        for (var p of this.avtArr) {
            if (p.id == playerId) {
                p.visible = !p.visible
            }
        }
    }
}
declare let $;
declare let io;
class Stage3point extends VueBase {
    template = require('./3point.html')
    isOp = VueBase.PROP
    // constructor(){
    //     super()
    //     // parent.addChild(this)
    //     // var bg = newBitmap({url:''})
    //     // this.addChild(bg)
    // }

    game3: Game3
    constructor() {
        super();
        VueBase.initProps(this);
    }

    protected created() {
        this.isOp = this.$route.params['op'] == 'op'
        if (this.isOp) {
            dynamicLoading.css('/css/bulma.min.css')
        }
        getPlayerDoc((playerDocArr) => {
            let playerMap = {}
            playerDocArr = playerDocArr.sort(ascendingProp('id'))
            // for (let player of playerDocArr) {
            //     playerMap[player.id] = player
            // }
            this.game3 = new Game3(BasePanelView.initPixi(), playerDocArr)
            // this.initPlayerData(playerMap)
        })

        let localWs = io.connect(`/${PanelId.rkbPanel}`)
        localWs.on('connect', (msg) => {
            console.log('connect', window.location.host)
            // localWs.emit("opUrl", { opUrl: window.location.host })
        })
            .on(`sc_3pointTogglePlayer`, (data) => {
                console.log("sc_3pointTogglePlayer", data)
                this.game3.togglePlayer(data.id)
            })
    }

    setPlayerState(playerId, state) {



    }
}

export let stage3point = new Stage3point()