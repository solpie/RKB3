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
    constructor() {
        super();
        VueBase.initProps(this);
    }

    created() {
        console.log('Game admin');
    }
    createOption(data) {
        this.route(data.rec, data.playerMap)
        let a = [];
        let playerMap = data.playerMap
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
        console.log('create option ', a, this.options);
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
        onShowTag(tagName, v, isLeft) {
            opReq(CommandId.cs_showTagFx, { visible: v, tag: tagName, isLeft: isLeft })
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

        onInitGame() {
            // cs_initGame
            let playerMap = this.gameConf.playerMap
            let recArr = this.gameConf.rec

            for (let i = 0; i < recArr.length; i++) {
                let rec = recArr[i];
                if (rec.idx == this.selected) {
                    let p1 = rec.player[0]
                    let p2 = rec.player[1]
                    let a = this.vsPlayer.split(' ')
                    p1 = a[0]
                    p2 = a[1]
                    p1 = playerMap[p1]
                    p2 = playerMap[p2]
                    p1.avatar = this.gameConf.avatarUrlBase + p1.playerId + '.png'
                    p2.avatar = this.gameConf.avatarUrlBase + p2.playerId + '.png'
                    opReq('cs_setPlayer', { leftPlayer: p1, rightPlayer: p2, gameTitle: rec.title })
                    return
                }
            }
        },

        onShowPage(page, pageItemCount) {
            console.log('show page from', page);
            this.reloadFile(null, { page: page, pageItemCount: pageItemCount })
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
