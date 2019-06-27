import { BackendConf } from "../../BackendConf";
import { CommandId } from '../../Command';
import { PanelId } from "../../const";
import { clone } from "../../utils/JsFunc";
import { VueBase } from "../../utils/VueBase";
import { BaseGameView, _baseGameView } from "./BaseGame";
import { syncDoc, WWGame } from "./WWGame";
import { syncWorldWarPanel3, getEventConf, getPanelConf2 } from '../../utils/HupuAPI';
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
  redArr_2 = VueBase.PROP;
  blueArr = VueBase.PROP;
  recArr = VueBase.PROP;
  blueArr_2 = VueBase.PROP;
  gameView: any;
  gameIdx: number;
  teamVsIdx = VueBase.PROP;
  teamScore = VueBase.PROP;
  playerDots = VueBase.PROP;
  isShowCurTeamVsOnly = VueBase.PROP;
  updateTime = VueBase.PROP;
  delay = VueBase.PROP;
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
  //after reload file
  onInit(data) {
    console.log("on load conf", data);
    gameView.loadConf(data);
    let t1Idx = 1, t2Idx = 2
    if (data.vs) {
      t1Idx = data.vs[0]
      t2Idx = data.vs[1]
    }

    this.blueArr = gameView.getTeamByIdx(t1Idx);
    this.redArr = gameView.getTeamByIdx(t2Idx);

    this.blueArr_2 = gameView.getTeamByIdx(t1Idx, true);
    this.redArr_2 = gameView.getTeamByIdx(t2Idx, true);

    opReq(CommandId.cs_bracketS5, data)
    syncDoc(data2 => {
      this.initDocView(data2.doc);
    });
  }
  vueUpdate() {
    this.updateTime = new Date().getTime();
  }
  setTimeOut(data) {
    gameView.setTimeOut(data)
    opReq(CommandId.cs_timeOut, data)
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
    // p1.avatar = this.gameView.data.avatarUrlBase + p1.playerId + ".png";
    // p2.avatar = this.gameView.data.avatarUrlBase + p2.playerId + ".png";
    let gameTitle = "";
    // if (this.gameTitle)
    //     gameTitle = this.gameConf.gameTitle[this.gameTitle]

    let data = {
      leftPlayer: p1,
      rightPlayer: p2,
      leftTeam: this.blueArr,
      rightTeam: this.redArr,
      gameTitle: gameTitle
    };
    opReq("cs_setPlayer", data);
    ///89 russ
    baseGameView.initView(data);
    // this.onShowScoreRank(true)
  }
  emitTeamScore(data) {
    opReq(CommandId.cs_teamScore, data)
  }
  emitKDA(v) {
    let lScoreArr = [], rScoreArr = []
    let _ = (arr, scoreArr) => {
      for (let player of arr) {
        let p = clone(player)
        // p.avatar = this.gameView.data.avatarUrlBase + p.playerId + ".png";
        p.isSmall = true
        p.score = p.blood
        scoreArr.push(p)
      }
    }
    _(this.blueArr, lScoreArr)
    _(this.redArr, rScoreArr)
    opReq(CommandId.cs_showPanel, {
      lScoreArr: lScoreArr,
      rScoreArr: rScoreArr,
      panel: PanelId.worldwarKDA, visible: v
    })
  }
  updateBlood(teamVsIdx) {
    console.log("on updateBlood teamVsIdx", teamVsIdx);
    gameView.getBloodMap(teamVsIdx, bloodMap => {
      let bloodArr = $(".blood");
      for (const $elm of bloodArr) {
        let playerId = $elm.id.split("blood")[1];
        if (bloodMap[playerId]) {
          let blood = bloodMap[playerId].blood;
          $elm.value = blood;
        }
        // console.log("player", playerId, "blood", blood);
      }
      this.vueUpdate();
    });
  }
  watch = {
    teamVsIdx(val) {
      this.updateBlood(val);
    }
  };
  methods = {
    onSetDelay(sec) {
      this.delay = sec
    },
    onShowTitle(v) {
      let playerMap = gameView.playerMap;
      let a = this.vsPlayer.split(" ");
      let p1 = a[0];
      let p2 = a[1];
      p1 = playerMap[p1];
      p2 = playerMap[p2];
      opReq(CommandId.cs_showPanel, { lTitle: p1.title, rTitle: p2.title, panel: PanelId.worldwarTitle, visible: v })
    },
    onShowPanel(v) {
      opReq(CommandId.cs_showPanel, { panel: PanelId.worldwarPanel, visible: v })
    },
    isShowRec(isTeamVsIdxRec) {
      if (this.isShowCurTeamVsOnly) return isTeamVsIdxRec;
      return true;
    },
    onSetTeamScore(v) {
      let a = v.split(' ')
      if (a.length == 2) {
        this.emitTeamScore({
          lScore: a[0], rScore: a[1]
        })
      }
    },
    onSetPlayerDots(v, isOn) {
      let a = v.split(' ')
      if (a.length == 2) {
        opReq(CommandId.cs_setPlayerDot, { playerDot_L: a[0], playerDot_R: a[1], isOn: isOn })

      }
    },
    onSetTimeOut(v) {
      let a = v.split(' ')
      if (a.length == 2) {
        this.setTimeOut({
          lTimeOut: a[0], rTimeOut: a[1]
        })
      }
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
    onGet8090EventJson(idx) {
      getPanelConf2(idx, res => {
        console.log(res)
        this.onInit(res)
      })
    },
    onShowKDA(v) {
      // this.emitKDA(v)
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
    onManualBlood(dtBlood, player) {
      if (dtBlood != 0) {
        player.blood = Number(player.blood) + dtBlood
        console.log('onManualBlood', player)
      }
      opReq(CommandId.cs_manual_blood,
        {
          lTeam: this.blueArr_2
          , rTeam: this.redArr_2
          , vsPlayerArr: this.vsPlayerArr
        });
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
    onUploadPlayerMap() {
      // console.log('upload playerMap',this.gameView.playerMap)
      syncWorldWarPanel3(doc => {
        doc.playerMap = JSON.stringify(this.gameView.playerMap_data)
      }, true)
      console.log('upload playerMap', this.gameView.playerMap_data)
    },
    onEmitGameInfo() {
      this.emitGameInfo();
    },
    onAddGame(e) {
      gameView.addGame(this.vsPlayerArr, this.teamVsIdx);
    },
    onCommitGame(gameIdx) {
      $('.btn-setScore')[0].click()
    },
    onReload(e) {
      this.conf.onReloadFile(e); //
    },
    onDeleteDoc() {
      gameView.clearGameRec(null, gameView.playerMap);
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
