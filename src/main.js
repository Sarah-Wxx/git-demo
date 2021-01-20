/*
 * @Author: your name
 * @Date: 2020-12-10 14:14:22
 * @LastEditTime: 2020-12-28 15:46:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\main.js
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: function (createElement) {
    return createElement(App)
  }
})
