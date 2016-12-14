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


class GameModel(object):

    def __init__(self):
        BaseDB('./db/game.db')


class ActivityModel:

    def __init__(self):
        self.gameModel = GameModel()
        self.playerModel = PlayerModel()

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
