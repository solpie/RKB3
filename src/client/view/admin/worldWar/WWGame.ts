import { updateWorldWarDoc } from "../../utils/HupuAPI";
import { EventDispatcher } from "../../utils/EventDispatcher";

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
  team: any;
  gameIdx: number;
  data: any; //json data
  loadConf(data) {
    this.playerMap = data.playerMap;
    this.team = data.team;
    this.data = data;
  }
  getTeamByIdx(idx) {
    let a = [];
    for (const t of this.team) {
      if (t.idx == idx) {
        for (const pid of t.playerArr) {
          a.push(this.playerMap[pid]);
          console.log(a[a.length - 1].name);
        }
      }
    }
    return a;
  }
  clearGameRec(doc?) {
    if (doc) {
      doc.rec = {};
      doc.gameIdx = 0;
    } else {
      syncDoc(data => {
        let doc = data.doc;
        doc["rec"] = {};
        doc["gameIdx"] = 0;
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
  addGame(playerArr) {
    syncDoc(data => {
      let doc = data.doc;
      if (!doc.rec) {
        this.clearGameRec(doc);
      }
      doc.gameIdx++;
      doc.rec[doc.gameIdx] = {
        gameIdx: doc.gameIdx,
        player: playerArr,
        score: [0, 0],
        foul: [0, 0]
      };

      this.emit(WWGame.InitDocView, doc);
    }, true);
  }
}
