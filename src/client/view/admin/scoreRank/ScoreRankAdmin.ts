import { CommandId } from '../../Command';
import { PanelId } from '../../const';
import { updateWorldWarDoc, postRank16 } from '../../utils/HupuAPI';
import { descendingProp } from '../../utils/JsFunc';
import { VueBase } from '../../utils/VueBase';
import { buildRec, newBracketRec1, newBracketRec2, newBracketRec3, rank16, newBracketRecFinal, postRank16_1020, postRank16_1130 } from './bracketRec';
let confFile = null;
let reader;
let filesInput;
declare let $
let dbUrl;
const getDoc = callback => {
    if (!dbUrl) {
        alert('no dbUrl')
    }
    // dbUrl = "http://rtmp.icassi.us:8090/event?idx=1130_0"
    $.get(dbUrl, res => {
        if (res.length) callback(res[0]);
        else callback(null);
    });
};
const syncDoc = (cb, isSave = false) => {
    getDoc(data => {
        cb(data);
        if (isSave)
            updateWorldWarDoc(data, res => {
                console.log(res);
            });
    });
};

let opReq = (cmdId: string, param: any) => {
    param._ = null
    $.ajax({
        url: `/panel/${PanelId.onlinePanel}/${cmdId}`,
        type: 'post',
        data: JSON.stringify(param),
        headers: { "Content-Type": "application/json" },
        dataType: 'json'
    });
}
let _exData
const playerCount = 4;
class _ScoreRankAdmin extends VueBase {
    template = require('./scoreRank.html');
    actTab = VueBase.PROP;

    selected = VueBase.PROP;
    options = VueBase.PROP;
    gameConf = VueBase.PROP;
    vsPlayer = VueBase.PROP;
    vsPlayerArr = VueBase.PROP
    redArr = VueBase.PROP;
    blueArr = VueBase.PROP;
    lPlayer = VueBase.PROP;
    rPlayer = VueBase.PROP;

    lastScoreArr = VueBase.PROP;

    //rec table
    selGameIdx = VueBase.PROP
    recArr = VueBase.PROP;
    playerMap = VueBase.PROP;
    winMap = VueBase.PROP;
    totalScoreMap = VueBase.PROP;
    p1WinMap = VueBase.PROP;

    bracketRec = VueBase.PROP
    bracketRec1 = VueBase.PROP
    bracketRec2 = VueBase.PROP
    bracketRec3 = VueBase.PROP
    bracketRecFinal = VueBase.PROP

    rank5Player = VueBase.PROP
    rank16Arr = VueBase.PROP
    constructor() {
        super();
        VueBase.initProps(this);
    }

    created() {
        console.log('Game admin');
        this.blueArr = []
        this.redArr = []
        this.vsPlayerArr = []
        this.rank16Arr = []
        this.actTab = 'tab1'
        this.bracketRec = this.bracketRec1 = newBracketRec1()
        this.bracketRec2 = newBracketRec2()
        this.bracketRec3 = newBracketRec3()
        this.bracketRecFinal = newBracketRecFinal()
    }
    initGameRecTable(playerMap, data1?, callback?) {
        let _ = (data) => {
            if (data.doc) {
                this.selGameIdx = data.doc.gameIdx
                let ret = buildRec(data.doc, playerMap)
                this.bracketRec1 = ret.bracketRec1
                this.bracketRec2 = ret.bracketRec2
                this.bracketRec3 = ret.bracketRec3
                this.bracketRecFinal = ret.bracketRecFinal
                this.winMap = ret.winMap
                this.totalScoreMap = ret.totalScoreMap
                this.recArr = ret.recArr
                if (callback) {
                    callback()
                }
            }
        }
        if (data1)
            _(data1)
        else
            syncDoc(data1 => {
                console.log('init game rec table', data1)
                _(data1)
            })
    }
    //on loaded conf file
    createOption(data, callback?) {
        let a = [];
        let playerMap = data.playerMap
        this.playerMap = playerMap
        if (data.rec)
            for (var i = 0; i < data.rec.length; i++) {
                let rec = data.rec[i]
                console.log('player', rec.player);
                let p1 = playerMap[rec.player[0]]
                let p2 = playerMap[rec.player[1]]
                if (p1 || p2) {
                    let p1name = p1 ? p1.name : '';
                    let p2name = p2 ? p2.name : '';
                    let option = { text: rec.idx + p1name + ' vs ' + p2name, value: rec.idx }
                    a.push(option);
                }
            }
        this.options = a
        this.gameConf = data
        dbUrl = data.dbUrl
        // let a = [];

        if (this.gameConf.scoreRank) {
            this.blueArr = []
            this.redArr = []
            for (var i = 0; i < this.gameConf.scoreRank.length; i++) {
                let a = this.gameConf.scoreRank[i][0].split('_')
                // if (this.gameConf.scoreRank[i][1]) {
                let pn = a[0]
                let player = data.playerMap[pn]
                this.blueArr.push(player)
                this.redArr.push(player)
                // }
            }
        }
        window['gameConf'] = this.gameConf
        console.log('create gameConf ', this.gameConf);
        this.initGameRecTable(playerMap, null, _ => {
            data.totalScoreMap = this.totalScoreMap;
            callback()
        })
    }

