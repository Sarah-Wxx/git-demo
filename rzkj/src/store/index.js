/*
 * @Author: your name
 * @Date: 2020-11-19 16:37:23
 * @LastEditTime: 2020-12-04 17:55:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \work\rzkj\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    autoService: false,
    floatyService: false,
    parameterClick: false,
    taskClick: false,
    isToast: false,
    config: {
      startTime: "0",
      endTime: "23",
      kami: "",
      minTime: "30",
      maxTime: "40",
      adTime: 60
    },
    select: {
      min: -1,
      max: -1,
      adTime: 0,
      id: "douYinTask",
      type: "task",
      appName: "抖音",
      alias: "攒攒",
      douYinUrl_u: "https://v.douyin.com/JmdpNqL/",
      zanzanAccount_u: "",
      zanzanPassword_u: "",
      dydzs_u: 0,
      dygzs_u: 0,
      cdydz: 0,
      cdygz: 0,
      check_u_c: false,
      dydz_u_c_t: false,
      dygz_u_c_t: false,
      complete: false,
      invalid: 2,
      invalidC: 0,
      exception: false
    },
    taskList: [
      {
        id: "douYinTask",
        type: "task",
        appName: "抖音",
        alias: "攒攒",
        douYinUrl_u: "https://v.douyin.com/JmdpNqL/",
        zanzanAccount_u: "",
        zanzanPassword_u: "",
        dydzs_u: 0,
        dygzs_u: 0,
        cdydz: 0,
        cdygz: 0,
        check_u_c: false,
        dydz_u_c_t: false,
        dygz_u_c_t: false,
        complete: false,
        invalid: 2,
        invalidC: 0,
        exception: false
      },
      {
        id: "heiMaoTask",
        type: "task",
        appName: "抖音",
        alias: "黑猫",
        hmdouYinUrl_u: "https://v.douyin.com/JmdpNqL/",
        hmAccount_u: "",
        hmPassword_u: "",
        hmdydzs_u: 0,
        hmdygzs_u: 0,
        cdydz: 0,
        cdygz: 0,
        check_u_c: false,
        hmdydz_u_c_t: false,
        hmdygz_u_c_t: false,
        complete: false,
        invalid: 2,
        invalidC: 0,
        exception: false
      },
      {
        id: "quTouTiao",
        type: "view",
        appName: "趣头条",
        complete: false,
        min: 4,
        max: 10,
        adTime: 60,
        thread: null,
        // isInstall: app.getPackageName("趣头条") == null ? "#C0C0C0" : "#20B2AA",
        check_u_c: false,
        exception: false
      },
      {
        id: "douYinJiSu",
        type: "view",
        appName: "抖音极速版",
        complete: false,
        min: -1,
        max: -1,
        adTime: 0,
        thread: null,
        check_u_c: false,
        // isInstall: app.getPackageName("抖音极速版") == null ? "#C0C0C0" : "#20B2AA",
        exception: false
      },
      {
        id: "shuaBaoDuShiPin",
        type: "view",
        appName: "刷宝短视频",
        complete: false,
        min: -1,
        max: -1,
        adTime: 0, thread: null,
        check_u_c: false,
        // isInstall: app.getPackageName("刷宝短视频") == null ? "#C0C0C0" : "#20B2AA",
        exception: false
      },
      {
        id: "kuaiShouJiSu",
        type: "view",
        appName: "快手极速版",
        complete: false,
        min: -1,
        max: -1,
        adTime: 0, thread: null,
        check_u_c: false,
        // isInstall: app.getPackageName("快手极速版") == null ? "#C0C0C0" : "#20B2AA",
        exception: false
      },
      {
        id: "lingShengXiu",
        type: "view",
        appName: "铃声秀",
        complete: false,
        min: -1,
        max: -1,
        adTime: 0, thread: null,
        check_u_c: false,
        // isInstall: app.getPackageName("铃声秀") == null ? "#C0C0C0" : "#20B2AA",
        exception: false
      },
      {
        id: "dianDianXinWen",
        type: "view",
        appName: "点点新闻",
        complete: false,
        min: -1,
        max: -1,
        adTime: 0, thread: null,
        check_u_c: false,
        // isInstall: app.getPackageName("点点新闻") == null ? "#C0C0C0" : "#20B2AA",
        exception: false
      },
      {
        id: "dianShiJia",
        type: "view",
        appName: "电视家",
        complete: false,
        min: -1,
        max: -1,
        adTime: 0, thread: null,
        check_u_c: false,
        // isInstall: app.getPackageName("电视家") == null ? "#C0C0C0" : "#20B2AA",
        exception: false
      },
      {
        id: "yiTongShangCheng",
        type: "view",
        appName: "益通商城",
        complete: false,
        min: -1,
        max: -1,
        adTime: 0, thread: null,
        check_u_c: false,
        // isInstall: app.getPackageName("益通商城") == null ? "#C0C0C0" : "#20B2AA",
        exception: false
      },
      {
        id: "weiShi",
        type: "view",
        appName: "微视",
        complete: false,
        min: -1,
        max: -1,
        adTime: 0, thread: null,
        check_u_c: false,
        // isInstall: app.getPackageName("微视") == null ? "#C0C0C0" : "#20B2AA",
        exception: false
      },
      {
        id: "caiDanShiPin",
        type: "view",
        appName: "彩蛋视频",
        complete: false,
        min: -1,
        max: -1,
        adTime: 0, thread: null,
        check_u_c: false,
        // isInstall: app.getPackageName("彩蛋视频") == null ? "#C0C0C0" : "#20B2AA",
        exception: false
      },
      {
        id: "kuaiYin",
        type: "view",
        appName: "快音",
        complete: false,
        min: -1,
        max: -1,
        adTime: 0, thread: null,
        check_u_c: false,
        // isInstall: app.getPackageName("快音") == null ? "#C0C0C0" : "#20B2AA",
        exception: false
      },
      {
        id: "taoBaoZhiBo",
        type: "view",
        appName: "淘宝直播",
        complete: false,
        min: -1,
        max: -1,
        adTime: 0, thread: null,
        check_u_c: false,
        // isInstall: app.getPackageName("淘宝直播") == null ? "#C0C0C0" : "#20B2AA",
        exception: false
      },
      {
        id: "haoKanShiPin",
        type: "view",
        appName: "好看视频",
        complete: false,
        min: -1,
        max: -1,
        adTime: 0, thread: null,
        check_u_c: false,
        // isInstall: app.getPackageName("好看视频") == null ? "#C0C0C0" : "#20B2AA",
        exception: false
      },
      {
        id: "fanQieMianFeiXiaoShuo",
        type: "view",
        appName: "番茄免费小说",
        complete: false,
        min: -1,
        max: -1,
        adTime: 0, thread: null,
        check_u_c: false,
        // isInstall: app.getPackageName("微视番茄免费小说") == null ? "#C0C0C0" : "#20B2AA",
        exception: false
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
