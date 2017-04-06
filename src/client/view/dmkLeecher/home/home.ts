import { VueBase } from '../../utils/VueBase';
/**
 * Created by toramisu on 2016/10/24.
 */
declare var $;
class HomeView extends VueBase {
    template = require('./home.html');
    constructor() {
        super();
        VueBase.initProps(this);
    }

    created() {
    }

    mounted() {
    }

    methods = {
    };
}

export var dmkhomeView = new HomeView();