    route(recArr, playerMap) {
        let getWinner = (rec) => {
            if (rec.score[0] != 0 || rec.score[1] != 0) {
                if (rec.score[0] > rec.score[1])
                    return rec.player[0]
                else
                    return rec.player[1]
            }
            return ''
        }

        let fillWinner = (fromGameId, playerId) => {
            for (let i = 0; i < recArr.length; i++) {
                let rec = recArr[i];
                let a = rec.idx.split('#')
                let gameId = a[1]
                if (gameId != '_' && gameId.length > fromGameId.length) {
                    let pos = gameId.search(fromGameId)
                    if (pos > -1) {
                        let arrIdx = Math.floor(pos / Number(a[0]))
                        console.log('fillWinner from', fromGameId, 'to', gameId, arrIdx, playerMap[playerId].name);
                        rec.player[arrIdx] = playerId
                    }
                }
            }
        }

        for (let i = 0; i < recArr.length; i++) {
            let rec = recArr[i];
            let a = rec.idx.split('#')
            let gameId = a[1]
            let winner = getWinner(rec) //ret playerId
            if (winner) {
                console.log(gameId, 'winner', playerMap[winner].name);
                fillWinner(gameId, winner)
            }
        }

    }
    methods = {
        tab(s, bracketRecIdx?) {
            this.actTab = s
            if (bracketRecIdx == 1)
                this.bracketRec = this.bracketRec1
            if (bracketRecIdx == 2)
                this.bracketRec = this.bracketRec2
            if (bracketRecIdx == 3)
                this.bracketRec = this.bracketRec3
            if (bracketRecIdx == 4)
                this.bracketRec = this.bracketRecFinal
        },
        onGenRank16(rank5Player) {
            syncDoc(data => {
                this.rank16Arr = rank16(data.doc, this.playerMap, rank5Player)
            })
        },
        onPostRank16(rankIdx) {
            let data = postRank16_1130()
            console.log('post rank16', data)
            // setClientDelay(this.gameId, t, (res) => {
            //     console.log('setClientDelay', res)
            //     this.onGetClientDelay()
            // })
            // setClientDelay
            postRank16(data, _ => {
                console.log(_)
            })
        },
        onEmitBracket(tab) {
            let bracketPage = 1
            if (tab == 'tab11')
                bracketPage = 1
            if (tab == 'tab12')
                bracketPage = 2
            if (tab == 'tab13')
                bracketPage = 3
            if (tab == 'tab14')
                bracketPage = 4

            opReq(`${CommandId.cs_bracket}`, {
                bracketPage: bracketPage,
                playerMap: this.playerMap,
                bracketRec1: this.bracketRec1
                , bracketRec2: this.bracketRec2
                , bracketRec3: this.bracketRec3
                , bracketRecFinal: this.bracketRecFinal
            })
        },
        onReloadShow() {
            this.reloadFile(null, {
                callback: _ => {
                    this.onShowScoreRank(true)
                }
            })
        },
        onSelectGame() {
            console.log('on init game', this.selected);
            let playerMap = this.gameConf.playerMap
            let recArr = this.gameConf.rec
            for (let i = 0; i < recArr.length; i++) {
                let rec = recArr[i];
                if (rec.idx == this.selected) {
                    let p1 = rec.player[0]
                    let p2 = rec.player[1]
                    this.vsPlayer = p1 + ' ' + p2
                    return
                }
            }
        },
        onChangePlayer(isBlue, playerId) {
            isBlue ? this.vsPlayerArr[0] = playerId : this.vsPlayerArr[1] = playerId;
            this.vsPlayer = this.vsPlayerArr.join(" ")
        },
        onAddScore(isLeft, dtScore) {
            this.onShowScoreRank(true, dtScore, isLeft)
            opReq(`${CommandId.cs_updateScore}`, { dtScore: dtScore, isLeft: isLeft })
        },
        onSetVsPlayer(gameIdx, vsplayer) {
            syncDoc(data => {
                let doc = data.doc;
                let game = doc.rec[gameIdx];
                let a = vsplayer.split(' ')
                if (game) game.player = a;
                this.initGameRecTable(this.playerMap, data)
            }, true);
        },
        onSetGroup(gameIdx) {
            syncDoc(data => {
                let doc = data.doc
                if (!doc.rec[gameIdx]['isGroup'])
                    doc.rec[gameIdx]['isGroup'] = true
                else
                    doc.rec[gameIdx]['isGroup'] = false
                this.initGameRecTable(this.playerMap, data)
            }, true)
        },
        onSetScore(gameIdx, inputId?) {
            syncDoc(data => {
                let doc = data.doc
                let scoreStr;
                if (!inputId)
                    scoreStr = $("#scoreInput" + gameIdx).val();
                else
                    scoreStr = $(inputId).val();
                console.log(inputId, scoreStr);
                let a = scoreStr.split(" ");
                if (a.length == 2) {
                    let rec = doc.rec[gameIdx]
                    rec.score = [Number(a[0]), Number(a[1])]
                    this.initGameRecTable(this.playerMap, data)
                }
            }, true)
        },
        onDeleteGameRec(gameIdx) {
            syncDoc(data => {
                let doc = data.doc;
                delete doc.rec[gameIdx];
                this.initGameRecTable(this.playerMap, data)
            }, true);
        },
        setGameIdx(gameIdx, playerIdArr) {
            this.selGameIdx = gameIdx
            this.vsPlayerArr[1] = playerIdArr[1]
            this.vsPlayerArr[0] = playerIdArr[0]
            this.vsPlayer = this.vsPlayerArr.join(" ")
        },
        onShowWinMap() {
            let p1 = this.vsPlayerArr[0]
            this.p1WinMap = this.winMap[p1]
        },
        onCreateGame() {
            console.log('onCreateGame', this.lPlayer, this.rPlayer)
            let a = this.vsPlayer.split(' ')
            let p1 = a[0]
            let p2 = a[1]
            if (p1 && p2) {
                syncDoc(data => {
                    if (!data.doc)
                        data.doc = { gameIdx: 0, rec: {} }
                    let doc = data.doc;
                    if (!doc.rec)
                        doc.rec = {}
                    doc.gameIdx++
                    doc.rec[doc.gameIdx] = {
                        player: [p1, p2]
                        , score: [0, 0]
                    }
                    console.log('create game', data)
                    this.initGameRecTable(this.playerMap, data)
                }, true)
            }
        },
        onInitDoc() {
            syncDoc(data => {
                data.doc = { gameIdx: 0, rec: {} }
            }, true)
        },
        onInitGame() {
            console.log('init game')
            // cs_initGame
            let playerMap = this.gameConf.playerMap
            // let recArr = this.gameConf.rec

            let a = this.vsPlayer.split(' ')
            let p1 = a[0]
            let p2 = a[1]
            p1 = playerMap[p1]
            p2 = playerMap[p2]
            p1.avatar = this.gameConf.avatarUrlBase + p1.playerId + '.png'
            p2.avatar = this.gameConf.avatarUrlBase + p2.playerId + '.png'
            this.lPlayer = p1
            this.rPlayer = p2
            opReq(CommandId.cs_setPlayer, {
                leftPlayer: p1, rightPlayer: p2,
                isRestFoul: true,
                foulToHint: this.gameConf.foulToHint,
                isRestTeamScore: true
            })
        },
        onSetPlayerDeactive() {
            this.vsPlayer = ''
            this.onShowScoreRank(true)
        },
        onShowScoreRank(visible) {
            let scoreArr = []
            let isInitScoreArr = false
            let scoreFx = 0
            if (!this.lastScoreArr) {
                this.lastScoreArr = [0, 0, 0, 0, 0]
                isInitScoreArr = true
            }
            let a = this.vsPlayer.split(' ')
            let p1 = a[0]
            let p2 = a[1]
            for (let i = 0; i < this.gameConf.scoreRank.length; i++) {
                let a = this.gameConf.scoreRank[i][0].split('_')
                if (this.gameConf.scoreRank[i][1] > -1) {
                    let pn = a[0]
                    let player = this.gameConf.playerMap[pn]

                    let scoreFxItem = {
                        score: this.gameConf.scoreRank[i][1]
                        , name: player.name
                        , isSmall: true
                        , scoreFx: 0
                        , avatar: this.gameConf.avatarUrlBase + player.playerId + '.png'
                        // , avatar: '/img/player/89/' + player.playerId + '.png'
                        // , avatar: this.gameConf.avatarUrlBase +'circle/'+ player.playerId + '.png'
                    }
                    if (isInitScoreArr)
                        this.lastScoreArr[i] = scoreFxItem.score
                    scoreFx = scoreFxItem.score - this.lastScoreArr[i]
                    this.lastScoreArr[i] = scoreFxItem.score
                    if (pn == p1) {
                        scoreFxItem.scoreFx = scoreFx
                        scoreFxItem.isSmall = false
                        opReq(`${CommandId.cs_updateScore}`, { score: scoreFxItem.score, isLeft: true })
                    }
                    else if (pn == p2) {
                        scoreFxItem.scoreFx = scoreFx
                        scoreFxItem.isSmall = false
                        opReq(`${CommandId.cs_updateScore}`, { score: scoreFxItem.score, isLeft: false })

                    }
                    scoreArr.push(scoreFxItem)
                }
            }
            scoreArr = scoreArr.sort(descendingProp('score'))

            opReq(CommandId.cs_showScoreRank, {
                visible: visible,
                scoreArr: scoreArr
            })
        },

        onFile() {
            if (!confFile) {
                if (!filesInput) filesInput = document.getElementById("files");
                filesInput.addEventListener(
                    "change",
                    evt => {
                        confFile = evt.target.files[0]; // FileList object
                        document.getElementById("reloadFile").click();
                    },
                    false
                );
            }
            document.getElementById("files").click();
        },

        reloadFile(e, exData?) {
            let _ = (d) => {
                return d.getMinutes() + 'm' + d.getSeconds() + 's'
            }

            console.log("exData", exData);
            _exData = exData
            if (!reader) {
                reader = new FileReader();
                reader.addEventListener("load", (event) => {
                    let data = JSON.parse(event.target['result'])
                    data._ = null
                    if (_exData) {
                        for (let k in _exData) {
                            console.log('exData', k);
                            data[k] = _exData[k]
                        }
                        if (_exData.callback)
                            _exData.callback()
                    }
                    this.createOption(data, _ => {
                        console.log("EVENT_ON_FILE", data, _exData);
                        opReq('cs_data', data)
                    })
                });
            }
            reader.readAsText(confFile, "utf-8");
        },
    }
}

export var ScoreRankAdmin = new _ScoreRankAdmin();
