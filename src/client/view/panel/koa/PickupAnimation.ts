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
            this.previewPlayer(pickupIdx, 0.2 * i, true)
        }
        TweenLite.delayedCall(0.2 * i, () => {
            this.pickupTeam(Number(teamIdx1p), this.scene.pickupFrame1p, () => {
                this.transToOrder()
            })
        })

        TweenLite.delayedCall(0.1, () => {
            var j = 0
            for (; j < preview2p.length; j++) {
                var pickupIdx = preview2p[j];
                this.previewPlayer(pickupIdx, 0.12 * j, false)
            }
            TweenLite.delayedCall(0.12 * j, () => {
                this.pickupTeam(Number(teamIdx2p), this.scene.pickupFrame2p, () => {
                    this.transToOrder()
                })
            })
        })
    }

    previewPlayer(playerId, delay, is1p) {
        TweenLite.delayedCall(delay, () => {
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
            TweenLite.delayedCall(.2 + Math.random() * .3, () => {
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
        pickupFrame.x = playerInfo.x - 9
        pickupFrame.y = playerInfo.y - 9
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
                blink2({ target: p, time: 0.06, loop: 5 })
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
            TweenLite.delayedCall(0.5, () => {
                TweenLite.to(this.scene.portrait1p, 0.05, { alpha: 0 })
                TweenLite.to(this.scene.portrait2p, 0.05, { alpha: 0 })

                TweenLite.to(this.scene.portraitBg1p, 0.08, { x: -this.scene.portraitBg1p.width })
                TweenLite.to(this.scene.portraitBg2p, 0.08, { x: ViewConst.STAGE_WIDTH })
                for (var i = 0; i < this.scene.nameBg1pArr.length; i++) {
                    let name1p = this.scene.pickupName1pArr[i]
                    let name2p = this.scene.pickupName2pArr[i]
                    TweenLite.to(name1p, 0.05, { alpha: 0 })
                    TweenLite.to(name2p, 0.05, { alpha: 0 })

                    var nameBg = this.scene.nameBg1pArr[i];
                    TweenLite.to(nameBg, 0.1 + 0.08 * i, { x: -nameBg.width })

                    var nameBg2p = this.scene.nameBg2pArr[i];
                    TweenLite.to(nameBg2p, 0.1 + 0.08 * i, { x: ViewConst.STAGE_WIDTH })
                }
                TweenLite.to(this.scene.title, 0.3, { y: -380 })
                TweenLite.to(this.scene.bg, 0.5, { y: -132 })

                TweenLite.delayedCall(0.2, () => {
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
        TweenLite.to(this.order.bg, .8, { alpha: 1 })
        TweenLite.delayedCall(0.2, () => {
            for (var i = 0; i < this.order.portraitArr1p.length; i++) {
                var ctn1p = this.order.portraitArr1p[i];
                var ctn2p = this.order.portraitArr2p[i];
                console.log('tween to y');

                TweenLite.to(ctn1p, 0.1 + i * .08, { y: 40 + (3 - i) * this.orderPortraitY })
                TweenLite.to(ctn2p, 0.1 + i * .08, { y: 40 + (3 - i) * this.orderPortraitY })
            }
        })
        this.order.select1p.pivot = new PIXI.Point(210, 39)
        this.order.select2p.pivot = new PIXI.Point(210, 39)
        TweenLite.to(this.order.select1p, .3, { x: 375 + 210 })
        TweenLite.to(this.order.select2p, .3, { x: 1275 + 210 })
        TweenLite.delayedCall(0.8, () => {
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
            TweenLite.to(p0, .2, { y: p0.y - (len - 1) * this.orderPortraitY })
            for (var i = 0; i < portraitArr.length; i++) {
                var p = portraitArr[i];
                TweenLite.to(portraitArr[i], .2, { y: portraitArr[i].y + this.orderPortraitY })
            }
            portraitArr.push(p0)
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
            let sp = selectSP['spArr'].shift()
            TweenLite.to(selectSP.scale, 0.08, {
                y: 0,
                onComplete: () => {
                    if (sp) {
                        selectSP.addChild(sp)
                        TweenLite.to(selectSP.scale, 0.08, {
                            y: 1
                        })
                    }
                }
            })
            if (pickupIdxArr.length)
                TweenLite.delayedCall(0.4 - Math.random() * .2, () => {
                    this.pin(pickupIdxArr, portraitArr, selectSP)
                })
            else {
                this.orderDone++
                if (this.orderDone > 1)
                    TweenLite.delayedCall(0.5, () => {
                        this.fadeOut()
                    })
            }

        }
        else {
            this.orderDown(portraitArr)
            TweenLite.delayedCall(0.4 - Math.random() * .2, () => {
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
        TweenLite.to(this.order.white, .2, {
            alpha: 1, onComplete: () => {
                removeScene()
                TweenLite.to(this.order.white, .2, {
                    alpha: 0
                })
            }
        })

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