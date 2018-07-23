import { loadImg, loadImgArr } from '../../../utils/JsFunc';
import { groupPosMap, fitWidth } from './BracketGroup';
import { TweenEx } from '../../../utils/TweenEx';
import { blink2, delayCall } from '../../../utils/Fx';
import { ViewConst } from '../../../const';
import { imgToTex, loadRes, newBitmap } from '../../../utils/PixiEx';
import { BracketGroup2018 } from './BracketGroup2018';
import { BracketPlayerV3 } from './BracketPlayerV3';


const isTest = false
class Section2 extends PIXI.Container {
    groupPlayerMap = {}

    constructor() {

        super()

        this.addChild(newBitmap({ url: '/img/panel/bracket/s4v31/bg2.png' }))

        let y1 = 247
        let y2 = 208
        let lNameX = 90
        let lScoreX = 195
        let rNameX = 135
        let rScoreX = 18
        const playerPos = {
            '5': { p: [188, 98], y: y2, align: [lNameX, lScoreX], isLeft: true },
            '6': { p: [188, 427], y: y2, align: [lNameX, lScoreX], isLeft: true },
            '7': { p: [546, 777], y: y2, align: [lNameX, lScoreX], isLeft: true },
            '8': { p: [917, 202], y: 329, align: [lNameX, lScoreX], isLeft: true }
        }
        let gm = this.groupPlayerMap
        for (let i = 0; i < 4; i++) {
            let g = gm[i + 5] = { playerArr: [] }
            let p = playerPos[i + 5]
            let p1 = new BracketPlayerV3(p.isLeft, p.align)
            let p2 = new BracketPlayerV3(p.isLeft, p.align)
            p1.x = p.p[0]
            p1.y = p.p[1]

            p2.x = p.p[0]
            p2.y = p.p[1] + p.y
            g.playerArr.push(p1)
            g.playerArr.push(p2)
            g['group'] = [p1, p2]
            this.addChild(p1)
            this.addChild(p2)
            //test
            if (isTest)
                this.test(p1, p2)
        }

        let pWin7 = new BracketPlayerV3(true, [lNameX, lScoreX])
        pWin7.x = 935
        pWin7.y = 878
        this.addChild(pWin7)
        pWin7.hideScore()
        // pWin7.setFont({fontSize:'50px'})
        let pWin8 = new BracketPlayerV3(true, [lNameX, lScoreX])
        pWin8.x = 1498
        pWin8.y = 358
        this.addChild(pWin8)
        pWin8.setFont({ fontSize: '50px' })
        pWin8.hideScore()

        if (isTest)
            this.test(pWin7, pWin8)
    }
    test(p1, p2) {
        p1.setInfo({ name: '好天氣', score: '12' })
        p2.setInfo({ name: '好天氣其', score: '0' })
    }
}
class Section1 extends PIXI.Container {
    groupPlayerMap = {}

    constructor() {

        super()
        this.addChild(newBitmap({ url: '/img/panel/bracket/s4v31/bg.png' }))
        let y1 = 247
        let y2 = 495
        let lNameX = 90
        let lScoreX = 195
        let rNameX = 135
        let rScoreX = 18
        const playerPos = {
            '1': { p: [96, 150], y: y1, align: [lNameX, lScoreX], isLeft: true },
            '2': { p: [96, 640], y: y1, align: [lNameX, lScoreX], isLeft: true },
            '3': { p: [1608, 150], y: y1, align: [rNameX, rScoreX], isLeft: false },
            '4': { p: [1608, 640], y: y1, align: [rNameX, rScoreX], isLeft: false },
            '5': { p: [469, 272], y: y2, align: [lNameX, lScoreX], isLeft: true },
            '6': { p: [1234, 272], y: y2, align: [rNameX, rScoreX], isLeft: false }
        }
        let gm = this.groupPlayerMap
        for (let i = 0; i < 6; i++) {
            let g = gm[i + 1] = { playerArr: [] }
            let p = playerPos[i + 1]
            let p1 = new BracketPlayerV3(p.isLeft, p.align)
            let p2 = new BracketPlayerV3(p.isLeft, p.align)
            p1.x = p.p[0]
            p1.y = p.p[1]

            p2.x = p.p[0]
            p2.y = p.p[1] + p.y
            g.playerArr.push(p1)
            g.playerArr.push(p2)
            g['group'] = [p1, p2]
            this.addChild(p1)
            this.addChild(p2)
            //test
            if (isTest)
                this.test(p1, p2)
        }
    }
    test(p1, p2) {
        p1.setInfo({ name: '好天氣', score: '12' })
        p2.setInfo({ name: '好天氣其', score: '0' })
    }

}
export class Bracket2018 extends PIXI.Container {
    // comingTitle: PIXI.Sprite
    hint1Tex: PIXI.Texture
    hint2Tex: PIXI.Texture
    groupSpMap: any
    isLoaded = false
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
        let hintCtn = new PIXI.Container()
        this.addChild(hintCtn)


        let section2 = new Section2()
        this.addChild(section2)
        // let section1 = new Section1()
        // this.addChild(section1)

    }
    setWinHint(sp: PIXI.Sprite, isFlip = false) {
        sp.texture = this.hint2Tex
        // if (isFlip)
        //     sp.scale.y = -1
    }
    hideComing() {
        // this.comingTitle.visible = false;
    }
    showComingIdx(idx) {
        let g = groupPosMap[idx];
        // this.comingTitle.visible = false
        // TweenEx.delayedCall(610, () => {
        //     if (g) {
        //         this.comingTitle.visible = true;
        //         this.comingTitle.x = g.x //- 38;
        //         this.comingTitle.y = g.y //- 43;
        //         blink2({ target: this.comingTitle, time: 600 });
        //     }
        // })
    }
    _res = null
    onBracketData(res) {
        if (!this.isLoaded) {
            // TweenEx.delayedCall(3000,)
            this._res = res
            return
        }
        this._res = null
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
            console.log('gameidx', gameIdx, dataObj.left.score, ":", dataObj.right.score);
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
            if (Number(gameIdx) == 7) {
                gsp = this.groupSpMap[7.1] as BracketGroup2018
                if (gsp)
                    fillWinner(gsp, dataObj)
            }
            if (Number(gameIdx) == 8) {
                gsp = this.groupSpMap[8.1] as BracketGroup2018
                if (gsp)
                    fillWinner(gsp, dataObj)
            }
        }


        var comingIdx = 1;
        let t = 8
        for (var i = 0; i < t; i++) {
            var isClose = closeGame[t - i];
            if (isClose) {
                comingIdx = t - i + 1;
                break;
            }
        }
        // this.showComingIdx(comingIdx);
    }
}