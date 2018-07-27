# -*- coding: utf-8 -*-
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

import os


def addToClipBoard(text):
    command = 'echo ' + text.strip() + '| clip'
    os.system(command)


def excel_table_byindex(file='file.xls', colnameindex=0, by_index=0):
    data = open_excel(file)
    table = data.sheets()[by_index]
    nrows = table.nrows  # 行数
    ncols = table.ncols  # 列数
    colnames = table.row_values(colnameindex)  # 某一行数据
    plist = []
    v = table.cell(2, 0)
    print(v)
    row = 1
    playerNum = 16
    playerMap = {}
    for i in range(0, playerNum):
        n = table.cell(row + i, 0).value
        # hupuID = table.cell(1 + i, 1).value
        a = int(table.cell(row + i, 1).value)
        h = int(table.cell(row + i, 2).value)
        w = int(table.cell(row + i, 3).value)
        print(n, 'p' + str(i + 1))
        # t = ''
        info = table.cell(row + i, 4).value.replace(',', '\n').replace(' ',
                                                                       '\n').replace('，', '\n').replace('\t', '').replace('、', '\n')
        plist.append({'name': n,                      'hwa': [
                     h, w, a], 'title': info, 'playerId': 'p' + str(i + 1)})
        playerMap['p' + str(i + 1)] = plist[-1:][0]

    jstr = json.dumps(playerMap, ensure_ascii=False)
    addToClipBoard(jstr)
    print(jstr)
    return plist


def main():
    tables = excel_table_byindex('player.xls')
    # for row in tables:
    #     print(row)

if __name__ == "__main__":
    main()
