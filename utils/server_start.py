#mongoDB 8090 db path
db_path = 'C:\projects\data\lrw\mongod.lock'
cmd ='\"C:\\Program Files\\MongoDB\\Server\\3.2\\bin\mongod\" -dbpath=C:\projects\data\lrw'
import os
#os.system(cmd)
try:
    os.remove(db_path)
    pass
except FileNotFoundError as e:
    pass