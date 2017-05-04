require('../../../static/css/bulma.min.css');
require(`script!./../../libs/jquery.min.js`);
require(`script!./../../libs/jquery.min.js`);
require(`script!./../../libs/vue/vue.min.js`);
require(`script!./../../libs/vue/vue-router.min.js`);

declare let VueRouter;
declare let Vue;
import { Navbar } from './navbar/Navbar';
import { gameMonthView } from './gameMonth/GameMonth';

let routes = [
    {
        path: '/', name: 'home',
        components: { content: gameMonthView, Navbar: Navbar }
    }
];
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