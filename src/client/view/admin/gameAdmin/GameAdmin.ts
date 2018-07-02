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

        reloadFile() {
            // this.$vm.finalData
            let _ = (d) => {
                return d.getMinutes() + 'm' + d.getSeconds() + 's'
            }
            if (!reader) {
                reader = new FileReader();
                reader.addEventListener("load", (event) => {
                    console.log("EVENT_ON_FILE", event.target['result']);
                    // this.emit("EVENT_ON_FILE", event.target['result']);
                    opReq('cs_data', {
                        "_":null,
                        "title": "222",
                        "playerArr": [{
                            "name": "好端端的2333"
                        },
                        {
                            "name": "好端端的3"
                        },
                        {
                            "name": "好端端的4"
                        }
                        ]
                    })
                    let f = confFile
                    var output = [];
                    output.push(
                        "<li><strong>",
                        f.name,
                        "</strong>",
                        "last modified: ",
                        f.lastModifiedDate
                            ? _(f.lastModifiedDate)
                            : "n/a",
                        "</li>"
                    );
                    let str =
                        "<ul>" + output.join("") + "</ul>";
                });
            }
            reader.readAsText(confFile, "utf-8");
        },
        // onFileLoaded(e) {
        //     // let reader = this.reader
        //     if (!this.confFile) {
        //         this.confFile = e.target.files[0]
        //         if (e.target.files.length) {
        //             reader.addEventListener("load", (event) => {
        //                 let conf = event.target['result']
        //                 if (conf) {
        //                     conf = JSON.parse(conf)
        //                     console.log(conf);
        //                 }
        //             })
        //             reader.readAsText(e.target.files[0], "utf-8");
        //         }
        //     }
        //     else {
        //         console.log('reload');
        //         reader.readAsText(this.confFile, "utf-8");
        //     }

        // }
    }
}

export var GameAdmin = new _GameAdmin();
