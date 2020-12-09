<!--
 * @Author: your name
 * @Date: 2020-11-20 14:17:27
 * @LastEditTime: 2020-11-23 15:59:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \work\rzkj\src\views\sub\EditPwd.vue
-->

<template>
  <div class="EditPwd">
    <custom-header></custom-header>
    <div class="content">
      <div class="box">
        <span>原密码</span>
        <input type="text" placeholder="请输入原密码" v-model="oldPwd" />
      </div>
      <div class="box">
        <span>新密码</span>
        <input
          type="password"
          placeholder="请输入新密码(最少6位）"
          v-model="newPwd"
        />
      </div>
      <div class="box">
        <span>确认密码</span>
        <input
          type="password"
          placeholder="请再次输入新密码(最少6位）"
          v-model="checkNew"
        />
      </div>
      <button @click="reset">重置</button>
    </div>
  </div>
</template>

<script>
import CustomHeader from "../../components/CustomHeader.vue";
export default {
  name: "EditPwd",
  components: { CustomHeader },
  data() {
    return {
      oldPwd: "",
      newPwd: "",
      checkNew: "",
    };
  },
  methods: {
    reset() {
      if (this.checkNew !== this.newPwd) {
        this.$toast("密码不一致");
      } else {
        this.$router.push("/Mine");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/common.scss";
.EditPwd {
  background: #f2f2f2;
}
.content {
  background-color: white;
  .box {
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
  }
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
    margin: px2rem(68px) auto px2rem(32px);
  }
}
</style>