import { loadImg, loadImgArr } from '../../../utils/JsFunc';
import { TweenEx } from '../../../utils/TweenEx';
import { blink2, delayCall } from '../../../utils/Fx';
import { ViewConst } from '../../../const';
import { imgToTex, loadRes, newBitmap } from '../../../utils/PixiEx';
import { BracketPlayerV3 } from '../bracket/BracketPlayerV3';
import { groupPosMap } from '../bracket/BracketGroup';
import { testData2, testData1 } from './test/testBracket';


const isTest = true
const isTestS2 = false
class Section2 extends PIXI.Container {
    groupPlayerMap = {}
    pWin7: BracketPlayerV3
    pWin8: BracketPlayerV3
    lineMap = {}
    constructor() {

        super()

        this.addChild(newBitmap({ url: '/img/panel/bracket/v2/bg2.png' }))

        let y1 = 180
        let y2 = 440
        let lNameX = 90
        let lScoreX = 238
        let rNameX = 135
        let rScoreX = -18
        const playerPos = {
            '5': { p: [221, 394], y: y1, align: [lNameX, lScoreX], isLeft: true },
            '6': { p: [1483, 394], y: y1, align: [rNameX, rScoreX], isLeft: true },
            '7': { p: [546, 774], y: y2, align: [lNameX, lScoreX], isLeft: true },
            '8': { p: [628, 483], y: y2, align: [lNameX, lScoreX], align2: [rNameX, rScoreX], isLeft: false, isHorizontal: true }
        }
        let gm = this.groupPlayerMap
        for (let i = 0; i < 4; i++) {
            let g = gm[i + 5] = { playerArr: [] }
            let p = playerPos[i + 5]

            let p1 = new BracketPlayerV3(p.isLeft, p.align)
            let p2;
            if (p.isHorizontal) {
                p2 = new BracketPlayerV3(!p.isLeft, p.align2)
                p1.x = p.p[0]
                p1.y = p.p[1]

                p2.x = p.p[0] + p.y
                p2.y = p.p[1]
            }
            else {
                p2 = new BracketPlayerV3(p.isLeft, p.align)
                p1.x = p.p[0]
                p1.y = p.p[1]

                p2.x = p.p[0]
                p2.y = p.p[1] + p.y
            }


            g.playerArr.push(p1)
            g.playerArr.push(p2)
            g['group'] = [p1, p2]
            if (i != 2) {//no game 7
                this.addChild(p1)
                this.addChild(p2)
            }
            //test
            if (isTest)
                this.test(p1, p2)
        }

        let pWin7 = new BracketPlayerV3(true, [lNameX, lScoreX])
        pWin7.x = 935
        pWin7.y = 878
        // this.addChild(pWin7)
        pWin7.hideScore()
        this.pWin7 = pWin7
        // pWin7.setFont({fontSize:'50px'})
        let pWin8 = new BracketPlayerV3(true, [lNameX, lScoreX])
        pWin8.x = 868
        pWin8.y = 238
        this.addChild(pWin8)
        pWin8.setFont({ fontSize: '50px' })
        pWin8.hideScore()
        this.pWin8 = pWin8





        let lm = [
            ['5_0', 's2b5_0'],
            ['5_1', 's2b5_1'],
            ['6_0', 's2b6_0'],
            ['6_1', 's2b6_1'],
            ['8_0', 's2b8_0'],
            ['8_1', 's2b8_1'],
        ]
        for (const a of lm) {
            let sp = this.lineMap[a[0]] = newBitmap({ url: '/img/panel/bracket/v2/' + a[1] + '.png' })
            this.addChild(sp)
            sp.visible = false
        }

        if (isTest) {
            this.test(pWin7, pWin8)
            testData2(this)
        }
    }
    setData(data) {
        console.log('section2 set data', data, this.groupPlayerMap)
        for (let gameIdx in this.groupPlayerMap) {
            let dataObj = data[gameIdx]
            if (dataObj) {

                let group = this.groupPlayerMap[gameIdx].group
                let p1: BracketPlayerV3 = group[0]
                let p2: BracketPlayerV3 = group[1]

                let lScore = Number(dataObj.left.score)
                let rScore = Number(dataObj.right.score)
                if (lScore || rScore) {
                    p1.setScore(lScore)
                    p2.setScore(rScore)
                    if (Number(gameIdx) > 4 && Number(gameIdx) != 7) {
                        if (lScore > rScore) {
                            this.lineMap[gameIdx + '_0'].visible = true
                            this.lineMap[gameIdx + '_1'].visible = false
                        }
                        else {
                            this.lineMap[gameIdx + '_0'].visible = false
                            this.lineMap[gameIdx + '_1'].visible = true
                        }
                    }
                }

                let group2 = groupPosMap[gameIdx];
                let hints = group2.hints;
                if (dataObj.left.name)
                    p1.setLeftName(dataObj.left.name)
                if (dataObj.right.name)
                    p2.setLeftName(dataObj.right.name)
            }
        }

        let fillWinner = (player, gameIdx) => {
            let dataObj7 = data[gameIdx]
            if (dataObj7) {
                if (Number(dataObj7.left.score) > Number(dataObj7.right.score)) {
                    player.setLeftName(dataObj7.left.name)
                }
                if (Number(dataObj7.left.score) < Number(dataObj7.right.score)) {
                    player.setLeftName(dataObj7.right.name)
                }
            }
        }

        fillWinner(this.pWin7, 7)
        fillWinner(this.pWin8, 8)
    }

