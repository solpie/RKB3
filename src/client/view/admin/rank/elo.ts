import { EloUtil } from "../../utils/EloUtil";
class PlayerData {
    name: string
    winGameCount = 0
    loseGameCount = 0
    roundCount = 0
    score = 0
    eloScore = 2000
    get avgTimeWin() {
        return Math.ceil(this.sumTimeWin / this.winGameCount)
    }
    get avgTimeLose() {
        return Math.ceil(this.sumTimeLose / this.loseGameCount)
    }
    minTimeWin = -1
    maxTimeWin = -1
    sumTimeWin = 0
    minTimeLose = -1
    maxTimeLose = -1
    sumTimeLose = 0

    constructor(name) {
        this.name = name
    }
}
function updateGameTime(p: PlayerData, gameTimeInSec, isWin) {
    if (gameTimeInSec < 20) {
        return
        // isWin ?
        //     gameTimeInSec = p.avgTimeWin
        //     :
        //     gameTimeInSec = p.avgTimeLose
    }
    if (isWin) {
        if (p.minTimeWin < 0)
            p.minTimeWin = gameTimeInSec
        p.minTimeWin = Math.min(gameTimeInSec, p.minTimeWin)
        if (p.maxTimeWin < 0)
            p.maxTimeWin = gameTimeInSec
        p.maxTimeWin = Math.max(gameTimeInSec, p.maxTimeWin)
        p.sumTimeWin += gameTimeInSec
    }
    else {
        p.sumTimeLose += gameTimeInSec
        if (p.minTimeLose < 0)
            p.minTimeLose = gameTimeInSec
        p.minTimeLose = Math.min(gameTimeInSec, p.minTimeLose)
        if (p.maxTimeLose < 0)
            p.maxTimeLose = gameTimeInSec
        p.maxTimeLose = Math.max(gameTimeInSec, p.maxTimeLose)
    }

}
export var getEloRank = (gameDataArr, gameRecArr) => {
    var playerMap = {};
    var gameArr = gameDataArr;
    for (var j = 0; j < gameArr.length; j++) {
        var game = gameArr[j];
        for (var i = 1; ; i++) {
            var gameData = game.data[i];
            if (gameData) {
                var leftPlayerData = gameData.left;
                var rightPlayerData = gameData.right;
                if (!playerMap[leftPlayerData.name])
                    playerMap[leftPlayerData.name] = new PlayerData(leftPlayerData.name)
                if (!playerMap[rightPlayerData.name])
                    playerMap[rightPlayerData.name] = new PlayerData(rightPlayerData.name)

                var leftPlayer: PlayerData = playerMap[leftPlayerData.name];
                var rightPlayer: PlayerData = playerMap[rightPlayerData.name];

                gameRecArr.push({
                    round: game.round,
                    left: { name: leftPlayer.name, score: leftPlayerData.score },
                    right: { name: rightPlayer.name, score: rightPlayerData.score }
                });

                var dt = EloUtil.classicMethod(leftPlayer.eloScore, rightPlayer.eloScore);
                leftPlayer.score += leftPlayerData.score;
                rightPlayer.score += rightPlayerData.score;

                let gameTimeInSec = (gameData.end - gameData.start)
                if (leftPlayerData.score > rightPlayerData.score) {
                    leftPlayer.eloScore += dt;
                    rightPlayer.eloScore -= dt;

                    leftPlayer.winGameCount += 1;
                    rightPlayer.loseGameCount += 1;

                    if (gameTimeInSec > 0) {
                        updateGameTime(leftPlayer, gameTimeInSec, true)
                        updateGameTime(rightPlayer, gameTimeInSec, false)
                    }
                }
                else {
                    leftPlayer.eloScore -= dt;
                    rightPlayer.eloScore += dt;

                    leftPlayer.loseGameCount += 1;
                    rightPlayer.winGameCount += 1;
                    if (gameTimeInSec > 0) {
                        updateGameTime(leftPlayer, gameTimeInSec, false)
                        updateGameTime(rightPlayer, gameTimeInSec, true)
                    }
                }
            }
            else break;
        }
    }
    // for (var k in playerMap) {
    //     console.log(playerMap[k]);
    // }
    return playerMap;
};
