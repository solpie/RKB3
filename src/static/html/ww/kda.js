function buildKDA(doc, teamVsIdx, playerMap) {
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
            playerMap[player].blood = curBloodMap[player].blood;
            playerMap[player].score = curBloodMap[player].score;
            playerMap[player].k = curBloodMap[player].k;
            playerMap[player].d = curBloodMap[player].d;
            playerMap[player].a = curBloodMap[player].a;
        }
        console.log("teamVsIdx ", teamVsIdx, "bloodMap", curBloodMap);
    }
    return bloodMapForShow;
}