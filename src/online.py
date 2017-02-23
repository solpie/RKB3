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

from flask import Blueprint, jsonify
onlineView = Blueprint('onlineView', __name__)


@onlineView.route('/delay/<gameId>', methods=["GET"])
def getDelay(gameId):
    return onlineModel.getDelay(gameId)


@onlineView.route('/delay/<gameId>/<delay>', methods=["GET", "POST"])
def setDelay(gameId, delay):
    onlineModel.setDelay(gameId, delay)
    return '[gameId]:' + gameId + '[delay]:' + delay
