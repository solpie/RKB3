import requests
from jsonDB import BaseDB


class rankingData(object):

    def __init__(self):
        self.db = BaseDB('./db/rankingData.db')
rd = rankingData()

import datetime


def getFullRanking(date):
    print('get ranking', date)
    page = 1
    size = 50
    arr = []
    pageRes = api_getRanking(page, size, date)
    arr.extend(pageRes)
    while len(pageRes) > size - 1:
        page += 1
        pageRes = api_getRanking(page, size, date)
        arr.extend(pageRes)
    rd.db.insert({'date': date, 'raw': arr})
    return arr


def api_getRanking(page, size, date):
    print('page', page, 'size', size)
    url = 'http://lrw.smartcourt.cn/getRanking'
    r = requests.post(
        url, json={'page': page, 'pageSize': size, 'calculationDate': date})
    r.close()
    res = r.json()
    playerArr = res['data']['rankings']
    return playerArr


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


def getPlayerArrByPlayerName(dateStr, playerNameArr):
    doc = rd.db.find({'date': dateStr})
    a = []
    if len(doc) > 0:
        for pQuery in playerNameArr:
            for p in doc[0]['raw']:
                if p['playerName'] == pQuery:
                    a.append(p)
    return a


def getPlayerArrByPlayerId(dateStr, playerNameArr):
    doc = rd.db.find({'date': dateStr})
    a = []
    if len(doc) > 0:
        playerArr = playerFilter(doc[0]['raw'])
        for pQuery in playerNameArr:
            for p in playerArr:
                if str(p['userId']) == str(pQuery):
                    a.append(p)
    return a


def printTop10(playerArr):
    idx = 0
    for pt in playerArr:
        print('sortId', pt['sortId'], '参加', pt['playCount'], pt['playerName'])
        idx += 1
        if idx > 9:
            break


def getTop10(dateStr=None, count=99):
    if dateStr:
        today = datetime.datetime.strptime(dateStr, "%Y-%m-%d").date()
    else:
        today = datetime.datetime.today()
    yesterday = today - datetime.timedelta(1)
    dateIdx = today.strftime('%Y-%m-%d')
    yesterdayDateIdx = yesterday.strftime('%Y-%m-%d')
    print(dateIdx, yesterdayDateIdx)

    doc = rd.db.find({'date': dateIdx})
    if len(doc) > 0:
        todayRes = doc[0]['raw']
    else:
        todayRes = getFullRanking(dateStr)
    # else:
    # todayRes = getFullRanking(dateIdx)
    printTop10(todayRes)
    todayRanking = playerFilter(todayRes)
    doc = rd.db.find({'date': yesterdayDateIdx})
    if len(doc) > 0:
        yesterdayRes = doc[0]['raw']
    yesterdayRanking = playerFilter(yesterdayRes)
    top10 = todayRanking[0:99]
    for p in top10:
        for py in yesterdayRanking:
            if p['playerName'] == py['playerName']:
                print(p['ranking'], py['ranking'],
                      py['playerName'], py['userId'])
                p['dtRanking'] = py['ranking'] - p['ranking']
    # print(len(yesterdayRes))
    return top10


def getRankingHistory(playerId, fromDate, pre):
    fd = datetime.datetime.strptime(fromDate, "%Y-%m-%d").date()
    for i in range(0, pre):
        pd = fd - datetime.timedelta(pre - i - 1)
        pdStr = pd.strftime("%Y-%m-%d")
        doc = rd.db.find({'date': pdStr})
        # print(pdStr)
        if len(doc) > 0:
            playerArr = doc[0]['raw']
            for p in playerArr:
                if str(p['userId']) == str(playerId):
                    print(pdStr, p['playerName'], 'playCount:',
                          p['playCount'], 'sortId', p['sortId'])
                    break


def downloadAll():
    # getFullRanking('2017-07-10')
    # getFullRanking('2017-07-11')
    # getFullRanking('2017-07-12')
    # getFullRanking('2017-07-13')
    # getFullRanking('2017-07-14')
    getFullRanking('2017-07-15')
    getFullRanking('2017-07-16')


if __name__ == '__main__':
    # updateRanking()
    # start 7 10
    # updateRanking('2017-07-14')
    # getTop10('2017-07-10')
    # getTop10('2017-07-11')
    # getTop10('2017-07-12')
    # getTop10('2017-07-13')
    # getTop10('2017-07-14')
    # getTop10('2017-07-15')
    # getTop10('2017-07-16')
    getRankingHistory(564, '2017-07-17', 3)
    # downloadAll()
