# -*- coding: utf-8 -*-
import requests

import json
dbUrl = 'http://rtmp.icassi.us:8090/event?idx=0602'

r1 = requests.get(dbUrl)
doc = r1.json()[0]
print(doc['_id'])
putUrl = 'http://rtmp.icassi.us:8090/event/' + doc['_id']


# r = requests.put('http://rtmp.icassi.us:8090/event?idx=0602_0')
with open('eventDoc.json', 'rb') as f:
    event_json = json.load(f)
    
    event_jstr = json.dumps(event_json)
    headers = {'content-type': 'application/json',
               'data': event_jstr}
    # print(event_json)
    print(event_json['playerMap'])
    doc['doc'] = event_jstr
    # doc['playerMap'] = event_jstr
    put1 = requests.put(putUrl, doc)
    print(put1.status_code)