import { TweenEx } from '../../utils/TweenEx';
import { OrderScene } from './Order';
import { ViewConst } from '../../const';
import { blink2 } from '../../utils/Fx';
import { imgToTex, loadRes } from '../../utils/PixiEx';
import { PickupPlayerInfo, PickupScene } from './Pickup';
export class PickupAnimation {
    scene: PickupScene
    order: OrderScene
    curIdx1p: number = 0
    curIdx2p: number = 0
    pickupDone = 0;
    pickPlayerInfoArr1p: Array<PickupPlayerInfo>;
    pickPlayerInfoArr2p: Array<PickupPlayerInfo>;

    orderArr1p: Array<number>
    orderArr2p: Array<number>
    constructor(pickupScene: PickupScene) {
        this.scene = pickupScene;
        this.pickPlayerInfoArr1p = []
        this.pickPlayerInfoArr2p = []
    }

    startPick(teamIdx1p, teamIdx2p, orderArr1p: Array<number>, orderArr2p: Array<number>) {
        this.orderArr1p = orderArr1p
        this.orderArr2p = orderArr2p
        //test
        let previewMap = {
            "1": [1],
            "2": [8, 7, 6, 5],
            "3": [1, 10, 9],
            "4": [1, 2, 11, 12],
            "5": [1, 2, 3, 12, 13, 14, 15, 16],
            "6": [8, 7, 6, 21],
            "7": [1, 2, 3, 4, 13, 25],
            "8": [8, 7, 6, 5, 20, 19, 18]
        }
        let preview1p = previewMap[teamIdx1p]
        let preview2p = previewMap[teamIdx2p]
        var i = 0
        for (i = 0; i < preview1p.length; i++) {
            var pickupIdx = preview1p[i];
            this.previewPlayer(pickupIdx, 200 * i, true)
        }
        TweenEx.delayedCall(200 * i, () => {
            this.pickupTeam(Number(teamIdx1p), this.scene.pickupFrame1p, () => {
                this.transToOrder()
            })
        })

        TweenEx.delayedCall(100, () => {
            var j = 0
            for (; j < preview2p.length; j++) {
                var pickupIdx = preview2p[j];
                this.previewPlayer(pickupIdx, 0.12 * j, false)
            }
            TweenEx.delayedCall(120 * j, () => {
                this.pickupTeam(Number(teamIdx2p), this.scene.pickupFrame2p, () => {
                    this.transToOrder()
                })
            })
        })
    }

    previewPlayer(playerId, delay, is1p) {
        TweenEx.delayedCall(delay, () => {
            let pickupFrame = is1p ? this.scene.pickupFrame1p : this.scene.pickupFrame2p
            let playerInfo: PickupPlayerInfo = this.movePickupFrame(playerId, pickupFrame)
            this.setPlayerName(playerInfo.name, is1p, true)
            this.setPortrait(playerInfo.portrait, is1p, false)
        })
    }

    setPlayerName(name, is1p, isPreview = false) {
        if (is1p) {
            this.scene.pickupName1pArr[this.curIdx1p].text = name
            if (!isPreview)
                this.curIdx1p++
        }
        else {
            let rightAlign = 1600
            console.log('curIdx2p', this.curIdx2p);
            let name2p = this.scene.pickupName2pArr[this.curIdx2p]
            name2p.text = name
            name2p.x = rightAlign - name2p.width
            if (!isPreview)
                this.curIdx2p++
        }
    }

    pickupTeam(teamIdx, pickupFrame: PIXI.Sprite, callback) {
        var i = 0
        var delaySel = () => {
            TweenEx.delayedCall(200 + Math.random() * 300, () => {
                if (i < 4) {
                    this.selectPlayer(teamIdx * 4 + i - 3, pickupFrame)
                    i++
                    delaySel()
                }
                else {
                    pickupFrame.visible = false
                    callback()
                }
            })
        }
        delaySel()
    }

