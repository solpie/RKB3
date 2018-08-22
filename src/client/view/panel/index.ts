//http://www.pixijs.com/
require(`script!./../../libs/pixi.min.js`);
require(`script!./../../libs/Tween.min.js`);
require(`script!./../../libs/jquery.min.js`);

require(`script!./../../libs/socket.io-1.4.5.min.js`);
require(`script!./../../libs/vue/vue.min.js`);
require(`script!./../../libs/vue/vue-router.min.js`);

import { koa } from './koa/KOA';
import { studio } from './stage5v5/Stage5v5';
import { stageOnlineView } from './stageOnline/StageOnlineView';
//////////////

let routes = [
    // {
    //     path: '/', name: 'panel',
    //     components: { default: rkbView }
    // },
    // {
    //     path: '/rkb/:op/:game_id',
    //     components: { default: rkbView }
    // },
    {
        path: '/koa/:op',
        components: { default: koa }
    },
    {
        path: '/studio/:op',
        components: { default: studio }
    },
    {
        path: '/ol/:op/:game_id',
        components: { default: stageOnlineView }
    }
];

declare var VueRouter;
declare var Vue;
var router = new VueRouter({
    routes // short for routes: routes
});

router.afterEach((to, from) => {
});
var app = new Vue({
    router
}).$mount('#panel');