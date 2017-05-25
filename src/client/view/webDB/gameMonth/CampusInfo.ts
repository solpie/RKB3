//ui记分工具 接口
export class CampusInfo {
    playerMap: any = {}
    gameIdx: number = 1
    constructor() {
    }

    getData(lId, rId) {
        let data: any = { _: null }
        data.winScore = 2
        data.matchType = 1
        // data.left = lPlayer
        // data.right = rPlayer
        // let lPlayer = this.playerMap[lId]
        // let rPlayer = this.playerMap[rId]
        // let player = {left:lPlayer,right:rPlayer}
        data.player = { left: this.getPlayer(lId), right: this.getPlayer(rId) }
        this.gameIdx += 1
        data.gameIdx = this.gameIdx
        return data
    }
    getPlayer(lId) {
        let p = this.playerMap[lId]
        return { avatar: 'http://w1.hoopchina.com.cn/huputv/resource/img/amateur.jpg', name: p.name, weight: p.weight, height: p.height, leftScore: 0, rightScore: 0, leftFoul: 0, rightFoul: 0 }
    }
}