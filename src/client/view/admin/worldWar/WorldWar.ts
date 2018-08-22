import { VueBase } from "../../utils/VueBase";
import { BackendConf } from "../../BackendConf";

class _worldWar extends VueBase {
    template = require('./worldWar.html');
    conf:BackendConf
    created() {
        console.log('_worldWar');
        this.conf = new BackendConf('file','reload',data=>{
            this.onInit(data)
        })
        this.methods['onFile'] = this.conf.onFile
        this.methods['onReload'] = this.conf.onReloadFile
    }
    onInit(data){

    }
    methods = {
    //     onFile() {
    //         if (!confFile) {
    //             if (!filesInput) filesInput = document.getElementById("files");
    //             filesInput.addEventListener(
    //                 "change",
    //                 evt => {
    //                     confFile = evt.target.files[0]; // FileList object
    //                     document.getElementById("reloadFile").click();
    //                 },
    //                 false
    //             );
    //         }
    //         document.getElementById("files").click();
    //     },

    //     reloadFile(e) {
    //         if (!srvData) {
    //             if (!reader) {
    //                 reader = new FileReader();
    //                 reader.addEventListener("load", (event) => {
    //                     let data = JSON.parse(event.target['result'])
    //                     data._ = null
    //                     console.log("EVENT_ON_FILE", data);
    //                     this.onInit(data)
    //                 });
    //             }
    //             reader.readAsText(confFile, "utf-8");
    //         }
    //         else {
    //             this.onInit(srvData)
    //         }
    //     }
    }
}
