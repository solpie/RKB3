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
    callback('tcp.lb.liangle.com:3081')
}

//开题延时
export function setClientDelay( sec, callback) {
    let url = `http://api.liangle.com/api/passerbyking/time/diff?ctd=`+sec
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
export function getRoundRawDate(gameId, callback) {
    let url = 'http://api.liangle.com/api/passerbyking/game/match/' + gameId
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
