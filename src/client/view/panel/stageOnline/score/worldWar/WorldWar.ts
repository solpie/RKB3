import { newBitmap } from "../../../../utils/PixiEx";
import { Text2, TextFac } from "../../../../utils/TextFac";
import { FontName } from "../../../../const";
import { TextTimer } from "../../../../utils/TextTimer";
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

  constructor() {
    super();
    let bg = newBitmap({ url: "/img/panel/worldWar/bg.png" });
    this.addChild(bg);

    let ns = {
      fontFamily: FontName.NotoSansHans,
      fontSize: "28px",
      fill: "#aaa"
    };
    this.lName = TextFac.new_(ns, this).setY(958);
    this.rName = TextFac.new_(ns, this).setPos(1215, this.lName.y);

    ns.fontSize = "25px";
    ns.fill = "#6b6b6b";
    this.lHW = TextFac.new_(ns, this).setY(1004);

    this.rHW = TextFac.new_(ns, this).setPos(this.rName.x, this.lHW.y);

    ns.fontSize = "24px";
    this.lFoul = TextFac.new_(ns, this).setY(1036);
    this.rFoul = TextFac.new_(ns, this).setY(this.lFoul.y);


    let t = new TextTimer('', ns)
    this.addChild(t)
    t.x = 918
    t.y =1036
    t.textInSec = 0
    this.timer = t

    ns.fontSize = "25px";
    ns.fill = "#fff";
    this.lTitle = TextFac.new_(ns, this).setY(914 + 8);

    this.rTitle = TextFac.new_(ns, this).setPos(1123, this.lTitle.y);

    if (isTest) this.test();
  }
  test() {
    this.setLeftPlayer({
      name: "好哦天气",
      title: "呼噗噗哈哈哈",
      hwa: [180, 72, 22]
    });
    this.setRightPlayer({
      name: "好哦天气",
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
  }
  setRightPlayer(rPlayer) {
    this.rTitle.setText(rPlayer.title).setAlignCenter(_c(330));

    this.rName
      .setText(rPlayer.name)
      .setLimitWidth(298, 40)
      .setAlignCenter(_c(300));

    this._setHWA(rPlayer);
    let age = "";
    if (rPlayer.age) age = rPlayer.age + "岁";
    this.rHW
      .setText(rPlayer.height + "CM  " + rPlayer.weight + "KG  " + age)
      .setAlignCenter(_c(330));
    // this.rAvtUrl = rPlayer.avatar
    // loadAvt(this.rAvt, rPlayer.avatar, 1109)
  }

  setLeftPlayer(lPlayer) {
    this.lTitle.setText(lPlayer.title).setAlignCenter(_c(-330));

    this.lName
      .setText(lPlayer.name)
      .setLimitWidth(298, 40)
      .setAlignCenter(_c(-300));

    this._setHWA(lPlayer);
    let age = "";
    if (lPlayer.age) age = lPlayer.age + "岁";
    this.lHW
      .setText(lPlayer.height + "CM  " + lPlayer.weight + "KG  " + age)
      .setAlignCenter(_c(-300));
    // this.lAvtUrl = lPlayer.avatar
    // loadAvt(this.lAvt, lPlayer.avatar, 725)
  }

  setLeftFoul(val) {
    this.lFoul.setText("犯规:" + (val || 0)).setAlignCenter(_c(-150));
  }
  setRightFoul(val) {
    this.rFoul.setText("犯规:" + (val || 0)).setAlignCenter(_c(150));
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
