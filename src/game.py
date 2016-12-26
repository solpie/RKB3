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

    def reload(self, _):
        self.db.reload()

    def all(self):
        return self.db.findAll()

    def make32Player(self):
        docs = self.all()
        for doc in docs:
            pass
            # doc['number'] = 1
            # self.db.update(doc)
            # print(doc)
        # for i in range(32):
            # id = str(i + 1)
            # self.db.insert({"id": i + 1, 'name': "player" + id})

import time


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
    bracketIdx = 0

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
        doc['end'] = int(time.time())
        doc['bracketIdx'] = self.bracketIdx
        return doc

import json


def clone(obj):
    return json.loads(json.dumps(obj))


class BracketModel(object):

    def __init__(self, gameModel):
        road = dict()
        road['1'] = [[7, 0], [5, 0]]
        road["2"] = [[7, 1], [5, 1]]
        road['3'] = [[8, 0], [6, 0]]
        road['4'] = [[8, 1], [6, 1]]
        road['5'] = [[10, 1], [-1, 1]]
        road['6'] = [[9, 1], [-1, 1]]
        road['7'] = [[11, 0], [9, 0]]
        road['8'] = [[11, 1], [10, 0]]
        road['9'] = [[12, 1], [-1, 0]]
        road['10'] = [[12, 0], [-1, 0]]
        road['11'] = [[14, 0], [13, 0]]
        road['12'] = [[13, 1], [-1, 0]]
        road['13'] = [[14, 1], [-1, 0]]
        road['14'] = [[-1, 1], [-1, 1]]
        self.road = road
        self.gameModel = gameModel
        self.db = BaseDB('./db/bracket.db')
        docs = self.db.find({"id": -1})
        if len(docs) < 1:
            self.db.insert({"id": -1})

        # self.makeBracket()
        # self.clear()

    def makeBracket(self):
        doc = self._doc()
        for idx in doc['group']:
            g = doc['group'][idx]
            # g['left']['ft'] = 'FTG'
            # g['right']['ft'] = 'FTG'
            g['left']['name'] = 'Team L#' + idx
            g['right']['name'] = 'Team R#' + idx
            # g['left']['intro'] = '钢管舞更为充分'
            # g['right']['intro'] = '特委托物业万佛阿佛i结合实际哦'
            # g['left']['logo'] = str((int(idx) % 4) + 1) + '.jpg'
            # g['right']['logo'] = str((int(idx) % 4) + 1) + '.jpg'
        # l = dict()
        # for i in range(14):
            # l[i + 1] = {"left": {"score": 0, "name": "Team 1#"+str(i)},
            # "right": {"score": 0, "name": "Team 2#"+str(i)}}
        # docs = self.db.find({"id": -1})
        # # docs[0]["comingIdx"] = -1
        # docs[0]["group"] = l
        # self.db.insert(docs[0])
        self.db.update(doc)

    def _doc(self):
        docs = self.db.find({"id": -1})
        if len(docs):
            return docs[0]
        return None

    def reload(self, _):
        self.db.reload()

    def onFtBracketInfo(self, data):
        print('onFtBracketInfo')
        data['et'] = 'top8Match'
        docs = self.db.find({"id": -1})
        data['list'] = docs[0]["group"]

    def getGroup(self, idx):
        return self._doc()['group'][str(idx)]

    def commitTeam(self, data):
        idx = str(data['bracketIdx'])
        doc = self.db.find({"id": -1})[0]
        data['et'] = 'top8Match'

        g = doc["group"][idx]
        if 'scoreArr' in data:
            g['left']['score'] = data['scoreArr'][0]
            g['right']['score'] = data['scoreArr'][1]
        else:
            docs = self.gameModel.db.find({'bracketIdx': int(idx)})
            scoreArr = [0, 0]
            for gameDoc in docs:
                playerArr = gameDoc['playerDocArr']
                if playerArr[0]['blood'] > playerArr[1]['blood']:
                    scoreArr[0] += 1
                else:
                    scoreArr[1] += 1
            # if scoreArr[0] == 3 or scoreArr[1] == 3:
            g['left']['score'] = scoreArr[0]
            g['right']['score'] = scoreArr[1]
            print(docs)
            print('scoreArr', scoreArr)
        data['group'] = g

        data['list'] = doc["group"]

        r = self.road[idx]
        winTeam = None
        loseTeam = None
        if g['left']['score'] > g['right']['score']:
            winTeam = g['left']
            loseTeam = g['right']
        else:
            winTeam = g['right']
            loseTeam = g['left']

        def roadTo(toGroup, team):
            if toGroup[0] > 0:
                toIdx = str(toGroup[0])
                lr = None
                if toGroup[1] > 0:
                    lr = 'right'
                else:
                    lr = 'left'
                doc['group'][toIdx][lr] = clone(team)
                doc['group'][toIdx][lr]['score'] = 0

        roadTo(r[0], winTeam)
        roadTo(r[1], loseTeam)
        self.db.update(doc)

    def clear(self):
        doc = self._doc()
        for idx in range(1, 5):
            g = doc['group'][str(idx)]
            g['left']['score'] = 0
            g['right']['score'] = 0

        for idx in range(5, 15):
            g = doc['group'][str(idx)]
            g['left'] = dict()
            g['right'] = dict()
        self.db.update(doc)


