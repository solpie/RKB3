export function getFtlogoUrl(ftName) {
    return '/img/ft/' + ftName + '.jpg'
}

export function getFtLogoUrl2(ftId) {
    return '/img/ft/' + ftId + '.jpg'
    // 1 => 'Gambia',
    //     2 => 'TSH',
    //     3 => 'Fe3O4',
    //     4 => 'FTG',
    //     5 => '3P-Shot',
    //     6 => 'Bravo！',
    //     7 => 'XJBD',
    //     8 => 'GreenLight',
}
const ftName = {
    '1': 'Gambia',
    '2': 'TSH',
    '3': 'Fe3O4',
    '4': 'FTG',
    '5': '3P-Shot',
    '6': 'Bravo!',
    '7': 'XJBD',
    '8': 'GreenLight',
}
export function getFtName(ftId) {
    return ftName[ftId]||''
}

export const noticeJoin = {title:'报名',content:'虎扑路人王全新报名系统已上线！\n编辑你的球员信息一键报名！\nhttp://liangle.com/my'}