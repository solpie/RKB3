import { paddy } from '../../../utils/JsFunc';
import { getAllPlayer, getCurRanking, getRanking } from "../../../utils/HupuAPI";
import { $post } from "../../../utils/WebJsFunc";
declare let $
const colorSeg = [0xe96b1f,
    0x6736f8,
    0x4860f6,
    0x7bb746,
    0xdadbde]//1-10   11-30  31-100 101-300 301-
export class RankingData {

    todayDate: string
    get todayStr() {
        let d = new Date()
        let s = d.getFullYear() + "-" + paddy(d.getMonth() + 1, 2) + "-" + paddy(d.getDate(), 2)
        return s
    }
    constructor(gameId, callback) {
        // let d = new Date()
        this.todayDate = this.todayStr
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
    static getPlayerColor(ranking) {
        ranking = Number(ranking)
        let color = colorSeg[4]
        if (ranking > 300)
            color = colorSeg[4]
        else if (ranking > 100)
            color = colorSeg[3]
        else if (ranking > 30)
            color = colorSeg[2]
        else if (ranking > 10)
            color = colorSeg[1]
        else if (ranking > 0)
            color = colorSeg[0]
        return color
    }
    getPlayerData(playerId) {
        console.log('get cur player ranking Data', playerId, this._curPlayerDataArr);
        for (let playerData of this._curPlayerDataArr) {
            if (playerId == playerData.userId) {
                console.log('find player', playerData.playerName, playerId);
                // playerData.text = '实力榜' + playerData.ranking + "名"
                playerData.text = playerData.ranking + ""
                if (playerData.ranking > 300)
                    playerData.color = colorSeg[4]
                else if (playerData.ranking > 100)
                    playerData.color = colorSeg[3]
                else if (playerData.ranking > 30)
                    playerData.color = colorSeg[2]
                else if (playerData.ranking > 10)
                    playerData.color = colorSeg[1]
                else if (playerData.ranking > 0)
                    playerData.color = colorSeg[0]
                else {
                    playerData.text = "定位中"
                    playerData.color = colorSeg[4]
                }
                return playerData
            }
        }
        return { ranking: -1, text: '定位中', color: colorSeg[4] }
    }
}