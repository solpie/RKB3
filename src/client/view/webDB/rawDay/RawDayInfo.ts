import { randomPop } from '../../utils/JsFunc';
import { PlayerInfo } from '../gameMonth/PlayerInfo';
export class RawDayInfo {
    winArr: Array<PlayerInfo>
    playerArr: Array<PlayerInfo>
    recMap: any
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

    startGame() {
        // let name = arr[Math.floor(Math.random() * arr.length)]
        let data:any = { _: null }
        data.leftPlayer = randomPop(this.playerArr)
        data.rightPlayer
    }
    commit() {

    }
}