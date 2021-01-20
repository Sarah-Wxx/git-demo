<!--
 * @Author: your name
 * @Date: 2020-12-10 14:14:22
 * @LastEditTime: 2020-12-28 15:58:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\App.vue
-->
<template>
  <div id="app">
    <echarts></echarts>
  </div>
</template>

<script>
import Echarts from './view/Echarts.vue'
export default {
  components: { Echarts },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
