//Array.sort(ascendingProp('prop'))
//升序
// import {escape} from "querystring";
declare let escape;
export function ascendingProp(prop) {
    return function (a, b) {
        return a[prop] - b[prop];
    }
}
//降序
export function descendingProp(prop) {
    return function (a, b) {
        return b[prop] - a[prop];
    }
}
export function randomPop(arr) {
    let idx = Math.floor(Math.random() * arr.length)
    let item = arr[idx]
    arr.splice(idx, 1)
    return item
}
export function mapToSortArray(map, prop, sortFunc) {
    let arr = [];
    for (let k in map) {
        arr.push(map[k]);
    }
    arr.sort(sortFunc(prop));
    return arr;
}
//object clone
export function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
export function cloneMap(map) {
    let a = {}
    for (let k in map) {
        a[k] = map[k]
    }
    return a
}
//转换唯一数组
export function mapToArr(map, clone?) {
    let a = [];
    for (let k in map) {
        a.push(map[k])
    }
    if (clone)
        a = JSON.parse(JSON.stringify(a));
    return a;
}
export function arrToMap(arr, key) {
    let m = {}
    for (let item of arr) {
        m[item[key]] = item
    }
    return m
}
//数组相同元素个数
export function arrCountSame(arrA: Array<any>, arrB: Array<any>) {
    let n = 0;
    for (let i = 0; i < arrB.length; i++) {
        let obj = arrB[i];
        if (arrA.indexOf(obj) > -1) {
            n++;
        }
    }
    return n;
}
// Array.sort().filter(arrUniqueFilter)
export function arrUniqueFilter(el, i, a): boolean {
    return i == a.indexOf(el);
}


export function loadImg(path1, callback, onerror?) {
    let img = new Image();
    img.onload = () => {
        callback(img);
    };
    if (onerror != null) {
        img.onerror = (e) => {
            onerror(e)
        }
    }
    img.src = path1;
}

// arr.push({name: 'itemBg', url: '/img/panel/stage1v1/ft/ftRankPlayer.jpg'});
export function loadImgArr(pathArr, callback) {
    let count = pathArr.length;
    let imgCollection;
    let isArr;

    function onLoadImg() {
        count--;
        if (count === 0) {
            count = -1;
            callback(imgCollection);
        }
    }

    if (count && pathArr[0].hasOwnProperty('name') && pathArr[0].hasOwnProperty('url')) {
        isArr = false;
        imgCollection = {};
    }
    else {
        isArr = true;
        imgCollection = [];
    }

    let img;
    let url;
    for (let i = 0; i < pathArr.length; i++) {
        let p = pathArr[i];
        img = new Image();
        if (isArr) {
            imgCollection.push(img);
            url = p;
        }
        else {
            imgCollection[p.name] = img;
            url = p.url;
        }
        img.onload = onLoadImg;
        img.src = url;
    }
}
export function combineArr(arr, num) {
    let r = [];
    (function f(t, a, n) {
        if (n == 0) {
            return r.push(t);
        }
        for (let i = 0, l = a.length; i <= l - n; i++) {
            f(t.concat(a[i]), a.slice(i + 1), n - 1);
        }
    })([], arr, num);
    return r;
}

export function formatSecond(sec, isSecOnly = false, minStr = ":", secStr = "") {
    let min = Math.floor(sec / 60);
    let s = sec % 60;
    let strMin = min + "";
    let strSec = s + "";
    if (min < 10)
        strMin = "0" + strMin;
    if (s < 10)
        strSec = "0" + strSec;
    if (isSecOnly)
        return strSec
    return strMin + minStr + strSec + secStr;
}

export function format10ms(ms10, isSecOnly = false, minStr = ":", secStr = "") {
    let sec = Math.floor(ms10 / 100)
    let min = Math.floor(sec / 60);
    let s = sec % 60;
    let ms = ms10 % 100
    let strMin = min + "";
    let strSec = s + "";
    let str10ms = ms + ""
    if (min < 10)
        strMin = "0" + strMin;
    if (s < 10)
        strSec = "0" + strSec;
    if (ms < 10)
        str10ms = '0' + str10ms
    if (isSecOnly)
        return strSec + secStr + '.' + str10ms
    return strMin + minStr + strSec + secStr + '.' + str10ms;
}

export function getLength(str) {
    ///<summary>获得字符串实际长度，中文2，英文1</summary>
    ///<param name="str">要获得长度的字符串</param>
    let realLength = 0, len = str.length, charCode = -1;
    for (let i = 0; i < len; i++) {
        charCode = str.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128) realLength += 1;
        else realLength += 2;
    }
    return realLength;
}
export function cnWrap(str, len, limit = 0) {
    let str_line_length = 0;
    let str_len = str.length;
    let str_cut = new String();
    let str_out = '';
    let total_len = 0
    for (let i = 0; i < str_len; i++) {
        if (limit != 0 && total_len > limit)
            break;
        let a = str.charAt(i);
        str_line_length++;
        total_len++
        if (escape(a).length > 4) {
            //中文字符的长度经编码之后大于4
            str_line_length++;
            total_len++
        }
        str_cut = str_cut.concat(a);
        if (str_line_length >= len) {
            str_out += str_cut.concat('\n');
            str_cut = new String();
            str_line_length = 0;
        }
    }
    str_out += str_cut;
    return str_out;
}
export let getUrlFilename = (url) => {
    let a = url.split('/');
    let filename = a[a.length - 1];
    return filename;
}

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
export let DateFormat = function (date, fmt) { //author: meizz
    let o = {
        "M+": date.getMonth() + 1,                 //月份
        "d+": date.getDate(),                    //日
        "h+": date.getHours(),                   //小时
        "m+": date.getMinutes(),                 //分
        "s+": date.getSeconds(),                 //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds()             //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};
export function paddy(number, pad_count, c?) {
    var pad_char = typeof c !== 'undefined' ? c : '0';
    var pad = new Array(1 + pad_count).join(pad_char);
    return (pad + number).slice(-pad.length);
}