import { getAllPlayer, getCurRanking, getRanking } from "../../../utils/HupuAPI";

export class RankingData {
    constructor(gameId, callback) {
        this._loadCurPlayerData(gameId, _ => {
            this._loadTop10player(_ => {
                callback()
            })
        })
    }
    _curPlayerDataArr: any
    _loadCurPlayerData(gameId, callback) {
        if (!this._curPlayerDataArr) {
            getAllPlayer(gameId, res2 => {
                console.log(res2);
                let playerArr = res2.data
                let hupuIdArr = []
                for (var i = 0; i < playerArr.length; i++) {
                    var obj = playerArr[i];
                    hupuIdArr.push(obj.player_id)
                }
                console.log('hupuIdArr', hupuIdArr);
                getCurRanking(hupuIdArr, res => {
                    console.log('getCurRanking2', res);
                    this._curPlayerDataArr = res.content.data.rankings
                    callback()
                })
            })
        }
    }
    _top10playerDataArr: any
    _loadTop10player(callback) {
        if (!this._top10playerDataArr)
            getRanking(1, res => {
                console.log('get ranking', res);
                this._top10playerDataArr = res.content.data.rankings
                callback()
            })
    }

    getPlayerData(hupuId) {
        console.log('get player Data', this._curPlayerDataArr);
        for (let playerData of this._curPlayerDataArr) {
            if (hupuId == playerData.playerName) {
                playerData.text = '实力榜' + playerData.sortId + "名"
                return playerData
            }
        }
        return { sortId: -1, text: '实力榜定位中' }
    }
}