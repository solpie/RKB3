import { $post, proxy, $postFormData, $postFormData2 } from './WebJsFunc';
declare let $;
export let hupuWsEvent = { 'START_GAME': 'startGame', 'INIT': 'init' }
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
    if (callback)
        callback(ws)
    return ws
    // callback('tcp.lb.liangle.com:3081')
}
//开题延时
export function setClientDelay(gameId, sec, callback) {
    let url = `http://pre.liangle.com/api/pbk/event/delay/` + gameId
    let data = { ':game_id': gameId + "", ctd: sec + '' }
    console.log(setClientDelay, data)
    $post(proxy(url), data, callback)
}
//冠军排位赛数据上传
export function postRank16(rankData, callback) {
    let url = `http://pre.liangle.com/api/create/game/jifen`
    console.log('postRank16', rankData)
    $postFormData2(proxy(url) + '&form=1', rankData, callback)
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
export function getPlayerInfoFromLiangle(player_id, callback) {
    let url = 'http://api.liangle.com/api/passerbyking/player/info/' + player_id
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
export let getBO3Data = (callback) => {
    _get('/db/BO3.json?t=' + new Date(), callback)
}
////8090 

export function getCommentators(callback) {
    let url = 'http://rtmp.icassi.us:8090/commentator'
    _get(proxy(url), callback)
}

export function getLive(callback) {
    let url = 'http://rtmp.icassi.us:8090/live'

    _get(proxy(url), res => {
        for (let conf of res) {
            if (conf.port == location.port)
                return callback(conf)
        }
        callback(res[2])
    })
}
export function createPlayer(data, callback, errorCallback) {
    let url = 'http://rtmp.icassi.us:8090/player'
    $post(url, data, callback, errorCallback)
}
export function uploadImage(file, callback) {
    let url = 'http://rtmp.icassi.us:8090/upload'
    $post(url, file, callback)
}
let _put = (url, data, callback) => {
    let strJson = JSON.stringify(data)
    console.log('strJson', strJson);
    $.ajax(url, {
        method: 'PUT',
        processData: false,
        contentType: 'application/json',
        data: strJson,
        success: callback,
    })
}
export function updateLiveConf(data, callback) {
    let url = 'http://rtmp.icassi.us:8090/live/' + data._id
    _put(url, data, callback)
}


export function updatePlayer(playerData, callback) {
    let strJson = JSON.stringify(playerData)
    console.log('strJson', strJson);
    $.ajax('http://rtmp.icassi.us:8090/player/' + playerData._id, {
        method: 'PUT',
        processData: false,
        contentType: 'application/json',
        data: strJson,
        success: callback,
    })
    // $post('http://rtmp.icassi.us:8090/player/update/' + playerData._id,playerData,callback)
}
export let getTop5Data2 = (callback) => {
    _get('http://rtmp.icassi.us:8090/player/', callback)
}
export function getPlayer(player_id, callback) {
    let url = 'http://rtmp.icassi.us:8090/player?player_id=' + player_id
    _get(proxy(url), callback)
}

export function getPlayerArr(player_idArr, callback) {
    let a = player_idArr.split('-')
    a.reverse()
    let resArr = []
    console.log('get player arr', a);
    let recurGet = (arr) => {
        if (a.length > 0) {
            let player_id = a.pop()
            getPlayer(player_id, res => {
                resArr.push(res[0])
                recurGet(a)
            })
        }
        else
            callback(resArr)
    }
    recurGet(a)
}

export function getEventConf(event_id, callback) {
    let url = 'http://rtmp.icassi.us:8090/event?event_id=' + event_id
    _get(proxy(url), callback)
}

//国战

export function updateWorldWarDoc(docData, callback) {
    let strJson = JSON.stringify(docData)
    console.log('strJson', strJson);
    $.ajax('http://rtmp.icassi.us:8090/event/' + docData._id, {
        method: 'PUT',
        processData: false,
        contentType: 'application/json',
        data: strJson,
        success: callback,
    })
}
function _putDoc(url, data, callback) {
    let strJson = JSON.stringify(data)
    console.log('strJson', strJson);
    $.ajax(url, {
        method: 'PUT',
        processData: false,
        contentType: 'application/json',
        data: strJson,
        success: callback,
    })
}
export function getLowerthird(pid, callback) {
    let docUrl = 'http://rtmp.icassi.us:8090/lowerthird?pid=' + pid
    $.get(docUrl, res => {
        if (res.length) callback(res[0]);
        else callback(null);
    });
}

export function syncWorldWarPanel3(cb, isSave = false) {
    let docUrl = "http://rtmp.icassi.us:8090/panel/?pid=ww3"
    const getDoc = callback => {
        $.get(docUrl, res => {
            if (res.length) callback(res[0]);
            else callback(null);
        });
    };
    getDoc(doc => {
        cb(doc)
        if (isSave) {
            let putUrl = 'http://rtmp.icassi.us:8090/panel/' + doc._id
            _putDoc(putUrl, doc, res => {
                console.log(res)
            })
        }
    })

}
function updatePanelWorldWar3Doc(docData, callback) {
    let strJson = JSON.stringify(docData)
    console.log('strJson', strJson);
    $.ajax('http://rtmp.icassi.us:8090/panel/' + docData._id, {
        method: 'PUT',
        processData: false,
        contentType: 'application/json',
        data: strJson,
        success: callback,
    })
}