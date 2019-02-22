import { VueBase } from '../../../utils/VueBase';
import { BasePanelView } from '../../BasePanelView';
import { PanelId, FontName } from '../../../const';
import { CommandId } from '../../../Command';
import { TextFac, Text2 } from '../../../utils/TextFac';
import { _c, newBitmap } from '../../../utils/PixiEx';
import { BasePanel, showPanel } from '../../base/BasePanel';
import { getHupuWS, hupuWsEvent } from '../../../utils/HupuAPI';
import { MaskAvatar } from '../../base/MaskAvatar';

let urlBg = '/img/panel/vsInfo/bg.png'

class VsInfo extends BasePanel {
    static cls = 'VsInfo'
    lJob: Text2//Job
    rJob: Text2

    lSchool: Text2//school
    rSchool: Text2

    lLocation: Text2//location
    rLocation: Text2

    lInfo: Text2//entry_reflections
    rInfo: Text2

    lConstellation: Text2//constellation
    rConstellation: Text2

    lName: Text2
    rName: Text2

    lRank: Text2
    rRank: Text2

    lAvt: MaskAvatar
    rAvt: MaskAvatar

    create() {
        let imgArr = [urlBg
            // , urlFg
        ]
        this.addChild(new PIXI.Graphics()
            .beginFill(0x888c99)
            .drawRect(0, 0, 1920, 1080))

        let avt = new MaskAvatar(null)
        avt.setAvtPos(684, 274, 200)
        this.addChild(avt)
        this.lAvt = avt

        avt = new MaskAvatar(null)
        avt.setAvtPos(1036, 274, 200)
        this.addChild(avt)
        this.rAvt = avt

        this.load(imgArr, _ => {
            console.log('on loaded imgArr')
            let ns = {
                fontFamily: FontName.MicrosoftYahei,
                fontSize: "34px",
                dropShadow: true,
                dropShadowColor: '#222222',
                dropShadowAngle: Math.PI * 1 / 3,
                dropShadowDistance: 1,
                fontWeight: "bold",
                fill: "#4d5167"
            };
            let titleFill = '#582e2a'
            this.addChild(newBitmap({ url: urlBg }))

            this.lConstellation = TextFac.new_(ns, this)
                .setY(832)
            this.rConstellation = TextFac.new_(ns, this)
                .setY(this.lConstellation.y)

            this.lInfo = TextFac.new_(ns, this)
                .setY(612)
            this.rInfo = TextFac.new_(ns, this)
                .setY(this.lInfo.y)

            this.lSchool = TextFac.new_(ns, this)
                .setY(495)
            this.rSchool = TextFac.new_(ns, this)
                .setY(this.lSchool.y)

            this.lLocation = TextFac.new_(ns, this)
                .setY(382)
            this.rLocation = TextFac.new_(ns, this)
                .setY(this.lLocation.y)

            this.lJob = TextFac.new_(ns, this)
                .setY(269)
            this.rJob = TextFac.new_(ns, this)
                .setY(this.lJob.y)
            ns.fill = '#fff'
            this.lName = TextFac.new_(ns, this)
                .setY(508)
            this.rName = TextFac.new_(ns, this)
                .setY(this.lName.y)

        })
    }
    fillData(data) {

    }
    _show(data) {
        if (data.left) {
            let lPlayer = data.left
            let rPlayer = data.right


            this.lConstellation.setText(lPlayer.constellation)
                .setAlignRight(_c(-335))
            this.rConstellation.setText(rPlayer.constellation)
                .setX(_c(335))

            this.lInfo.setText(lPlayer.entry_reflections || "无")
                .setAlignRight(_c(-335))
            this.rInfo.setText(rPlayer.entry_reflections || "无")
                .setX(_c(335))

            this.lSchool.setText(lPlayer.school || '未知')
                .setAlignRight(_c(-335))
            this.rSchool.setText(rPlayer.school || '未知')
                .setX(_c(335))

            this.lLocation.setText(lPlayer.location || '未知')
                .setAlignRight(_c(-335))
            this.rLocation.setText(rPlayer.location || '未知')
                .setX(_c(335))

            this.lJob.setText(lPlayer.job || '未知')
                .setAlignRight(_c(-335))
            this.rJob.setText(rPlayer.job || '未知')
                .setX(_c(335))

            this.lName.setText(lPlayer.name)
                .setAlignCenter(_c(-178))
            this.rName.setText(rPlayer.name)
                .setAlignCenter(_c(178))

            this.lAvt.load(lPlayer.avatar)
            this.rAvt.load(rPlayer.avatar)
        }
        this.p.addChild(this)
    }
}

let canvasStage
declare let io;
class VsInfoView extends VueBase {
    protected mounted() {
        console.log('mouted VsInfoView view');
        if (!canvasStage)
            canvasStage = BasePanelView.initPixi()
        let wsUrl = getHupuWS(null)
        let gameId = 492
        let remoteWs = io.connect(wsUrl)
        showPanel(VsInfo, { visible: true }, canvasStage)
        remoteWs.on('connect', (msg) => {
            console.log('hupuAuto socket connected', wsUrl, gameId);
            remoteWs.emit('passerbyking', {
                game_id: gameId,
                page: 'score'
            })
        })
            .on('wall', data => {
                let event = data.et;
                if (event == hupuWsEvent.START_GAME) {
                    console.log('on START_GAME vsInfo', data)
                    showPanel(VsInfo, {
                        visible: true,
                        left: data.player.left,
                        right: data.player.right
                    }, canvasStage)
                }
                if (event == hupuWsEvent.INIT) {
                    console.log('on INIT vsInfo', data)
                    showPanel(VsInfo, {
                        visible: true,
                        left: data.player.left,
                        right: data.player.right
                    }, canvasStage)
                }

            })
        // let _adept = (event) => {
        //     remoteWs.on(event, data => {
        //         data.cid = event
        //         data.visible = true
        //         console.log(event, data)
        //         showPanel(VsInfo, data, canvasStage)
        //     })
        // }
        // _adept(CommandId.sc_vsInfo)
    }
}
export let vsInfo = new VsInfoView()
//gameStart even
// http://api.liangle.com/api/passerbyking/game/group/711
// http://api.liangle.com/api/passerbyking/player/info/3242
