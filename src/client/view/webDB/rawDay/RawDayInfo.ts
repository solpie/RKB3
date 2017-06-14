import { RawDayClient } from './RawDayClient';
import { WebDBCmd } from '../../WebDBCmd';
import { arrUniqueFilter, mapToArr, randomPop } from '../../utils/JsFunc';
import { PlayerInfo } from '../gameMonth/PlayerInfo';
import { RawDayCmd } from "./RawDayCmd";
declare let $;
declare let io;
let srvIO;
let rawDayClient: RawDayClient;
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
    loseArr: Array<PlayerInfo>
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
        //轮次提示
    }

    test() {
        let pArr = []

        for (let i = 0; i < 32; i++) {
            let p = new PlayerInfo();
            p.id = i + 1
            p.playerId = i + 1
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
        // srvIO = io.connect(`${srvURL}/rawday`)
        srvIO = io.connect('/livedata')
            .on('connect', () => {
                console.log('livedata ws connect...')
                // srvIO.emit('serverCon')
            })
            .on('clientCon', () => {
                this.emit_init()
                this.emit_list()
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
                this.onDrop(data)
                console.log('cs_drop', data)
            })
            .on(RawDayCmd.cs_fallback, (data) => {
                this.onFallback(data)
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
            this.loseArr = []
        }
    }
    //client event
    onPush(data) {
        if (data.leftScore != null)
            this.lScore = data.leftScore
        if (data.rightScore != null)
            this.rScore = data.rightScore
        if (data.rightFoul != null)
            this.rFoul = data.rightFoul
        if (data.leftFoul != null)
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

    onFallback(data) {
        let playerId = data.playerId
        for (let i = 0; i < this.playerArr.length; i++) {
            let p = this.playerArr[i];
            if (p.id == playerId) {
                this.winArr.push(p)
                break;
            }
        }
        this.winArr.push(this.leftPlayer)
        this.winArr.push(this.rightPlayer)
        this.nextArr = this.popPlayer(this.nextArr,this.leftPlayer.id)
        this.nextArr = this.popPlayer(this.nextArr,this.rightPlayer.id)
        this.nextArr = this.fixArray(this.nextArr)
        this.winArr = this.fixArray(this.winArr)
        this.startGame()
    }

    fixArray(arr) {
        let map: any = {}
        let a = []
        for (let p of arr) {
            if (!map[p.id]) {
                map[p.id] = p
                a.push(p)
            }
        }
        return a
        // mapToArr()
    }
    popPlayer(arr, id) {
        let a = []
        for (let p of arr) {
            if (id!=p.id) {
                a.push(p)
            }
        }
        return a
    }
    onDrop(data) {
        let playerId = data.playerId
        for (let i = 0; i < this.winArr.length; i++) {
            let p = this.winArr[i];
            if (p.id == playerId) {
                console.log('winArr', this.winArr.length, this.winArr);
                let losePlayer = this.winArr.splice(i, 1)[0]
                console.log('winArr', this.winArr.length, this.winArr);
                break;
            }
        }
        if (this.leftPlayer.playerId == playerId)
            this.startGame(this.rightPlayer)
        else if (this.rightPlayer.playerId == playerId)
            this.startGame(this.leftPlayer)
        else
            this.emitInfo()
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
        this.emitInfo()
    }
    onEvent(event) {
        if (event == 'emitInfo') {
            this.emitInfo()
        }
        else if (event == 'createClient') {
            rawDayClient = new RawDayClient()
        }
        else if (rawDayClient) {
            if (event == 'rdcStart')
                rawDayClient.start()
            else if (event == 'rdcPush')
                rawDayClient.push()
            else if (event == 'rdcCommit')
                rawDayClient.commit()
            else if (event == 'rdcFallback')
                rawDayClient.fallback()
            else if (event == 'rdcDrop')
                rawDayClient.drop()
        }

    }

    emitInfo() {
        this.emit_init()
        this.emit_list()
    }

    emit_init() {
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
        data.cmd = RawDayCmd.init
        // $post( `${srvURL}/rawday`, data, null)
        // data.player = { left: this.leftPlayer, right: this.rightPlayer }
        data.leftScore = this.lScore
        data.rightScore = this.rScore
        data.leftFoul = this.lFoul
        data.rightFoul = this.rFoul
        $post(`/db/cmd/${WebDBCmd.cs_init}`, data, null)
        console.log('emit init')
    }

    emit_list() {
        let data: any = { _: null, prefix: '' }
        let winPlayerArr = this.winArr.concat()
        let losePlayerArr = []
        for (let p of this.playerArr) {
            let isWin = false
            for (let wp of this.winArr) {
                if (wp.playerId == p.playerId) {
                    isWin = true
                }
            }
            if (!isWin) {
                if (p.id != this.leftPlayer.id && p.id != this.rightPlayer.id)
                    losePlayerArr.push(p)
            }
        }
        data.winPlayers = winPlayerArr
        data.losePlayers = losePlayerArr
        this.loseArr = losePlayerArr
        console.log('list ', data)
        $post(`/rd/cmd/${RawDayCmd.list}`, data, null)
    }

    commit() {
        if (this.lScore != 0 || this.rScore != 0) {
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