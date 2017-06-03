import { randomPop } from '../../utils/JsFunc';
import { PlayerInfo } from '../gameMonth/PlayerInfo';
export class RawDayInfo {
    winArr: Array<PlayerInfo>
    nextArr: Array<PlayerInfo>
    playerArr: Array<PlayerInfo>
    recMap: any
    leftPlayer: any
    rightPlayer: any
    lScore: number
    rScore: number
    lFoul: number
    rFoul: number
    constructor(playerArr) {
        this.playerArr = playerArr
        this.test()
    }

    test() {
        let pArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
        let player = randomPop(pArr)
        let p2 = randomPop(pArr)
        console.log('rawday test', player, pArr)
    }

    start(gameIdx) {
        if (gameIdx == 0) {
            this.winArr = this.playerArr.concat()
            this.nextArr = []
        }
    }

    startGame(onePlayer?) {
        this.lScore = this.rScore = 0
        this.lFoul = this.rFoul = 0
        // let name = arr[Math.floor(Math.random() * arr.length)]
        let data: any = { _: null }

        if (onePlayer)
            this.leftPlayer = data.leftPlayer = onePlayer
        else
            this.leftPlayer = data.leftPlayer = randomPop(this.winArr)
        this.rightPlayer = data.rightPlayer = randomPop(this.winArr)
    }

    commit() {
        if (this.lScore != 0 && this.rScore != 0) {
            if (this.lScore > this.rScore) {
                this.nextArr.push(this.leftPlayer)
            }
            else if (this.rScore > this.lScore) {
                this.nextArr.push(this.rightPlayer)
            }
        }

        if (this.winArr.length == 1) {
            this.startGame(this.winArr[0])
        }
        else if (this.winArr.length == 0) {
            while (this.nextArr.length)
                this.winArr.push(this.nextArr.pop())
            this.startGame()
        }
        else {
            this.startGame()
        }
    }
}