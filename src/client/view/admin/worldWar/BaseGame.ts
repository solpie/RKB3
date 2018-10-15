import { VueBase } from "../../utils/VueBase";
import { PanelId } from "../../const";
import { CommandId } from "../../Command";
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
export class BaseGame {
  lScore: number = 0;
  rScore: number = 0;
  lFoul: number = 0;
  rFoul: number = 0;
  lName: string = "";
  rName: string = "";
  lPlayerId: string = "";
  rPlayerId: string = "";
  constructor() { }
}
const baseGame = new BaseGame();
declare let $;
export class _baseGameView extends VueBase {
  template = require("./baseGame.html");
  timeInSec = VueBase.PROP;
  updateTime = VueBase.PROP;
  lTeamScore = VueBase.PROP
  rTeamScore = VueBase.PROP
  constructor() {
    super();
    VueBase.initProps(this);
  }
  baseGame: any;
  created() {
    this.baseGame = baseGame;
    this.timeInSec = 0;
    this.lTeamScore = this.rTeamScore = 0
  }
  initView(data) {
    baseGame.lName = data.leftPlayer.name;
    baseGame.rName = data.rightPlayer.name;
    baseGame.lPlayerId = data.leftPlayer.playerId
    baseGame.rPlayerId = data.rightPlayer.playerId
    baseGame.lScore = baseGame.rScore = baseGame.lFoul = baseGame.rFoul = 0;
    console.log("init base game view", data, baseGame.lName);
    this.vueUpdate();
    document.getElementById("vudp").click();
  }
  vueUpdate() {
    this.updateTime = new Date().getTime();
  }
  watch = {
    "baseGame.lName": function (val) {
      console.log("lname", val);
    }
  };
  methods = {
    onSetTimerEvent(event, param?) {
      opReq(CommandId.cs_timerEvent, { event: event, param: param });
    },
    onRestTeamScore() {
      this.lTeamScore = this.rTeamScore = 0
      opReq(CommandId.cs_teamScore, { lScore: this.lTeamScore, rScore: this.rTeamScore });
    },
    onSetTeamScore(isLeft, dtScore) {
      // isLeft ? (baseGame.lScore += dtScore) : (baseGame.rScore += dtScore);
      // if (isLeft)
      //   this.lTeamScore += dtScore;
      // else
      //   this.rTeamScore += dtScore;

      opReq(CommandId.cs_teamScore, { dtScore: dtScore, isLeft: isLeft });
    },
    onSetScore(isLeft, dtScore) {
      // isLeft ? (baseGame.lScore += dtScore) : (baseGame.rScore += dtScore);
      let score;
      if (isLeft) {
        baseGame.lScore += dtScore;
        score = baseGame.lScore;
      } else {
        baseGame.rScore += dtScore;
        score = baseGame.rScore;
      }
      opReq(CommandId.cs_setBlood, {
        isLeft: isLeft, score: score,
        lScore: baseGame.lScore, rScore: baseGame.rScore,
        lPlayer:baseGame.lPlayerId,rPlayer:baseGame.rPlayerId
      });
      this.vueUpdate();
    },
    onSetFoul(isLeft, dtFoul) {
      isLeft ? (baseGame.lFoul += dtFoul) : (baseGame.rFoul += dtFoul);
      opReq(CommandId.cs_setFoul, {
        lFoul: baseGame.lFoul,
        rFoul: baseGame.rFoul
      });
      this.vueUpdate();
    },
    onResetFoul() {
      this.onSetFoul(true, -baseGame.lFoul)
      this.onSetFoul(false, -baseGame.rFoul)
    },
    onVueUpdate() {
      this.vueUpdate();
    }
  };
}
export let BaseGameView = new _baseGameView();
window["BaseGameView"] = BaseGameView;
