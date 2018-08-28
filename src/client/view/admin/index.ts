
/**
 * Created by toramisu on 2016/10/22.
 */
require('../../../static/css/bulma.min.css');
require('../../../static/css/worldwar.css');

require(`script!./../../libs/jquery.min.js`);
require(`script!./../../libs/socket.io-1.4.5.min.js`);
require(`script!./../../libs/qrcode.min.js`);
require(`../../libs/cropper.min.css`);
require(`script!./../../libs/vue/vue.min.js`);
require(`script!./../../libs/vue/vue-router.min.js`);
import { Navbar } from "./navbar/Navbar";
import { homeView } from "./home/home";

import { playerView } from './player/player';
import { GameAdmin } from './gameAdmin/GameAdmin';
//////////////
var routes = [
    {
        path: '/', name: 'home',
        components: { content: homeView, Navbar: Navbar, GameAdmin: GameAdmin }
    },
    {
        path: '/player', name: 'player',
        components: { content: playerView, Navbar: Navbar },
    },
    // {
    //     path: '/panel', name: 'panel',
    //     components: { content: PanelView, Navbar: Navbar },
    // },
    // {
    //     path: '/rank', name: 'rank',
    //     components: { content: rankView, Navbar: Navbar },
    // }
];

declare let VueRouter;
declare let Vue;
let router = new VueRouter({
    routes // short for routes: routes
});

router.afterEach((to, from) => {
    let toPath = to.path;
    router.app.active = toPath.split("/")[1];
});

let app = new Vue({
    router
}).$mount('#app');
