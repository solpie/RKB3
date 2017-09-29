
from jsonDB import BaseDB


class rankingData(object):

    def __init__(self):
        self.db = BaseDB('./db/rankingData.db')
rd = rankingData()


class RankDB(object):

    def __init__(self):
        self.db = BaseDB('./db/rank.db')
rankDB = RankDB()


def playerFilter(playerArr):
    minSortId = -1
    maxSortId = -1
    playerArrFilter = []
    newRanking = 1
    if not playerArr:
        return [], []
    for player in playerArr:
        if minSortId == -1:
            minSortId = player['sortId']
        if maxSortId == -1:
            maxSortId = player['sortId']
        if player['sortId'] < minSortId:
            minSortId = player['sortId']
        if player['sortId'] > maxSortId:
            maxSortId = player['sortId']
        if player['playCount'] == 0:
            print('[0 game]:', player['playerName'], player['sortId'])
        elif player['playCount'] < 3:
            # print('[3 game]:', player['playCount'],
            #       player['playerName'], player['sortId'])
            pass
        else:
            player['ranking'] = newRanking
            newRanking += 1
            playerArrFilter.append(player)
            # if isTop10 and len(playerArrFilter) > 9:
            #     break
    print('min', minSortId, 'max', maxSortId)
    return playerArrFilter


def getPlayerArrByPlayerId(dateStr, playerNameArr):
    dateStr = '2017-07-31'
    doc = rd.db.find({'date': dateStr})
    a = []
    if len(doc) > 0:
        playerArr = playerFilter(doc[0]['raw'])
        for pQuery in playerNameArr:
            for p in playerArr:
                if str(p['userId']) == str(pQuery):
                    a.append(p)
    return a


def convertRankDB():
    doc = rankDB.db.find({'idx': 's3'})
    newPlayerArr = []
    for p in doc[0]['rankArr']:
        playerId = p['player_id']
        playerName = str(p['name'])
        ranking = p['ranking']
# {"playerName": "\u4e36\u660e\u5929\u8fc7\u540e", "sortId": 1052, "userId": "5236"}
        # print(playerName, p['ranking'])
        newPlayerArr.append(
            {"playerName": playerName, "sortId": ranking, "userId": playerId, 'playCount': 3})
        pass
    newDoc = {"raw": newPlayerArr,"date":"2017-07-31"}
    rd.db.insert(newDoc)

def main():
    convertRankDB()
    pass


if __name__ == '__main__':
    main()
