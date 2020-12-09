/*
 * @Author: your name
 * @Date: 2020-11-19 16:43:30
 * @LastEditTime: 2020-11-20 14:25:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \work\rzkj\src\router\index.js
 */
/*
 * @Author: your name
 * @Date: 2020-11-19 16:43:30
 * @LastEditTime: 2020-11-19 17:14:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \work\rzkj\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
const titles = {
  Regist: "注册",
  Forget: "忘记密码",
  Home: "做任务",
  Mine: "个人中心",
  MyProfit: "我的收益",
  TeamProfit: "团队收益",
  Payment: "缴费中心",
  Subordinate: "管理下级",
  Invitation: "邀请码",
  EditPwd: "修改密码",
  PayRecord: "缴费记录",
  PaySuccess: "缴费成功"
};

Router.prototype.goBack = function () {
  this.isBack = true;
  window.history.go(-1);
};

const pages = require.context('.././views', true, /\.vue$/);
const routes = pages.keys().map(fileName => {
  const componentConfig = pages(fileName);
  const componentArray = fileName.replace(/^\.\//, '').replace(/\.vue$/, '').split('/');
  const componentName = componentArray[componentArray.length - 1];
  const component = Vue.component(
    componentName.replace(/\//, '-'),
    componentConfig.default || componentConfig
  );

  return {
    path: '/' + componentName,
    name: componentName,
    meta: {
      layer: componentArray.length,
      title: titles[componentName]
    },
    component
  };
});

const router = new Router({
  routes: [{
    path: '/',
    redirect: 'Home'
  }, ...routes]
});

export default router;