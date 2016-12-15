from baseDB import BaseDB


class PlayerDoc:
    id = None
    name = None
    avatar = None
    portrait = None  # 400 x300
    team = None
    height = None
    weight = None
    hp = None
    winCount = None
    loseCount = None


class PlayerModel(object):

    def __init__(self):
        self.db = BaseDB('./db/player.db')
        self.make32Player()

    def all(self):
        return self.db.findAll()

    def make32Player(self):
        for i in range(32):
            id = str(i + 1)
            # self.db.insert({"id": i + 1, 'name': "player" + id})
            # self.db.update({"id":i+1},{"portrait":'/img/player/portrait/'+id+'.png'})
            # self.db.update({"id":i+1},{"avatar":''+id+'.jpg'})


class GameDoc:
    id = None
    start = None
    blueTeam = None
    redTeam = None
    blood1p = 5
    blood2p = 5
    playerDocArr = []

    def toDict(self):
        doc = dict()
        pArr = []
        for player in self.playerDocArr:
            p = dict()
            p['_id'] = player['_id']
            p['id'] = player['id']
            p['name'] = player['name']
            pArr.append(p)
        pArr[0]['blood'] = self.blood1p
        pArr[1]['blood'] = self.blood2p
        doc['playerDocArr'] = pArr
        return doc


class GameModel(object):
    playerModel = None
    lastWinner = None
    lastBlood = None
    lastWinnerBlood = {"idx": -1, "blood": 0}

    def __init__(self, playerModel):
        self.playerModel = playerModel
        self.db = BaseDB('./db/game.db')

    def startGame(self, data):
        self.gameDoc = GameDoc()
        self.gameDoc.playerDocArr = data['playerDocArr']
        winnerIdx = self.lastWinnerBlood['idx']
        if winnerIdx > -1:
            self.gameDoc.playerDocArr[winnerIdx][
                'blood'] = self.lastWinnerBlood['blood']
        print(self.gameDoc.playerDocArr)

    def commitTeamGame(self, data):
        pass

    def commitGame(self, data):
        if not self.gameDoc:
            data['sus'] = False
            return data

        isFinish = False
        if self.gameDoc.blood1p == 0:
            self.lastWinnerBlood = {"idx": 1, "blood": self.gameDoc.blood2p}
            self.lastWinner = self.gameDoc.playerDocArr[1]
            isFinish = True

        elif self.gameDoc.blood2p == 0:
            self.lastWinnerBlood = {"idx": 0, "blood": self.gameDoc.blood1p}
            self.lastWinner = self.gameDoc.playerDocArr[0]
            isFinish = True
            
        if isFinish:
            doc = self.gameDoc.toDict()
            self.db.insert(doc)
            data['sus'] = True
            data['gameDoc'] = doc
            self.gameDoc = None
            return data

    def setBlood(self, data):
        if data['is1p']:
            self.gameDoc.blood1p += data['dt']
            if self.gameDoc.blood1p > 5:
                self.gameDoc.blood1p = 5
            if self.gameDoc.blood1p < 0:
                self.gameDoc.blood1p = 0
            data['blood'] = self.gameDoc.blood1p
        else:
            self.gameDoc.blood2p += data['dt']
            if self.gameDoc.blood2p > 5:
                self.gameDoc.blood2p = 5
            if self.gameDoc.blood2p < 0:
                self.gameDoc.blood2p = 0
            data['blood'] = self.gameDoc.blood2p


class ActivityModel:

    def __init__(self):
        self.playerModel = PlayerModel()
        self.gameModel = GameModel(self.playerModel)

        self.eventMap = dict()
        self.eventMap['cs_startGame'] = self.gameModel.startGame
        self.eventMap['cs_setBlood'] = self.gameModel.setBlood
        self.eventMap['cs_commitGame'] = self.gameModel.commitGame

    def onCmd(self, cmd, data):
        print(cmd, data)
        data = self.eventMap[cmd](data) or data
        emit(cmd.replace('cs_', 'sc_'), data)

actModel = ActivityModel()

from flask import Blueprint, jsonify
gameView = Blueprint('gameView', __name__)
#/game/

from flask_socketio import emit as _emit
from flask import Flask, render_template, session, request, make_response


def emit(cmd, data):
    _emit(cmd, data, broadcast=True, namespace='/rkb')


@gameView.route('/')
def gameIndex():
    return 'gameView'


@gameView.route('/player')
def findAllPlayer():
    return jsonify(actModel.playerModel.all())


@gameView.route('/start', methods=['POST'])
def startGame():
    data = request.json
    print(data)
    # emit(cmd.replace('cs_', 'sc_'), request.json,
    #  broadcast=True, namespace=namespace_rkb)
    return 'gameView'
