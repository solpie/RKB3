import os
# print(os.path.realpath(__file__))
# server_path = os.path.realpath(__file__)
serverConf = {"port": 80, "path": '.',
              "views": [], "reqHeaders": [], "resHeaders": []}

serverConf["path"] = os.path.dirname(__file__)
if serverConf["path"] == "":
    serverConf["path"] = os.path.realpath(".")
print("server root:", serverConf["path"])
# config
import configparser

config = configparser.RawConfigParser()


def loadConf():
    config.read(os.path.join(serverConf["path"], '.cfg'))
    serverConf["port"] = config.get('server', 'port')
    serverConf["views"] = config.get('server', 'views')
    serverConf["reqHeaders"] = str(
        config.get('server', 'reqHeaders')).split(",")
    serverConf["resHeaders"] = str(
        config.get('server', 'resHeaders')).split(",")
    print("serverConf:", serverConf)

loadConf()

# web server
from flask import Flask, render_template, session, request, make_response
from flask_socketio import SocketIO, emit, disconnect

# Set this variable to "threading", "eventlet" or "gevent" to test the
# different async modes, or leave it set to None for the application to choose
# the best option based on installed packages.
from engineio import async_eventlet
async_mode = "eventlet"


app = Flask(__name__, static_url_path='')
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, async_mode=async_mode)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/<viewname>')
@app.route('/<viewname>/')
def view(viewname):
    if viewname in serverConf["views"]:
        return render_template(viewname + '.html')
    return viewname
# ui img


@app.route('/img/<path:path>')
def img(path):
    print(path)
    return ''
# proxy
import requests


@app.route('/proxy', methods=['GET', 'POST'])
def proxy():
    req_headers = dict()
    for h in serverConf["reqHeaders"]:
        req_headers[h] = request.headers[h]
    url = ""
    if request.method == "GET":
        url = request.args.get('url', '')
        r = requests.get(url, headers=req_headers)
        res = make_response(r.content)
    # if request.method == "POST":
    #     r = requests.post(url, headers=req_headers)

        res_headers = dict()
        for h in serverConf["resHeaders"]:
            res_headers[h] = r.headers[h]
        res.headers = res_headers
        return res
    if request.method == "POST":
        url = request.values.get("url")
        r = requests.post(url, headers=req_headers)
        return 'ok'

namespace_rkb = '/rkb'


@socketio.on('my_event', namespace=namespace_rkb)
def test_message(message):
    session['receive_count'] = session.get('receive_count', 0) + 1
    emit('my_response',
         {'data': message['data'], 'count': session['receive_count']})


@socketio.on('my_broadcast_event', namespace=namespace_rkb)
def test_broadcast_message(message):
    session['receive_count'] = session.get('receive_count', 0) + 1
    emit('my_response',
         {'data': message['data'], 'count': session['receive_count']},
         broadcast=True)


@socketio.on('disconnect_request', namespace=namespace_rkb)
def disconnect_request():
    session['receive_count'] = session.get('receive_count', 0) + 1
    emit('my_response',
         {'data': 'Disconnected!', 'count': session['receive_count']})
    disconnect()


@socketio.on('connect', namespace=namespace_rkb)
def test_connect():
    emit('my_response', {'data': 'Connected', 'count': 0})


@socketio.on('disconnect', namespace=namespace_rkb)
def test_disconnect():
    print('Client disconnected', request.sid)


if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=int(serverConf["port"]), debug=True)
