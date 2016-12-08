import { mapToArr } from '../../utils/JsFunc';
import { getPlayerDoc } from '../../utils/HupuAPI';
import { FontName } from '../../const';
import { blink2 } from '../../utils/Fx';
import { imgToTex, loadRes, newBitmap } from '../../utils/PixiEx';
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
declare let $;
export class PickupScene extends PIXI.Container {
    pickupFrame1p: PIXI.Sprite
    pickupFrame2p: PIXI.Sprite

    portrait1p: PIXI.Sprite
    portrait2p: PIXI.Sprite

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
        // this.initPlayerArr()
        //pickup name
        this.initName()

        // $.get('/game/player', (res) => {
        //     let playerJson = JSON.parse(res)
        //     console.log(playerJson);
        //     //test
        //     for (let p of playerJson) {
        //         p.name = "player" + p.id
        //     }
        //     // this.initPlayer(playerJson)
        // })
        getPlayerDoc((playerDocArr) => {
            let playerMap = {}
            for (let player of playerDocArr) {
                playerMap[player.id] = player
            }
            this.initPlayerData(playerMap)
        })

    }
    test() {
        //test
        this.pickupTeam(1, this.pickupFrame1p)
        this.pickupTeam(2, this.pickupFrame2p)
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

        let ptt1p = new PIXI.Sprite()
        this.portrait1p = ptt1p
        this.addChild(ptt1p)
        let ptt2p = new PIXI.Sprite()
        this.portrait2p = ptt2p
        this.addChild(ptt2p)


        this.test()
    }
    
    setPortrait(url, is1p) {
        loadRes(url, (img) => {
            var tex: PIXI.Texture = imgToTex(img)
            var x, y = 687, p: PIXI.Sprite
            if (is1p) {
                x = 310
                p = this.portrait1p
            }
            else {
                x = 1210
                p = this.portrait2p
            }
            p.x = x + (400 - tex.width) * .5
            p.y = y - tex.height
            p.texture = tex
            blink2({ target: p, time: 0.06, loop: 5 })
        })
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
            let name1p = new PIXI.Text('', style);
            name1p.x = 315;
            name1p.y = 718 + i * ivt;
            this.addChild(name1p);
            this.pickupName1pArr.push(name1p)

            this.addChild(newBitmap({ x: 1200, y: 710 + i * ivt, url: '/img/panel/koa/pickup/redName.png' }));
            style.align = 'right'
            let name2p = new PIXI.Text('', style);
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
        // console.log('pickupIdx:', playerInfo);
        pickupFrame.x = playerInfo.x - 9
        pickupFrame.y = playerInfo.y - 9
        let is1p = pickupFrame == this.pickupFrame1p
        this.setPortrait(playerInfo.portrait, is1p)
    }
}