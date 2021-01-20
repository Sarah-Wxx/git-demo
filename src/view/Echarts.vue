<!--
 * @Author: your name
 * @Date: 2020-12-28 15:11:58
 * @LastEditTime: 2021-01-05 14:51:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\view\Echarts.vue
-->
<template>
  <div>
    <div id="main" style="width: 600px; height: 600px"></div>
    <div>{{msg}}</div>
    <button @click="increa">+1</button>
    <button @click="clickFun">点击</button>
  </div>
</template>

<script>
export default {
  name: "Echarts",
  data() {
    return {
      msg: {
        name: "qwe",
      },
    };
  },
  methods: {
    echartsFun() {
      let myChart = this.$echarts.init(document.getElementById("main"));
      let option = {
        title: {
          text: "Echarts示例",
        },
        tooltip: {},
        legend: {
          data: "销量",
        },
        xAxis: {
          data: ["a", "b", "c", "d"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "line",
            data: [10, 12, 23, 33],
          },
        ],
      };
      myChart.setOption(option);
    },
    increa() {
      this.msg.height = 180;
    },
    clickFun() {
      console.log(this.msg);
    },
  },
  mounted() {
    this.echartsFun();
  },
};
</script>

<style scoped>
</style>