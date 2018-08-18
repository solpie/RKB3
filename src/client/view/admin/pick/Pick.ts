import { PanelId } from '../../const';
import { VueBase } from '../../utils/VueBase';
import { CommandId } from '../../Command';
import { getPlayerInfoFromLiangle } from '../../utils/HupuAPI';
import { loadImg } from '../../utils/JsFunc';
import { proxy } from '../../utils/WebJsFunc';
let confFile = null;
let reader;
let filesInput;

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
    created() {
        console.log('pick admin');
        this.pickState = { '1': false, '2': false, '3': false, '4': false }
    }
    methods = {
        onCall(zhubo) {
            opReq(CommandId.cs_callState, { callState: zhubo })
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
            getPlayerInfoFromLiangle(data.player_id, res1 => {
                // console.log(res1);
                if (res1.data && res1.data.name) {
                    let player = res1.data
                    console.log(player);
                    loadRes(player.avatar, imgData => {
                        console.log('load img', imgData)
                        data.avatar = imgData.src
                        data.player = player.name
                        opReq('cs_data', data)
                    })
                }

                // createPlayer({
                //     'player_id': Number(player.player_id),
                //     'name': player.name,
                //     'live_name': player.name,
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
            let _ = (d) => {
                return d.getMinutes() + 'm' + d.getSeconds() + 's'
            }

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
    }

}

export let Pick = new _Pick()