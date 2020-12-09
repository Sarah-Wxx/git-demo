/*
 * @Author: your name
 * @Date: 2020-11-19 16:37:23
 * @LastEditTime: 2020-11-23 10:57:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \work\rzkj\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import util from './assets/js/util'
import Toast from './components/Toast';

Vue.prototype.$u = util;
Vue.prototype.$toast = Toast;
Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//   const arr = ["/Login", "/Regist", "/Forget"];
//   if (!Vue.prototype.$u.getStorage("token") && (arr.findIndex(o => o === to.path) === -1)) {
//       next({path: "/Login"});
//   } else {
//       next();
//   }
// });

Vue.prototype.$u.initContext(router, store);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

