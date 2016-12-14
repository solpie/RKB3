// require(`script!./../../libs/createjs/createjs.min.js`);
// require(`script!./../../libs/createjs/easeljs.min.js`);
// require(`script!./../../libs/createjs/tweenjs.min.js`);

//http://www.pixijs.com/
require(`script!./../../libs/pixi.min.js`);
require(`script!./../../libs/Tween.min.js`);
require(`script!./../../libs/jquery.min.js`);

require(`script!./../../libs/socket.io-1.4.5.min.js`);
require(`script!./../../libs/vue/vue.min.js`);
require(`script!./../../libs/vue/vue-router.min.js`);

import { koa } from './koa/KOA';
import { rkbView } from "./stageRKB/RKBOPView";
import { stageOnlineView } from "./stageOnline/StageOnlineView";
//////////////

let routes = [
    {
        path: '/', name: 'panel',
        components: { default: rkbView }
    },
    {
        path: '/rkb/:op/:game_id',
        components: { default: rkbView }
    },
    {
        path: '/koa/:op',
        components: { default: koa }
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