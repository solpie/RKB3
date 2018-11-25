import { newBitmap, BitmapText, loadRes, imgToTex, setScale, _c } from '../../../../utils/PixiEx';
import { Text2, TextFac } from "../../../../utils/TextFac";
import { FontName, TimerState, TimerEvent } from "../../../../const";
import { TextTimer } from "../../../../utils/TextTimer";
import { BloodBar } from "./BloodBar";
import { MaskAvatar } from "../../../base/MaskAvatar";
const isTest = false;
let foulToHint = 3;//
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

  lTitleTex: PIXI.Sprite
  rTitleTex: PIXI.Sprite

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
      lScoreNum.y = 939
      lScoreNum.align = 'center'
      this.addChild(lScoreNum as any)

      let rScoreNum = new BitmapText(sheet)
      this.rTeamScore = rScoreNum
      rScoreNum.x = lScoreNum.x + 100
      rScoreNum.y = lScoreNum.y
      rScoreNum.align = 'center'

      lScoreNum.alpha = rScoreNum.alpha = 0.7
      setScale(lScoreNum, 0.75)
      setScale(rScoreNum, 0.75)
      this.addChild(rScoreNum as any)
    })

    let ns = {
      fontFamily: FontName.MicrosoftYahei,
      fontSize: "28px",
      fontWeight: "",
      fill: "#aaa"
    };

    this.lName = TextFac.new_(ns, this).setY(960);
    this.rName = TextFac.new_(ns, this).setPos(1215, this.lName.y);

    ns.fontSize = "25px";
    ns.fill = '#fff'
    ns.fontWeight = 'bold'
    this.lTitle = TextFac.new_(ns, this).setY(925);
    this.rTitle = TextFac.new_(ns, this).setPos(1123, this.lTitle.y);



    ns.fill = '#aaa'
    ns.fontWeight = ''

    this.lHW = TextFac.new_(ns, this).setY(1004);

    this.rHW = TextFac.new_(ns, this).setPos(this.rName.x, this.lHW.y);

    this.lAvt = new MaskAvatar('/img/panel/worldwar/maskL.png')
    this.addChild(this.lAvt)
    this.lAvt.setAvtPos(325, 890, 175)

    this.rAvt = new MaskAvatar('/img/panel/worldwar/maskR.png', _ => {

    })
    this.rAvt.setAvtPos(1420, 890, 175)

    this.addChild(this.rAvt)

    //foul hint
    let lFoulHint = newBitmap({ url: "/img/panel/worldWar/foulHintL.png" });
    let rFoulHint = newBitmap({ url: "/img/panel/worldWar/foulHintR.png" });
    lFoulHint.visible = false;
    rFoulHint.visible = false;
    this.addChild(lFoulHint);
    this.addChild(rFoulHint);
    this.lFoulHint = lFoulHint;
    this.rFoulHint = rFoulHint;
    this.addChild(newBitmap({ url: "/img/panel/worldWar/fg.png" }));
    ns.fontSize = "35px";
    ns.fill = "#ddd";
    ns.fontFamily = 'dinCondensedC'
    this.lFoul = TextFac.new_(ns, this).setY(1022);
    this.rFoul = TextFac.new_(ns, this).setY(this.lFoul.y);

    ns.fontSize = "28px";
    ns.fill = "#eee";
    this.gameTitle = TextFac.new_(ns, this)
      .setY(925)

    ns.fontSize = "40px";
    ns.fill = "#ddd";
    ns.fontFamily = 'dinCondensedC'
    let t = new TextTimer("", ns);
    this.addChild(t);
    t.x = 926;
    t.y = 1019;
    t.textInSec = 0;
    this.timer = t;

    this.lTitleTex = newBitmap({ url: '/img/panel/worldwar/titleTex.png' })
    this.lTitleTex.width = 370
    this.lTitleTex.height = 35
    this.lTitleTex.x = 474
    this.lTitleTex.y = 925

    this.rTitleTex = newBitmap({ url: '/img/panel/worldwar/titleTex.png' })
    this.rTitleTex.width = this.lTitleTex.width
    this.rTitleTex.height = this.lTitleTex.height
    this.rTitleTex.x = 1093
    this.rTitleTex.y = this.lTitleTex.y
    this.lTitleTex.mask = this.lTitle
    this.rTitleTex.mask = this.rTitle
    this.addChild(this.lTitleTex)
    this.addChild(this.rTitleTex)

    this.initData()
    if (isTest) this.test();
  }
  initData() {
    this.setLeftFoul(0)
    this.setRightFoul(0)
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
    // this.rBlood.setBlood(2);
  }
  setRightPlayer(rPlayer) {
    this.rTitle.setText(rPlayer.title).setAlignCenter(_c(300));

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
    if (rPlayer.blood != null) {
      this.rTitle.text = ''
      this.rBlood.visible = true
      this.rBlood.setBlood(rPlayer.blood);
    }
    else {
      this.rBlood.visible = false
    }
  }

  setLeftPlayer(lPlayer) {
    console.log('set left player', lPlayer);
    this.lTitle.setText(lPlayer.title).setAlignCenter(_c(-300));

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

    if (lPlayer.blood != null) {
      this.lTitle.text = ''
      this.lBlood.visible = true
      this.lBlood.setBlood(lPlayer.blood);
    }
    else {
      this.lBlood.visible = false
    }
  }
  setBloodByDtScore(data) {
    let blood;
    if (data.isLeft) {
      blood = this.rBlood.setBloodByDtScore(data.score);
    } else {
      blood = this.lBlood.setBloodByDtScore(data.score);
    }
    return blood
  }
  setGameTitle(vl) {
    this.gameTitle.setText(vl)
      .setAlignCenter(960)
  }
  _lTeamScore: number;
  _rTeamScore: number;
  setTeamScore(data) {
    if (data.dtScore != null) {
      if (data.isLeft)
        this._lTeamScore += data.dtScore
      else
        this._rTeamScore += data.dtScore
    }
    else {
      this._lTeamScore = Number(data.lScore)
      this._rTeamScore = Number(data.rScore)
    }
    this.lTeamScore.text = this._lTeamScore + ""
    this.lTeamScore.x = 910 - this.lTeamScore.width * 0.5
    this.rTeamScore.text = this._rTeamScore + ''
    this.rTeamScore.x = 1010 - this.rTeamScore.width * 0.5
  }

  setLeftFoul(val) {
    if (window['foulToHint'] != null)
      foulToHint = window['foulToHint']
    this.lFoulHint.visible = val >= foulToHint;
    this.lFoul.setText("" + (val || 0)).setAlignCenter(_c(-100));
  }
  setRightFoul(val) {
    if (window['foulToHint'] != null)
      foulToHint = window['foulToHint']
    console.log('set right foul', val)
    this.rFoulHint.visible = val >= foulToHint;
    this.rFoul.setText("" + (val || 0)).setAlignCenter(_c(142));
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

  hide() {
    this.visible = false
  }
  show() {
    this.visible = true
  }
}
