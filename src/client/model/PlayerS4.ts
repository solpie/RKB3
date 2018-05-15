import { getRoundList, getRoundRawData } from "../view/utils/HupuAPI";
import { ascendingProp } from "../view/utils/JsFunc";

class Rec {
    score = 0
    netScore = 0
    isPerfect = false
    matchType = -1
}
//from may hefei
export class PlayerS4 {
    perfectCount = 0
    gameCount = 0
    player_id = ''
    name = ''
    recArr: Array<Rec> = []
    constructor(pid) {
        this.player_id = pid
    }

    get subNetScore()//单场 总净胜分
    {
        let v = 0
        for (let r of this.recArr) {
            v += r.netScore
        }
        return v
    }
    get subPerfect()//单场 总零封
    {
        let v = 0
        for (let r of this.recArr) {
            if (r.isPerfect)
                v += 1
        }
        return v
    }
}

export let downloadGameData = (fromGameId = 614) => {
    var gameIdArr = [];
    var gameDataArr = [];
    var gameId;
    var getGameData = (i) => {
        if (i < gameIdArr.length) {
            gameId = gameIdArr[i].gameId;
            let gameTitle = gameIdArr[i].title
            getRoundRawData(gameId, (res1) => {
                console.log(res1)
                let data = res1
                // if (data.data.length) {
                // data.round = gameId;
                gameDataArr.push({ gameId: gameId, title: gameTitle, gameMap: res1.data });
                // }
                // this.playerDocArr = rank;
                var p = Math.floor((i + 1) / gameIdArr.length * 100);
                console.log('progress', p);
                // $('#progress1').val(p);
                getGameData(i + 1);
            })
        }
        else {//finished analiazy
            console.log('done', gameId, gameDataArr);
            calcGameData(gameDataArr)
        }
    };

    getRoundList((res2) => {
        var data = res2.data;
        // console.log(data);
        for (var i = 0; i < data.length; i++) {
            var obj = data[i];
            if (obj.id > fromGameId - 1)
                gameIdArr.push({ gameId: obj.id, title: obj.title })
        }
        gameIdArr.sort(ascendingProp('gameId'))

        console.log(gameIdArr);
        getGameData(0)
    })
}

let calcGameData = (gameDataArr) => {
    let playerMap = {}
    let subPlayerMap = {}
    let _p = (data) => {
        let pid = data.player_id
        let p
        if (!playerMap[pid]) {
            p = playerMap[pid] = new PlayerS4(pid)
            p.name = data.name
        }
        p = playerMap[pid]
        return p
    }
    for (let item of gameDataArr) {
        for (let i = 0; i < 38; i++) {

            let game = item.gameMap[i + 1]
            if (!game)
                break
            let lPlayerId = game.left.player_id
            let rPlayerId = game.right.player_id
            let lPlayer: PlayerS4 = _p(game.left)
            let rPlayer: PlayerS4 = _p(game.right)

            let lRec = new Rec()
            let rRec = new Rec()
            lRec.matchType = rRec.matchType = Number(game.match_type)
            lRec.netScore = game.left.score - game.right.score
            lRec.score = game.left.score

            rRec.score = game.right.score
            rRec.netScore = -lRec.netScore
            if (rRec.score == 0)
                lRec.isPerfect = true
            if (lRec.score == 0)
                rRec.isPerfect = true

            lPlayer.recArr.push(lRec)
            rPlayer.recArr.push(rRec)
        }
    }
    console.log('player', playerMap);
    window['player'] = playerMap
}