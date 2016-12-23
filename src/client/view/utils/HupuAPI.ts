import { $post, proxy } from './WebJsFunc';
declare let $;
export let getHupuWS = (callback) => {
    let url = 'http://test.jrstvapi.hupu.com/zhubo/getNodeServer'
    $.get(proxy('http://test.jrstvapi.hupu.com/zhubo/getNodeServer'), (res) => {
        var a = JSON.parse(res);
        if (a && a.length) {
            callback(a[0])
        }
        else console.error(url);
    })
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