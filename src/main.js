import Vue from 'vue';
import App from './App.vue';
import 'lib-flexible/flexible.js'
import router from './router/index'

import Vant from 'vant';
import 'vant/lib/index.css';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Service from './utils/request.js'
import store from './store/index'
Vue.use(Vant);
Vue.config.productionTip = false;
Vue.prototype.$http = Service
// 关闭进度环
NProgress.configure({
  showSpinner: false
});
router.beforeEach((to, from, next) => {
  if(to.meta.TabbarShow==true){
    
  }else{
    NProgress.start();
  }
  next()
});
// 路由跳转后钩子函数中 - 执行进度条加载结束
router.afterEach(() => {
  NProgress.done();
});
new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
