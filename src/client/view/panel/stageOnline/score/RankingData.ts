import { getAllPlayer, getCurRanking, getRanking } from "../../../utils/HupuAPI";
import { $post } from "../../../utils/WebJsFunc";
declare let $
export class RankingData {
    colorSeg = [0xe9591f,
        0x4860f6,
        0xf4cf1f,
        0x1ccdf3,
        0x6736f8]//1-10   11-30  31-100 101-300 301-
    todayDate: string
    constructor(gameId, callback) {
        this.todayDate
        let d = new Date()
        this.todayDate = d.toLocaleFormat('%Y-%m-%d')
        console.log('today',this.todayDate);
        this._loadCurPlayerData2(gameId, _ => {
            this._loadTop10player2(_ => {
                callback()
            })
        })
    }
    _curPlayerDataArr: any
    _loadCurPlayerData2(gameId, callback) {
        if (!this._curPlayerDataArr) {
            getAllPlayer(gameId, res2 => {
                console.log(res2);
                let playerArr = res2.data
                let hupuIdArr = []
                for (var i = 0; i < playerArr.length; i++) {
                    var obj = playerArr[i];
                    hupuIdArr.push(obj.name)
                }
                console.log('hupuIdArr', hupuIdArr);
                $post('/online/ranking/list', { date:  this.todayDate, playerNameArr: hupuIdArr }, res => {
                    console.log('getCurRanking2', res);
                    this._curPlayerDataArr = res
                    callback()
                })
            })
        }

    }
    _top10playerDataArr: any
    _loadTop10player2(callback) {
        if (!this._top10playerDataArr)
            $.get('/online/ranking/top10/' +  this.todayDate, res => {
                console.log('Top10player', res);
                this._top10playerDataArr = res.top10
                callback()
            })
    }

    get top10() {
        return this._top10playerDataArr
    }

    get cur10() {
        return this._curPlayerDataArr
    }
    getPlayerData(hupuId) {
        console.log('get player Data', this._curPlayerDataArr);
        for (let playerData of this._curPlayerDataArr) {
            if (hupuId == playerData.playerName) {
                playerData.text = '实力榜' + playerData.sortId + "名"
                if (playerData.sortId > 300)
                    playerData.color = this.colorSeg[4]
                else if (playerData.sortId > 100)
                    playerData.color = this.colorSeg[3]
                else if (playerData.sortId > 30)
                    playerData.color = this.colorSeg[2]
                else if (playerData.sortId > 10)
                    playerData.color = this.colorSeg[1]
                else if (playerData.sortId > 0)
                    playerData.color = this.colorSeg[0]
                else {
                    playerData.text = "实力榜定位中"
                    playerData.color = this.colorSeg[4]
                }

                return playerData
            }
        }
        return { sortId: -1, text: '实力榜定位中' }
    }
}