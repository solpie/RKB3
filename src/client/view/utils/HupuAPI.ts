import { $post, proxy } from './WebJsFunc';
declare let $;
export let getHupuWS = (callback) => {
    // let url = 'http://test.jrstvapi.hupu.com/zhubo/getNodeServer'
    // $.get(proxy(url), (res) => {
    //     var a = JSON.parse(res);
    //     if (a && a.length) {
    //         callback(a[0])
    //     }
    //     else console.error(url);
    // })
    let ws = 'tcp.lb.liangle.com:3081'
    console.log('ws:', ws);
    callback(ws)
    // callback('tcp.lb.liangle.com:3081')
}

//开题延时
export function setClientDelay(gameId, sec, callback) {
    let url = `http://pre.liangle.com/api/pbk/event/delay/` + gameId
    let data = { ':game_id': gameId + "", ctd: sec + '' }
    console.log(setClientDelay, data)
    $post(proxy(url), data, callback)
}

export function getClientDelay(gameId, callback) {
    let url = `http://pre.liangle.com/api/pbk/event/delay/` + gameId
    _get(proxy(url), callback)
}
export function getPreRoundPlayer(gameId, callback) {
    let url = 'http://api.liangle.com/api/passerbyking/game/wheel/ready/' + gameId
    _get(proxy(url), callback)
}

export function getAllPlayer(gameId, callback) {
    let url = 'http://api.liangle.com/api/passerbyking/game/players/' + gameId
    _get(proxy(url), callback)
}

export function getRoundList(callback) {
    let url = 'http://api.liangle.com/api/passerbyking/game/list'
    _get(proxy(url), callback)
}
export function getRoundRawData(gameId, callback) {
    let url = 'http://api.liangle.com/api/passerbyking/game/match/' + gameId
    _get(proxy(url), callback)
}
//实力榜
export function getRanking(callback) {
    let url = 'http://lrw.smartcourt.cn/getRanking'
    let data = { page: 1, pageSize: 100 }
    $post(proxy(url), data, callback)
}

export function getCurRanking(hupuIdArr, callback) {
    let url = 'http://lrw.smartcourt.cn/queryUsersRanking'
    let data = hupuIdArr
    // let data = { userids: hupuIdArr }
    $post(proxy(url), data, callback)
}
export function getGroupData(gameId, callback) {
    let url = 'http://api.liangle.com/api/passerbyking/game/group/' + gameId
    _get(proxy(url), callback)
}

export function getRankSection(section, callback) {
    let url = 'http://api.liangle.com/api/division/power/rank/' + section
    _get(proxy(url), callback)
}


let _get = (url, callback) => {
    $.get(url, callback)
}

export let getPlayerDoc = (callback) => {
    $.get('/game/player', (res) => {
        callback(res)
    })
}

export let updatePlayerDoc = (playerDoc, callback) => {
    $post('/game/player/update', playerDoc, callback)
}

export let getGameInfo = (callback) => {
    _get('/game/', callback)
}

export let _avatar = (filename) => {
    return '/img/player/avatar/' + filename
}

export let getTop5Data = (callback) => {
    _get('/db/top5.json?t=' + new Date(), callback)
}
export let getVsTitleData = (callback) => {
    _get('/db/vs.json?t=' + new Date(), callback)
}



export function getCommentators(callback) {
    let url = 'http://rtmp.icassi.us:8090/commentator'
    _get(proxy(url), callback)
}