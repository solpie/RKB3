import { cloneMap } from "../../utils/JsFunc";

var _p = function (x, y) {
    return 'left:' + x + 'px;' + 'top:' + y + 'px;'
}
export function newBracketRec1() {
    return [
        { score: [0, 0], player: ["p1", "p2"], s: _p(0, 373), gameIdx: 13 },
        { score: [0, 0], player: ["p1", "p2"], s: _p(0, 473), gameIdx: 15 },

        { score: [0, 0], player: ["p1", "p2"], s: _p(450, 373), gameIdx: 14 },
        { score: [0, 0], player: ["p1", "p2"], s: _p(450, 473), gameIdx: 16 },

        { score: [0, 0], player: ["p1", "p2"], s: _p(160, 398), gameIdx: 21, isH: true },

        { score: [0, 0], player: ["p1", "p2"], s: _p(160, 498), gameIdx: 22, isH: true },
    ]
}
export function newBracketRec2() {
    return [
        { score: [0, 0], player: ["p1", "p2"], s: _p(0, 373), gameIdx: 17 },
        { score: [0, 0], player: ["p1", "p2"], s: _p(0, 473), gameIdx: 18 },

        { score: [0, 0], player: ["p1", "p2"], s: _p(450, 373), gameIdx: 19 },
        { score: [0, 0], player: ["p1", "p2"], s: _p(450, 473), gameIdx: 20 },

        { score: [0, 0], player: ["p1", "p2"], s: _p(160, 398), gameIdx: 23, isH: true },

        { score: [0, 0], player: ["p1", "p2"], s: _p(160, 498), gameIdx: 24, isH: true },
    ]
}

export function buildRec(doc, playerMap) {
    let a = []
    let winMap = {}
    let totalScoreMap = {}
    let bracketRec_1 = newBracketRec1()
    let bracketRec_2 = newBracketRec2()
    for (let idx in doc.rec) {
        let rec = doc.rec[idx]

        let p1 = rec.player[0]
        let p2 = rec.player[1]
        if (!winMap[p1]) {
            winMap[p1] = []
            totalScoreMap[p1] = { score: 0, w: 0, l: 0 }
        }
        if (!winMap[p2]) {
            totalScoreMap[p2] = { score: 0, w: 0, l: 0 }
            winMap[p2] = []
        }
        if (rec.isGroup) {
            totalScoreMap[p1].score += rec.score[0] - rec.score[1]
            totalScoreMap[p2].score -= rec.score[0] - rec.score[1]
        }
        if (rec.score[0] > rec.score[1]) {
            if (rec.isGroup) {
                totalScoreMap[p1].w += 1
                totalScoreMap[p2].l += 1
            }
            winMap[p1].push(p2)
        }
        else {
            if (rec.isGroup) {
                totalScoreMap[p2].w += 1
                totalScoreMap[p1].l += 1
            }
            winMap[p2].push(p1)
        }
        rec.name = [playerMap[p1].name, playerMap[p2].name]
        for (let b of bracketRec_1) {
            if (b.gameIdx == Number(idx)) {
                b.player = rec.name
                b.score = rec.score
            }
        }
        rec.gameIdx = idx
        a.push(rec)
    }
    return {
        winMap: winMap
        , totalScoreMap: totalScoreMap
        , recArr: a
        , bracketRec1: bracketRec_1
        , bracketRec2: bracketRec_2
    }
}