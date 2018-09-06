import { newBitmap } from "../../../../utils/PixiEx";
import { Text2, TextFac } from "../../../../utils/TextFac";
import { FontName, TimerState, TimerEvent } from "../../../../const";
import { TextTimer } from "../../../../utils/TextTimer";
import { BloodBar } from "./BloodBar";
const isTest = true;
const _c = v => {
  return 960 + v;
};
export class WorldWar extends PIXI.Container {
  lName: Text2;
  rName: Text2;

  lHW: Text2;
  rHW: Text2;

  lTitle: Text2;
  rTitle: Text2;

  lFoul: Text2;
  rFoul: Text2;
  timer: TextTimer;
  lFoulHint: PIXI.Sprite;
  rFoulHint: PIXI.Sprite;

  lBlood: BloodBar;
  rBlood: BloodBar;
  constructor() {
    super();
    let bg = newBitmap({ url: "/img/panel/worldWar/bg.png" });
    this.addChild(bg);

    let lBlood = new BloodBar(true);
    this.lBlood = lBlood;
    this.addChild(lBlood);

    let rBlood = new BloodBar(false);
    this.rBlood = rBlood;
    this.addChild(rBlood);

    let ns = {
      fontFamily: FontName.NotoSansHans,
      fontSize: "28px",
      fill: "#aaa"
    };

    this.lName = TextFac.new_(ns, this).setY(960);
    this.rName = TextFac.new_(ns, this).setPos(1215, this.lName.y);

    ns.fontSize = "25px";
    this.lHW = TextFac.new_(ns, this).setY(1004);

    this.rHW = TextFac.new_(ns, this).setPos(this.rName.x, this.lHW.y);
    //foul hint
    let lFoulHint = newBitmap({ url: "/img/panel/worldWar/foulHintL.png" });
    let rFoulHint = newBitmap({ url: "/img/panel/worldWar/foulHintL.png" });
    lFoulHint.visible = false;
    rFoulHint.visible = false;
    this.addChild(lFoulHint);
    this.addChild(rFoulHint);
    this.lFoulHint = lFoulHint;
    this.rFoulHint = rFoulHint;
    this.addChild(newBitmap({ url: "/img/panel/worldWar/fg.png" }));
    ns.fontSize = "24px";
    this.lFoul = TextFac.new_(ns, this).setY(1024);
    this.rFoul = TextFac.new_(ns, this).setY(this.lFoul.y);

    ns.fontSize = "38px";
    ns.fill = "#ddd";
    let t = new TextTimer("", ns);
    this.addChild(t);
    t.x = 914;
    t.y = 1015;
    t.textInSec = 0;
    this.timer = t;

    // ns.fontSize = "26px";
    // ns.fill = "#fff";
    // this.lTitle = TextFac.new_(ns, this).setY(925);
    // this.rTitle = TextFac.new_(ns, this).setPos(1123, this.lTitle.y);


    if (isTest) this.test();
  }
  test() {
    this.setLeftPlayer({
      name: "申屠土匪",
      title: "呼噗噗哈哈哈",
      hwa: [180, 72, 22]
    });
    this.setRightPlayer({
      name: "黄宇军",
      title: "呼噗噗哈哈哈",
      hwa: [180, 72, 22]
    });

    this.setLeftFoul(5);
    this.setRightFoul(0);
  }
  _setHWA(playerData) {
    if (playerData.hwa) {
      playerData.height = playerData.hwa[0];
      playerData.weight = playerData.hwa[1];
      playerData.age = playerData.hwa[2];
    }

    // this.lBlood.setBlood(4);
    this.rBlood.setBlood(2);
  }
  setRightPlayer(rPlayer) {
    // this.rTitle.setText(rPlayer.title).setAlignCenter(_c(330));

    this.rName
      .setText(rPlayer.name)
      .setLimitWidth(298, 40)
      .setAlignCenter(_c(300));

    this._setHWA(rPlayer);
    let age = "";
    // if (rPlayer.age) age = rPlayer.age + "岁";
    this.rHW
      .setText(rPlayer.height + "CM  " + rPlayer.weight + "KG  " + age)
      .setAlignCenter(_c(300));
    // this.rAvtUrl = rPlayer.avatar
    // loadAvt(this.rAvt, rPlayer.avatar, 1109)
    this.rBlood.setBlood(rPlayer.blood);
  }

  setLeftPlayer(lPlayer) {
    // this.lTitle.setText(lPlayer.title).setAlignCenter(_c(-330));

    this.lName
      .setText(lPlayer.name)
      .setLimitWidth(298, 40)
      .setAlignCenter(_c(-300));

    this._setHWA(lPlayer);
    let age = "";
    // if (lPlayer.age) age = lPlayer.age + "岁";
    this.lHW
      .setText(lPlayer.height + "CM  " + lPlayer.weight + "KG  " + age)
      .setAlignCenter(_c(-300));
    // this.lAvtUrl = lPlayer.avatar
    // loadAvt(this.lAvt, lPlayer.avatar, 725)
    this.lBlood.setBlood(lPlayer.blood);
  }
  setBloodByDtScore(data) {
    if (data.isLeft) {
      this.rBlood.setBloodByDtScore(data.score);
    } else {
      this.lBlood.setBloodByDtScore(data.score);
    }
  }
  
  setLeftFoul(val) {
    this.lFoulHint.visible = val > 3;
    this.lFoul.setText("犯规:" + (val || 0)).setAlignCenter(_c(-120));
  }
  setRightFoul(val) {
    this.rFoulHint.visible = val > 3;
    this.rFoul.setText("犯规:" + (val || 0)).setAlignCenter(_c(120));
  }

  setTimerEvent(data) {
    this.timer.setTimerEvent(data);
  }

  resetTimer() {
    this.timer.resetTimer();
  }

  setTimer(v) {
    this.timer.setTimeBySec(v);
  }

  toggleTimer(v) {
    this.timer.toggleTimer(v);
  }
}
