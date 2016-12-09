import { PickupAnimation } from './PickupAnimation';
import { mapToArr } from '../../utils/JsFunc';
import { getPlayerDoc } from '../../utils/HupuAPI';
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
    constructor(stage: PIXI.Container) {
        super()
        stage.addChild(this)

        this.bg = newBitmap({ url: '/img/panel/koa/pickup/bg.png' })
        this.addChild(this.bg);

        this.title = newBitmap({ url: '/img/panel/koa/pickup/title.png', x: 96 })
        this.addChild(this.title)

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

        getPlayerDoc((playerDocArr) => {
            let playerMap = {}
            for (let player of playerDocArr) {
                playerMap[player.id] = player
            }
            this.initPlayerData(playerMap)
        })

    }

    initPlayerData(playerMap) {
        let teamPos = [
            { x: 245, y: 13 },
            { x: 1300, y: 13 },
            { x: 189, y: 110 },
            { x: 580, y: 110 },
            { x: 970, y: 110 },
            { x: 1365, y: 110 },
            { x: 528, y: 204 },
            { x: 1027, y: 204 },
        ]
        let invert = 95
        var pickupIdx = 1;
        let r = 13
        for (let tp of teamPos) {
            for (var i = 0; i < 4; i++) {
                let p: PickupPlayerInfo = new PickupPlayerInfo({ x: tp.x + i * 95, y: tp.y })
                let pDoc = playerMap[pickupIdx]
                p.name = pDoc.name
                p.portrait = pDoc.portrait
                p.avatar = pDoc.avatar

                this.playerIdMap[pickupIdx] = p
                p.pickupIdx = pickupIdx;


                let a = newBitmap({ url: '/img/panel/koa/pickup/avatar.png' })
                a.x = p.x - this.title.x
                a.y = p.y
                this.title.addChild(a)

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

                msk.x = a.x
                msk.y = a.y

                this.title.addChild(msk)

                pickupIdx++
            }
        }
        console.log('playerIdMap', this.playerIdMap);

        let _1p = newBitmap({ url: '/img/panel/koa/pickup/pickupFrame.png' })
        _1p.x = 0
        _1p.y = 0
        this.addChild(_1p)
        this.pickupFrame1p = _1p
        blink2({ target: _1p, time: 0.05 })

        let _2p = newBitmap({ url: '/img/panel/koa/pickup/pickupFrame.png' })
        _2p.x = 0
        _2p.y = 0
        this.addChild(_2p)
        this.pickupFrame2p = _2p
        blink2({ target: _2p, time: 0.05 })

        let ptt1p = new PIXI.Sprite()
        this.portrait1p = ptt1p
        this.addChild(ptt1p)
        let ptt2p = new PIXI.Sprite()
        this.portrait2p = ptt2p
        this.addChild(ptt2p)


        new PickupAnimation(this)
    }


    initName() {
        this.pickupName1pArr = []
        this.pickupName2pArr = []
        this.nameBg1pArr = []
        this.nameBg2pArr = []

        let style = {
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
            align: 'right',
            dropShadowDistance: 6,
            wordWrap: true,
            wordWrapWidth: 500
        };

        let ivt = 90

        for (var i = 0; i < 4; i++) {
            let blueNameBg = newBitmap({ x: -400, y: 710 + i * ivt, url: '/img/panel/koa/pickup/blueName.png' })
            this.addChild(blueNameBg);

            style.align = 'left'
            let name1p = new PIXI.Text('', style);
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

            style.align = 'right'
            let name2p = new PIXI.Text('', style);
            name2p.y = name1p.y;
            this.addChild(name2p);
            this.pickupName2pArr.push(name2p)
        }
    }

    fadeInNameBg(target, delay, pos: { x: number }) {
        TweenLite.delayedCall(delay, () => {
            TweenLite.to(target, .08, pos)
        })
    }

}