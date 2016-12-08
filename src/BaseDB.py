import json
from pprint import pprint

import string
import random

def _id_gen(size=7, chars=string.ascii_uppercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))


class BaseDb(object):
    __path = None
    __docMap = None

    def __init__(self, path):
        self.__docMap = {}
        self.__path = path
        with open(path) as f:
            for line in f:
                doc = json.loads(line)
                self.__docMap[doc['_id']] = doc
                pprint(doc)
        f.close()
        self.__flush()

    def insert(self, doc):
        _id = _id_gen()
        while _id in self.__docMap:
            _id = _id_gen()
        doc['_id'] = _id
        self.__docMap[_id] = doc
        with open(self.__path, 'a') as f:
            f.writelines(json.dumps(doc) + '\n')
        f.close()

    def __flush(self):
        data = ""
        docNum = 0
        pprint(self.__docMap)
        for _id in self.__docMap:
            doc = self.__docMap[_id]
            docLine = json.dumps(doc)
            data += docLine + '\n'
            docNum += 1
        if data != "":
            with open(self.__path, mode='w') as f:
                f.write(data)
            f.close()

    def update(self, doc, update):
        self.find(doc, update)
        self.__flush()

    def find(self, q, update=None):
        docs = []
        for k in q:
            v = q[k]
            for _id in self.__docMap:
                doc = self.__docMap[_id]
                if k in doc and v == doc[k]:
                    if update:
                        for uKey in update:
                            doc[uKey] = update[uKey]
                    docs.append(self.__clone(doc))
        return docs

    def __clone(self, doc):
        return json.loads(json.dumps(doc))

    def findAll(self):
        docs = []
        for _id in self.__docMap:
            docs.append(self.__clone(self.__docMap[_id]))
        return docs

bDb = BaseDb(".db")
# test
# doc = json.loads('{"test":1}')
# bDb.insert(doc)
# find
docs = bDb.find({"test": 2})
# update
bDb.update({"test": 2}, {"name": 'curry'})
# findAll
docs = bDb.findAll()
pprint(docs)