    movePickupFrame(playerId, pickupFrame: PIXI.Sprite) {
        let playerInfo: PickupPlayerInfo = this.scene.playerIdMap[playerId]
        if (playerInfo) {
            pickupFrame.x = playerInfo.x - 9
            pickupFrame.y = playerInfo.y - 9
            pickupFrame.alpha = 1
        }
        else {
            console.log('no playerId:', playerId);
        }
        return playerInfo
    }

    selectPlayer(playerId, pickupFrame: PIXI.Sprite) {
        let playerInfo: PickupPlayerInfo = this.movePickupFrame(playerId, pickupFrame)
        let is1p = pickupFrame == this.scene.pickupFrame1p
        if (is1p)
            this.pickPlayerInfoArr1p.push(playerInfo)
        else
            this.pickPlayerInfoArr2p.push(playerInfo)
        this.setPortrait(playerInfo.portrait, is1p, true)
        this.setPlayerName(playerInfo.name, is1p)
    }

    texMap = {}
    setPortrait(url, is1p, isBlink = false) {
        let setTex = (tex) => {
            var x, y = 687, p: PIXI.Sprite
            if (is1p) {
                x = 310
                p = this.scene.portrait1p
            }
            else {
                x = 1210
                p = this.scene.portrait2p
            }
            p.x = x + (400 - tex.width) * .5
            p.y = y - tex.height
            p.texture = tex
            if (isBlink)
                blink2({ target: p, time: 60, loop: 5 })
        }
        if (!this.texMap[url])
            loadRes(url, (img) => {
                var tex: PIXI.Texture = imgToTex(img)
                this.texMap[url] = tex
                setTex(tex)
            })
        else
            setTex(this.texMap[url])
    }

    transToOrder() {
        console.log('transToOrder');
        if (this.pickupDone > 0) {
            TweenEx.delayedCall(500, () => {
                TweenEx.to(this.scene.portrait1p, 50, { alpha: 0 })
                TweenEx.to(this.scene.portrait2p, 50, { alpha: 0 })

                TweenEx.to(this.scene.portraitBg1p, 80, { x: -this.scene.portraitBg1p.width })
                TweenEx.to(this.scene.portraitBg2p, 80, { x: ViewConst.STAGE_WIDTH })
                for (var i = 0; i < this.scene.nameBg1pArr.length; i++) {
                    let name1p = this.scene.pickupName1pArr[i]
                    let name2p = this.scene.pickupName2pArr[i]
                    TweenEx.to(name1p, 50, { alpha: 0 })
                    TweenEx.to(name2p, 50, { alpha: 0 })

                    var nameBg = this.scene.nameBg1pArr[i];
                    TweenEx.to(nameBg, 100 + 80 * i, { x: -nameBg.width })

                    var nameBg2p = this.scene.nameBg2pArr[i];
                    TweenEx.to(nameBg2p, 100 + 80 * i, { x: ViewConst.STAGE_WIDTH })
                }
                TweenEx.to(this.scene.title, 300, { y: -380 })
                TweenEx.to(this.scene.bg, 500, { y: -132 })

                TweenEx.delayedCall(200, () => {
                    this.fadeInOrder()
                })
            })
        }
        this.pickupDone++
    }

    orderPortraitY = 230
    fadeInOrder() {
        this.order = new OrderScene(this.scene.parent, this.pickPlayerInfoArr1p.concat(this.pickPlayerInfoArr2p))
        this.order.bg.alpha = 0
        TweenEx.to(this.order.bg, 800, { alpha: 1 })
        TweenEx.delayedCall(200, () => {
            for (var i = 0; i < this.order.portraitArr1p.length; i++) {
                var ctn1p = this.order.portraitArr1p[i];
                var ctn2p = this.order.portraitArr2p[i];
                console.log('tween to y');

                TweenEx.to(ctn1p, 100 + i * 80, { y: 40 + (3 - i) * this.orderPortraitY })
                TweenEx.to(ctn2p, 100 + i * 80, { y: 40 + (3 - i) * this.orderPortraitY })
            }
        })
        this.order.select1p.pivot = new PIXI.Point(210, 39)
        this.order.select2p.pivot = new PIXI.Point(210, 39)
        TweenEx.to(this.order.select1p, 300, { x: 375 + 210 })
        TweenEx.to(this.order.select2p, 300, { x: 1275 + 210 })
        TweenEx.delayedCall(800, () => {
            // this.orderDown(this.order.portraitArr1p)
            this.pin(this.orderArr1p, this.order.portraitArr1p, this.order.select1p)
            this.pin(this.orderArr2p, this.order.portraitArr2p, this.order.select2p)
        })
    }

