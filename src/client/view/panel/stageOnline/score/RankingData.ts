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
        // let d = new Date()
        this.todayDate = '2017-07-16'
        // this.todayDate = d['toLocaleFormat']('%Y-%m-%d')
        // alert('this.todayDate' + this.todayDate)

        console.log('today', this.todayDate);
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
                let playerIdArr = []
                for (var i = 0; i < playerArr.length; i++) {
                    var obj = playerArr[i];
                    hupuIdArr.push(obj.name)
                    playerIdArr.push(obj.player_id)
                }
                console.log('hupuIdArr', hupuIdArr);
                $post('/online/ranking/list', { date: this.todayDate, playerIdArr: playerIdArr }, res => {
                    console.log('getCurRanking2', res);
                    // for (let p of res.playerArr) {
                    //     // p.sortId = p.ranking
                    // }
                    this._curPlayerDataArr = res.playerArr
                    callback()
                })
            })
        }

    }
    _top10playerDataArr: any
    _loadTop10player2(callback) {
        if (!this._top10playerDataArr)
            $.get('/online/ranking/top10/' + this.todayDate, res => {
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
        console.log('get player ranking Data', hupuId, this._curPlayerDataArr);
        for (let playerData of this._curPlayerDataArr) {
            if (hupuId == playerData.playerName) {
                console.log('find player', hupuId);
                playerData.text = '实力榜' + playerData.ranking + "名"
                if (playerData.ranking > 300)
                    playerData.color = this.colorSeg[4]
                else if (playerData.ranking > 100)
                    playerData.color = this.colorSeg[3]
                else if (playerData.ranking > 30)
                    playerData.color = this.colorSeg[2]
                else if (playerData.ranking > 10)
                    playerData.color = this.colorSeg[1]
                else if (playerData.ranking > 0)
                    playerData.color = this.colorSeg[0]
                else {
                    playerData.text = "实力榜定位中"
                    playerData.color = this.colorSeg[4]
                }

                return playerData
            }
        }
        return { ranking: -1, text: '实力榜定位中' }
    }
}