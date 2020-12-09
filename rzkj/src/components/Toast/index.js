/*
 * @Author: your name
 * @Date: 2020-11-23 10:50:46
 * @LastEditTime: 2020-11-23 11:00:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \work\rzkj\src\components\Toast\index.js
 */
import Vue from 'vue';
import Toast from './Toast.vue';

let toastConstructor = Vue.extend(Toast);

let theToast = function (msg) {
    let toastDom = new toastConstructor({
        el: document.createElement('div')
    });
    document.body.appendChild(toastDom.$el);
    toastDom.msg = msg;

    let timer = setTimeout(function () {
        clearTimeout(timer);
        document.body.removeChild(toastDom.$el);
    }, 2000);

    return toastDom;
}

export default theToast;