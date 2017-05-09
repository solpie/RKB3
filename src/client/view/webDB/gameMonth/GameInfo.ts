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
    gameArr: Array<Array<PlayerInfo>>
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
    recArray: Array<RecData>
    recData: RecData
    static create(playerArr) {
        let gmi = new GameInfo()
        gmi.playerArr = playerArr
        gmi.gameArr = []
        let group = gmi.gameArr

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
        return gmi
    }

    getCurGame() {
        return this
    }

    start(r) {
        this.recData = r
        this.gameIdx = this.recData.gameIdx
    }

    getPlayerData() {
        let data: any = {}
        let lPlayer = this.gameArr[this.gameIdx][0]
        let rPlayer = this.gameArr[this.gameIdx][1]
        data.left = lPlayer
        data.right = rPlayer
        lPlayer['leftScore'] = this.lScore
        lPlayer['leftFoul'] = this.lFoul

        rPlayer['rightScore'] = this.rScore
        rPlayer['rightFoul'] = this.rFoul
        return data
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
    commit() {
        let lPlayer = this.gameArr[this.gameIdx][0]
        let rPlayer = this.gameArr[this.gameIdx][1]
        let winner;
        if (this.lScore > this.rScore) {
            winner = lPlayer
            lPlayer.winCount++
            rPlayer.loseCount++
            lPlayer.beatPlayerArr.push(rPlayer)
            lPlayer.beatScore.push(this.lScore - this.rScore)
        }
        else {
            winner = rPlayer

            rPlayer.winCount++
            lPlayer.loseCount++
            rPlayer.beatPlayerArr.push(lPlayer)
            rPlayer.beatScore.push(this.rScore - this.lScore)
        }
        let r = this.recData
        r.foul[0] = this.lFoul
        r.foul[1] = this.rFoul
        r.score[0] = this.lScore
        r.score[1] = this.rScore
        r.gameIdx = this.gameIdx

        this.gameIdx++
        this.gameTime = 0
        this.lScore = 0
        this.lFoul = 0
        this.rScore = 0
        this.rFoul = 0

        if (this.gameIdx > (24 + 13 - 1)) {
            this.winScore = 5
        }

        return winner
    }
}