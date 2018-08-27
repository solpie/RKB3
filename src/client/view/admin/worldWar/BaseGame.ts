import { VueBase } from "../../utils/VueBase";

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
  updateTime = VueBase.PROP;
  constructor() {
    super();
    VueBase.initProps(this);
  }
  baseGame: any;
  created() {
    this.baseGame = baseGame;
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
    onSetScore(isLeft, dtScore) {
      isLeft ? (baseGame.lScore += dtScore) : (baseGame.rScore += dtScore);
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
