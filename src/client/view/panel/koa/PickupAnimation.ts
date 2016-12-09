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
    constructor(pickupScene: PickupScene) {
        this.scene = pickupScene;
        this.test()
    }

    test() {
        //test
        let preview1p = [1, 10, 9]
        let preview2p = [8, 7, 6, 21]
        for (var i = 0; i < preview1p.length; i++) {
            var pickupIdx = preview1p[i];
            this.previewPlayer(pickupIdx, 0.2 * i, true)
        }
        TweenLite.delayedCall(0.2 * i, () => {
            this.pickupTeam(3, this.scene.pickupFrame1p, () => {
                this.transToOrder()
            })
        })

        TweenLite.delayedCall(0.1, () => {
            for (var i = 0; i < preview2p.length; i++) {
                var pickupIdx = preview2p[i];
                this.previewPlayer(pickupIdx, 0.12 * i, false)
            }
            TweenLite.delayedCall(0.12 * i, () => {
                this.pickupTeam(6, this.scene.pickupFrame2p, () => {
                    this.transToOrder()
                })
            })
        })
        // this.pickupTeam(1, this.pickupFrame1p)
        // this.pickupTeam(2, this.pickupFrame2p)
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

    fadeInOrder() {
        this.order = new OrderScene(this.scene.parent)
        this.order.bg.alpha = 0
        TweenLite.to(this.order.bg, .8, { alpha: 1 })
    }
}