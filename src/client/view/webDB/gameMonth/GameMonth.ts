import { firstBy } from './thenBy';
import { ascendingProp, descendingProp, mapToArr } from '../../utils/JsFunc';
import { PlayerInfo } from './PlayerInfo';
import { GameInfo, RecData } from './GameInfo';
import { WebDBCmd } from '../../WebDBCmd';
import { VueBase } from '../../utils/VueBase';
declare const $;
declare const io;
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
const createTime = new Date().getTime()
let gameInfo: GameInfo

const getDoc = (callback) => {
    $.get('/db/find/519', (res) => {
        if (res.length)
            callback(res[0])
        else
            callback(null)
    })
}
const saveDoc = (doc, cb?) => {
    $post('/db/update/519', doc, () => {
        if (cb)
            cb()
    })
}
declare const Vue;
class GameMonth extends VueBase {
    template = require('./gameMonth.html');
    db = VueBase.PROP
    isOld = VueBase.PROP
    recMap = VueBase.PROP
    gameInfo = VueBase.PROP
    playerRank = VueBase.PROP

    constructor() {
        super();
        VueBase.initProps(this);
    }

    initGameInfo() {
        getDoc((doc) => {
            if (doc) {
                let playerArr = []
                let mapN = { '0': 'a', '1': 'b', '2': 'c', '3': 'd' }
                for (let i = 0; i < 16; i++) {
                    let p = new PlayerInfo()
                    p.id = i + 1
                    p.name = mapN[Math.floor(i / 4)] + ((i % 4) + 1)
                    playerArr.push(p)
                }
                console.log(playerArr);

                gameInfo = GameInfo.create(playerArr)
                console.log(gameInfo.gameArr);


                // if (!doc['recMap']) {
                // doc['recMap'] = {}
                // for (let i = 0; i < 38; i++) {
                //     let r = new RecData()
                //     let gp = gameInfo.gameArr[i]
                //     if (gp)
                //         r.player = [gp[0].name, gp[1].name]
                //     r.gameIdx = i
                //     doc['recMap'][i] = JSON.parse(JSON.stringify(r))
                // }
                // saveDoc(doc)
                // }
                // Vue.set('recMap', doc['recMap'])
                this.recMap = doc['recMap']
                gameInfo.recMap = doc['recMap']
                gameInfo.start(doc.gameIdx)
                this.gameInfo = gameInfo

                // if (!doc['gameIdx']) {
                //     doc['gameIdx'] = 0
                //     saveDoc(doc)
                // }
            }
        })
    }
    created() {
        let srvIO = io.connect('/webDB')
            .on('connect', () => {
                let url = `/db/cmd/${WebDBCmd.cs_srvCreated}`
                console.log(url)
                $post(url, { _: null, createTime: createTime }, null)
            })
            .on(`${WebDBCmd.sc_srvCreated}`, (data) => {
                if (createTime < data.createTime) {
                    this.isOld = true
                    srvIO.disconnect()
                    console.log('old server!!')
                }
                else {
                    this.initGameInfo()
                }
            })
            .on(`${WebDBCmd.sc_panelCreated}`, () => {
                console.log('sc_panelCreated')
                let data: any = { _: null }
                data.winScore = gameInfo.winScore
                data.gameIdx = gameInfo.gameIdx + 1
                data.player = gameInfo.getPlayerData()

                $post(`/db/cmd/${WebDBCmd.cs_init}`, data, null)
            })

        // $post('/db/update/519', { id: 519, test: 233 }, () => {

        // })
    }
    methods = {
        onAddScore(isLeft, dtScore) {
            gameInfo.score(isLeft, dtScore)
            let data: any = { _: null }
            if (isLeft)
                data.leftScore = gameInfo.lScore
            else
                data.rightScore = gameInfo.rScore
            $post(`/db/cmd/${WebDBCmd.cs_score}`, data, null)
        },
        onAddFoul(isLeft, dtFoul) {
            gameInfo.foul(isLeft, dtFoul)
            let data: any = { _: null }
            if (isLeft)
                data.leftFoul = gameInfo.lFoul
            else
                data.rightFoul = gameInfo.rFoul
            $post(`/db/cmd/${WebDBCmd.cs_score}`, data, null)
        },
        onStartTimer() {
            let data: any = { _: null }
            $post(`/db/cmd/${WebDBCmd.cs_startTimer}`, data, null)
        },

        onStartGame() {
        },
        onSetMaster() {
            getDoc((doc) => {
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
                let playerArr = mapToArr(sumMap)
                for (let p1 of playerArr) {
                    for (let p2 of playerArr) {

                        if (p1.win==p2.win&&p1.beat.indexOf(p2.name)>-1)
                            p1.win += 0.1
                    }
                }
                playerArr.sort(firstBy(function (v1, v2) { return v2.win - v1.win; })
                    .thenBy(function (v1, v2) { return v2.dtScore - v1.dtScore; })
                )
                this.playerRank = playerArr
                console.log(playerArr)
            })
        },
        onSetGameIdx(v) {
            gameInfo.start(v)
        },
        onTestGame() {
            getDoc((doc) => {
                if (doc) {

                    for (let k in doc['recMap']) {
                        let rd = Math.random()
                        let s
                        if (rd < .5) {
                            s = [3, Math.floor(Math.random() * 3)]
                        }
                        else
                            s = [Math.floor(Math.random() * 3), 3]
                        doc['recMap'][k].score = s
                    }
                    saveDoc(doc)
                }
            })
        },
        onClearGame() {
            getDoc((doc) => {
                if (doc) {
                    for (let k in doc['recMap']) {
                        doc['recMap'][k].score = [0, 0]
                        doc['recMap'][k].foul = [0, 0]
                    }
                    doc.gameIdx = 0
                    saveDoc(doc)
                }
            })
        },
        onCommitGame() {
            let data: any = { _: null }
            let r = gameInfo.commit()
            data.player = gameInfo.lastWinner
            getDoc((doc) => {
                if (doc) {
                    doc['recMap'][r.gameIdx] = r
                    doc.gameIdx = gameInfo.gameIdx
                    console.log('save doc', doc)
                    saveDoc(doc)
                }
            })

            $post(`/db/cmd/${WebDBCmd.cs_commit}`, data, null)
        },
    }
}
export let gameMonthView = new GameMonth()