import { newBitmap, BitmapText, loadRes, imgToTex, setScale } from "../../../../utils/PixiEx";
import { Text2, TextFac } from "../../../../utils/TextFac";
import { FontName, TimerState, TimerEvent } from "../../../../const";
import { TextTimer } from "../../../../utils/TextTimer";
import { BloodBar } from "./BloodBar";
import { MaskAvatar } from "../../../base/MaskAvatar";
const isTest = true;
const _c = v => {
  return 960 + v;
};
export class WorldWar extends PIXI.Container {
  lName: Text2;
  rName: Text2;

  lHW: Text2;
  rHW: Text2;

  gameTitle: Text2;
  lTitle: Text2;
  rTitle: Text2;

  lFoul: Text2;
  rFoul: Text2;
  timer: TextTimer;
  lFoulHint: PIXI.Sprite;
  rFoulHint: PIXI.Sprite;

  lBlood: BloodBar;
  rBlood: BloodBar;
  lTeamScore: BitmapText
  rTeamScore: BitmapText
  lAvt: MaskAvatar
  rAvt: MaskAvatar
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



    loadRes('/img/panel/score2018/score.png', (img) => {
      // loadRes(skin.score, (img) => {
      let tex = imgToTex(img)
      let sheet = {
        text: '0',
        animations: {
          "7": 0, "8": 1, "9": 2, "0": 3, "1": 4,
          "2": 5, "3": 6, "4": 7, "5": 8, "6": 9
        },
        texture: tex,
        frames: [
          [0, 0, 54, 80],
          [55, 0, 54, 80],
          [0, 81, 54, 80],
          [55, 81, 54, 80],
          [110, 0, 54, 80],
          [110, 81, 54, 80],
          [165, 0, 54, 80],
          [165, 81, 54, 80],
          [0, 162, 54, 80],
          [55, 162, 54, 80]]
      }

      let lScoreNum = new BitmapText(sheet)
      // leftScoreNum.frameWidth = 56
      this.lTeamScore = lScoreNum
      lScoreNum.x = 890
      lScoreNum.y = 932
      lScoreNum.align = 'center'
      this.addChild(lScoreNum as any)

      let rScoreNum = new BitmapText(sheet)
      this.rTeamScore = rScoreNum
      rScoreNum.x = lScoreNum.x + 100
      rScoreNum.y = lScoreNum.y
      rScoreNum.align = 'center'

      lScoreNum.alpha = rScoreNum.alpha = 0.7
      setScale(lScoreNum, 0.8)
      setScale(rScoreNum, 0.8)
      this.addChild(rScoreNum as any)
    })

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

    this.lAvt = new MaskAvatar('/img/panel/worldwar/maskL.png')
    this.addChild(this.lAvt)
    this.lAvt.setAvtPos(325, 890, 175)

    this.rAvt = new MaskAvatar('/img/panel/worldwar/maskR.png', _ => {

    })
    this.rAvt.setAvtPos(1420, 890, 175)

    // this.rAvt.setTest(175, 175, 1420, 890)
    this.addChild(this.rAvt)
    // this.lAvt.setTest(175,175,325,890)

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

    ns.fontSize = "28px";
    ns.fill = "#eee";
    // this.lTitle = TextFac.new_(ns, this).setY(925);
    // this.rTitle = TextFac.new_(ns, this).setPos(1123, this.lTitle.y);
    this.gameTitle = TextFac.new_(ns, this)
      .setY(925)

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
    
    // this.setGameTitle('校友对抗')
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
    if (rPlayer.avatar)
      this.rAvt.load(rPlayer.avatar)
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
    if (lPlayer.avatar)
      this.lAvt.load(lPlayer.avatar)
    this.lBlood.setBlood(lPlayer.blood);
  }
  setBloodByDtScore(data) {
    if (data.isLeft) {
      this.rBlood.setBloodByDtScore(data.score);
    } else {
      this.lBlood.setBloodByDtScore(data.score);
    }
  }
  setGameTitle(vl) {
    this.gameTitle.setText(vl)
      .setAlignCenter(960)
  }
  setTeamScore(data) {
    this.lTeamScore.text = data.lScore
    this.rTeamScore.text = data.rScore
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
