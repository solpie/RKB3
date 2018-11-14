import { cloneMap } from "../../utils/JsFunc";

var _p = function (x, y) {
    return 'left:' + x + 'px;' + 'top:' + y + 'px;'
}
export let bracketRec1 = [
    { s: _p(0, 373), gameIdx: 13 },
    { s: _p(0, 473), gameIdx: 15 },

    { s: _p(500, 373), gameIdx: 14 },
    { s: _p(500, 473), gameIdx: 16 },

    { s: _p(130, 398), gameIdx: 17 },

    { s: _p(330, 398), gameIdx: 18 },
]
export function newBracketRec1() {
    return [
        { player: ["p1", "p2"], s: _p(0, 373), gameIdx: 13 },
        { player: ["p1", "p2"], s: _p(0, 473), gameIdx: 15 },

        { player: ["p1", "p2"], s: _p(500, 373), gameIdx: 14 },
        { player: ["p1", "p2"], s: _p(500, 473), gameIdx: 16 },

        { player: ["p1", "p2"], s: _p(130, 398), gameIdx: 17 },

        { player: ["p1", "p2"], s: _p(330, 398), gameIdx: 18 },
    ]
}

export function buildRec(doc, playerMap) {
    let a = []
    let winMap = {}
    let totalScoreMap = {}
    let bracketRec_1 = newBracketRec1()
    for (let idx in doc.rec) {
        let rec = doc.rec[idx]
        for (let b of bracketRec_1) {
            if (b.gameIdx == Number(idx)) {
                b.player = rec.player
            }
        }
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
        rec.gameIdx = idx
        a.push(rec)
    }
    return {
        winMap: winMap
        , totalScoreMap: totalScoreMap
        , recArr: a
        , bracketRec1: bracketRec_1
    }
}