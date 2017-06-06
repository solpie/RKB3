//ui记分工具 接口
export class CampusInfo {
    playerMap: any = {}
    gameIdx: number = 1

    constructor() {
    }
    
    create(t) {
        let rowArr = t.split('\n')
        //编号 姓名 虎扑ID 性别 身份证 手机号 身高 体重
        let dataMap = {}
        for (let row of rowArr) {
            let a = row.split('\t')
            let p: any = {}
            p.id = a[0]
            if (a[2] != '')
                p.name = a[2]
            else
                p.name = a[1]
            p.height = a[5]
            p.weight = a[6]
            dataMap[p.id] = p
        }
        // this.campusPlayer = dataMap
        this.playerMap = dataMap
        console.log(dataMap, rowArr)
        return dataMap
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
        data.status = 2
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