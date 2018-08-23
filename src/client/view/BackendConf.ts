declare let XLSX;
export class BackendConf {
  confFile: any;
  filesInput: any;
  $fileElmId: string;
  $reloadElmId: string;
  _reader: any;
  _onInit: any;

  constructor($fileElmId, $reloadElmId, onInit) {
    this.$fileElmId = $fileElmId;
    this.$reloadElmId = $reloadElmId;
    this._onInit = onInit;
  }
  
  onFile() {
    if (!this.confFile) {
      if (!this.filesInput)
        this.filesInput = document.getElementById(this.$fileElmId);
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
    document.getElementById(this.$fileElmId).click();
  }

  onReloadFile(e) {
    if (!this._reader) {
      this._reader = new FileReader();
      this._reader.addEventListener("load", event => {
        let data = JSON.parse(event.target["result"]);
        data._ = null;
        console.log("EVENT_ON_FILE", data);
        this._onInit(data);
      });
    }
    this._reader.readAsText(this.confFile, "utf-8");
  }
  process_wb(wb) {
    var ws = wb.Sheets[wb.SheetNames[0]];
    var html_string = XLSX.utils.sheet_to_html(ws, {
      id: "data-table",
      editable: true
    });
    document.getElementById("table").innerHTML = html_string;
  }
  onReloadXlsx(e) {
    let f = this.confFile;
    var reader = new FileReader();
    var rABS = !!reader.readAsBinaryString;
    reader.onload = e => {
      var data = e.target["result"];
      if (!rABS) data = new Uint8Array(data);
      var wb = XLSX.read(data, {
        type: rABS ? "binary" : "array"
      });
      this.process_wb(wb);
    };
    if (rABS) reader.readAsBinaryString(f);
    else reader.readAsArrayBuffer(f);
  }
}
