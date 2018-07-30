import { VueBase } from '../../utils/VueBase';
import { PanelId } from '../../const';
import { CommandId } from '../../Command';
let confFile = null;
let reader;
let filesInput;
declare let $
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
class _GameAdmin extends VueBase {
    template = require('./game.html');
    selected = VueBase.PROP;
    options = VueBase.PROP;
    gameConf = VueBase.PROP;
    vsPlayer = VueBase.PROP;
    vsPlayerArr = VueBase.PROP
    gameTitle = VueBase.PROP;
    redArr = VueBase.PROP;
    blueArr = VueBase.PROP;
    constructor() {
        super();
        VueBase.initProps(this);
    }

    created() {
        console.log('Game admin');

        this.blueArr = []
        this.redArr = []
        this.vsPlayerArr = []
    }

    createOption(data) {
        // let a = [];
        // let playerMap = data.playerMap
        for (var i = 0; i < 16; i++) {
            let player = data.playerMap["p" + (i + 1)]
            this.blueArr.push(player)
            this.redArr.push(player)
        }
        // this.options = a
        // this.blueArr = this.blueArr.concat(this.redArr)
        this.gameConf = data
        console.log('create gameConf ', this.gameConf);
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
        onChangePlayer(isBlue, playerId) {
            isBlue ? this.vsPlayerArr[0] = playerId : this.vsPlayerArr[1] = playerId;
            this.vsPlayer = this.vsPlayerArr.join(" ")
        },

        onInitGame() {
            console.log('init game')
            // cs_initGame
            let playerMap = this.gameConf.playerMap
            let recArr = this.gameConf.rec


            let a = this.vsPlayer.split(' ')
            let p1 = a[0]
            let p2 = a[1]
            p1 = playerMap[p1]
            p2 = playerMap[p2]
            p1.avatar = this.gameConf.avatarUrlBase + p1.playerId + '.png'
            p2.avatar = this.gameConf.avatarUrlBase + p2.playerId + '.png'
            let gameTitle = '';
            if (this.gameTitle)
                gameTitle = this.gameConf.gameTitle[this.gameTitle]
            opReq('cs_setPlayer', { leftPlayer: p1, rightPlayer: p2, gameTitle: gameTitle })
        },

        onShowScoreRank(visible) {
            opReq(CommandId.cs_showScoreRank, {
                visible: visible,
                scoreArr: [
                    // img\player\89
                    { score: 1, name: '好天气', isSmall: true, avatar: '/img/player/89/p1.png' },
                    { score: 2, name: '好天气', isSmall: true, avatar: '/img/player/89/p1.png' },
                    { score: 3, name: '好天气', isSmall: false, avatar: '/img/player/89/p1.png' },
                    { score: 4, name: '好天气', isSmall: true, avatar: '/img/player/89/p1.png' },
                    { score: 5, name: '好天气', isSmall: false, avatar: '/img/player/89/p1.png' }]
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
                    }
                    this.createOption(data)
                    console.log("EVENT_ON_FILE", data, _exData);
                    opReq('cs_data', data)
                    let f = confFile
                });
            }
            reader.readAsText(confFile, "utf-8");
        },
    }
}

export var GameAdmin = new _GameAdmin();
