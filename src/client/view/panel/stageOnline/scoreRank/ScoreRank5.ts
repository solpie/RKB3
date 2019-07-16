import { BasePanel, showPanel } from '../../base/BasePanel';
import { CommandId } from '../../../Command';
import { VueBase } from '../../../utils/VueBase';
import { BasePanelView } from '../../BasePanelView';
import { PanelId, FontName } from '../../../const';
import { newBitmap } from '../../../utils/PixiEx';
import { Text2, TextFac } from '../../../utils/TextFac';
import { MaskAvatar } from '../../base/MaskAvatar';
import { descendingProp } from '../../../utils/JsFunc';

let urlBg = '/img/panel/scoreRank/rank5_bg.png'
let urlBg0 = '/img/panel/scoreRank/rank5_bg0.png'
let urlMask = '/img/panel/scoreRank/rank5_mask.png'
let urlAvtDef = '/img/panel/scoreRank/rank5_patch.png'
let urlPlayer0 = '/img/panel/scoreRank/rank5_p0.png'
class PlayerItem extends PIXI.Container {
    avt: MaskAvatar
    pName: Text2
    constructor() {
        super()
        this.avt = new MaskAvatar(null)
        this.avt.setAvtPos(0, 0, 115)
        this.addChild(this.avt)

        let ns = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '32px', fill: "#ccc",
            fontWeight: 'bold'
        }
        this.pName = TextFac.new_(ns, this)
            .setText("")
    }
    show(v) {
        this.avt.visible =
            this.pName.visible = v
    }
}
class ScoreRank5 extends BasePanel {
    static cls = 'ScoreRank5'
    playerItemArr: Array<PlayerItem>
    avtPatch: PIXI.Sprite
    avtPlayer0: PIXI.Sprite
    create() {
        this.load([
            urlBg0,
            urlBg,
            urlMask,
            urlAvtDef,
            urlPlayer0,
        ], _ => {
            console.log('score rank5')
            this.playerItemArr = []

            let bg1 = newBitmap({ url: urlBg0 })
            this.addChild(bg1)

            let avtCtn = new PIXI.Container()
            this.addChild(avtCtn)

            let avtMask = newBitmap({ url: urlMask })
            avtCtn.addChild(avtMask)

            this.avtPlayer0 = newBitmap({ url: urlPlayer0 })
            this.addChild(this.avtPlayer0)

            let bg = newBitmap({ url: urlBg })
            this.addChild(bg)


            this.avtPatch = newBitmap({ url: urlAvtDef })
            this.addChild(this.avtPatch)

            for (let i = 0; i < 5; i++) {
                let player = new PlayerItem()
                this.addChild(player)
                if (i == 0) {
                    player.x = 524
                    player.y = 800 + 212

                    player.avt.x = 524
                    player.avt.mask = avtMask
                    player.avt.y = 800 + 88
                    player.avt.setAvtPos(0, 0, 132)
                }
                else {
                    player.x = 760 + (i - 1) * 175
                    player.y = 800 + 212

                    player.avt.x = 760 + (i - 1) * 175
                    player.avt.y = 800 + 132
                }
                // player.avt.alpha = .5
                // this.addChild(player.avt)
                avtCtn.addChild(player.avt)
                this.playerItemArr.push(player)
            }
        })
    }
    _show(data) {

        if (data.cid == CommandId.sc_showScoreRank) {
            console.log('sc_showKDARank')

            for (let i = 0; i < 4; i++) {
                let dataPlayer = data.scoreArr[i]
                dataPlayer.score = Number(dataPlayer.score)
            }
            let a = data.scoreArr.sort(descendingProp('score'))
            let hasScore = a[0].score != 0
            let noScore = (a[0].score == 0
                && a[1].score == 0
                && a[2].score == 0
                && a[3].score == 0)
            let ofsAvt = Number(!hasScore)
            if (hasScore) {
                this.playerItemArr[4].show(false)
                this.playerItemArr[0].show(true)
                this.avtPatch.visible = true
                this.avtPlayer0.visible = false
                //后来更新比分到球员排第一
                if (a[0].score == data.updatePlayerScore) {
                    let restArr = []
                    let updatePlayer
                    for (let p of a) {
                        if (!p.playerId)
                            p.playerId = p.player_id
                        if (p.playerId != data.updatePlayerId) {
                            restArr.push(p)
                        }
                        else
                            updatePlayer = p
                    }
                    a = [updatePlayer].concat(restArr)
                }
            }
            else {
                this.playerItemArr[4].show(true)
                this.playerItemArr[0].show(false)
                this.avtPatch.visible = false
                this.avtPlayer0.visible = true
            }
            for (let i = 0; i < 4; i++) {
                let player = this.playerItemArr[i + ofsAvt]
                let dataPlayer = a[i]
                player.avt.load(dataPlayer.avatar)
                if (noScore)
                    player.pName.setText(dataPlayer.name)
                else
                    player.pName.setText(dataPlayer.name + ' ' + dataPlayer.score)
            }

        }
        this.p.addChild(this)
    }
}
// opReq(CommandId.cs_showScoreRank, {
//     visible: visible,
//     scoreArr: scoreArr
// })
let canvasStage
declare let io;
class ScoreRank5View extends VueBase {
    protected mounted() {
        console.log('mouted ScoreRank5View view');
        if (!canvasStage)
            canvasStage = BasePanelView.initPixi()

        showPanel(ScoreRank5, { visible: true }, canvasStage)
        let localWs = io.connect(`/${PanelId.rkbPanel}`)
        localWs.on('connect', (msg) => {
            console.log('connect', window.location.host)
        })


        let _adept = (event) => {
            localWs.on(event, data => {
                data.cid = event
                if (data.visible == null)
                    data.visible = true
                console.log(event, data)
                showPanel(ScoreRank5, data, canvasStage)
            })
        }
        _adept(CommandId.sc_showScoreRank)

    }
}
export let scoreRank5 = new ScoreRank5View()
