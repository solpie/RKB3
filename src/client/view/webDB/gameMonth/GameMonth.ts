import { firstBy } from './thenBy';
import { ascendingProp, descendingProp, mapToArr } from '../../utils/JsFunc';
import { PlayerInfo } from './PlayerInfo';
import { GameInfo, RecData } from './GameInfo';
import { WebDBCmd } from '../../WebDBCmd';
import { VueBase } from '../../utils/VueBase';
import { getAllPlayer } from "../../utils/HupuAPI";
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
    masterBracket = VueBase.PROP
    gameInfoStr = VueBase.PROP
    vs = VueBase.PROP
    campusPlayer = VueBase.PROP
    campusInput = VueBase.PROP

    constructor() {
        super();
        VueBase.initProps(this);
    }

    initGameInfo(res) {
        let playerIdArr = ['郝天佶', 'Beans吴', 'NGFNGN', 'zzz勇'
            , 'tracyld11', '雷雷雷雷子', '带伤上阵也不怕', 'lgy1993131'
            , '平常心myd', '大霖哥666', '蔡炜少年', 'AL张雅龙'
            , '新锐宋教练', '邓丹阿丹', '认得挖方一号', '习惯过了头'
        ]
        let playerOrderArr = []
        let getData = (name) => {
            for (let p of res.data) {
                if (p.name == name)
                { return p }
            }
        }

        for (let p of playerIdArr) {
            playerOrderArr.push(getData(p))
        }
        getDoc((doc) => {
            if (doc) {
                console.log('getHupuPlayer', res, playerOrderArr)
                gameInfo = GameInfo.create(playerOrderArr)
                // console.log(gameInfo.gameArr);
                // if (!doc['recMap']) {
                // doc['recMap'] = {}
                // let gameArr = gameInfo.getGameArr()
                // for (let i = 0; i < 38; i++) {
                //     let r = new RecData()
                //     let gp =gameArr[i]
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
                this.emitBracket()
            }
        })
    }
    getHupuPlayer(cb) {
        getAllPlayer(286, (res) => {
            cb(res)
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
                    this.getHupuPlayer((res) => {
                        this.initGameInfo(res)
                    })
                }
            })
            .on(`${WebDBCmd.sc_panelCreated}`, () => {
                console.log('sc_panelCreated')
                let data: any = gameInfo.getGameData()
                $post(`/db/cmd/${WebDBCmd.cs_init}`, data, null)
            })
            .on(`${WebDBCmd.sc_bracketCreated}`, () => {
                this.routeBracket()
                this.emitBracket()
            })

        // $post('/db/update/519', { id: 519, test: 233 }, () => {

        // })
    }
    routeBracket() {
        let masterIdx = 23
        let route = (from, toWin, toLose) => {
            from += masterIdx
            toWin += masterIdx
            toLose += masterIdx
            let rFrom = this.recMap[from]
            let rWin = this.recMap[toWin]
            let rLose = this.recMap[toLose]
            if (rFrom.score[0] == 0 && rFrom.score[1] == 0)
                return
            if (rFrom.score[0] > rFrom.score[1]) {
                rWin.player.push(rFrom.player[0])
                if (rLose)
                    rLose.player.push(rFrom.player[1])
            }
            else {
                rWin.player.push(rFrom.player[1])
                if (rLose)
                    rLose.player.push(rFrom.player[0])
            }
        }
        for (let i = 5; i < 15; i++) {
            this.recMap[i + masterIdx].player = []
        }
        route(1, 7, 5)
        route(2, 7, 5)
        route(3, 8, 6)
        route(4, 8, 6)
        route(5, 10, 99)
        route(6, 9, 99)
        route(7, 11, 9)
        route(8, 11, 10)
        route(9, 12, 99)
        route(10, 12, 99)
        route(11, 14, 13)
        route(12, 13, 99)
        route(13, 14, 99)
    }

    emitBracket() {
        let data = gameInfo.getBracket()
        $post(`/db/cmd/${WebDBCmd.cs_bracketInit}`, data, null)
    }

    methods = {
        onCreateCampus(t) {
            console.log(t)
        },
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
        onStartTimer(isStart) {
            let data: any = { _: null, isStart: isStart }
            $post(`/db/cmd/${WebDBCmd.cs_startTimer}`, data, null)
        },
        renderRecMap(recMap?) {
            if (recMap) {
                this.recMap = gameInfo.recMap = recMap
                Vue.set('recMap', '1', 'recMap["1"]')
            }
        },
        onStartGame() {
            let data: any = gameInfo.getGameData()
            this.gameInfoStr = gameInfo.start(gameInfo.gameIdx)
            $post(`/db/cmd/${WebDBCmd.cs_init}`, data, null)
        },
        onSetMaster() {
            getDoc((doc) => {
                let sumMap: any = gameInfo.buildPlayerData(doc)
                let playerArr = mapToArr(sumMap)
                for (let p1 of playerArr) {
                    for (let p2 of playerArr) {
                        if (p1.win == p2.win && p1.beat.indexOf(p2.name) > -1)
                            p1.win += 0.1
                    }
                }
                playerArr.sort(firstBy(function (v1, v2) { return v2.win - v1.win; })
                    .thenBy(function (v1, v2) { return v2.dtScore - v1.dtScore; })
                )
                this.playerRank = playerArr

                // -- -master---                
                let groupMap: any = { 'a': [], 'b': [], 'c': [], 'd': [] }
                for (let p3 of playerArr) {
                    let pg = p3.name[0]
                    if (groupMap[pg].length < 2) {
                        groupMap[pg].push(p3)
                    }
                }

                let m = []
                for (let g in groupMap) {
                    m = m.concat(groupMap[g])
                }

                let masterIdx = 24
                doc['recMap'][masterIdx + 0].player[0] = m[0].name
                doc['recMap'][masterIdx + 0].player[1] = m[3].name

                doc['recMap'][masterIdx + 1].player[0] = m[2].name
                doc['recMap'][masterIdx + 1].player[1] = m[1].name

                doc['recMap'][masterIdx + 2].player[0] = m[4].name
                doc['recMap'][masterIdx + 2].player[1] = m[7].name

                doc['recMap'][masterIdx + 3].player[0] = m[6].name
                doc['recMap'][masterIdx + 3].player[1] = m[5].name
                for (let m1 of m) {
                    console.log('master', m1.name)
                }
                console.log('master', m)
                this.masterBracket = m
                saveDoc(doc)
                this.renderRecMap(doc['recMap'])
            })
        },
        onBracket() {
            this.routeBracket()
            this.renderRecMap()
        },

        onSetVS(vs) {
            //a1 a2
            if (vs) {
                let a = vs.split(' ')
                if (a.length == 2) {
                    getDoc((doc) => {
                        gameInfo.setVS(doc, a)
                        saveDoc(doc)
                    })
                }
            }
        },
        onSetGameIdx(v) {
            this.gameInfoStr = gameInfo.start(v)
        },
        onTestGame() {
            getDoc((doc) => {
                if (doc) {
                    for (let k in doc['recMap']) {
                        if (Number(k) < 24) {
                            let rd = Math.random()
                            let s
                            if (rd < .5) {
                                s = [3, Math.floor(Math.random() * 3)]
                            }
                            else
                                s = [Math.floor(Math.random() * 3), 3]
                            doc['recMap'][k].score = s
                        }
                    }
                    saveDoc(doc)
                }
            })
        },
        onClearGame(section) {
            let min = 0
            let max = 38
            if (section == 0) {

            }
            else if (section == 1) {
                min = 24
            }
            getDoc((doc) => {
                if (doc) {
                    for (let k in doc['recMap']) {
                        let gameIdx = Number(k)
                        if (gameIdx <= max && gameIdx >= min) {
                            doc['recMap'][k].score = [0, 0]
                            doc['recMap'][k].foul = [0, 0]

                            if (section == 1) {
                                doc['recMap'][k].player = ['', '']
                            }
                        }

                    }
                    doc.gameIdx = 0
                    saveDoc(doc)
                }
            })
        },

        onProgress(g) {
            if (gameInfo.gameIdx < 25) {
                getDoc((doc) => {
                    let data = gameInfo.getGroup(doc, g)
                    $post(`/db/cmd/${WebDBCmd.cs_showProgress}`, data, null)
                })
            }
        },
        onHideProgress() {
            $post(`/db/cmd/${WebDBCmd.cs_hideProgress}`, { _: null }, null)
        },
        onSetResult() {
            getDoc((doc) => {
                let r = doc['recMap'][gameInfo.gameIdx]
                r.score[0] = gameInfo.lScore
                r.score[1] = gameInfo.rScore
                saveDoc(doc)
                this.renderRecMap()
            })
        },
        onCommitGame(isEmit) {
            let data: any = { _: null }
            let r = gameInfo.commit()
            data.player = gameInfo.lastWinner
            getDoc((doc) => {
                if (doc) {
                    doc['recMap'][r.gameIdx] = r
                    doc.gameIdx = gameInfo.gameIdx
                    let sum = gameInfo.getWinInfo(doc, data.player.name)
                    data.player['winAmount'] = sum.win
                    data.player['loseAmount'] = sum.lose
                    data.player['roundScore'] = sum.score
                    console.log('save doc', doc)
                    saveDoc(doc)
                    if (isEmit) {
                        $post(`/db/cmd/${WebDBCmd.cs_commit}`, data, null)
                    }
                    this.onBracket()
                    if (isEmit) {
                        this.emitBracket()
                        this.onStartGame()
                    }
                }
            })

        },
    }
}
export let gameMonthView = new GameMonth()