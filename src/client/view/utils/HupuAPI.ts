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

export function getEventConf(event_idx, callback) {
    let url = 'http://rtmp.icassi.us:8090/event?idx=' + event_idx
    _get(proxy(url), callback)
}

export function getPanelConf2(event_idx, callback) {
    let url = 'http://rtmp.icassi.us:8090/panel/5cb5467f3d09071728811ee5' //+ event_idx
    let playerMap_url = 'http://rtmp.icassi.us:8090/playerMap'
    _get(proxy(playerMap_url), res => {
        let playerArr = res[0].player_all
        _get(proxy(url), res2 => {
            let playerMap = {}
            for (let p of playerArr) {
                playerMap[p.player_id] = p
                p.playerId = p.player_id
                p.avatar = res2.avatarUrl + p.player_id + '.png'
                p.hwa = [p.height, p.weight, p.age]
            }
            console.log('conf player_all', playerMap)

            res2.playerMap = playerMap
            //tofix 
            res2.dbUrl = 'http://rtmp.icassi.us:8090/event?idx=0602'
            callback(res2)
            // }
        })
    })
}

//国战

export function update_event_data(docData, callback) {
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
export function getPlayerMap(callback) {
    let docUrl = 'http://rtmp.icassi.us:8090/playerMap'
    $.get(docUrl, res => {
        if (res.length) callback(res[0]);
        else callback(null);
    });
}

export function getPlayer2(callback) {
    let docUrl = 'http://rtmp.icassi.us:8090/player2'
    $.get(docUrl, res => {
        if (res.length) callback(res);
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

//game poster
export function get_champion_player(gameId, callback) {
    let playerMap_url = "http://test.liangle.com/api/passerbyking/champion/playerlist?game_id=" + gameId
    _get(proxy(playerMap_url), res => {
        // console.log(res.data)
        let playerArr = res.data
        callback(playerArr)
    })
}

export function post_champion_rec(data, callback) {
    let url_post = "http://test.liangle.com/api/passerbyking/champion/game/match"
    // let data = {
    //     'action': "match", data: {
    //         "game_id": 765,
    //         "left_player_id": 630,
    //         "left_puid": 29604309,
    //         "left_score": 0,
    //         "right_player_id": 626,
    //         "right_puid": 29576166,
    //         "right_score": 2,
    //         "left_foul": 0,
    //         "right_foul": 0,
    //         "num": 2,
    //         "game_start": 1478245971,
    //         "game_end": 1478245975,
    //         "status": 2
    //     }
    // }
    // (注:
    //     game_id 路人王轮次id
    //     left_puid 左边球员
    //     left_player_id 当前左边球员id
    //     right_puid  左边球员
    //     right_player_id 右边球员球员id
    //     left_score 左边得分
    //     right_score  右边得分
    //     left_foul  左边犯规
    //     right_foul 右边犯规',
    //     num 当前第几场
    //     game_start  当前轮次比赛开始时间
    //     game_end  当前轮次比赛结束时间
    //     status 当前轮次比赛结果 1:红袖标胜 2:蓝袖标胜 3:红袖标弃权 4:蓝袖标弃权)
    console.log(setClientDelay, data)
    $post(proxy(url_post), data, callback)
}
export function post_champion_rank5(data, callback) {
    let url_post = 'http://test.liangle.com/api/passerbyking/champion/game/match'
    $post(proxy(url_post), data, callback)
}

//base score
export function update_base_score(data, callback) {
    let url = 'http://rtmp.icassi.us:8090/basescore/5d12db245f2be80378b38782'
    _put(url, data, callback)
}