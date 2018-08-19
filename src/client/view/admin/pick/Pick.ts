import { PanelId } from '../../const';
import { VueBase } from '../../utils/VueBase';
import { CommandId } from '../../Command';
import { getPlayerInfoFromLiangle } from '../../utils/HupuAPI';
import { loadImg } from '../../utils/JsFunc';
import { proxy } from '../../utils/WebJsFunc';
let confFile = null;
let reader;
let filesInput;
let srvData = null
declare let $


function loadRes(url: string, callback, isCrossOrigin?: boolean) {
    let req = new XMLHttpRequest();
    req.open('GET', proxy(url), true);
    req.onload = function (res) {
        loadImg(req.responseText, callback);
    };
    req.send();
}

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

class _Pick extends VueBase {
    template = require('./pick.html');
    pickState = VueBase.PROP;
    playerId = VueBase.PROP;
    playerTitle = VueBase.PROP;
    created() {
        console.log('pick admin');
        this.pickState = { '1': false, '2': false, '3': false, '4': false }
        this.playerId = ""
        this.playerTitle = ""
    }
    methods = {
        onLoadConf() {
            $.get('/db/pick.json?'+new Date, data => {
                console.log('load conf..', data)
                srvData = JSON.parse(data)
                if (Number(this.playerId)) {
                    this.onInit(srvData)
                }
            })
        },
        onCall(zhubo) {
            opReq(CommandId.cs_callState, { callState: zhubo })
        },

        onJoin(zhubo) {
            let j = { '1': false, '2': false, '3': false, '4': false }
            if (zhubo > 0) {
                j[zhubo] = true
            }
            else {
                j = { '1': true, '2': true, '3': true, '4': true }
            }
            opReq(CommandId.cs_joinState, { joinState: j })
        },

        onPick(zhubo) {
            if (zhubo > 0) {
                this.pickState[zhubo] = !this.pickState[zhubo]
            }
            else {
                this.pickState = { '1': false, '2': false, '3': false, '4': false }
            }
            opReq(CommandId.cs_pickState, { pickState: this.pickState })
        },
        onInit(data) {
            let pid = data.player_id
            if (Number(this.playerId) > 0)
                pid = this.playerId
            
            getPlayerInfoFromLiangle(pid, res1 => {
                // console.log(res1);
                if (res1.data && res1.data.name) {
                    let player = res1.data
                    console.log(player);
                    loadRes(player.avatar, imgData => {
                        console.log('load img', imgData)
                        data.avatar = imgData.src
                        data.player = player.name
                        data.title = this.playerTitle
                        opReq('cs_data', data)
                    })
                }

            })
        },
        //
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

        reloadFile(e) {
            if (!srvData) {
                if (!reader) {
                    reader = new FileReader();
                    reader.addEventListener("load", (event) => {
                        let data = JSON.parse(event.target['result'])
                        data._ = null
                        console.log("EVENT_ON_FILE", data);
                        this.onInit(data)
                    });
                }
                reader.readAsText(confFile, "utf-8");
            }
            else {
                this.onInit(srvData)
            }
        }
    }

}

export let Pick = new _Pick()