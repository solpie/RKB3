# -*- coding: utf-8 -*-
import requests
import os
import xdrlib
import sys
import codecs
import xlrd
import json


def open_excel(file='player.xls'):
    try:
        data = xlrd.open_workbook(file)
        return data
    except (Exception, e):
        pass
# 根据索引获取Excel表格中的数据   参数:file：Excel文件路径     colnameindex：表头列名所在行的所以
# ，by_index：表的索引


def addToClipBoard(text):
    command = 'echo ' + text.strip() + '| clip'
    os.system(command)

avatar_url = 'http://rtmp.icassi.us:8092/img/player/0602/'

def excel_table_byindex(file='file.xls', num=0):
    data = open_excel(file)
    by_index = 0
    table = data.sheets()[by_index]
    plist = []
    plist_for_lowerthird = []
    v = table.cell(2, 0)
    print(v)
    row = 1
    playerNum = 9
    if num > 0:
        playerNum = num
    playerMap = {}
    avatar_url = table.cell(29, 0).value
    for i in range(0, playerNum):
        n = table.cell(row + i, 0).value
        # hupuID = table.cell(1 + i, 1).value
        h = int(table.cell(row + i, 1).value)
        w = int(table.cell(row + i, 2).value)
        a = int(table.cell(row + i, 3).value)
        print(n, 'p' + str(i + 1))
        # t = ''
        title = table.cell(row + i, 4).value.replace(',', '\n').replace(' ',
                                                                        '\n').replace('，', '\n').replace('\t', '').replace('、', '\n')
        # info = ''

        info = table.cell(row + i, 5).value
        plist.append({'name': n,                      'hwa': [
                     h, w, a], 'title': title, 'playerId': 'p' + str(i + 1), 'info': info
        })
        playerMap['p' + str(i + 1)] = plist[-1:][0]
        plist_for_lowerthird.append(n)
    playerMap['p0'] = {"name": "", "hwa": [0, 0, 0],
                       "title": "", "playerId": "p0", "info": ""}
    jstr = json.dumps(playerMap, ensure_ascii=False)
    addToClipBoard(jstr)
    print(jstr)
    # print(plist_for_lowerthird)
    return playerMap


def uploadTo8090():
    player_url = 'http://rtmp.icassi.us:8090/player2/'
    res = requests.get(player_url)
    player_arr = res.json()
    print(player_arr)
    return player_arr




def main():

    if len(sys.argv) > 1:
        num = int(sys.argv[1])
        print('num', num)

    playerMap = excel_table_byindex('player.xlsx', num=num)
    player_arr = uploadTo8090()
    putUrl = 'http://rtmp.icassi.us:8090/player2/'
    for p in player_arr:
        if p['player_id'] in playerMap:
            pdata = playerMap[p['player_id']]
            p2  = {}
            p2['name'] = pdata['name']
            p2['height'] = pdata['hwa'][0]
            p2['weight'] = pdata['hwa'][1]
            p2['age'] = pdata['hwa'][2]
            p2['title'] = pdata['title']
            p2['info'] = pdata['info']
            p2['avatar'] = avatar_url+p['player_id']+'.png'
            put1_res = requests.put(putUrl + p['_id'], data=p2)
            if put1_res.status_code==200:
                print(p['name'], put1_res.status_code)
            else:
                print(p['name'], put1_res.text)
    # for row in tables:
    #     print(row)


if __name__ == "__main__":
    main()
