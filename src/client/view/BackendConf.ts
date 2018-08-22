export class BackendConf{
    confFile:any
    filesInput:any
    $fileElmId:string
    $reloadElmId:string
    _reader:any
    _onInit:any
    constructor($fileElmId,$reloadElmId,onInit)
    {
        this.$fileElmId = $fileElmId
        this.$reloadElmId = $reloadElmId
        this._onInit = onInit
    }
           onFile() {
            if (!this.confFile) {
                if (!this.filesInput)
                 this.filesInput = document.getElementById(  this.$fileElmId);
                //  this.filesInput = document.getElementById("files");
                this.filesInput.addEventListener(
                    "change",
                    evt => {
                        this.confFile = evt.target.files[0]; // FileList object
                        document.getElementById(this.$reloadElmId).click();
                        // document.getElementById("reloadFile").click();
                    },
                    false
                );
            }
            document.getElementById("files").click();
        }

        onReloadFile(e) {
                 if (!this._reader) {
                    this._reader = new FileReader();
                    this._reader.addEventListener("load", (event) => {
                        let data = JSON.parse(event.target['result'])
                        data._ = null
                        console.log("EVENT_ON_FILE", data);
                        this._onInit(data)
                    });
                }
                this._reader.readAsText(this.confFile, "utf-8");
        }
}