import { CommandId } from "../../../../Command";
import { TweenEx } from "../../../../utils/TweenEx";
import { WorldWar } from "./WorldWar";
import { Pick8Layer } from '../../pick8/Pick8';

export class WorldWarView extends PIXI.Container {
  stage: any;
  worldWar: WorldWar;
  constructor(stage, io) {
    super();
    this.stage = stage;
    TweenEx.delayedCall(1200, _ => {
      this.worldWar = new WorldWar();
      this.stage.addChild(this.worldWar);
      Pick8Layer.get(this.stage).show({
        playerArr: [
          [{ name: '郝天吉' }, { name: "TBD" }],
          [{ name: '郝天吉' }, { name: "TBD" }],
          [{ name: '郝天吉' }, { name: "TBD" }],
          [{ name: '郝天吉' }, { name: "TBD" }],
          [{ name: '郝天吉' }, { name: "TBD" }],
          [{ name: '郝天吉' }, { name: "TBD" }],
          [{ name: '郝天吉' }, { name: "TBD" }],
          [{ name: '郝天吉' }, { name: "TBD" }],
        ]
    })
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
      .on(CommandId.sc_setFoul, data => {
        this.worldWar.setLeftFoul(data.lFoul);
        this.worldWar.setRightFoul(data.rFoul);
      })
      .on(CommandId.sc_setBlood, data => {
        console.log("sc_setBlood", data);
        this.worldWar.setBloodByDtScore(data)
      });
  }
}
