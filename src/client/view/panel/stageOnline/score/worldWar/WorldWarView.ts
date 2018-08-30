import { CommandId } from "../../../../Command";
import { TweenEx } from "../../../../utils/TweenEx";
import { WorldWar } from "./WorldWar";

export class WorldWarView extends PIXI.Container {
  stage: any;
  worldWar: WorldWar;
  constructor(stage, io) {
    super();
    this.stage = stage;
    TweenEx.delayedCall(1200, _ => {
      this.worldWar = new WorldWar();
      this.stage.addChild(this.worldWar);
    });
    io.on(CommandId.sc_timerEvent, data => {
      console.log("sc_timerEvent", data);
      this.worldWar.setTimerEvent(data);
    }) //
      .on(CommandId.sc_setPlayer, data => {
        console.log("sc_setBlood", data);
        this.worldWar.setLeftPlayer(data.leftPlayer);
        this.worldWar.setRightPlayer(data.rightPlayer);
        this.worldWar.setTimerEvent({event:"setting",param:0});
      })
      .on(CommandId.sc_setBlood, data => {
        console.log("sc_setBlood", data);
        this.worldWar.setBloodByDtScore(data)
      });
  }
}
