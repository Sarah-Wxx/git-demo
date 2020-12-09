<!--
 * @Author: your name
 * @Date: 2020-11-20 18:21:26
 * @LastEditTime: 2020-11-23 15:45:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \work\rzkj\src\views\sub\PaySussecc.vue
-->

<template>
  <div class="PaySuccess">
    <custom-header></custom-header>
    <div class="head-box">
      <div class="head-content">
        <img src="../../assets/image/32.png" alt="" />
        <span>缴费成功</span>
      </div>
      <div class="line"></div>
      <div class="text">
        <span>¥{{ money }}</span>
        <div class="text-box">
          <span>缴费号码</span>
          <span>{{ msg.phone }}</span>
        </div>
        <div class="text-box">
          <span>缴费时间</span>
          <span>{{ msg.time }}</span>
        </div>
        <div class="text-box">
          <span>缴费时长</span>
          <span>{{ msg.methods }}</span>
        </div>
      </div>
      <button>查看缴费记录</button>
    </div>
  </div>
</template>

<script>
import CustomHeader from "../../components/CustomHeader.vue";
export default {
  components: { CustomHeader },
  name: "PaySuccess",
  data() {
    return {
      money: "50.00",
      msg: {
        phone: "18012345678",
        time: "2020/11/18 13:15:16",
        methods: "月度缴费",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/common.scss";
.PaySuccess {
  background: #f8f8f8;
}
.head-box {
  width: 100%;
  height: px2rem(400px);
  background: #2b2b2b;
  padding-top: px2rem(105px);
  box-sizing: border-box;
  position: relative;
  .head-content {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    img {
      width: px2rem(70px);
      height: px2rem(73px);
      margin-right: px2rem(20px);
    }
    span {
      @include font-dpr(21px);
      color: white;
      font-weight: 400;
    }
  }
  .line {
    width: px2rem(691px);
    height: px2rem(28px);
    background: #808080;
    border-radius: px2rem(14px);
    margin: auto;
  }
}
.text {
  width: px2rem(610px);
  height: px2rem(470px);
  background: url("../../assets/image/33.png") no-repeat;
  background-size: 100% 100%;
  padding: px2rem(71px) 0 0 px2rem(20px);
  box-sizing: border-box;
  text-align: center;
  margin: auto;
  margin-top: px2rem(-14px);
  > span {
    @include font-dpr(25px);
    font-weight: bold;
    color: #d79041;
  }
  .text-box {
    display: flex;
    align-items: center;
    margin-top: px2rem(50px);
    span {
      &:first-child {
        display: flex;
        padding: 0 px2rem(40px) 0 px2rem(50px);
        @include font-dpr(16px);
        font-weight: 400;
        color: #999999;
      }
      &:last-child {
        @include font-dpr(16px);
        font-weight: 400;
        color: #2b2b2b;
      }
    }
  }
}
button {
  display: block;
  margin: auto;
  width: px2rem(690px);
  height: px2rem(98px);
  background: #d79041;
  border-radius: px2rem(8px);
  margin-top: px2rem(78px);
  border: 0;
  outline: 0;
  @include font-dpr(18px);
  font-weight: 400;
  color: #ffffff;
}
</style>