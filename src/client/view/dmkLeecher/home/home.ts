import { VueBase } from '../../utils/VueBase';
/**
 * Created by toramisu on 2016/10/24.
 */
declare var $;
declare var io;
declare var Vue;
let opReq = (url: string, param: any, callback: any) => {
    $.ajax({
        url: url,
        type: 'post',
        data: JSON.stringify(param),
        headers: { "Content-Type": "application/json" },
        dataType: 'json',
        success: callback
    });
}
class HomeView extends VueBase {
    template = require('./home.html');
    dmkArrMap = VueBase.PROP
    serverUrl  = VueBase.PROP
    constructor() {
        super();
        VueBase.initProps(this);
    }

    created() {
        this.serverUrl = 'http://'+window.location.host + '/dmk'
        this.conDmkServer()
        this.dmkArrMap = {}
    }
    conDmkServer() {
        let LocalIO = io.connect('/dmk');
        LocalIO.on('connect', () => {
            console.log('dmk server connect!')
        })
            .on('dmk', (data) => {
                console.log('dmk brocast', data)
                Vue.set(this.dmkArrMap,data.host,data)
                // this.dmkArrMap[data.host] = data
            })
    }
    mounted() {

    }
    methods = {
        onTest: function () {
            opReq('/dmk', { host: 'live.qq.com', dmkArr: [{ user: 'haha', content: 'dmk22' }] }, () => {

            })
        }
    };
}

export var dmkhomeView = new HomeView();