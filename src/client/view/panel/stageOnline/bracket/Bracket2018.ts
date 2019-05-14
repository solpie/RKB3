import { ViewConst } from '../../../const';
import { newBitmap } from '../../../utils/PixiEx';
import { groupPosMap } from './BracketGroup';
import { BracketPlayerV3 } from './BracketPlayerV3';


const isTest = false
class Section2 extends PIXI.Container {
    groupPlayerMap = {}
    pWin7: BracketPlayerV3
    pWin8: BracketPlayerV3
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
            '7': { p: [546, 774], y: y2, align: [lNameX, lScoreX], isLeft: true },
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
            if(i!=2)
            {
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
        pWin8.x = 1498
        pWin8.y = 358
        this.addChild(pWin8)
        pWin8.setFont({ fontSize: '50px' })
        pWin8.hideScore()
        this.pWin8 = pWin8


        if (isTest)
            this.test(pWin7, pWin8)
    }

    setData(data) {
        console.log('section2 set data', data, this.groupPlayerMap)
        for (let gameIdx in this.groupPlayerMap) {
            let dataObj = data[gameIdx]
            if (dataObj) {

                let group = this.groupPlayerMap[gameIdx].group
                let p1: BracketPlayerV3 = group[0]
                let p2: BracketPlayerV3 = group[1]

                if (Number(dataObj.left.score) || Number(dataObj.right.score)) {
                    p1.setScore(dataObj.left.score)
                    p2.setScore(dataObj.right.score)
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

    constructor() {

        super()
        this.addChild(newBitmap({ url: '/img/panel/bracket/s4v31/bg.png' }))
        let y1 = 247
        let y2 = 490
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

    setData(data) {
        console.log('section1 set data', data, this.groupPlayerMap)
        for (let gameIdx in this.groupPlayerMap) {
            let dataObj = data[gameIdx]
            if (dataObj) {
                let group = this.groupPlayerMap[gameIdx].group
                let p1: BracketPlayerV3 = group[0]
                let p2: BracketPlayerV3 = group[1]

                if (Number(dataObj.left.score) || Number(dataObj.right.score)) {
                    p1.setScore(dataObj.left.score)
                    p2.setScore(dataObj.right.score)
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
export class Bracket2018 extends PIXI.Container {
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
        this.section2 = section2
        section2.visible = false

        let section1 = new Section1()
        this.addChild(section1)
        this.section1 = section1
        // section1.visible = false

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
        // if (isFlip)
        //     sp.scale.y = -1
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