class GameModel(object):
    playerModel = None
    lastWinner = None
    beatBy01 = None
    data = None

    def __init__(self, playerModel):
        self.gameDoc = None
        self.playerModel = playerModel
        self.db = BaseDB('./db/game.db')
        self.resetBeatBy01()
        
    def reload(self, _):
        self.db.reload()

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
        self.data['beatBy01'] = self.beatBy01
        return self.data

    def startGame(self, data):
        self.gameDoc = GameDoc()
        self.data = data
        data['start'] = True
        player1 = self.getPlayer(0)
        player2 = self.getPlayer(1)

        lastWinnerId = None
        if self.lastWinner:
            lastWinnerId = self.lastWinner['id']

        if lastWinnerId:
            if lastWinnerId == player1['id']:
                self.beatBy01[0] = 0
                self.beatBy01[1] += 1
            elif lastWinnerId == player1['id']:
                self.beatBy01[0] = 1
                self.beatBy01[1] += 1    
        data['beatBy01'] = self.beatBy01
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
        idx = data['bracketIdx']
        docs = self.db.find({'bracketIdx': idx})
        if len(docs):
            data['gameDocArr'] = docs
        data['lastWinner'] = self.lastWinner
        self.lastWinner = None
        self.resetBeatBy01()

    def resetBeatBy01(self):
        self.beatBy01  = [-1,0]

    def commitGame(self, data):
        if not self.gameDoc:
            data['sus'] = False
            return data

        isFinish = False
        winnerIdx = 0
        lastWinnerId = None
        if self.lastWinner:
            lastWinnerId = self.lastWinner['id']

        # 2p win
        if self.dtBlood(0) == 0:
            winnerIdx = 1
            if lastWinnerId and lastWinnerId == self.getPlayer(1)['id']:
                # self.beatBy01[0] = winnerIdx
                # self.beatBy01[1] += 1
                pass
            else:
                self.resetBeatBy01()
            self.lastWinner = self.getPlayer(1)
            isFinish = True

        elif self.dtBlood(1) == 0:
            winnerIdx = 0
            if lastWinnerId and lastWinnerId == self.getPlayer(0)['id']:
                # self.beatBy01[0] = winnerIdx
                # self.beatBy01[1] += 1
                pass
            else:
                self.resetBeatBy01()
            self.lastWinner = self.getPlayer(0)
            isFinish = True

        if isFinish:
            self.gameDoc.duration = data['duration']
            self.gameDoc.bracketIdx = int(data['bracketIdx'])
            doc = self.gameDoc.toDict(self.data)
            self.db.insert(doc)
            data['sus'] = True
            data['duration'] = data['duration']
            data['gameDoc'] = doc
            data['winner'] = winnerIdx
            self.gameDoc = None
            return data
        else:
            print('game is not finish')

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

    def curGame(self):
        if self.data:
            res = self.getData()
            res['start'] = True
            return jsonify(res)
        return jsonify({"start": False})


class ActivityModel:

    def __init__(self):
        self.playerModel = PlayerModel()
        self.gameModel = GameModel(self.playerModel)
        self.bracketModel = BracketModel(self.gameModel)

        self.eventMap = dict()
        self.eventMap['cs_startGame'] = [self.gameModel.startGame]
        self.eventMap['cs_setBlood'] = [self.gameModel.setBlood]
        self.eventMap['cs_setFoul'] = [self.gameModel.setFoul]
        self.eventMap['cs_setSt'] = [self.gameModel.setSt]
        self.eventMap['cs_commitGame'] = [self.gameModel.commitGame]
        self.eventMap['cs_commitTeam'] = [self.bracketModel.commitTeam,
                                          self.gameModel.commitTeam]
        # ft bracket
        self.eventMap['cs_ftBracketInfo'] = [self.bracketModel.onFtBracketInfo]
        self.eventMap['cs_reloadDB'] = [self.gameModel.reload,
                                        self.playerModel.reload, self.bracketModel.reload]

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
    return actModel.gameModel.curGame()
    # if actModel.gameModel.data:
        # return jsonify(actModel.gameModel.getData())
    # return jsonify({"start": False})


@gameView.route('/player')
def findAllPlayer():
    return jsonify(actModel.playerModel.all())


@gameView.route('/player/update', methods=["POST"])
def updatePlayer():
    data = request.json
    actModel.playerModel.db.update(data)
    return jsonify(data)


@gameView.route('/bracket/<idx>')
def getBracket(idx):
    if idx == 'clear':
        actModel.bracketModel.clear()
        return 'clear bracket'
    else:
        return jsonify(actModel.bracketModel.getGroup(idx))


@gameView.route('/start', methods=['POST'])
def startGame():
    data = request.json
    print(data)
    # emit(cmd.replace('cs_', 'sc_'), request.json,
    #  broadcast=True, namespace=namespace_rkb)
    return 'gameView'