    orderDown(portraitArr: Array<PIXI.Container>) {
        let len = portraitArr.length
        let p0 = portraitArr.shift()
        if (p0) {
            console.log('curIdx:', p0['pickupIdx']);
            p0.parent.addChildAt(p0, 3 - portraitArr.length)

            TweenEx.to(p0, 200, { y: p0.y - (len - 1) * this.orderPortraitY })
            for (var i = 0; i < portraitArr.length; i++) {
                var p = portraitArr[i];
                p.filters = [p['filter']]
                var py = p.y + this.orderPortraitY
                TweenEx.to(p, 200, { y: py })
            }
            portraitArr.push(p0)
            portraitArr[0].filters = null
        }
    }

    orderDone = 0
    pin(pickupIdxArr: Array<number>, portraitArr: Array<PIXI.Container>, selectSP: PIXI.Sprite) {
        if (portraitArr[0] && pickupIdxArr[0] == portraitArr[0]['pickupIdx']) {
            this.orderDown(portraitArr)
            let p0 = portraitArr.pop()
            pickupIdxArr.shift()
            let numSp = selectSP['numArr'].shift()
            p0.addChild(numSp)

            new TweenEx(p0['white'])
                .to({ alpha: 1 }, 100)
                .to({ alpha: 0 }, 100)
                .call(() => {
                    p0.filters = [p0['filter']]
                })
                .start()


            let sp = selectSP['spArr'].shift()
            new TweenEx(selectSP.scale)
                .to({ y: 0 }, 80)
                .call(() => {
                    if (sp) {
                        selectSP.addChild(sp)
                    }
                    else
                        selectSP.visible = false
                })
                .to({ y: 1 }, 80)
                .start()
            if (pickupIdxArr.length)
                TweenEx.delayedCall(400 - Math.random() * 200, () => {
                    this.pin(pickupIdxArr, portraitArr, selectSP)
                })
            else {
                this.orderDone++
                if (this.orderDone > 1)
                    TweenEx.delayedCall(1500, () => {
                        this.fadeOut()
                    })
            }

        }
        else {
            this.orderDown(portraitArr)
            TweenEx.delayedCall(400 - Math.random() * 200, () => {
                this.pin(pickupIdxArr, portraitArr, selectSP)
            })
        }
    }

    fadeOut() {
        let removeScene = () => {
            while (this.order.children.length > 1) {
                this.order.removeChildAt(0)
            }
            this.scene.removeChildren()
        }
        new TweenEx(this.order.white)
            .to({ alpha: 1 },200)
            .call(() => {
                removeScene()
            })
            .to({ alpha: 0 }, 200)
            .start()

        // this.order.blackBottom.y = ViewConst.STAGE_HEIGHT
        // TweenLite.to(this.order.blackTop, .2, {
        //     y: 0, onComplete: () => {
        //         removeScene()

        //         TweenLite.to(this.order.blackTop, .2, { y: -ViewConst.STAGE_HEIGHT * .5 })
        //         TweenLite.to(this.order.blackBottom, .2, { y: ViewConst.STAGE_HEIGHT })
        //     }
        // })
        // // TweenLite.to(this.order.blackBottom, .2, { y: ViewConst.STAGE_HEIGHT -20 })
        // TweenLite.to(this.order.blackBottom, .2, { y: ViewConst.STAGE_HEIGHT * .5 })
    }
}