from jsonDB import BaseDB


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
            # self.db.update({"id":i+1},{"ft":'FTG'})
            # self.db.update({"id":i+1},{"team":'FTG t1'})


class GameDoc:
    id = None
    start = None
    duration = 0
    blueTeam = None
    redTeam = None
    foul1p = 0
    foul2p = 0
    st = 2
    blood1p = 5
    blood2p = 5
    st1p = 2
    st2p = 2
    playerDocArr = []

    def toDict(self, data):
        doc = dict()
        pArr = []
        save = ['_id', 'id', 'name', 'blood', 'foul', 'st']
        for player in data['playerDocArr']:
            p = dict()
            for k in save:
                p[k] = player[k]
            pArr.append(p)
        doc['playerDocArr'] = pArr
        doc['duration'] = self.duration
        return doc


class BracketModel(object):

    def __init__(self):
        self.db = BaseDB('./db/bracket.db')
        docs = self.db.find({"id": -1})
        if len(docs) < 1:
            self.db.insert({"id": -1})
        # self.makeBracket()

    def makeBracket(self):
        l = dict()
        for i in range(14):
            l[i + 1] = {"left": {"score": 1, "name": "FTG t1"},
                        "right": {"score": 3, "name": "FTG t2"}}
        docs = self.db.find({"id": -1})
        docs[0]["comingIdx"] = -1
        docs[0]["group"] = l
        self.db.insert(docs[0])

    def onFtBracketInfo(self, data):
        print('onFtBracketInfo')
        data['et'] = 'top8Match'
        docs = self.db.find({"id": -1})
        data['list'] =  docs[0]["group"]

    def commitTeam(self, data):
        idx = data['bracketIdx']
        docs = self.db.find({"id": -1})
        g = docs[0]["group"][idx]
        g['left']['score'] = data['scoreArr'][0]
        g['right']['score'] = data['scoreArr'][1]
        self.db.update(docs[0])


class GameModel(object):
    playerModel = None
    lastWinner = None
    data = None

    def __init__(self, playerModel):
        self.gameDoc = None
        self.playerModel = playerModel
        self.db = BaseDB('./db/game.db')

    def getPlayer(self, idx):
        return self.data['playerDocArr'][idx]

    def dtFoul(self, idx, dt=0):
        player = self.getPlayer(idx)
        player['foul'] += dt
        player['foul'] = self._range(player['foul'], 0, 4)
        return player['foul']

    def dtSt(self, idx, dt=0):
        player = self.getPlayer(idx)
        player['st'] += dt
        player['st'] = self._range(player['st'], 0, 2)
        return player['st']

    def _range(self, v, min, max):
        if v < min:
            return min
        if v > max:
            return max
        return v

    def dtBlood(self, idx, dt=0):
        self.getPlayer(idx)['blood'] += dt
        b = self.getPlayer(idx)['blood']
        self.getPlayer(idx)['blood'] = self._range(b, 0, 5)
        return self.getPlayer(idx)['blood']

    def getData(self):
        return self.data

    def startGame(self, data):
        self.gameDoc = GameDoc()
        self.data = data
        player1 = self.getPlayer(0)
        player2 = self.getPlayer(1)
        player1['blood'] = self.gameDoc.blood1p
        player2['blood'] = self.gameDoc.blood2p
        player1['foul'] = self.gameDoc.foul1p
        player2['foul'] = self.gameDoc.foul2p
        player1['st'] = self.gameDoc.st
        player2['st'] = self.gameDoc.st

        if self.lastWinner:
            if player1['id'] == self.lastWinner['id']:
                player1['blood'] = self._range(
                    self.lastWinner['blood'] + 1, 0, 5)
            if player2['id'] == self.lastWinner['id']:
                player2['blood'] = self._range(
                    self.lastWinner['blood'] + 1, 0, 5)

    def commitTeam(self, data):
        self.lastWinner = None

    def commitGame(self, data):
        if not self.gameDoc:
            data['sus'] = False
            return data

        isFinish = False
        winnerIdx = 0
        #2p win
        if self.dtBlood(0) == 0:
            winnerIdx = 1
            self.lastWinner = self.getPlayer(1)
            isFinish = True

        elif self.dtBlood(1) == 0:
            winnerIdx = 0
            self.lastWinner = self.getPlayer(0)
            isFinish = True

        if isFinish:
            self.gameDoc.duration = data['duration']
            doc = self.gameDoc.toDict(self.data)
            self.db.insert(doc)
            data['sus'] = True
            data['gameDoc'] = doc
            data['winner'] = winnerIdx
            self.gameDoc = None
            return data

    def setFoul(self, data):
        dt = data['dt']
        if data['is1p']:
            data['foul'] = self.dtFoul(0, dt)
        else:
            data['foul'] = self.dtFoul(1, dt)

    def setSt(self, data):
        if data['is1p']:
            data['st'] = self.dtSt(0, data['dt'])
        else:
            data['st'] = self.dtSt(1, data['dt'])

    def setBlood(self, data):
        if data['is1p']:
            data['blood'] = self.dtBlood(0, data['dt'])
        else:
            data['blood'] = self.dtBlood(1, data['dt'])


class ActivityModel:

    def __init__(self):
        self.playerModel = PlayerModel()
        self.gameModel = GameModel(self.playerModel)
        self.bracketModel = BracketModel()

        self.eventMap = dict()
        self.eventMap['cs_startGame'] = [self.gameModel.startGame]
        self.eventMap['cs_setBlood'] = [self.gameModel.setBlood]
        self.eventMap['cs_setFoul'] = [self.gameModel.setFoul]
        self.eventMap['cs_setSt'] = [self.gameModel.setSt]
        self.eventMap['cs_commitGame'] = [self.gameModel.commitGame]
        self.eventMap['cs_commitTeam'] = [self.gameModel.commitTeam,self.bracketModel.commitTeam]
        # ft bracket
        self.eventMap['cs_ftBracketInfo'] = [self.bracketModel.onFtBracketInfo]

    def onCmd(self, cmd, data):
        print(cmd, data)
        for func in self.eventMap[cmd]:
            data = func(data) or data
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
    if actModel.gameModel.data:
        return jsonify(actModel.gameModel.getData())
    return jsonify({"start": False})


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