    test(p1, p2) {
        p1.setInfo({ name: '好天氣', score: '12' })
        p2.setInfo({ name: '好天氣其', score: '0' })
    }
}

class Section1 extends PIXI.Container {
    groupPlayerMap = {}
    lineMap = {}
    constructor() {
        super()
        this.addChild(newBitmap({ url: '/img/panel/bracket/v2/bg1.png' }))
        let y1 = 180
        let y2 = 440
        let lNameX = 90
        let lScoreX = 238
        let rNameX = 135
        let rScoreX = -18
        const playerPos = {
            '1': { p: [221, 238], y: y1, align: [lNameX, lScoreX], isLeft: true, isHorizontal: false },
            '2': { p: [1483, 238], y: y1, align: [rNameX, rScoreX], isLeft: false, isHorizontal: false },
            '3': { p: [221, 578], y: y1, align: [lNameX, lScoreX], isLeft: true, isHorizontal: false },
            '4': { p: [1483, 578], y: y1, align: [rNameX, rScoreX], isLeft: false, isHorizontal: false },

            '5': { p: [628, 328], y: y2, align: [lNameX, lScoreX], align2: [rNameX, rScoreX], isLeft: true, isHorizontal: true },
            '6': { p: [628, 672], y: y2, align: [lNameX, lScoreX], align2: [rNameX, rScoreX], isLeft: true, isHorizontal: true }
        }
        let gm = this.groupPlayerMap
        for (let i = 0; i < 6; i++) {
            let g = gm[i + 1] = { playerArr: [] }
            let p = playerPos[i + 1]
            let p1 = new BracketPlayerV3(p.isLeft, p.align)
            let p2;
            if (p.isHorizontal) {
                p2 = new BracketPlayerV3(!p.isLeft, p.align2)
                p1.x = p.p[0]
                p1.y = p.p[1]

                p2.x = p.p[0] + p.y
                p2.y = p.p[1]
            }
            else {
                p2 = new BracketPlayerV3(p.isLeft, p.align)
                p1.x = p.p[0]
                p1.y = p.p[1]

                p2.x = p.p[0]
                p2.y = p.p[1] + p.y
            }

            g.playerArr.push(p1)
            g.playerArr.push(p2)
            g['group'] = [p1, p2]
            this.addChild(p1)
            this.addChild(p2)
            //test
            if (isTest)
                this.test(p1, p2)
        }
        let lm = [
            ['1_0', 's1b1_0'],
            ['1_1', 's1b1_1'],
            ['2_0', 's1b2_0'],
            ['2_1', 's1b2_1'],
            ['3_0', 's1b3_0'],
            ['3_1', 's1b3_1'],
            ['4_0', 's1b4_0'],
            ['4_1', 's1b4_1'],
        ]
        for (const a of lm) {
            let sp = this.lineMap[a[0]] = newBitmap({ url: '/img/panel/bracket/v2/' + a[1] + '.png' })
            this.addChild(sp)
            sp.visible = false
        }
        if (isTest)
            testData1(this)
    }
    
