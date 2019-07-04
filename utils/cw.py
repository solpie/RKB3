# -*- coding: utf-8 -*-
import requests

import json
import codecs
d = {"action": "list_motions_with_ids"}
d = {"action": "list_layers", "parent": "Motion 1"}
d = {"action": "set_text", "layer": 'Motion 1\\Text1', "layer_id": [
    "18446462601005458512"], "value": "11111111"}

headers = {'Content-Type': 'application/json'}
r = requests.post(url='http://192.168.1.60:5201',
                  headers=headers, data=json.dumps(d))
print(r.json())
d = {"action": "play_motions", "motions": ["Motion 1"], "motion_ids": [
    "18446462600448552944"], "channel": "preview"}
r = requests.post(url='http://192.168.1.60:5201',
                  headers=headers, data=json.dumps(d))
# r = requests.post(url='http://192.168.1.96:5201',
#                   headers=headers, data=json.dumps(d))
print(r.json())

# {'name': 'testlayer', 'id': '18446464397274660960'}
