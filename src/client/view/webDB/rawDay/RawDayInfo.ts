import { WebDBCmd } from '../../WebDBCmd';
import { randomPop } from '../../utils/JsFunc';
import { PlayerInfo } from '../gameMonth/PlayerInfo';
import { RawDayCmd } from "./RawDayCmd";
declare let $;
declare let io;
let srvIO;
let $post = (url, param, callback) => {
    $.ajax({
        url: url,
        type: 'post',
        data: JSON.stringify(param),
        headers: { "Content-Type": "application/json" },
        dataType: 'json',
        success: callback
    });
}
export class RawDayInfo {
    winArr: Array<PlayerInfo>
    nextArr: Array<PlayerInfo>
    playerArr: Array<PlayerInfo>
    recMap: any

    timer: any
    time: number
    leftPlayer: any
    rightPlayer: any
    lScore: number
    rScore: number
    lFoul: number
    rFoul: number
    constructor(playerArr) {
        this.playerArr = playerArr
        this.initIO()
        this.test()
    }

    test() {
        let pArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
        let player = randomPop(pArr)
        let p2 = randomPop(pArr)
        console.log('rawday test', player, pArr)
        this.start(0)
    }
    initIO() {
        srvIO = io.connect('/livedata')
            .on('connect', () => {
                console.log('livedata ws connect...')
            })
            .on('clientCon', () => {
                this.startGame()
                // console.log('livedata ws connect...')
            })
            .on(RawDayCmd.cs_start, (data) => {
                console.log('cs_start',data)
                // this.startGame()
            })
    }
    start(gameIdx) {
        if (gameIdx == 0) {
            this.winArr = this.playerArr.concat()
            this.nextArr = []
        }
    }
    //client event
    onPush(data) {
        if (data.leftScore)
            this.lScore = data.leftScore
        if (data.rightScore)
            this.rScore = data.rightScore
        if (data.rightFoul)
            this.rFoul = data.rightFoul
        if (data.leftFoul)
            this.lFoul = data.leftFoul

        let data2: any = { _: null, prefix: '' }
        data2.leftFoul = this.lFoul
        data2.rightFoul = this.rFoul
        data2.leftScore = this.lScore
        data2.rightScore = this.rScore
        $post(`/rd/cmd/${WebDBCmd.cs_pull}`, data2, null)
    }
    onCon() {
        if (this.leftPlayer && this.rightPlayer) {
            srvIO.emit('')
        }
    }
    onStartTimer() {
        //
        // if(this.)
    }

    onCommit() {

    }

    onFallback() {

    }

    onDrop(data) {
        let playerId = data.playerId
        for (let i = 0; i < this.winArr.length; i++) {
            let p = this.winArr[i];
            if (p.id == playerId) {
                this.winArr.splice(i, 1)
                break;
            }
        }
        this.startGame()
    }
    ////
    startGame(onePlayer?) {
        this.lScore = this.rScore = 0
        this.lFoul = this.rFoul = 0
        // let name = arr[Math.floor(Math.random() * arr.length)]
        let data: any = { _: null, prefix: '' }

        if (onePlayer)
            this.leftPlayer = data.leftPlayer = onePlayer
        else
            this.leftPlayer = data.leftPlayer = randomPop(this.winArr)
        this.rightPlayer = data.rightPlayer = randomPop(this.winArr)
        console.log('startGame')
        $post(`/rd/cmd/${RawDayCmd.cs_init}`, data, null)
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