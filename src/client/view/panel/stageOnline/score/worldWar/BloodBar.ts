import { newBitmap } from "../../../../utils/PixiEx";

export class BloodBar extends PIXI.Container {
  isLeft: boolean;
  bloodArr: Array<PIXI.Sprite>;

  constructor(isLeft) {
    super();

    this.isLeft = isLeft;

    this.bloodArr = [];
    for (let i = 0; i <6; i++) {
      let b = newBitmap({ url: "/img/panel/worldWar/b" + (i + 0) + ".png" });
      this.addChild(b);
      this.bloodArr.push(b);
      if (!isLeft) {
          b.x = 1920
        b.scale.x = -1;
      }
    }
  }

  setBlood(val) {
    for (let i = 0; i < this.bloodArr.length; i++) {
      let b = this.bloodArr[i];
      b.visible = i < val;
    }
  }
}
