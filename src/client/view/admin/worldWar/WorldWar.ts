import { VueBase } from "../../utils/VueBase";
import { BackendConf } from "../../BackendConf";
import { $post } from "../../utils/WebJsFunc";
import { updateWorldWarDoc } from "../../utils/HupuAPI";
import { WWGame, syncDoc } from "./WWGame";
import { clone } from "../../utils/JsFunc";
import { PanelId } from "../../const";
declare let $;
let opReq = (cmdId: string, param: any) => {
  param._ = null;
  $.ajax({
    url: `/panel/${PanelId.onlinePanel}/${cmdId}`,
    type: "post",
    data: JSON.stringify(param),
    headers: { "Content-Type": "application/json" },
    dataType: "json"
  });
};
const gameView = new WWGame();
class _worldWar extends VueBase {
  template = require("./worldWar.html");
  conf: BackendConf;
  vsPlayer = VueBase.PROP;
  vsPlayerArr = VueBase.PROP;
  redArr = VueBase.PROP;
  blueArr = VueBase.PROP;
  recArr = VueBase.PROP;
  gameView: any;
  gameIdx: number;
  updateTime = VueBase.PROP;
  constructor() {
    super();
    VueBase.initProps(this);
  }
  created() {
    console.log("_worldWar");
    this.vsPlayerArr = ["", ""];

    this.conf = new BackendConf("file", "reload", data => {
      this.onInit(data);
    });
    gameView.on(WWGame.InitDocView, doc => {
      console.log("init doc view", doc);
      this.initDocView(doc);
    });
    this.gameView = gameView;
  }

  initDocView(doc) {
    this.recArr = []; //clone(doc.rec);
    for (let k in doc.rec) {
      let rec = clone(doc.rec[k]);
      rec["name"] = [];
      for (let i = 0; i < rec.player.length; i++) {
        const p = rec.player[i];
        rec.name.push(this.getPlayerDoc(p).name);
      }
      this.recArr.push(rec);
      gameView.gameIdx = doc.gameIdx;
    }
  }
  getPlayerDoc(playerId) {
    if (this.gameView.playerMap) {
      let p = this.gameView.playerMap[playerId];
      if (!p) console.log("error playerId", playerId);
      return this.gameView.playerMap[playerId];
    }
    return null;
  }
  onInit(data) {
    console.log("on load conf", data);
    gameView.loadConf(data);
    this.blueArr = gameView.getTeamByIdx(1);
    this.redArr = gameView.getTeamByIdx(2);
    syncDoc(data2 => {
      this.initDocView(data2.doc);
    });
  }
  vueUpdate() {
    this.updateTime = new Date().getTime();
  }
  emitGameInfo() {
    console.log("init game");
    // cs_initGame
    let playerMap = gameView.playerMap;
    // let recArr = this.gameConf.rec

    let a = this.vsPlayer.split(" ");
    let p1 = a[0];
    let p2 = a[1];
    p1 = playerMap[p1];
    p2 = playerMap[p2];
    p1.avatar = this.gameView.data.avatarUrlBase + p1.playerId + ".png";
    p2.avatar = this.gameView.data.avatarUrlBase + p2.playerId + ".png";
    // this.lPlayer = p1
    // this.rPlayer = p2
    let gameTitle = "";
    // if (this.gameTitle)
    //     gameTitle = this.gameConf.gameTitle[this.gameTitle]
    opReq("cs_setPlayer", {
      leftPlayer: p1,
      rightPlayer: p2,
      gameTitle: gameTitle
    });
    ///89 russ
    // this.onShowScoreRank(true)
  }
  methods = {
    onSetScore(gameIdx) {
      let scoreStr = $("#scoreInput" + gameIdx).val();
      console.log(scoreStr);
      let a = scoreStr.split(" ");
      if (a.length == 2) {
        gameView.setScore(gameIdx, [Number(a[0]), Number(a[1])]);
      }
    },
    pickPlayer(isLeft, playerId) {
      isLeft
        ? (this.vsPlayerArr[0] = playerId)
        : (this.vsPlayerArr[1] = playerId);
      this.vsPlayer = this.vsPlayerArr[0] + " " + this.vsPlayerArr[1];
    },
    onFile(e) {
      console.log("load file");
      this.conf.onFile(e);
    },
    onEmitGameInfo() {
      this.emitGameInfo();
    },
    onAddGame(e) {
      gameView.addGame(this.vsPlayerArr);
    },
    onCommitGame(e) {},
    onReload(e) {
      this.conf.onReloadFile(e); //
    },
    onDeleteDoc() {
      gameView.clearGameRec();
    },
    setGameIdx(gameIdx) {
      gameView.gameIdx = gameIdx;
      this.vueUpdate();
    },
    onReloadXlsx(e) {
      console.log("load xlsx");
      this.conf.onReloadXlsx(e);
    }
  };
}
export let WorldWar = new _worldWar();
