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

    gameIdx: number = 1//from 1    
    winScore: number = 2
    matchType: number = 4
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
        this.test()
        this.initIO()
    }

    test() {
        let pArr = []

        for (let i = 0; i < 32; i++) {
            let p = new PlayerInfo();
            p.id = i + 1
            p.hupuID = 'player' + p.id
            p.name = p.hupuID
            p.height = 190
            p.weight = 90
            p.avatar = 'http://w1.hoopchina.com.cn/huputv/resource/img/amateur.jpg'
            pArr.push(p)
        }
        this.playerArr = pArr
        // let player = randomPop(pArr)
        // let p2 = randomPop(pArr)
        // console.log('rawday test', player, pArr)
        this.start(0)
        this.startGame()
    }
    initIO() {
        srvIO = io.connect('/livedata')
            .on('connect', () => {
                console.log('livedata ws connect...')
            })
            .on('clientCon', () => {
                this.emit_Init()
                // console.log('livedata ws connect...')
            })
            .on(RawDayCmd.cs_start, (data) => {
                this.onStartTimer(true)
                console.log('cs_start', data)
            })
            .on(RawDayCmd.cs_push, (data) => {
                this.onPush(data)
                console.log('cs_push', data)
            })
            .on(RawDayCmd.cs_drop, (data) => {
                console.log('cs_drop', data)
            })
            .on(RawDayCmd.cs_fallback, (data) => {
                console.log('cs_fallback', data)
            })
            .on(RawDayCmd.cs_commit, (data) => {
                this.onCommit()
                console.log('cs_commit', data)
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
        $post(`/rd/cmd/${RawDayCmd.pull}`, data2, null)
        data._ = null
        $post(`/db/cmd/${WebDBCmd.cs_score}`, data, null)
    }
    onCon() {
        if (this.leftPlayer && this.rightPlayer) {
            srvIO.emit('')
        }
    }
    onStartTimer(isStart) {
        //
        let data: any = { _: null, isStart: isStart }
        $post(`/db/cmd/${WebDBCmd.cs_startTimer}`, data, null)
    }

    onCommit() {
        this.commit()
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

        if (onePlayer)
            this.leftPlayer = onePlayer
        else
            this.leftPlayer = randomPop(this.winArr)
        this.rightPlayer = randomPop(this.winArr)
        console.log('startGame', this.leftPlayer, this.rightPlayer)
        this.emit_Init()
    }
    emit_Init() {
        let data: any = { _: null, prefix: '' }
        data.rightPlayer = this.rightPlayer
        data.leftPlayer = this.leftPlayer
        data.gameIdx = this.gameIdx
        data.winScore = this.winScore
        data.matchType = this.matchType
        data.leftPlayer.score = this.lScore
        data.rightPlayer.score = this.rScore
        data.leftPlayer.foul = this.lFoul
        data.rightPlayer.foul = this.rFoul
        $post(`/rd/cmd/${RawDayCmd.init}`, data, null)
        // $post(`/rd/cmd/${RawDayCmd.pull}`, { leftScore: this.lScore, rightScore: this.rScore, leftFoul: this.lFoul, rightFoul: this.rFoul }, null)
        // data.player = { left: this.leftPlayer, right: this.rightPlayer }
        data.leftScore = this.lScore
        data.rightScore = this.rScore
        data.leftFoul = this.lFoul
        data.rightFoul = this.rFoul
        $post(`/db/cmd/${WebDBCmd.cs_init}`, data, null)
    }
    commit() {
        if (this.lScore != 0 && this.rScore != 0) {
            if (this.lScore > this.rScore) {
                this.nextArr.push(this.leftPlayer)
            }
            else if (this.rScore > this.lScore) {
                this.nextArr.push(this.rightPlayer)
            }
            this.gameIdx++
            
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
}