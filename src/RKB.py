import os
# print(os.path.realpath(__file__))
# server_path = os.path.realpath(__file__)
serverConf = {"port": 80, "path": '.',
              "views": [], "reqHeaders": [], "resHeaders": [], "db": []}

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
    serverConf["reqHeaders"] = str(
        config.get('server', 'reqHeaders')).split(",")
    serverConf["resHeaders"] = str(
        config.get('server', 'resHeaders')).split(",")
    serverConf["db"] = str(
        config.get('db', 'path')).split(",")
    print("serverConf:", serverConf)
    serverConf["views"] = ["admin", "panel", 'dmk','webDB']
loadConf()

# web server
from flask import Flask, render_template, session, request, make_response, redirect
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
    return redirect('/admin')
    # return render_template('index.html')

import time


@app.route('/<viewname>')
@app.route('/<viewname>/')
def view(viewname):
    if viewname in serverConf["views"]:
        return render_template(viewname + '.html', time=int(time.time()))
    return viewname

# proxy
import requests

import base64


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

        if 'image' in res_headers["Content-Type"]:
            encoded_string = b"data:image/png;base64," + \
                base64.b64encode(r.content)
            return encoded_string

        res.headers = res_headers
        return res

    if request.method == "POST":
        url = request.values.get("url")
        r = requests.post(url, headers=req_headers)
        return 'ok'
# auto git pull
import os
from subprocess import Popen, PIPE


@app.route('/git/<param>', methods=['GET', 'POST'])
def git(param):
    proc = Popen(['git', param], stdin=PIPE,
                 stdout=PIPE, stderr=PIPE, universal_newlines=True)
    (stdout, stderr) = proc.communicate()

    return 'git ' + param + '\n' + stdout

# panel router

from game import actModel


@app.route('/panel/online/<cmd>', methods=['POST'])
def on_panel_cmd(cmd):
    print(cmd, request.json)
    if '_' in request.json:
        emit(cmd.replace('cs_', 'sc_'), request.json,
             broadcast=True, namespace=namespace_rkb)
    else:
        actModel.onCmd(cmd, request.json)
    return 'ok'

namespace_rkb = '/rkb'


@socketio.on('connect', namespace=namespace_rkb)
def client_connect():
    print('client con')


@socketio.on('disconnect', namespace=namespace_rkb)
def test_disconnect():
    print('Client disconnected', request.sid)

# gameView
from game import gameView

app.register_blueprint(gameView, url_prefix='/game')
# onlineView
from online import onlineView
app.register_blueprint(onlineView, url_prefix='/online')
# webDB view
from webDB import webDBView
app.register_blueprint(webDBView, url_prefix='/db')
# dmkLeecher
namespace_dmk = '/dmk'


@app.route('/dmk', methods=['POST'])
def on_dmk():
    # print('dmk post', request.json)
    emit('dmk', request.json,
         broadcast=True, namespace=namespace_dmk)
    return 'ok'


@socketio.on('connect', namespace=namespace_dmk)
def client_connect_dmk():
    print('client con')


if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=int(serverConf["port"]), debug=True)
