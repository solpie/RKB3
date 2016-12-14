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

class GameModel(object):

    def __init__(self):
        BaseDB('./db/game.db')
        self.gameDoc = GameDoc()

    def startGame(self,data):
        self.gameDoc = GameDoc()

    def setBlood(self,data):
        if data['is1p']:
            self.gameDoc.blood1p+=data['dt']
            if self.gameDoc.blood1p >5:
                self.gameDoc.blood1p = 5
            if self.gameDoc.blood1p <0:
                self.gameDoc.blood1p = 0
            data['blood'] = self.gameDoc.blood1p
            emit('sc_setBlood',data,broadcast=True,namespace='/rkb')
        else:
            self.gameDoc.blood2p+=data['dt']
            if self.gameDoc.blood2p >5:
                self.gameDoc.blood2p = 5
            if self.gameDoc.blood2p <0:
                self.gameDoc.blood2p = 0
            data['blood'] = self.gameDoc.blood2p
            emit('sc_setBlood',data,broadcast=True,namespace='/rkb')


class ActivityModel:

    def __init__(self):
        self.gameModel = GameModel()
        self.playerModel = PlayerModel()

        self.eventMap = dict()
        self.eventMap['cs_setBlood'] = self.gameModel.setBlood

    def onCmd(self,cmd,data):
        print(cmd,data)
        self.eventMap[cmd](data)
        pass

actModel = ActivityModel()

from flask import Blueprint, jsonify
gameView = Blueprint('gameView', __name__)
#/game/

from flask_socketio import emit
from flask import Flask, render_template, session, request, make_response


@gameView.route('/')
def gameIndex():
    return 'gameView'


@gameView.route('/player')
def findAllPlayer():
    return jsonify(actModel.playerModel.all())


@gameView.route('/start',methods=['POST'])
def startGame():
    data = request.json
    print(data)
    # emit(cmd.replace('cs_', 'sc_'), request.json,
            #  broadcast=True, namespace=namespace_rkb)
    return 'gameView'
