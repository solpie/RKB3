import { proxy } from './WebJsFunc';
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