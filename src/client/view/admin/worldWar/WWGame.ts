import { EventDispatcher } from "../../utils/EventDispatcher";
import { updateWorldWarDoc } from "../../utils/HupuAPI";

declare let $;
const getDoc = callback => {
  $.get("http://rtmp.icassi.us:8090/event?idx=1021", res => {
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
    let curBloodMap = {};
    let bloodMapForShow = {};
    for (const player in bloodMap) {
      curBloodMap[player] = {
        blood: bloodMap[player],
        score: 0,
        k: 0,
        d: 0,
        a: 0,
        hurtMap: {}
      };
      bloodMapForShow[player] = { blood: bloodMap[player] };
    }
    if (bloodMap) {
      let gameRecArr = [];
      let _ = (lPlayer, rPlayer) => {
        if (curBloodMap[lPlayer].blood == 0) {
          curBloodMap[lPlayer].d++;
          curBloodMap[rPlayer].k++;
          for (const assistPlayer in curBloodMap[lPlayer].hurtMap) {
            if (rPlayer != assistPlayer) curBloodMap[assistPlayer].a++;
          }
        }
      };
      for (const gameIdx in doc.rec) {
        if (doc.rec.hasOwnProperty(gameIdx)) {
          const gameRec = doc.rec[gameIdx];
          if (gameRec.teamVsIdx == teamVsIdx) {
            gameRecArr.push(gameRec);
            let lPlayer = gameRec.player[0];
            let rPlayer = gameRec.player[1];
            let lScore = gameRec.score[0];
            let rScore = gameRec.score[1];

            let lBkda = curBloodMap[lPlayer];
            let rBkda = curBloodMap[rPlayer];

            curBloodMap[lPlayer].blood -= rScore;
            curBloodMap[rPlayer].blood -= lScore;

            curBloodMap[lPlayer].score += lScore;
            curBloodMap[rPlayer].score += rScore;

            lBkda.hurtMap[rPlayer] = rScore; //assist calc
            rBkda.hurtMap[lPlayer] = lScore; //assist calc

            ///kda calc
            _(lPlayer, rPlayer);
            _(rPlayer, lPlayer);
          }
        }
      }
      for (let player in curBloodMap) {
        this.playerMap[player].blood = curBloodMap[player].blood;
        this.playerMap[player].score = curBloodMap[player].score;
        this.playerMap[player].k = curBloodMap[player].k;
        this.playerMap[player].d = curBloodMap[player].d;
        this.playerMap[player].a = curBloodMap[player].a;
      }
      console.log("teamVsIdx ", teamVsIdx, "bloodMap", curBloodMap);
    }
    return bloodMapForShow;
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
  deleteGameRec(gameIdx) {
    syncDoc(data => {
      let doc = data.doc;
      delete doc.rec[gameIdx];
      this.emit(WWGame.InitDocView, doc);
    }, true);
  }
  setTimeOut(data1) {
    syncDoc(data => {
      let doc = data.doc;
      doc['timeOut'] = data1
      this.emit(WWGame.InitDocView, doc);
    }, true);
  }
  clearGameRec(doc?,playerMap?) {
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
        if (!data.doc)
          data.doc = {}
        data.playerMap = playerMap
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
  setTeamScore(lScore, rScore) {
    syncDoc(data => {
      let doc = data.doc;
      doc.teamScoreArr = [lScore, rScore]
      this.emit(WWGame.InitDocView, doc);
    }, true);
  }
  getBloodMap(teamVsIdx, cb) {
    syncDoc(data => {
      let doc = data.doc;
      let bloodMap = this.bloodBuilder(doc, teamVsIdx);
      cb(bloodMap);
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
