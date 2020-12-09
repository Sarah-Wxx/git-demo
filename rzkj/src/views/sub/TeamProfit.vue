<!--
 * @Author: your name
 * @Date: 2020-11-20 13:13:07
 * @LastEditTime: 2020-11-23 15:57:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \work\rzkj\src\views\sub\TeamProfit.vue
-->

<template>
  <div class="TeamProfit fill">
    <custom-header></custom-header>
    <div class="header">
      <div class="profit">
        <p class="money">≈{{ seaveProfit }}</p>
        <p class="text">服务性收费</p>
      </div>
      <div class="line"></div>
      <div class="profit">
        <p class="money">≈{{ inviteProfit }}</p>
        <p class="text">邀请收费</p>
      </div>
    </div>
    <div class="detail">
      <p class="title">收益明细</p>
      <div class="tabs">
        <template v-for="(item, index) in tabs">
          <label :key="`tab-${index}`" :data-text="item"></label>
        </template>
      </div>
    </div>
    <div class="scroll-wrapper">
        <div class="scroll-content">
          <div class="list">
            <template v-for="(item, index) in list">
              <div class="list-item" :key="`list - ${index}`">
                <div class="list-detail">{{ item.detail }}</div>
                <div class="time">{{ item.time }}</div>
                <div class="profit">+{{ item.profit }}</div>
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
  name: "TeamProfit",
  data() {
    return {
      seaveProfit: "12.21",
      inviteProfit: "12.21",
      tabs: ["详情", "时间", "收益"],
      list: [
        { detail: "邀请好友", time: "2020/11/19 13:15", profit: "08.12" },
        { detail: "邀请好友", time: "2020/11/19 13:15", profit: "08.12" },
        { detail: "邀请好友", time: "2020/11/19 13:15", profit: "08.12" },
        { detail: "服务性收益", time: "2020/11/19 13:15", profit: "08.12" },
        { detail: "服务性收益", time: "2020/11/19 13:15", profit: "08.12" },
        { detail: "服务性收益", time: "2020/11/19 13:15", profit: "08.12" },
        { detail: "服务性收益", time: "2020/11/19 13:15", profit: "08.12" },
        { detail: "服务性收益", time: "2020/11/19 13:15", profit: "08.12" },
        { detail: "服务性收益", time: "2020/11/19 13:15", profit: "08.12" },
        { detail: "服务性收益", time: "2020/11/19 13:15", profit: "08.12" },
        { detail: "服务性收益", time: "2020/11/19 13:15", profit: "08.12" },
        { detail: "服务性收益", time: "2020/11/19 13:15", profit: "08.12" },
        { detail: "服务性收益", time: "2020/11/19 13:15", profit: "08.12" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/common.scss";
.TeamProfit {
  background-color: #f8f8f8;
}
.header {
  width: 100%;
  height: px2rem(217px);
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .profit {
    width: px2rem(210px);
    height: px2rem(200px);
    text-align: center;
    margin-bottom: px2rem(20px);
    .money {
      @include font-dpr(18px);
      font-weight: bold;
      color: #2b2b2b;
    }
    .text {
      display: flex;
      justify-content: center;
      align-items: center;
      @include font-dpr(14px);
      font-weight: 400;
      color: #ffffff;
      background: #c9c9c9;
      border-radius: px2rem(4px);
      padding: px2rem(6px) px2rem(10px);
    }
  }
}
.detail {
  background-color: white;
}
.title {
  font-weight: bold;
  color: #2b2b2b;
  @include font-dpr(17px);
  margin-left: px2rem(30px);
  padding-left: px2rem(16px);
  position: relative;
  padding: px2rem(30px) 0 px2rem(34px) px2rem(16px);
  &::before {
    top: 50%;
    left: 0;
    content: "";
    width: 2px;
    height: 30%;
    display: block;
    position: absolute;
    background: #d79041;
    border-radius: 2px;
    transform: translateY(-50%);
  }
}
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
.list{
  background-color: white;
}
.list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: px2rem(120px);
  border-bottom: 1px solid #f8f8f8;
  box-sizing: border-box;
  padding: 0 px2rem(80px) 0 px2rem(60px);
  div {
    @include font-dpr(15px);
    font-weight: 400;
    color: #333333;
  }
  .profit {
    color: #008021;
    font-weight: 400;
  }
}
</style>