import { TweenEx } from '../../utils/TweenEx';
import { PickupAnimation } from './PickupAnimation';
import { mapToArr } from '../../utils/JsFunc';
import { _avatar, getPlayerDoc } from '../../utils/HupuAPI';
import { FontName, ViewConst } from '../../const';
import { blink2 } from '../../utils/Fx';
import { imgToTex, loadRes, newBitmap } from '../../utils/PixiEx';
export class PickupPlayerInfo {
    pickupIdx: number;
    x: number
    y: number
    avatar: string//小頭像
    portrait: string//大頭像
    name: string
    constructor(options) {
        this.x = options.x
        this.y = options.y
    }
}
declare let $;
export let pickNameStyle = {
    fontFamily: FontName.MicrosoftYahei,
    fontSize: '40px',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fill: '#fff',
    stroke: '#4a1850',
    strokeThickness: 5,
    dropShadow: false,
    dropShadowColor: '#000000',
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 500
};
export class PickupScene extends PIXI.Container {
    pickupFrame1p: PIXI.Sprite
    pickupFrame2p: PIXI.Sprite

    portrait1p: PIXI.Sprite
    portrait2p: PIXI.Sprite
    portraitBg1p: PIXI.Sprite
    portraitBg2p: PIXI.Sprite

    title: PIXI.Sprite
    bg: PIXI.Sprite

    pickupName1pArr: Array<PIXI.Text>
    nameBg1pArr: Array<PIXI.Sprite>
    pickupName2pArr: Array<PIXI.Text>
    nameBg2pArr: Array<PIXI.Sprite>

    playerIdMap = {}
    titleText: PIXI.Text
    constructor(stage: PIXI.Container, playerMap) {
        super()
        stage.addChild(this)

        this.bg = newBitmap({ url: '/img/panel/koa/pickup/bg.png' })
        this.addChild(this.bg);

        this.title = newBitmap({ url: '/img/panel/koa/pickup/title.png', x: 96 })
        this.addChild(this.title)

        this.titleText = new PIXI.Text('KING OF AMATEUR', pickNameStyle)
        this.titleText.x = 670
        this.titleText.y = 35
        this.title.addChild(this.titleText)


        this.portraitBg1p = newBitmap({ x: 300, y: 444, url: '/img/panel/koa/pickup/blueBg.png' })
        this.addChild(this.portraitBg1p);
        this.portraitBg2p = newBitmap({ x: 1200, y: 444, url: '/img/panel/koa/pickup/redBg.png' })
        this.addChild(this.portraitBg2p);
        //todo map scene: sh  gz zoom in
        // let b = newBitmap({ url: '' })
        // this.addChild(b)
        // this.initPlayerArr()
        //pickup name
        this.initName()

        this.initPlayerData(playerMap)
    }

    initPlayerData(playerMap) {
        let teamPos = [
            { x: 245, y: 13, flip: 1 },
            { x: 1300, y: 13, flip: -1 },
            { x: 189, y: 110, flip: 1 },
            { x: 580, y: 110, flip: 1 },
            { x: 970, y: 110, flip: -1 },
            { x: 1365, y: 110, flip: -1 },
            { x: 528, y: 204, flip: 1 },
            { x: 1027, y: 204, flip: -1 },
        ]
        let invert = 95
        var pickupIdx = 1;
        let r = 13
        let reverseTeam = [1, 3, 4, 7]
        for (let tp of teamPos) {
            for (var i = 0; i < 4; i++) {
                var px = tp.x + i * 95
                if (tp.flip == 1) {
                    px = tp.x + (3 - i) * 95
                }
                let p: PickupPlayerInfo = new PickupPlayerInfo({ x: px, y: tp.y })
                let pDoc = playerMap[pickupIdx]
                p.name = pDoc.name
                p.portrait = pDoc.portrait
                p.avatar = pDoc.avatar

                this.playerIdMap[pickupIdx] = p
                p.pickupIdx = pickupIdx;

                let ax = p.x - this.title.x
                let ay = p.y

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
                this.title.addChild(msk)

                var avtBg = new PIXI.Graphics().beginFill(0x222222)
                    .drawRect(0, 0, 88, 88)
                avtBg.x = ax
                avtBg.y = ay
                avtBg.mask = msk
                this.title.addChild(avtBg)

                let avt = newBitmap({ x: ax, y: ay, url: _avatar(pDoc.avatar) })

                avt.scale.x = avt.scale.y = 88 / 120
                if (tp.flip < 0) {
                    avt.scale.x *= tp.flip
                    avt.x += 88
                }
                avt.mask = msk
                this.title.addChild(avt)

                this.title.addChild(newBitmap({ x: ax, y: ay, url: '/img/panel/koa/pickup/avatar.png' }))

                pickupIdx++
            }
        }
        console.log('playerIdMap', this.playerIdMap);

        let _1p = newBitmap({ url: '/img/panel/koa/pickup/pickupFrame.png' })
        _1p.alpha = 0
        _1p.x = 0
        _1p.y = 0
        this.addChild(_1p)
        this.pickupFrame1p = _1p
        blink2({ target: _1p, time: 50 })

        let _2p = newBitmap({ url: '/img/panel/koa/pickup/pickupFrame.png' })
        _2p.alpha = 0
        _2p.x = 0
        _2p.y = 0
        this.addChild(_2p)
        this.pickupFrame2p = _2p
        blink2({ target: _2p, time: 50 })

        let ptt1p = new PIXI.Sprite()
        this.portrait1p = ptt1p
        this.addChild(ptt1p)
        let ptt2p = new PIXI.Sprite()
        this.portrait2p = ptt2p
        this.addChild(ptt2p)
    }


    initName() {
        this.pickupName1pArr = []
        this.pickupName2pArr = []
        this.nameBg1pArr = []
        this.nameBg2pArr = []



        let ivt = 90

        for (var i = 0; i < 4; i++) {
            let blueNameBg = newBitmap({ x: -400, y: 710 + i * ivt, url: '/img/panel/koa/pickup/blueName.png' })
            this.addChild(blueNameBg);

            let name1p = new PIXI.Text('', pickNameStyle);
            name1p.x = 330;
            name1p.y = 718 + i * ivt;
            this.addChild(name1p);
            this.pickupName1pArr.push(name1p)

            let redNameBg = newBitmap({ x: ViewConst.STAGE_WIDTH, y: 710 + i * ivt, url: '/img/panel/koa/pickup/redName.png' })
            this.addChild(redNameBg);
            this.nameBg1pArr.push(blueNameBg)
            this.nameBg2pArr.push(redNameBg)
            this.fadeInNameBg(blueNameBg, 0.02 + i * .07, { x: 300 })
            this.fadeInNameBg(redNameBg, 0.02 + i * .07, { x: 1200 })

            let name2p = new PIXI.Text('', pickNameStyle);
            name2p.y = name1p.y;
            this.addChild(name2p);
            this.pickupName2pArr.push(name2p)
        }
    }

    fadeInNameBg(target, delay, pos: { x: number }) {
        TweenEx.delayedCall(delay, () => {
            TweenEx.to(target, 80, pos)
        })
    }

}