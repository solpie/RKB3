//http://www.pixijs.com/
require(`script!./../../libs/pixi.min.js`);
require(`script!./../../libs/Tween.min.js`);
require(`script!./../../libs/jquery.min.js`);
require(`script!./../../libs/jszip.min.js`);
require(`script!./../../libs/jszip-utils.min.js`);
require(`script!./../../libs/socket.io-1.4.5.min.js`);
require(`script!./../../libs/vue/vue.min.js`);
require(`script!./../../libs/vue/vue-router.min.js`);

import { studio } from './stage5v5/Stage5v5';
import { stageOnlineView } from './stageOnline/StageOnlineView';
import { commonGame } from './stageOnline/commonGame/CommonGame';
import { bracketS5Final } from './stageOnline/bracket/BracketS5Final';
import { lowerThird } from './stageOnline/lowerThird/LowerThird';
import { vsInfo } from './stageOnline/vsInfo/VsInfo';
import { bracket8421 } from './stageOnline/bracket/Bracket8421';
import { scoreRank5 } from './stageOnline/scoreRank/ScoreRank5';
import { bracket16 } from './stageOnline/bracket/Bracket16';
//////////////

let routes = [
    {
        path: '/com',
        components: { default: commonGame }
    },
    {
        path: '/bracketS5',
        components: { default: bracket16 }
        // components: { default: bracket8421 }
        // components: { default: bracketS5Final }
    },
    {
        path: '/bracket8',
        components: { default: bracket8421 }
    },
    {
        path: '/vsInfo',
        components: { default: vsInfo }
    },
    {
        path: '/lowerthird',
        components: { default: lowerThird }
    },
    {
        path: '/rank5',
        components: { default: scoreRank5 }
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