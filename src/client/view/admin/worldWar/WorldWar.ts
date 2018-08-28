import { VueBase } from "../../utils/VueBase";
import { BackendConf } from "../../BackendConf";
import { $post } from "../../utils/WebJsFunc";
import { updateWorldWarDoc } from "../../utils/HupuAPI";
import { WWGame, syncDoc } from "./WWGame";
import { clone } from "../../utils/JsFunc";
import { PanelId } from "../../const";
import { CommandId } from "../../Command";
import { BaseGame, BaseGameView, _baseGameView } from "./BaseGame";
declare let $;
declare let io;
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
let baseGameView: _baseGameView;
class _worldWar extends VueBase {
  template = require("./worldWar.html");
  components = { BaseGame: BaseGameView };

  conf: BackendConf;
  vsPlayer = VueBase.PROP;
  vsPlayerArr = VueBase.PROP;
  redArr = VueBase.PROP;
  blueArr = VueBase.PROP;
  recArr = VueBase.PROP;
  gameView: any;
  gameIdx: number;
  teamVsIdx = VueBase.PROP;
  isShowCurTeamVsOnly = VueBase.PROP;
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
    baseGameView = window["BaseGameView"];
    // console.log('baseGameView',window['BaseGameView'])
  }

  initDocView(doc) {
    console.log("init doc view ", doc);
    this.recArr = [];
    for (let k in doc.rec) {
      let rec = clone(doc.rec[k]);
      rec["name"] = [];
      for (let i = 0; i < rec.player.length; i++) {
        const p = rec.player[i];
        rec.name.push(this.getPlayerDoc(p).name);
      }
      this.recArr.push(rec);
    }
    gameView.gameIdx = doc.gameIdx;
    this.teamVsIdx = doc.teamVsIdx;
    //init blood
    this.updateBlood(this.teamVsIdx);
    // this.vueUpdate()
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

    let data = {
      leftPlayer: p1,
      rightPlayer: p2,
      gameTitle: gameTitle
    };
    opReq("cs_setPlayer", data);
    ///89 russ
    baseGameView.initView(data);
    // this.onShowScoreRank(true)
  }
  updateBlood(teamVsIdx) {
    console.log("on updateBlood teamVsIdx", teamVsIdx);
    gameView.getBloodMap(teamVsIdx, bloodMap => {
      let bloodArr = $(".blood");
      for (const $elm of bloodArr) {
        let playerId = $elm.id.split("blood")[1];
        let blood = bloodMap[playerId].blood;
        $elm.value = blood;
        // console.log("player", playerId, "blood", blood);
      }
      this.vueUpdate();
    });
  }
  // initLocalWs() {
  //   let localWs = io.connect(`/${PanelId.rkbPanel}`);
  //   localWs
  //     .on("connect", msg => {
  //       console.log("connect", window.location.host);
  //       // localWs.emit("opUrl", { opUrl: window.location.host })
  //     })
  //     .on(`${CommandId.sc_updateScore}`, data => {
  //       if (data.dtScore != null) {
  //         // this.scorePanelV3.setDtScore(data)
  //         console.log()
  //       } else {
  //         if (data.isLeft) {
  //           data.leftScore = data.score;
  //           // this.scorePanelV3.setLeftScore(data.score)
  //         } else {
  //           data.rightScore = data.score;
  //           // this.scorePanelV3.setRightScore(data.score)
  //         }
  //       }
  //     });
  //   // sc_updateScore
  // }
  watch = {
    teamVsIdx(val) {
      this.updateBlood(val);
    }
  };
  methods = {
    isShowRec(isTeamVsIdxRec) {
      if (this.isShowCurTeamVsOnly) return isTeamVsIdxRec;
      return true;
    },
    onSetBlood(teamVsIdx) {
      let bloodArr = $(".blood");
      let playerMapBlood = {};
      for (const $elm of bloodArr) {
        let playerId = $elm.id.split("blood")[1];
        let blood = $elm.value;
        playerMapBlood[playerId] = Number(blood);
        console.log("player", playerId, "blood", blood);
      }
      gameView.setTeamBlood(teamVsIdx, playerMapBlood);
    },
    onDeleteGameRec(gameIdx) {
      gameView.deleteGameRec(gameIdx);
    },
    onSetScore(gameIdx) {
      let scoreStr = $("#scoreInput" + gameIdx).val();
      console.log(scoreStr);
      let a = scoreStr.split(" ");
      if (a.length == 2) {
        gameView.setScore(gameIdx, [Number(a[0]), Number(a[1])]);
      } else if (scoreStr == "") {
        let lScore = Number($("#lScore").html());
        let rScore = Number($("#rScore").html());
        let lFoul = Number($("#lFoul").html());
        let rFoul = Number($("#rFoul").html());
        console.log("commit game", lScore, rScore, "foul", lFoul, rFoul);
        gameView.setScore(gameIdx, [lScore, rScore]);
      }
    },
    onSetTeamVsIdx(gameIdx) {
      let scoreStr = $("#scoreInput" + gameIdx).val();
      console.log(scoreStr);
      if (Number(scoreStr) > 0) {
        gameView.setTeamVsIdx(gameIdx, Number(scoreStr));
      }
    },
    onSetVS(gameIdx, vsStr) {
      let a = vsStr.split(" ");
      if (a.length == 2) {
        gameView.setVs(gameIdx, [a[0], a[1]]);
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
      gameView.addGame(this.vsPlayerArr, this.teamVsIdx);
    },
    onCommitGame(gameIdx) {
      // let lScore = Number($("#lScore").html());
      // let rScore = Number($("#rScore").html());
      // let lFoul = Number($("#lFoul").html());
      // let rFoul = Number($("#rFoul").html());
      // console.log("commit game", lScore, rScore, "foul", lFoul, rFoul);
      // gameView.setScore(gameIdx, [lScore, rScore]);
    },
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
