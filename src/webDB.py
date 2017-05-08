from flask import Blueprint, jsonify, request
webDBView = Blueprint('webDBView', __name__)

ns = '/webDB'
from flask_socketio import emit as _emit

def webDBViewInitWS(socketio):
    @socketio.on('connect', namespace=ns)
    def _connect():
        print('webDB client con')
    @socketio.on('disconnect', namespace=ns)
    def _disconnect():
        print('webDB disconnected', request.sid)

@webDBView.route('/cmd/<cmd>', methods=['POST'])
def emitCmd(cmd):
    print(cmd, request.json)
    if '_' in request.json:
        _emit(cmd.replace('cs_', 'sc_'), request.json,
             broadcast=True, namespace=ns)
    return 'ok'

from jsonDB import BaseDB


class WebDB(object):
    def __init__(self):
        self.db = BaseDB('./db/webDB.db')

wb = WebDB()


@webDBView.route('/find/<idx>', methods=['GET'])
def findDoc(idx):
    doc = wb.db.find({'id': int(idx)})
    print(idx,doc)
    return jsonify(doc)

@webDBView.route('/reload', methods=['POST'])
def reloadDB():
    wb.db.reload()
    return 'ok'
    
@webDBView.route('/update/<idx>', methods=['POST'])
def udpateDoc(idx):
    newDoc = request.json
    doc = wb.db.find({'id': int(idx)})
    if doc:
        wb.db.update(newDoc)
    else:
        wb.db.insert(newDoc)
    return 'ok'
