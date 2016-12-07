import { FontName } from '../../const';
import { blink2 } from '../../utils/Fx';
import { newBitmap } from '../../utils/PixiEx';
class PickupPlayerInfo {
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
export class PickupScene extends PIXI.Container {
    pickupFrame1p: PIXI.Sprite
    pickupFrame2p: PIXI.Sprite
    pickupName1pArr: Array<PIXI.Text>
    pickupName2pArr: Array<PIXI.Text>
    playerIdMap = {}
    constructor(stage: PIXI.Container) {
        super()
        stage.addChild(this)
        let bg = newBitmap({ url: '/img/panel/koa/pickup/bg.jpg' })
        this.addChild(bg);
        this.addChild(newBitmap({ x: 300, y: 444, url: '/img/panel/koa/pickup/blueBg.png' }));
        this.addChild(newBitmap({ x: 1200, y: 444, url: '/img/panel/koa/pickup/redBg.png' }));
        //todo map scene: sh  gz zoom in
        // let b = newBitmap({ url: '' })
        // this.addChild(b)
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
        for (let tp of teamPos) {
            for (var i = 0; i < 4; i++) {
                let p: PickupPlayerInfo = new PickupPlayerInfo({ x: tp.x + i * 95, y: tp.y })
                this.playerIdMap[pickupIdx] = p
                p.pickupIdx = pickupIdx;

                let a = newBitmap({ url: '/img/panel/koa/pickup/avatar.png' })
                a.x = p.x
                a.y = p.y
                this.addChild(a)
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

        for (let playerIdx in this.playerIdMap) {
            let teamPlayerInfo: PickupPlayerInfo = this.playerIdMap[playerIdx]
        }
        //pickup name
        this.initName()


        //test
        this.pickupTeam(1, this.pickupFrame1p)
        this.pickupTeam(5, this.pickupFrame2p)
    }
    initName() {
        this.pickupName1pArr = []
        this.pickupName2pArr = []

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
            this.addChild(newBitmap({ x: 300, y: 710 + i * ivt, url: '/img/panel/koa/pickup/blueName.png' }));

            style.align = 'left'
            let name1p = new PIXI.Text('史蒂芬库里', style);
            name1p.x = 315;
            name1p.y = 718 + i * ivt;
            this.addChild(name1p);
            this.pickupName1pArr.push(name1p)

            this.addChild(newBitmap({ x: 1200, y: 710 + i * ivt, url: '/img/panel/koa/pickup/redName.png' }));
            style.align = 'right'
            let name2p = new PIXI.Text('史蒂芬库里2', style);
            name2p.x = 1595 - name2p.width;
            name2p.y = name1p.y;
            this.addChild(name2p);
            this.pickupName2pArr.push(name2p)
        }
    }
    pickupTeam(teamIdx, pickupFrame) {
        var i = 0
        var delaySel = () => {
            TweenLite.delayedCall(.6, () => {
                if (i < 4) {
                    this.selectPlayer(teamIdx * 4 + i - 3, pickupFrame)
                    i++
                    delaySel()
                }
            })
        }
        delaySel()
    }

    selectPlayer(playerId, pickupFrame: PIXI.Sprite) {
        let playerInfo: PickupPlayerInfo = this.playerIdMap[playerId]
        console.log('pickupIdx:', playerInfo.pickupIdx);
        pickupFrame.x = playerInfo.x - 9
        pickupFrame.y = playerInfo.y - 9
    }
}