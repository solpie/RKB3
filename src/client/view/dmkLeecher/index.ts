/**
 * Created by toramisu on 2016/10/22.
 */
require('../../../static/css/bulma.min.css');
// require('../../../static/css/jsoneditor.min.css');
require(`script!./../../libs/socket.io-1.4.5.min.js`);

require(`script!./../../libs/jquery.min.js`);
// require(`script!./../../libs/jsoneditor.min.js`);
require(`script!./../../libs/vue/vue.min.js`);
require(`script!./../../libs/vue/vue-router.min.js`);
import { dmkhomeView } from './home/home';
import { NavbarDmk } from './navbar/Navbar';

//////////////
var routes = [
    {
        path: '/', name: 'home',
        components: { content: dmkhomeView, Navbar: NavbarDmk }
    }
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
