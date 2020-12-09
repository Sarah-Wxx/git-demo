<!--
 * @Author: your name
 * @Date: 2020-11-19 17:05:34
 * @LastEditTime: 2020-11-23 14:14:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \work\rzkj\src\views\Load.vue
-->
<template>
  <div class="login">
    <img src="../.././assets/image/1.png" alt="" class="login-name-img" />
    <p class="name">燃指</p>
    <div class="input">
      <img src="../.././assets/image/3.png" alt="" />
      <input type="tel" placeholder="请输入手机号" v-model="phone" />
    </div>
    <div class="input">
      <img src="../.././assets/image/4.png" alt="" />
      <input type="password" placeholder="请输入密码" v-model="pwd" />
    </div>
    <p class="foget" @click="$router.push('/Forget')">忘记密码?</p>
    <button class="login-box login-regist" @click="loginSubmit">登录</button>
    <button class="regist-box login-regist" @click="$router.push('/Regist')">
      注册
    </button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      phone: "",
      pwd: "",
      flag: true,
    };
  },
  methods: {
    loginSubmit() {
      if (!this.phone && !this.pwd) {
        this.$toast("请输入手机号和密码");
        // this.flag = false;
      } else if (!this.$u.checkPhone(this.phone)) {
        this.$toast("请输入正确的手机号");
      } else if (!this.pwd && this.flag) {
        this.$toast("请输入密码");
      } else {
        this.$u.setStorage("phone", this.phone);
        this.$router.push("/Home");
      }
    },
  },
};
</script>

<style  lang="scss" scoped>
@import "../.././assets/css/common";
.login {
  width: 100%;
  height: 100%;
  background: url("../.././assets/image/2.png") no-repeat;
  background-size: 100% 100%;
  .name {
    font-weight: 500;
    color: #ffffff;
    @include font-dpr(18px);
    text-align: center;
  }
}
.login-name-img {
  display: block;
  width: px2rem(151px);
  height: px2rem(224px);
  margin: px2rem(50px) auto 0;
}
.input {
  display: flex;
  width: px2rem(690px);
  height: px2rem(120px);
  box-sizing: border-box;
  margin: px2rem(59px) auto 0;
  align-items: center;
  padding: 0 px2rem(50px);
  border-radius: px2rem(10px);
  border: 1px solid rgba(243, 204, 161, 0.48);
  // background: rgba(255, 255, 255, 0.15);
  background: url("../../assets/image/34.png") no-repeat;
  background-size: 100% 100%;
  img {
    width: px2rem(36px);
    height: px2rem(40px);
    object-fit: contain;
  }
  input {
    flex: 1;
    color: white;
    height: 100%;
    border: none;
    background: transparent;
    margin-left: px2rem(22px);
    outline: none;
    @include font-dpr(16px);
    letter-spacing: 2px;

    &::placeholder {
      font-family: PingFangSC-Regular, PingFang SC, serif;
      color: rgba(255, 255, 255, 0.5);
    }
  }
}
.foget {
  text-align: right;
  font-family: PingFangSC-Regular, PingFang SC, serif;
  font-weight: 400;
  color: #ffffff;
  line-height: 40px;
  margin-right: px2rem(30px);
}
.login-regist {
  width: px2rem(690px);
  height: px2rem(98px);
  box-sizing: border-box;
  border-radius: px2rem(10px);
  font-weight: 500;
  letter-spacing: 2px;
  color: #030303;
  outline: none;
  border: 1px solid #f3cca1;
  @include font-dpr(18px);
}
.login-box {
  margin: px2rem(90px) auto px2rem(20px);
  background: linear-gradient(102deg, #e5c4a4 0%, #b07647 100%);
}
.regist-box {
  background: transparent;
  color: #f3cca1;
  margin: px2rem(20px) auto 0;
}
</style>