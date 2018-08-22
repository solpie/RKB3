import { VueBase } from "../../utils/VueBase";
import { BackendConf } from "../../BackendConf";
import { $post } from "../../utils/WebJsFunc";
import { updateWorldWarDoc } from "../../utils/HupuAPI";
declare let $;

const getDoc = (callback) => {
  $.get('http://rtmp.icassi.us:8090/event?idx=916', (res) => {
      if (res.length)
          callback(res[0])
      else
          callback(null)
  })
}
const saveDoc = (doc, cb?) => {
  $post('/db/update/519', doc, () => {
      if (cb)
          cb()
  })
}
class _worldWar extends VueBase {
  template = require("./worldWar.html");
  conf: BackendConf;
  vsPlayer = VueBase.PROP;
  vsPlayerArr = VueBase.PROP;
  redArr = VueBase.PROP;
  blueArr = VueBase.PROP;
  constructor() {
    super();
    VueBase.initProps(this);
    this.vsPlayerArr = []
   
}
  created() {
    console.log("_worldWar");
    this.conf = new BackendConf("file", "reload", data => {
      this.onInit(data);
    });
    this.blueArr = [
      {name:'1111'},
      {name:'22'},
      {name:'11311'},
      {name:'11141'},
      {name:'11151'},
    ]
    this.redArr =[
      {name:'1111'},
      {name:'22'},
      {name:'11311'},
      {name:'11141'},
      {name:'11151'},
    ]
    getDoc(data=>{
      console.log('get doc',data)
      // let doc = data.doc
      data.doc = {'name':2}
      updateWorldWarDoc(data,res=>{
        console.log(res)
      })
    })

  }
  onInit(data) {
      console.log("on load conf",data)
  }
  methods = {
  onFile(e){
    console.log('load file')
   this.conf.onFile(e)
  },
  onReload(e){
    
  },
  onReloadXlsx(e){
    console.log('load xlsx')
    this.conf.onReloadXlsx(e)
  }
  };
}
export let WorldWar = new _worldWar()