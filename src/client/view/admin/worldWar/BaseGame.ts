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
  //   lScore: number = VueBase.PROP;
  //   rScore: number = VueBase.PROP;
  //   lFoul: number = VueBase.PROP;
  //   rFoul: number = VueBase.PROP;
  //   lName: string = VueBase.PROP;
  //   rName: string = VueBase.PROP;
  updateTime = VueBase.PROP;
  constructor() {
    super();
    VueBase.initProps(this);
  }
  baseGame: any;
  //   constructor() {
  //     super();
  //   }
  created() {
    this.baseGame = baseGame;
    // this.lScore = this.rScore = 0;
  }
  initView(data) {
    baseGame.lName = data.leftPlayer.name;
    baseGame.rName = data.rightPlayer.name;
    console.log("init base game view", data, baseGame.lName);
    // this.baseGame.lFoul = data.lFoul;
    // this.baseGame.lScore = data.lScore;
    // this.baseGame.rScore = data.rScore;
    // this.baseGame.lFoul = data.lFoul;
    // this.baseGame.rFoul = data.rFoul;
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
      console.log("vudp");
      this.vueUpdate();
    }
  };
}
export let BaseGameView = new _baseGameView();
window["BaseGameView"] = BaseGameView;
