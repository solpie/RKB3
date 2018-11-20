import { newBitmap } from "../../../../utils/PixiEx";
import { TweenEx } from '../../../../utils/TweenEx';

export class BloodBar extends PIXI.Container {
  isLeft: boolean;
  bloodArr: Array<PIXI.Sprite>;
  bloodFx: PIXI.Sprite
  initBlood = 0;
  constructor(isLeft) {
    super();
    this.isLeft = isLeft;
    this.bloodArr = [];
    let bloodFxUrl = '/img/panel/worldWar/bloodFxR.png'
    if (isLeft) {
      bloodFxUrl = '/img/panel/worldWar/bloodFxL.png'
    }
    let bFx = newBitmap({ url: bloodFxUrl })
    this.addChild(bFx)
    bFx.alpha = 0.7
    this.bloodFx = newBitmap({ url: bloodFxUrl })
    this.addChild(this.bloodFx)
    // this.bloodFx.y = bFx.y = -90
    bFx.mask = this.bloodFx

    for (let i = 0; i < 13; i++) {
      let b = newBitmap({ url: "/img/panel/worldWar/b" + (i + 0) + ".png" });
      this.addChild(b);
      this.bloodArr.push(b);
      if (isLeft) {
        b.x = 1920;
        b.scale.x = -1;
      }
    }
  }

  setBlood(val) {
    this.initBlood = val;
    this._setBlood(val);
    this.bloodFx.x = this.bloodFxPos[val]
  }

  _setBlood(val) {
    for (let i = 0; i < this.bloodArr.length; i++) {
      let b = this.bloodArr[i];
      b.visible = i < val;
    }
  }
  _tmpBlood = -1;
  //            0     1      2     3     4     5   6 
  // bloodFxPos = [-396, -292, -235, -175, -120, -60, 0]
  get bloodFxPos() {
    if (this.isLeft)
      return [396, 292, 235, 175, 120, 60, 0]

    return [-396, -292, -235, -175, -120, -60, 0]
  }
  setBloodByDtScore(dtScore) {
    let val = this.initBlood - dtScore
    this._setBlood(val);
    if (dtScore > 0) {
      this._tmpBlood = val
      TweenEx.delayedCall(1500, _ => {
        if (this._tmpBlood == val)
          TweenEx.to(this.bloodFx, 300, { x: this.bloodFxPos[val] })
      })
    }
    else {
      this.bloodFx.x = this.bloodFxPos[val]
    }
    return val
  }
}
