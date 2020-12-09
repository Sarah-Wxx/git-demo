<!--
 * @Author: your name
 * @Date: 2020-11-19 21:09:37
 * @LastEditTime: 2020-12-04 17:56:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \work\rzkj\src\components\System.vue
-->
<template>
  <div class="System">
    <div class="top">
      <div class="box">
        <span>无障碍服务</span>
        <div
          @click="changeAutoService"
          class="on-off"
          :class="$store.state.autoService ? 'active' : ''"
        ></div>
      </div>
      <div class="box">
        <span>悬浮窗权限</span>
        <div
          @click="changeFloatyService"
          class="on-off"
          :class="$store.state.floatyService ? 'active' : ''"
        ></div>
      </div>
      <div class="box">
        <span>定时启动：</span>
        <label for="on-time">
          <input type="number" v-model="$store.state.config.startTime" />
        </label>
      </div>
      <div class="box">
        <span>定时关闭：</span>
        <label for="off-time">
          <input type="number" v-model="$store.state.config.endTime" />
        </label>
      </div>
      <div class="box">
        <span>激活码：</span>
        <label for="active">
          <input type="text" v-model="$store.state.config.kami" />
        </label>
      </div>
    </div>
    <div class="box bottom">
      <span>任务最小时间(h)：</span>
      <label for="min-time">
        <input type="number" v-model="$store.state.config.minTime" />
      </label>
    </div>
    <div class="box bottom">
      <span>任务最大时间(h)：</span>
      <label for="max-time">
        <input type="number" v-model="$store.state.config.maxTime" />
      </label>
    </div>
    <div class="box bottom">
      <span>广告时间(s)：</span>
      <label for="ad-time">
        <input type="number" v-model="$store.state.config.adTime" readonly />
      </label>
    </div>
  </div>
</template>
<script>
export default {
  name: "System",
  data() {
    return {
      msg: {
        startTime: "",
        endTime: "",
        kami: "",
        minTime: "",
        maxTime: "",
        adTime: "",
      },
    };
  },
  mounted() {
    // this.msg = this.$store.state.config;
  },
  methods: {
    changeAutoService() {
      if (this.$store.state.autoService) {
        this.$toast("不能关闭系统依赖服务!");
      } else {
        this.$u.sendCmd("openAuto");
      }
    },
    changeFloatyService() {
      if (!this.$store.state.floatyService) {
        this.$u.sendCmd("openSetting");
      } else {
        this.$toast("不能关闭悬浮弹窗");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import ".././assets/css/common.scss";
.System {
  background: white;
  padding: px2rem(60px) px2rem(50px);
  box-sizing: border-box;
  margin: 0 px2rem(30px) px2rem(30px);
}
.top {
  padding-bottom: px2rem(40px);
  border-bottom: 1px solid #dddddd;
  margin-bottom: px2rem(40px);
}
.box {
  display: flex;
  align-items: center;
  margin-bottom: px2rem(34px);
  span {
    @include font-dpr(15px);
    width: px2rem(220px);
    white-space: nowrap;
  }
  .on-off {
    position: relative;
    margin-left: px2rem(30px);
    width: px2rem(90px);
    height: px2rem(45px);
    background-color: #e8e8e8;
    border-radius: px2rem(45px);
    transition: 0.3s all linear;

    &.active {
      background-color: #d79042;
      &::after {
        left: px2rem(49px);
      }
    }

    &::after {
      content: "";
      display: block;
      width: px2rem(35px);
      height: px2rem(35px);
      border-radius: px2rem(30px);
      position: absolute;
      top: px2rem(5px);
      left: px2rem(6px);
      background-color: white;
      transition: 0.3s all linear;
    }
  }
  input {
    flex: 1;
    width: px2rem(248px);
    height: px2rem(62px);
    border-radius: px2rem(10px);
    background: #e8e8e8;
    border: 0;
    outline: 0;
    padding-left: px2rem(30px);
  }
}
.bottom {
  span {
    width: px2rem(280px);
  }
  input {
    flex: 1;
  }
}
</style>