<!--
 * @Author: your name
 * @Date: 2020-11-19 18:26:46
 * @LastEditTime: 2020-11-23 14:32:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \work\rzkj\src\views\Forget.vue
-->
<template>
  <div class="Forget fill">
    <custom-header />
    <div class="scroll-wrapper">
      <div class="scroll-content">
        <div class="item">
          <span>手机号</span>
          <input
            type="tel"
            placeholder="请输入手机号"
            @blur="phoneCheck"
            v-model="phone"
          />
        </div>
        <div class="item">
          <span>验证码</span>
          <input type="number" placeholder="请输入验证码" v-model="number" />
          <label @click="numberFun">{{ count }}</label>
        </div>
        <div class="item">
          <span>新密码</span>
          <input type="password" placeholder="请输入密码" v-model="pwd" />
        </div>
        <div class="item">
          <span>确认密码</span>
          <input
            type="password"
            placeholder="请确认密码"
            v-model="checkPwd"
            @blur="pwdCheck"
          />
        </div>
        <button @click="submitFun">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
import CustomHeader from "../.././components/CustomHeader.vue";
export default {
  name: "Forget",
  components: { CustomHeader },
  data() {
    return {
      phone: "",
      number: "",
      pwd: "",
      checkPwd: "",
      isShow: false,
      count: "获取验证码",
      timer: null,
    };
  },
  methods: {
    phoneCheck() {
      if (!this.$u.checkPhone(this.phone)) {
        this.$toast("请输入正确的手机号");
      }
    },
    pwdCheck() {
      if (this.checkPwd !== this.pwd) {
        this.$toast("密码不一致");
      }
    },
    numberFun() {
      let timeCount = 60;
      if (!this.timer) {
        this.count = timeCount;
        this.isShow = true;
        this.timer = setInterval(() => {
          if (this.count > 1 && this.count <= timeCount) {
            this.count--;
          } else {
            this.isShow = false;
            clearInterval(this.timer);
            this.timer = null;
            this.count = "获取验证码";
          }
        }, 1000);
      }
    },
    submitFun() {
      if (this.$u.checkPhone(this.phone) && this.checkPwd === this.pwd) {
        this.$router.push("/Login");
      } else if (!this.$u.checkPhone(this.phone)) {
        this.$toast("请输入正确的手机号");
      } else if (this.checkPwd !== this.pwd) {
        this.$toast("密码不一致");
      } else {
        this.$router.push("/Login");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../.././assets/css/common.scss";
button {
  color: white;
  display: block;
  outline: none;
  border: none;
  width: px2rem(690px);
  height: px2rem(98px);
  background: #d79041;
  border-radius: px2rem(10px);
  @include font-dpr(18px);
  margin: px2rem(150px) auto;
}
.Forget {
  background-color: white;
}
.item {
  display: flex;
  align-items: center;
  margin: px2rem(30px);
  padding: 0;
  border-bottom: 1px solid #f2f2f2;
  span {
    display: block;
    width: px2rem(180px);
    white-space: nowrap;
    font-family: PingFangSC-Regular, PingFang "Gill Sans", "Gill Sans MT",
      Calibri, "Trebuchet MS", sans-serif;
    font-weight: 600;
    color: #666666;
    letter-spacing: 2px;
    @include font-dpr(16px);
    min-width: px2rem(180px);
  }
  input {
    flex: 1;
    color: #2b2b2b;
    height: px2rem(80px);
    border: none;
    width: 100%;
    background: transparent;
    margin-left: px2rem(22px);
    outline: none;
    @include font-dpr(16px);
    letter-spacing: 2px;

    &::placeholder {
      font-family: PingFangSC-Regular, PingFang "Gill Sans", "Gill Sans MT",
        Calibri, "Trebuchet MS", sans-serif;
      font-weight: 400;
      color: #cccccc;
    }
  }
  label {
    color: white;
    display: block;
    text-align: center;
    white-space: nowrap;
    background: #d79041;
    padding: 8px 8px;
    @include font-dpr(12px);
    border-radius: px2rem(80px);
    width: px2rem(150px);
    font-family: PingFangSC-Regular, PingFang "Gill Sans", "Gill Sans MT",
      Calibri, "Trebuchet MS", sans-serif;
  }
}
</style>