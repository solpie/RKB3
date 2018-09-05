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

    });
    io.on(CommandId.sc_timerEvent, data => {
      console.log("sc_timerEvent", data);
      this.worldWar.setTimerEvent(data);
    }) //
      .on(CommandId.sc_setPlayer, data => {
        console.log("sc_setBlood", data);
        this.worldWar.setLeftPlayer(data.leftPlayer);
        this.worldWar.setRightPlayer(data.rightPlayer);
        this.worldWar.setTimerEvent({ event: "setting", param: 0 });
      })
      .on(CommandId.sc_setFoul, data => {
        this.worldWar.setLeftFoul(data.lFoul);
        this.worldWar.setRightFoul(data.rFoul);
      })
      .on("sc_data", data => {
        if (data.dbIdx == 'worldwar') {
          let playerArr = []
          let playerMap = data.playerMap
          let recArr =
            data.recMap['#1'].rec
              .concat(data.recMap['#2'].rec)

          for (let i = 0; i < recArr.length; i++) {
            const rec = recArr[i];
            let lPlayer = rec.player[0]
            let rPlayer = rec.player[1]
            let lp, rp;
            if (!playerMap[lPlayer])
              lp = { name: "TBD" }
            else
              lp = playerMap[lPlayer]

            if (!playerMap[rPlayer])
              rp = { name: "TBD" }
            else
              rp = playerMap[rPlayer]

            playerArr.push([lp, rp])
          }
          Pick8Layer.get(this.stage).show({
            playerArr: playerArr
          })
        }
      })
      .on(CommandId.sc_setBlood, data => {
        console.log("sc_setBlood", data);
        this.worldWar.setBloodByDtScore(data)
      });
  }
}