    setData(data) {
        console.log('section1 set data', data, this.groupPlayerMap)
        for (let gameIdx in this.groupPlayerMap) {
            let dataObj = data[gameIdx]
            if (dataObj) {
                let group = this.groupPlayerMap[gameIdx].group
                let p1: BracketPlayerV3 = group[0]
                let p2: BracketPlayerV3 = group[1]

                let lScore = Number(dataObj.left.score)
                let rScore = Number(dataObj.right.score)
                if (lScore || rScore) {
                    p1.setScore(lScore)
                    p2.setScore(rScore)
                    if (Number(gameIdx) < 5) {
                        if (lScore > rScore) {
                            this.lineMap[gameIdx + '_0'].visible = true
                            this.lineMap[gameIdx + '_1'].visible = false
                        }
                        else {
                            this.lineMap[gameIdx + '_0'].visible = false
                            this.lineMap[gameIdx + '_1'].visible = true
                        }
                    }
                }
                let group2 = groupPosMap[gameIdx];
                let hints = group2.hints;
                if (dataObj.left.name)
                    p1.setLeftName(dataObj.left.name)
                if (dataObj.right.name)
                    p2.setLeftName(dataObj.right.name)
            }
        }
    }

    test(p1, p2) {
        p1.setInfo({ name: '好天氣', score: '12' })
        p2.setInfo({ name: '好天氣其', score: '0' })
    }

}
export class BracketV2 extends PIXI.Container {
    // comingTitle: PIXI.Sprite
    hint1Tex: PIXI.Texture
    hint2Tex: PIXI.Texture
    groupSpMap: any
    isLoaded = false
    section1: Section1
    section2: Section2
    constructor(parent: PIXI.Container) {
        super()
        parent.addChild(this)
        this.addChild(newBitmap({ url: '/img/panel/com/bg.jpg' }))

        let hintCtn = new PIXI.Container()
        this.addChild(hintCtn)


        let section2 = new Section2()
        this.addChild(section2)
        this.section2 = section2
        section2.visible = false

        let section1 = new Section1()
        this.addChild(section1)
        this.section1 = section1

        if (isTestS2) {
            section1.visible = false
            section2.visible = true
        }
        window.onkeyup = (e) => {
            console.log('key up', e.key, e.keyCode);
            if (e.key == 'ArrowLeft' || e.keyCode == 37) {
                // this.combo(true,true)
                this.showPage({ page: 1 })
            }
            else if (e.key == 'ArrowRight' || e.keyCode == 39) {
                this.showPage({ page: 2 })
            }
        }
    }
    setWinHint(sp: PIXI.Sprite, isFlip = false) {
        sp.texture = this.hint2Tex
    }
    hideComing() {
        // this.comingTitle.visible = false;
    }
    showComingIdx(idx) {
        let g = groupPosMap[idx];
    }
    showPage(data) {
        if (data.page == 1) {
            this.section1.visible = true
            this.section2.visible = false
        }
        else if (data.page == 2) {
            this.section1.visible = false
            this.section2.visible = true
        }
    }
    _res = null
    onBracketData(res) {
        this.section1.setData(res.data)
        this.section2.setData(res.data)
    }
}