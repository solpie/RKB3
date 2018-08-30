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
  constructor() {}
}
const baseGame = new BaseGame();
declare let $;
export class _baseGameView extends VueBase {
  template = require("./baseGame.html");
  timeInSec = VueBase.PROP;
  updateTime = VueBase.PROP;
  constructor() {
    super();
    VueBase.initProps(this);
  }
  baseGame: any;
  created() {
    this.baseGame = baseGame;
    this.timeInSec = 0;
  }
  initView(data) {
    baseGame.lName = data.leftPlayer.name;
    baseGame.rName = data.rightPlayer.name;
    baseGame.lScore = baseGame.rScore = baseGame.lFoul = baseGame.rFoul = 0;
    console.log("init base game view", data, baseGame.lName);
    this.vueUpdate();
    document.getElementById("vudp").click();
  }
  vueUpdate() {
    this.updateTime = new Date().getTime();
  }
  watch = {
    "baseGame.lName": function(val) {
      console.log("lname", val);
    }
  };
  methods = {
    onSetTimerEvent(event, param?) {
      opReq(CommandId.cs_timerEvent, { event: event, param: param });
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
      opReq(CommandId.cs_setBlood, { isLeft: isLeft, score: score });
      this.vueUpdate();
    },
    onSetFoul(isLeft, dtFoul) {
      isLeft ? (baseGame.lFoul += dtFoul) : (baseGame.rFoul += dtFoul);
      this.vueUpdate();
    },
    onVueUpdate() {
      this.vueUpdate();
    }
  };
}
export let BaseGameView = new _baseGameView();
window["BaseGameView"] = BaseGameView;
