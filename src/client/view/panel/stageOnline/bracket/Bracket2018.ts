import { loadImg, loadImgArr } from '../../../utils/JsFunc';
import { groupPosMap, fitWidth } from './BracketGroup';
import { TweenEx } from '../../../utils/TweenEx';
import { blink2 } from '../../../utils/Fx';
import { ViewConst } from '../../../const';
import { imgToTex, loadRes, newBitmap } from '../../../utils/PixiEx';
import { BracketGroup2018 } from './BracketGroup2018';
export class Bracket2018 extends PIXI.Container {
    comingTitle: PIXI.Sprite
    hint1Tex: PIXI.Texture
    hint2Tex: PIXI.Texture
    groupSpMap: any

    constructor(parent: PIXI.Container) {
        super()
        parent.addChild(this)

        let bg = newBitmap({
            url: "/img/panel/bracket/tile2.png",
            isTiling: true,
            width: ViewConst.STAGE_WIDTH,
            height: ViewConst.STAGE_HEIGHT
        });
        bg.alpha = 0.8;
        this.addChild(bg)
        this.addChild(newBitmap({ url: '/img/panel/bracket/s4v3/route.png' }))
        let hintCtn = new PIXI.Container()
        this.addChild(hintCtn)

        this.groupSpMap = []
        let bypass = [5, 6, 9, 10, 11, 12]
        loadImg('/img/panel/bracket/s4v3/playerBg.png', img => {
            for (let i = 0; i < 14; i++) {
                if (bypass.indexOf(i + 1) > -1)
                    continue;
                let gsp = new BracketGroup2018(imgToTex(img))
                let gameIdx = i + 1
                this.groupSpMap[gameIdx] = gsp
                let g = groupPosMap[i + 1];
                console.log(g)
                gsp.x = g.x
                gsp.y = g.y
                this.addChild(gsp)
                if (g.p2y != undefined) {
                    gsp.setP2Y(g.p2y)
                }
                else {
                }
            }

            let gsp14winner = new BracketGroup2018(imgToTex(img), true)
            gsp14winner.x = 1434
            gsp14winner.y = 369 - 8
            this.addChild(gsp14winner)
            this.groupSpMap[14.1] = gsp14winner
            let gsp13winner = new BracketGroup2018(imgToTex(img))
            gsp13winner.x = 956
            gsp13winner.y = 880
            this.addChild(gsp13winner)
            this.groupSpMap[13.1] = gsp13winner

        })

        this.comingTitle = newBitmap({ url: '/img/panel/bracket/s4/focus.png' })
        this.comingTitle.visible = false
        // this.addChild(this.comingTitle)
    }
    setWinHint(sp: PIXI.Sprite, isFlip = false) {
        sp.texture = this.hint2Tex
        // if (isFlip)
        //     sp.scale.y = -1
    }
    hideComing() {
        this.comingTitle.visible = false;
    }
    showComingIdx(idx) {
        let g = groupPosMap[idx];
        this.comingTitle.visible = false
        TweenEx.delayedCall(610, () => {
            if (g) {
                this.comingTitle.visible = true;
                this.comingTitle.x = g.x //- 38;
                this.comingTitle.y = g.y //- 43;
                blink2({ target: this.comingTitle, time: 600 });
            }
        })
    }

    onBracketData(res) {
        let closeGame = {};
        // let s = { font: '25px', fill: '#e1e1e1', align: 'right', fontFamily: FontName.MicrosoftYahei };
        console.log('onBracketData', res.data)

        let fillWinner = (gsp, dataObj) => {
            let lScore = Number(dataObj.left.score)
            let rScore = Number(dataObj.right.score)
            if (lScore || rScore) {
                if (lScore > rScore) {
                    gsp.setLeftName(dataObj.left.name)
                }
                else {
                    gsp.setLeftName(dataObj.right.name)
                }
            }
        }
        for (let gameIdx in res.data) {
            let dataObj = res.data[gameIdx];

            let gsp = this.groupSpMap[gameIdx] as BracketGroup2018
            // if (!gsp) {
            //     continue;
            // }
            gsp.setGameIdx(gameIdx)
            if (Number(dataObj.left.score) || Number(dataObj.right.score)) {
                closeGame[gameIdx] = true;
                gsp.setScore(dataObj.left.score, dataObj.right.score)

            }
            let group2 = groupPosMap[gameIdx];
            let hints = group2.hints;
            if (dataObj.left.name)
                gsp.setLeftName(dataObj.left.name)
            else
                gsp.setLeftName(hints ? hints[0] : '', true)
            if (dataObj.right.name)
                gsp.setRightName(dataObj.right.name)
            else
                gsp.setRightName(hints ? hints[1] : '', true)

            //fill 1st 3rd
            if (Number(gameIdx) == 13) {
                gsp = this.groupSpMap[13.1] as BracketGroup2018
                if (gsp)
                    fillWinner(gsp, dataObj)
            }
            if (Number(gameIdx) == 14) {
                gsp = this.groupSpMap[14.1] as BracketGroup2018
                if (gsp)
                    fillWinner(gsp, dataObj)
            }
        }


        var comingIdx = 1;
        for (var i = 0; i < 14; i++) {
            var isClose = closeGame[14 - i];
            if (isClose) {
                comingIdx = 14 - i + 1;
                break;
            }
        }
        // this.showComingIdx(comingIdx);
    }
}