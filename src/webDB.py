from flask import Blueprint, jsonify, request
webDBView = Blueprint('webDBView', __name__)

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

@webDBView.route('/update/<idx>', methods=['POST'])
def udpateDoc(idx):
    newDoc = request.json
    doc = wb.db.find({'id': idx})
    if doc:
        wb.db.update({'id', newDoc})
    else:
        wb.db.insert(newDoc)
    return 'ok'
