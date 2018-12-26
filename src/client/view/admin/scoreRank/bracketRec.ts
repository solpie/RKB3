import { cloneMap, mapToArr } from '../../utils/JsFunc';

var _p = function (x, y) {
    return 'left:' + x + 'px;' + 'top:' + y + 'px;'
}
export function newBracketRec1() {
    return [
        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(0, 373), gameIdx: 13 },
        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(0, 473), gameIdx: 15 },

        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(450, 373), gameIdx: 14 },
        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(450, 473), gameIdx: 16 },

        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(160, 398), gameIdx: 21, isH: true },

        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(160, 498), gameIdx: 22, isH: true },
    ]
}
export function newBracketRec2() {
    return [
        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(0, 373), gameIdx: 17 },
        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(0, 473), gameIdx: 19 },

        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(450, 373), gameIdx: 18 },
        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(450, 473), gameIdx: 20 },

        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(160, 398), gameIdx: 23, isH: true },

        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(160, 498), gameIdx: 24, isH: true },
    ]
}
export function newBracketRec3() {
    return [
        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(0, 373), gameIdx: 21 },
        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(0, 473), gameIdx: 23 },

        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(450, 373), gameIdx: 22 },
        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(450, 473), gameIdx: 24 },

        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(160, 398), gameIdx: 25, isH: true },

        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(160, 498), gameIdx: 26, isH: true },
    ]
}
export function newBracketRecFinal() {
    return [
        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(0, 373), gameIdx: 25 },
        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(0, 473), gameIdx: -1 },

        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(450, 373), gameIdx: 26 },
        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(450, 473), gameIdx: -1 },

        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(160, 398), gameIdx: 27, isH: true },

        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(160, 498), gameIdx: -1, isH: true },
    ]
}

export function buildRec(doc, playerMap) {
    let a = []
    let winMap = {}
    let totalScoreMap = {}
    let bracketRec_1 = newBracketRec1()
    let bracketRec_2 = newBracketRec2()
    let bracketRec_3 = newBracketRec3()
    let bracketRec_final = newBracketRecFinal()
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
                b.playerId = [p1, p2]
                b.score = rec.score
            }
        }
        for (let b of bracketRec_2) {
            if (b.gameIdx == Number(idx)) {
                // b.player = rec.name
                b.player = rec.name
                b.playerId = [p1, p2]
                b.score = rec.score
            }
        }
        for (let b of bracketRec_3) {
            if (b.gameIdx == Number(idx)) {
                // b.player = rec.name
                b.player = rec.name
                b.playerId = [p1, p2]
                b.score = rec.score
            }
        }
        for (let b of bracketRec_final) {
            if (b.gameIdx == Number(idx)) {
                // b.player = rec.name
                b.player = rec.name
                b.playerId = [p1, p2]
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
        , bracketRec3: bracketRec_3
        , bracketRecFinal: bracketRec_final
    }
}

export function rank16(doc, playerMap, rank5Player) {
    let rank16Map = {}
    let arr_6_8 = []
    let arr_9_16 = []
    for (let idx in doc.rec) {
        let rec = doc.rec[idx]
        let winner;
        let loser;
        if (rec.score[0] > rec.score[1]) {
            winner = rec.player[0]
            loser = rec.player[1]
        }
        else if (rec.score[0] < rec.score[1]) {
            winner = rec.player[1]
            loser = rec.player[0]
        }

        if (Number(idx) == 27) {
            rank16Map['1'] = winner
            rank16Map['2'] = loser
        }
        if (Number(idx) == 25) {
            rank16Map['3'] = loser
        }
        if (Number(idx) == 26) {
            rank16Map['4'] = loser
        }
        // 21 22 23 24
        if ([21, 22, 23, 24].indexOf(Number(idx)) > -1) {
            // rank16Map["5"] = loser
            if (loser != rank5Player)
                arr_6_8.push(loser)
        }
        if ([13, 14, 15, 16, 17, 18, 19, 20].indexOf(Number(idx)) > -1) {
            arr_9_16.push(loser)
        }
    }

    console.log('rank 16', rank16Map, arr_6_8, arr_9_16)
    let rank16Arr = mapToArr(rank16Map)
    rank16Arr.push(rank5Player)
    rank16Arr = rank16Arr.concat(arr_6_8).concat(arr_9_16)
    let rank = 0
    let a = []
    let rankScoreMap = {
        '1': 40, '2': 30, '3': 25, '4': 25, '5': 20
        , '6': 15, '7': 15, '8': 15, '16': 10
    }
    //
    let playerScore = window['gameConf'].playerScore
    for (let k in playerScore) {
        let a = k.split('_')
        playerScore[a[0]] = playerScore[k]
    }

    for (let playerId of rank16Arr) {
        let rankScore = 0
        rank++
        if (rank > 8)
            rankScore = rankScoreMap['16']
        else if (rankScoreMap[rank])
            rankScore = rankScoreMap[rank]
        if (playerScore[playerId])
            rankScore += playerScore[playerId]

        console.log(rank, playerMap[playerId].name)
        a.push({ rank: rank, name: playerMap[playerId].name, rankScore: rankScore })
    }
    return a
}
export function postRank16_1130() {
    let arr = [
        46591,
        15619,
        574,
        8066,
        20250,
        20597,
        1754,
        20375,
        17392,
        7435,
        34224,
        30907,
        30830,
        6487,
        39262,
        1900
    ]
    let postData = { "rank_idx": 2, "list": [] }
    let rank = 0
    for (let playerId of arr) {
        rank++
        postData.list.push({ "rank": rank, "player_id": playerId })
    }
    return postData
}
export function postRank16_1020() {
    let arr = [
        20250,
        20375,
        30103,
        16767,
        46591,
        20319,
        9118,
        1098,
        17484,
        7054,
        30047,
        34224,
        30848,
        15619,
        20597,
        22887
    ]
    let postData = { "rank_idx": 1, "list": [] }
    let rank = 0
    for (let playerId of arr) {
        rank++
        postData.list.push({ "rank": rank, "player_id": playerId })
    }
    return postData
}