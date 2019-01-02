import requests

url = 'http://pre.liangle.com/api/create/game/jifen' # the site where you upload the file
filename = 'rank16_1230.json'

up = {'player_list':(filename, open(filename, 'r'), "multipart/form-data")}

request = requests.post(url, files=up)