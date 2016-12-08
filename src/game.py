from baseDB import BaseDB
class GameModel(object):
    def __init__(self):
        BaseDB('./game.db')
        pass

from flask import Blueprint
gameView = Blueprint('gameView',__name__)
#/game/
@gameView.route('/')
def gameIndex():
    return 'gameView'