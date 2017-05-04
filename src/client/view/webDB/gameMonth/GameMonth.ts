import { WebDBCmd } from '../../WebDBCmd';
import { VueBase } from '../../utils/VueBase';
declare const $;
declare const io;
let $post = (url, param, callback) => {
    $.ajax({
        url: url,
        type: 'post',
        data: JSON.stringify(param),
        headers: { "Content-Type": "application/json" },
        dataType: 'json',
        success: callback
    });
}
const createTime = new Date().getTime()
class GameMonth extends VueBase {
    template = require('./gameMonth.html');
    db = VueBase.PROP
    isOld = VueBase.PROP
    constructor() {
        super();
        VueBase.initProps(this);
    }

    created() {
        $.get('/db/find/519', (res) => {
            console.log(res)
        })
        let srvIO = io.connect('/webDB')
            .on('connect', (msg) => {
                let url = `/db/cmd/${WebDBCmd.cs_srvCreated}`
                console.log(msg, url)
                $post(url, { _: null, createTime: createTime }, null)
            })
            .on(`${WebDBCmd.sc_srvCreated}`, (data) => {
                if (createTime < data.createTime) {
                    this.isOld = true
                    console.log('old server!!')
                }
            })

        // $post('/db/update/519', { id: 519, test: 233 }, () => {

        // })
    }
}
export let gameMonthView = new GameMonth()