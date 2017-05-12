import { PlayerInfo } from './PlayerInfo';
export class RecData {
    gameIdx: number = -1
    player: Array<string> = ['', '']
    score: Array<number> = [0, 0]//1-2
    foul: Array<number> = [0, 0]//2-3
    time: number = -1
}
export class GameInfo {
    //static
    playerArr: Array<PlayerInfo>
    // gameArr: Array<Array<PlayerInfo>>
    nameMapHupuId: any = {}
    //当前比赛球员
    gamePlayerArr: Array<PlayerInfo>
    status: number = 0
    winScore: number = 3
    gameIdx = 0
    gameTime = 0
    lScore = 0
    rScore = 0
    lFoul = 0
    rFoul = 0
    //save data
    // recArray: Array<RecData>
    recData: RecData
    recMap: any
    static create() {
        let gmi = new GameInfo()
        let playerArr = []
        let mapN = { '0': 'a', '1': 'b', '2': 'c', '3': 'd' }
        for (let i = 0; i < 16; i++) {
            let p = new PlayerInfo()
            p.id = i + 1
            p.name = mapN[Math.floor(i / 4)] + ((i % 4) + 1)
            playerArr.push(p)
            gmi.nameMapHupuId[p.name] = new PlayerInfo()
        }
        console.log(playerArr);
        gmi.playerArr = playerArr


        return gmi
    }
    getGameArr() {
        let gmi = this
        let group = []

        for (let i = 0; i < 4; i++) {
            group.push([gmi.playerArr[i * 4], gmi.playerArr[i * 4 + 1]])
            group.push([gmi.playerArr[i * 4 + 2], gmi.playerArr[i * 4 + 3]])
        }

        for (let i = 0; i < 4; i++) {
            group.push([gmi.playerArr[i * 4 + 1], gmi.playerArr[i * 4 + 2]])
            group.push([gmi.playerArr[i * 4], gmi.playerArr[i * 4 + 3]])
        }

        for (let i = 0; i < 4; i++) {
            group.push([gmi.playerArr[i * 4 + 1], gmi.playerArr[i * 4 + 3]])
            group.push([gmi.playerArr[i * 4], gmi.playerArr[i * 4 + 2]])
        }
        return group
    }
    getCurGame() {
        return this
    }

    start(gameIdx) {
        let r = this.recMap[gameIdx]
        this.recData = r
        this.gameIdx = this.recData.gameIdx
    }

    getPlayerInfo(groupName) {
        return JSON.parse(JSON.stringify(this.nameMapHupuId[groupName]))
    }

    getBracket() {
        let data: any = { _: null }
        for (let i = 24; i < 38; i++) {
            let r = this.recMap[i]
            data[i-23] = {
                left: {
                    score: r.score[0],
                    name: r.player[0]
                },
                right: {
                    score: r.score[1],
                    name: r.player[1]
                }
            }
        }
        return data
    }
    getGameData() {
        let data: any = { _: null }
        this.gameIdx == 37 ? data.winScore = 5 : data.winScore = 3
        data.gameIdx = this.gameIdx + 1
        data.player = this.getPlayerData()
        return data
    }
    getPlayerData() {
        let data: any = {}
        let lName = this.recMap[this.gameIdx].player[0]
        let rName = this.recMap[this.gameIdx].player[1]
        let lPlayer: PlayerInfo = this.getPlayerInfo(lName)
        let rPlayer: PlayerInfo = this.getPlayerInfo(rName)

        lPlayer.name = lName
        rPlayer.name = rName
        data.left = lPlayer
        data.right = rPlayer
        lPlayer.leftScore = this.lScore
        lPlayer.leftFoul = this.lFoul

        rPlayer.rightScore = this.rScore
        rPlayer.rightFoul = this.rFoul
        return data
    }
    buildPlayerData(doc) {
        let sumMap: any = {}
        for (let k in doc['recMap']) {
            if (Number(k) < 24) {
                let r: RecData = doc['recMap'][k]
                if (!sumMap[r.player[0]])
                    sumMap[r.player[0]] = { name: r.player[0], win: 0, dtScore: 0, beat: [], time: 0 }
                if (!sumMap[r.player[1]])
                    sumMap[r.player[1]] = { name: r.player[1], win: 0, dtScore: 0, beat: [], time: 0 }
                if (r.score[0] == 0 && r.score[1] == 0) {
                    continue;
                }
                if (r.score[0] > r.score[1]) {
                    sumMap[r.player[0]].win++
                    sumMap[r.player[0]].dtScore += r.score[0] - r.score[1]
                    sumMap[r.player[0]].beat.push(r.player[1])
                }
                else {
                    sumMap[r.player[1]].win++
                    sumMap[r.player[1]].dtScore += r.score[1] - r.score[0]
                    sumMap[r.player[1]].beat.push(r.player[0])
                }
                console.log(r)
            }
        }
    }
    score(isLeft, dtScore) {
        if (isLeft)
            this.lScore += dtScore
        else
            this.rScore += dtScore
    }
    foul(isLeft, dt) {
        if (isLeft)
            this.lFoul += dt
        else
            this.rFoul += dt
    }

    getRecData() {
        return JSON.parse(JSON.stringify(this.recData))
    }

    toJSON() {
        let doc: any = {}
        for (let k in this) {
            let o = typeof this[k]
            if (o != 'function') {
                if (k != 'playerArr') {
                    doc[k] = this[k]
                    console.log(k, o)
                }
            }
        }
        return doc
        // return JSON.parse(JSON.stringify(obj))
    }
    lastWinner: any
    commit() {
        let lPlayer = { name: this.recMap[this.gameIdx].player[0] }
        let rPlayer = { name: this.recMap[this.gameIdx].player[1] }
        let winner;
        if (this.lScore > this.rScore) {
            winner = lPlayer
        }
        else {
            winner = rPlayer
        }
        this.lastWinner = winner
        let r = this.recData
        r.foul[0] = this.lFoul
        r.foul[1] = this.rFoul
        r.score[0] = this.lScore
        r.score[1] = this.rScore
        // r.gameIdx = this.gameIdx

        // this.gameIdx++
        this.start(this.gameIdx + 1)
        this.gameTime = 0
        this.lScore = 0
        this.lFoul = 0
        this.rScore = 0
        this.rFoul = 0

        if (this.gameIdx > (24 + 13 - 1)) {
            this.winScore = 5
        }

        return r
    }
}