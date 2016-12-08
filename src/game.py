from baseDB import BaseDB


class PlayerDoc:
    id = None
    name = None
    avatar = None
    portrait = None
    team = None
    height = None
    weight = None
    hp = None
    winCount = None
    loseCount = None


class PlayerModel(object):

    def __init__(self):
        self.db = BaseDB('./db/player.db')
        # self.make32Player()
    def all(self):
        return self.db.findAll()

    def make32Player(self):
        for i in range(32):
            id = str(i+1)
            self.db.insert({"id": i+1, 'name': "player" + id})


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

from flask import Blueprint,jsonify
gameView = Blueprint('gameView', __name__)
#/game/


@gameView.route('/')
def gameIndex():
    return 'gameView'


@gameView.route('/player')
def findAllPlayer():
    return jsonify(actModel.playerModel.all())

@gameView.route('/start')
def startGame():
    return 'gameView'
