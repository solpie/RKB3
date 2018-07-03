import { VueBase } from '../../utils/VueBase';
import { PanelId } from '../../const';
let confFile = null;
let reader;
let filesInput;
declare let io;
let rkbIO;
declare let $
let opReq = (cmdId: string, param: any) => {
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



    constructor() {
        super();
        VueBase.initProps(this);
    }

    created() {
        console.log('Game admin');
        rkbIO = io.connect('/rkb')
    }
    methods = {
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
