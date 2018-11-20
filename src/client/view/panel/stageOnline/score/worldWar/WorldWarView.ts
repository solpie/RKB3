import { ScoreRank } from '../../scoreRank/ScoreRank';
import { CommandId } from "../../../../Command";
import { TweenEx } from "../../../../utils/TweenEx";
import { WorldWar } from "./WorldWar";
import { Pick8Layer } from '../../pick8/Pick8';
import { PanelId } from '../../../../const';
import { Countdown } from '../Countdown';
import { newBitmap } from '../../../../utils/PixiEx';
import { WWTitle } from './WWTitle';
import { showPanel } from '../../../base/BasePanel';
import { BigBlood } from './BigBlood';
const isTest = true
export class WorldWarView extends PIXI.Container {
  stage: any;
  worldWar: WorldWar;
  lBloodRank: ScoreRank
  rBloodRank: ScoreRank
  kdaTitle: PIXI.Sprite

  title: WWTitle
  constructor(stage, io) {
    super();
    this.stage = stage;
    if (isTest)
      showPanel(BigBlood, { visible: true }, stage)

    TweenEx.delayedCall(1200, _ => {
      this.worldWar = new WorldWar();
      this.stage.addChild(this.worldWar);


      this.kdaTitle = newBitmap({ url: '/img/panel/worldwar/kdaTitle.png' })
      this.kdaTitle.visible = false;
      this.worldWar.addChild(this.kdaTitle)

      this.lBloodRank = new ScoreRank()
      this.lBloodRank.create(this.worldWar, false)

      this.rBloodRank = new ScoreRank()
      this.rBloodRank.create(this.worldWar, true)

      this.lBloodRank.isShowKDA =
        this.rBloodRank.isShowKDA = true

      this.lBloodRank.y = -60;
      this.rBloodRank.y = -60;

      this.title = new WWTitle()
      this.worldWar.addChild(this.title)
      this.title.hide()
    });

    io.on(CommandId.sc_timerEvent, data => {
      console.log("sc_timerEvent", data);
      this.worldWar.setTimerEvent(data);
    }) //
      .on(CommandId.sc_setPlayer, data => {
        console.log("sc_setPlayer", data);
        this.worldWar.setLeftPlayer(data.leftPlayer);
        this.worldWar.setRightPlayer(data.rightPlayer);
        // this.worldWar.setTimerEvent({ event: "setting", param: 0 });
        if (data.isRestFoul) {
          this.worldWar.setLeftFoul(0)
          this.worldWar.setRightFoul(0)
        }
        if (data.isRestTeamScore) {
          this.worldWar.setTeamScore({ lScore: 0, rScore: 0 })
        }
      })
      .on(CommandId.sc_showPanel, data => {
        console.log('sc_showPanel', data)
        if (data.panel == PanelId.worldwarPanel) {
          data.visible ?
            this.worldWar.show() :
            this.worldWar.hide();
        }
        if (data.panel == PanelId.worldwarTitle) {
          data.visible ?
            this.title.show(data) :
            this.title.hide();
        }
        if (data.panel == PanelId.worldwarKDA) {
          // if (data.visible) {
          //   this.lBloodRank.show({ scoreArr: data.lScoreArr, visible: true })
          //   this.rBloodRank.show({ scoreArr: data.rScoreArr, visible: true })
          // }
          // else {
          //   this.lBloodRank.hide()
          //   this.rBloodRank.hide()
          // }
          // this.kdaTitle.visible = data.visible
        }
      })
      .on(CommandId.sc_setFoul, data => {
        this.worldWar.setLeftFoul(data.lFoul);
        this.worldWar.setRightFoul(data.rFoul);

        data.cid = CommandId.sc_setFoul
        data.visible = true
        showPanel(BigBlood, data, stage)
      })
      .on(CommandId.sc_teamScore, data => {
        this.worldWar.setTeamScore(data)
      })
      .on(CommandId.sc_showKDARank, data => {
        data.isRight = false
        this.lBloodRank.show(data)
        data.isRight = true
        this.rBloodRank.show(data)
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
              lp = { name: "---" }
            else
              lp = playerMap[lPlayer]

            if (!playerMap[rPlayer])
              rp = { name: "---" }
            else
              rp = playerMap[rPlayer]

            playerArr.push([lp, rp])
          }
          Pick8Layer.get(this.stage).show({
            playerArr: playerArr,
            visible: data.isShowPick
          })
          if (data.isShowPick) {
            this.worldWar.hide()
          }
        }
      })
      .on(CommandId.sc_timeOut, data => {
        data.cid = CommandId.sc_timeOut
        data.visible = true
        showPanel(BigBlood, data, stage)
      })
      .on(CommandId.sc_setBlood, data => {
        let blood = this.worldWar.setBloodByDtScore(data)
        console.log("sc_setBlood", data, blood);

        data.cid = CommandId.sc_setBlood
        data.blood = blood
        data.visible = true
        showPanel(BigBlood, data, stage)
      });
  }
}
