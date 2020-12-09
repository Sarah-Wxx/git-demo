<!--
 * @Author: your name
 * @Date: 2020-11-20 14:16:37
 * @LastEditTime: 2020-11-23 11:10:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \work\rzkj\src\views\sub\Payment.vue
-->

<template>
  <div class="Payment">
    <custom-header>
      <span class="pay-record" @click="$router.push('/PayRecord')"
        >缴费记录</span
      >
    </custom-header>
    <div class="pay-content">
      <div class="pay-num">
        <span>缴费号码</span>
        <input type="text" placeholder="请输入手机号码" v-model="phone" />
      </div>
      <div class="pay">
        <template v-for="(item, index) in pay">
          <div
            @click="key = index"
            :key="`item-${index}`"
            class="pay-box"
            :class="key == index ? 'active' : ''"
          >
            <span>{{ item.money }}</span>
            <span>{{ item.payTime }}</span>
          </div>
        </template>
      </div>
      <button class="submit" @click="paySubmit">提交</button>
    </div>
  </div>
</template>

<script>
import CustomHeader from "../../components/CustomHeader.vue";
export default {
  components: { CustomHeader },
  name: "Payment",
  data() {
    return {
      key: 0,
      phone: "",
      pay: [
        { money: "50", payTime: "月度缴费" },
        { money: "150", payTime: "季度缴费" },
        { money: "300", payTime: "半年缴费" },
      ],
    };
  },
  mounted() {
    this.phone = this.$route.query.phone;
  },
  methods: {
    paySubmit() {
      console.log(this.key);
      console.log(this.pay[this.key]);
      // this.$toast("测试")
      if (!this.$u.checkPhone(this.phone)) {
        this.$toast("请输入正确的手机号");
      } else {
        this.$router.push("/PaySuccess");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/common.scss";
.Payment {
  background-color: #f8f8f8;
}
.pay-record {
  top: 0;
  right: 0;
  position: absolute;
  @include font-dpr(15px);
  font-weight: 400;
  color: #ffffff;
  padding: px2rem(30px);
}
.pay-content {
  background-color: white;
  box-sizing: border-box;
  padding: 0 px2rem(30px) px2rem(50px);
  width: 100%;
  .pay-num {
    display: flex;
    align-items: center;
    height: px2rem(150px);
    border-bottom: 1px solid #eeeeee;
    margin-bottom: px2rem(60px);
  }
  span {
    display: block;
    width: px2rem(180px);
    @include font-dpr(16px);
    font-weight: 400;
    color: #333333;
  }
  input {
    border: 0;
    outline: 0;
    @include font-dpr(16px);

    &::placeholder {
      font-weight: 400;
      color: #cccccc;
      @include font-dpr(16px);
    }
  }
}
.pay {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: px2rem(90px);
  .pay-box {
    position: relative;
    background: url("../../assets/image/25.png") no-repeat;
    background-size: 100% 100%;
    width: px2rem(217px);
    height: px2rem(146px);

    &.active {
      &::after {
        right: 0;
        bottom: 0;
        display: block;
        width: px2rem(50px);
        height: px2rem(50px);
        content: "✔";
        text-align: right;
        box-sizing: border-box;
        padding-right: px2rem(3px);
        line-height: px2rem(64px);
        color: #d79041;
        position: absolute;
        background-color: rgb(255, 231, 205);
        clip-path: polygon(100% 0, 0 100%, 100% 100%);
        border-bottom-right-radius: px2rem(10px);
      }
    }
    span {
      display: block;
      width: 100%;
      text-align: center;
      font-family: DINAlternate-Bold, DINAlternate serif;
      font-weight: bold;
      color: #d79041;
      &:first-child {
        padding-top: px2rem(23px);
        @include font-dpr(25px);
      }
      &:last-child {
        @include font-dpr(14px);
      }
    }
  }
}
.submit {
  width: 100%;
  height: px2rem(98px);
  background-color: #d79041;
  color: white;
  border: none;
  outline: none;
  border-radius: px2rem(10px);
}
</style>
