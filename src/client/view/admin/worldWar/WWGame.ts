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
  teamArr: any;
  gameIdx: number;
  teamVsRec:any
  data: any; //json data
  loadConf(data) {
    this.playerMap = data.playerMap;
    this.teamArr = data.team;
    this.teamVsRec = data.teamVsRec
    // for (const tRec of this.teamVsRec) {
    //     let bloodArr = []
    //     let teamBlue = this.getTeamByIdx(tRec.team[0])
    //     for (const p of teamBlue.playerArr) {
    //         bloodArr.push()
            
    //     }
    //     let teamRed = this.getTeamByIdx(tRec.team[1])
        
    // }
    this.data = data;
  }
  getTeamByIdx(idx):any {
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
    let _ = (_doc)=>{
        doc.rec = {};
        doc.teamVsRec = {}
        doc.gameIdx = 0;
        doc.teamVsIdx = 0;
    }
    if (doc) {
      _(doc)
    } else {
      syncDoc(data => {
        _(data.doc)
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
  setVs(gameIdx,playerArr){
    syncDoc(data => {
        let doc = data.doc;
        let game = doc.rec[gameIdx];
        if (game) game.player = playerArr;
        this.emit(WWGame.InitDocView, doc);
      }, true); 
  }
  setTeamBlood(teamVsIdx,playerMapBlood){
    syncDoc(data => {
        // let doc = data.doc;
        // let game = doc.rec[gameIdx];
        // if (game) game.player = playerArr;
        // this.emit(WWGame.InitDocView, doc);
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
        teamVsIdx: doc.teamVsIdx,
        player: playerArr,
        score: [0, 0],
        foul: [0, 0]
      };

      this.emit(WWGame.InitDocView, doc);
    }, true);
  }
}
