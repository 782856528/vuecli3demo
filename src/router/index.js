import Router from 'vue-router'

import Vue from 'vue'
import commom from "./common"
const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)
let routerList=[];
export default new Router({
    mode:"history",
    routes: routerList.concat(commom)
});
