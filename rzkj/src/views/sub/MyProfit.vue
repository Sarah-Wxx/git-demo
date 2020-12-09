<!--
 * @Author: your name
 * @Date: 2020-11-20 11:56:09
 * @LastEditTime: 2020-11-21 17:34:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \work\rzkj\src\views\sub\MyProfit.vue
-->

<template>
  <div class="MyProfit">
    <custom-header></custom-header>
    <div class="tabs">
      <template v-for="(item, index) in tabs">
        <label :key="`tab-${index}`" :data-text="item"></label>
      </template>
    </div>
    <div class="scroll-wrapper">
      <div class="sroll-content">
        <div class="list">
          <template v-for="(item, index) in list">
            <div class="list-item" :key="`list - ${index}`">
              <div class="title">{{ item.title }}</div>
              <div class="time">{{ item.time }}</div>
              <div class="profit">¥{{ item.profit }}</div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomHeader from "../../components/CustomHeader.vue";
export default {
  components: { CustomHeader },
  name: "MyProfit",
  data() {
    return {
      tabs: ["平台", "时长", "收益"],
      list: [
        { title: "趣头条", time: "05:09:12", profit: "3.08" },
        { title: "抖音极速版", time: "05:09:12", profit: "3.08" },
        { title: "快手极速版", time: "05:09:12", profit: "3.08" },
        { title: "天天爱清理", time: "05:09:12", profit: "3.08" },
        { title: "刷宝短视频", time: "05:09:12", profit: "3.08" },
        { title: "电视家", time: "05:09:12", profit: "3.08" },
        { title: "赚步", time: "05:09:12", profit: "3.08" },
        { title: "点点新闻", time: "05:09:12", profit: "3.08" },
        { title: "爱上兼职", time: "05:09:12", profit: "3.08" },
        { title: "铃声秀", time: "05:09:12", profit: "3.08" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/common.scss";
.tabs {
  display: flex;
  justify-content: space-evenly;
  margin-top: px2rem(46px);
  label {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    &::after {
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      background: #c9c9c9;
      border-radius: 4px;
      content: attr(data-text);
      width: px2rem(112px);
      height: px2rem(44px);
      border-radius: px2rem(4px);
    }
  }
}
.scroll-wrapper {
  background-color: white;
}
.list-item {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: px2rem(120px);
  border-bottom: 1px solid #f8f8f8;
  div {
    @include font-dpr(16px);
    font-weight: 400;
    color: #333333;
  }
  .title {
    width: px2rem(95px);
    white-space: nowrap;
  }
  .time {
    width: px2rem(130px);
    white-space: nowrap;
  }
  .profit {
    width: px2rem(90px);
    white-space: nowrap;
  }
}
</style>