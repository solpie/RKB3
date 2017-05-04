import { VueBase } from '../../utils/VueBase';
declare const $;
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

class GameMonth extends VueBase {
    template = require('./gameMonth.html');
    db = VueBase.PROP

    constructor() {
        super();
        VueBase.initProps(this);
    }

    created() {
        $.get('/db/find/519', (res) => {
            console.log(res)
        })
        // $post('/db/update/519', { id: 519, test: 233 }, () => {

        // })
    }
}
export let gameMonthView = new GameMonth()