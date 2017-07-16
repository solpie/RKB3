class OnlineModel:

    def __init__(self):
        self.delayMap = {}
        pass

    def setDelay(self, gameId, delay):
        self.delayMap[gameId] = delay

    def getDelay(self, gameId):
        if gameId in self.delayMap:
            return self.delayMap[gameId]
        return '0'

onlineModel = OnlineModel()

from flask import Blueprint, jsonify, request
onlineView = Blueprint('onlineView', __name__)
from jsonDB import BaseDB


class rankingData(object):

    def __init__(self):
        self.db = BaseDB('./db/rankingData.db')
rd = rankingData()

from rankingData import getTop10, getPlayerArrByPlayerId,getPlayerArrByPlayerName


@onlineView.route('/ranking/list', methods=["POST"])
def getPlayerArr():
    req = request.json
    date =req['date']
    # playerNameArr =req['playerNameArr']
    playerIdArr = req['playerIdArr']
    print('date', date)
    playerArr = getPlayerArrByPlayerId(date, playerIdArr)
    return jsonify({'date': date, 'playerArr': playerArr})


@onlineView.route('/ranking/top10/<date>', methods=["GET"])
def getRanking(date):
    playerArr = getTop10(date)
    print('top10', date)
    if len(playerArr):
        return jsonify({'date': date, 'top10': playerArr})
    else:
        return jsonify({'date': date})


@onlineView.route('/delay/<gameId>', methods=["GET"])
def getDelay(gameId):
    return onlineModel.getDelay(gameId)


@onlineView.route('/delay/<gameId>/<delay>', methods=["GET", "POST"])
def setDelay(gameId, delay):
    onlineModel.setDelay(gameId, delay)
    return '[gameId]:' + gameId + '[delay]:' + delay
