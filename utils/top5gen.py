# -*- coding: utf-8 -*-
import xdrlib
import sys
import codecs
import xlrd
import json


def open_excel(file='top5.xlsx'):
    try:
        data = xlrd.open_workbook(file)
        return data
    except (Exception, e):
        pass
# 根据索引获取Excel表格中的数据   参数:file：Excel文件路径     colnameindex：表头列名所在行的所以
# ，by_index：表的索引
# {
#         "name": "宋流轩",
#         "hupuID": "新锐宋教练",
#         "img": "p6",
#         "hwa": [183, 75, 21],
#         "tag1": "变相狂魔",
#         "info": "实力榜排名第24名 \n路人王广州站冠军 \n多次参与冠军赛 \n2018年总决赛成员"
#     },


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
    for i in range(0, 5):
        n = table.cell(row + i, 0).value
        # hupuID = table.cell(1 + i, 1).value
        hupuID = ''
        a = int(table.cell(row + i, 1).value)
        h = int(table.cell(row + i, 2).value)
        w = int(table.cell(row + i, 3).value)
        t = table.cell(row + i, 4).value
        # t = ''
        info = table.cell(row + i, 5).value.replace(',', '\n').replace(' ', '\n').replace('，','\n')
        plist.append({'name': n, 'hupuID': hupuID,
                      'hwa': [h, w, a], 'tag1': t,'info':info,'img':'p'+str(i+1)})

    print(json.dumps(plist, ensure_ascii=False))
    return plist


def main():
    tables = excel_table_byindex('top5.xlsx')
    # for row in tables:
    #     print(row)

if __name__ == "__main__":
    main()
