import { updateWorldWarDoc } from "../../utils/HupuAPI";
import { EventDispatcher } from "../../utils/EventDispatcher";
import { clone, cloneMap } from "../../utils/JsFunc";

declare let $;
const getDoc = callback => {
  $.get("http://rtmp.icassi.us:8090/event?idx=916", res => {
    if (res.length) callback(res[0]);
    else callback(null);
  });
};
export const syncDoc = (cb, isSave = false) => {
  getDoc(data => {
    cb(data);
    if (isSave)
      updateWorldWarDoc(data, res => {
        console.log(res);
      });
  });
};
export class WWGame extends EventDispatcher {
  static InitDocView: "init doc view";
  playerMap: any;
  teamArr: any;
  gameIdx: number;
  teamVsRec: any;
  data: any; //json data
  loadConf(data) {
    this.playerMap = data.playerMap;
    this.teamArr = data.team;
    this.teamVsRec = data.teamVsRec;
    this.data = data;
  }
  bloodBuilder(doc, teamVsIdx) {
    const bloodMap = doc.bloodMap[teamVsIdx];
    let curBloodMap = cloneMap(bloodMap);
    if (bloodMap) {
      let gameRecArr = [];
      for (const gameIdx in doc.rec) {
        if (doc.rec.hasOwnProperty(gameIdx)) {
          const gameRec = doc.rec[gameIdx];
          if (gameRec.teamVsIdx == teamVsIdx) {
            gameRecArr.push(gameRec);
            let lPlayer = gameRec.player[0];
            let rPlayer = gameRec.player[1];
            let lScore = gameRec.score[0];
            let rScore = gameRec.score[1];
            // if (!curBloodMap[lPlayer]) curBloodMap[lPlayer] = bloodMap[lPlayer];
            // if (!curBloodMap[rPlayer]) curBloodMap[rPlayer] = bloodMap[rPlayer];
            curBloodMap[lPlayer] -= rScore;
            curBloodMap[rPlayer] -= lScore;
          }
        }
      }
      for (let player in curBloodMap) {
        this.playerMap[player].blood = curBloodMap[player];
      }
      console.log("teamVsIdx ", teamVsIdx, "bloodMap", curBloodMap);
    }
  }
  getTeamByIdx(idx): any {
    let a = [];
    for (const t of this.teamArr) {
      if (t.idx == idx) {
        for (const pid of t.playerArr) {
          a.push(this.playerMap[pid]);
        }
      }
    }
    return a;
  }
  clearGameRec(doc?) {
    let _ = _doc => {
      _doc.rec = {};
      _doc.teamVsRec = {};
      _doc.gameIdx = 0;
      _doc.teamVsIdx = 0;
      this.emit(WWGame.InitDocView, _doc);
    };
    if (doc) {
      _(doc);
    } else {
      syncDoc(data => {
        _(data.doc);
        console.log(doc);
      }, true);
    }
  }
  setScore(gameIdx, scoreArr) {
    syncDoc(data => {
      let doc = data.doc;
      let game = doc.rec[gameIdx];
      if (game) game.score = scoreArr;
      this.emit(WWGame.InitDocView, doc);
    }, true);
  }

  setVs(gameIdx, playerArr) {
    syncDoc(data => {
      let doc = data.doc;
      let game = doc.rec[gameIdx];
      if (game) game.player = playerArr;
      this.emit(WWGame.InitDocView, doc);
    }, true);
  }
  setTeamVsIdx(gameIdx, teamVsIdx) {
    syncDoc(data => {
      let doc = data.doc;
      let game = doc.rec[gameIdx];
      if (game) game.teamVsIdx = teamVsIdx;
      this.emit(WWGame.InitDocView, doc);
    }, true);
  }
  setTeamBlood(teamVsIdx, playerMapBlood) {
    syncDoc(data => {
      let doc = data.doc;
      if (!doc.bloodMap) doc.bloodMap = {};
      doc.bloodMap[teamVsIdx] = playerMapBlood;
      doc.teamVsIdx = teamVsIdx;
      this.emit(WWGame.InitDocView, doc);
    }, true);
  }
  getBloodMap(teamVsIdx, cb) {
    syncDoc(data => {
      let doc = data.doc;
      this.bloodBuilder(doc, teamVsIdx);
      cb(doc.bloodMap[teamVsIdx]);
    });
  }
  addGame(playerArr, teamVsIdx) {
    syncDoc(data => {
      let doc = data.doc;
      if (!doc.rec) {
        this.clearGameRec(doc);
      }
      doc.gameIdx++;
      doc.teamVsIdx = teamVsIdx;
      doc.rec[doc.gameIdx] = {
        gameIdx: doc.gameIdx,
        teamVsIdx: teamVsIdx,
        player: playerArr,
        score: [0, 0],
        foul: [0, 0]
      };

      this.emit(WWGame.InitDocView, doc);
    }, true);
  }
}
