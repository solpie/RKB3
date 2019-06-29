# -*- coding: utf-8 -*-
import requests

import json
import codecs
d = {"action": "list_motions_with_ids"}
d = {"action": "list_layers", "parent": "testlayer"}
d = {"action": "set_text", "layer": 'testlayer\\name', "layer_id": [
    "18446464397274660960", "18446464397711790128"], "value": "content", "channel": "preview"}

headers = {'Content-Type': 'application/json'}
r = requests.post(url='http://192.168.1.96:5201',
                  headers=headers, data=json.dumps(d))
# r = requests.post(url='http://192.168.1.96:5201',
#                   headers=headers, data=json.dumps(d))
print(r.json())

# {'name': 'testlayer', 'id': '18446464397274660960'}
