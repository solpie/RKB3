# -*- coding: utf-8 -*-
import requests

import json
import codecs
with codecs.open('eventDoc.json', 'r','utf-8') as f:
    event_json = json.load(f)
    db_url = event_json['dbUrl']
    print(db_url)

    r1 = requests.get(db_url)
    doc = r1.json()[0]
    print(doc['_id'])
    putUrl = 'http://rtmp.icassi.us:8090/event/' + doc['_id']

    event_jstr = json.dumps(event_json,ensure_ascii=False)
    headers = {'Content-Type': 'application/json'} 
     
    # print(event_json)
    print(event_json['playerMap'])
    # doc['doc'] = event_jstr
    doc['event_json'] = event_jstr

    put1 = requests.put(putUrl, data=doc)
    print(put1.status_code)
    print('上传之后8090去到event开打数据再保存一次')

