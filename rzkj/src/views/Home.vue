<!--
 * @Author: your name
 * @Date: 2020-11-19 20:28:09
 * @LastEditTime: 2020-12-04 18:21:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \work\rzkj\src\views\sub\Home.vue
-->
<template>
  <div class="Home fill">
    <custom-header>
      <!-- <img src=".././assets/image/6.png" alt="" class="right" /> -->
    </custom-header>
    <div class="scroll-wrapper">
      <div class="scroll-content">
        <div class="top">
          <div class="box">
            <span>请配置任务</span>
            <div @click="startAuto"><span></span>任务启动</div>
          </div>
        </div>
        <p class="title">任务计划</p>
        <div class="tabs">
          <template v-for="(item, index) in tabs">
            <label
              :class="key == index ? 'active' : ''"
              :key="`tab-${index}`"
              @click="key = index"
              >{{ item }}</label
            >
          </template>
        </div>
        <component :is="name"></component>
      </div>
    </div>
    <div class="tips" v-if="!isShow">
      <div>
        <img src="../assets/image/35.png" alt="" />
        <span>任务运行中，点击音量下键可退出</span>
      </div>
      <img src="../assets/image/13.png" alt="" @click="isShow = !isShow" />
    </div>
    <div v-if="$store.state.parameterClick">
      <div class="marsk"></div>
      <div class="dialog">
        <div class="dialog-content">
          <span>配置</span>
          <div class="dialog-box">
            <span>{{ select.alias }}账号：</span>
            <input
              type="text"
              placeholder="请填写您的账号"
              v-model="select.account"
            />
          </div>
          <div class="dialog-box">
            <span>{{ select.alias }}密码：</span>
            <input
              type="password"
              placeholder="请填写您的密码"
              v-model="select.password"
            />
          </div>
          <div class="dialog-box">
            <span>抖音链接：</span>
            <input
              type="text"
              placeholder="请填写抖音链接"
              v-model="select.url"
            />
          </div>
          <div class="dialog-box">
            <span>点赞目标：</span>
            <input type="number" placeholder="" v-model="select.dydzs" />
          </div>
          <div class="dialog-box">
            <span>关注目标：</span>
            <input type="number" placeholder="" v-model="select.dygzs" />
          </div>
          <div class="dialog-box">
            <span>抖音：</span>
            <div class="item">
              <img
                @click="dzFun"
                :src="require(`.././assets/image/${select.dydz ? 9 : 10}.png`)"
                alt=""
              />
              <span>点赞</span>
            </div>
            <div class="item">
              <img
                @click="gzFun"
                :src="require(`.././assets/image/${select.dygz ? 9 : 10}.png`)"
                alt=""
              />
              <span>关注</span>
            </div>
          </div>
        </div>
        <div class="option">
          <button @click="backFun">取消</button>
          <button @click="taskSubmit">确定</button>
        </div>
      </div>
    </div>
    <div v-if="$store.state.taskClick">
      <div class="marsk"></div>
      <div class="dialog">
        <div class="dialog-content">
          <span>配置</span>
          <div class="dialog-box">
            <span>最小时间(h)：</span>
            <input type="number" v-model="select.min" />
          </div>
          <div class="dialog-box">
            <span>最大时间(h)：</span>
            <input type="number" v-model="select.max" />
          </div>
          <div class="dialog-box">
            <span>广告时间(s)：</span>
            <input type="number" v-model="select.adTime" />
          </div>
          <div class="option">
            <button @click="backFun">取消</button>
            <button @click="autoSubmit">确定</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AutoList from "../components/AutoList.vue";
import CustomHeader from "../components/CustomHeader.vue";
import System from "../components/System.vue";
import TaskList from "../components/TaskList.vue";
export default {
  components: { CustomHeader, TaskList, AutoList, System },
  computed: {
    select() {
      // var data = JSON.parse(JSON.stringify(this.$store.state.select));
      var data = this.$store.state.select;
      if (data.type == "task") {
        var obj = null;
        if (data.id == "douYinTask") {
          obj = Object.assign({}, data, {
            account: data.zanzanAccount_u,
            password: data.zanzanPassword_u,
            url: data.douYinUrl_u,
            dydzs: data.dydzs_u,
            dygzs: data.dygzs_u,
            dydz: data.dydz_u_c_t,
            dygz: data.dygz_u_c_t,
          });
        } else {
          obj = Object.assign({}, data, {
            account: data.hmAccount_u,
            password: data.hmPassword_u,
            url: data.hmdouYinUrl_u,
            dydzs: data.hmdydzs_u,
            dygzs: data.hmdygzs_u,
            dydz: data.hmdydz_u_c_t,
            dygz: data.hmdygz_u_c_t,
          });
        }
        return obj;
      }
      return this.$store.state.select;
    },
  },
  watch: {
    key(val) {
      this.name = val == 0 ? "TaskList" : val == 1 ? "AutoList" : "System";
    },
  },
  data() {
    return {
      key: 0,
      timer: null,
      name: "TaskList",
      isShow: false,
      tabs: ["任务", "自阅", "系统配置"],
    };
  },
  methods: {
    dzFun() {
      var data = this.select;
      data.dydz = !data.dydz;
      this.dzgzFun();
    },
    gzFun() {
      var data = this.select;
      data.dygz = !data.dygz;
      this.dzgzFun();
    },
    dzgzFun() {
      var data = this.select;
      if (this.$store.state.select.id === "douYinTask") {
        this.$store.state.select.dydz_u_c_t = data.dydz;
        this.$store.state.select.dygz_u_c_t = data.dygz;
        this.$store.state.select.douYinUrl_u = data.url;
        this.$store.state.select.dydzs_u = data.dydzs;
        this.$store.state.select.dygzs_u = data.dygzs;
        this.$store.state.select.zanzanAccount_u = data.account;
        this.$store.state.select.zanzanPassword_u = data.password;
      } else {
        this.$store.state.select.hmdydz_u_c_t = data.dydz;
        this.$store.state.select.hmdygz_u_c_t = data.dygz;
        this.$store.state.select.hmAccount_u = data.account;
        this.$store.state.select.hmPassword_u = data.password;
        this.$store.state.select.hmdouYinUrl_u = data.url;
        this.$store.state.select.hmdydzs_u = data.dydzs;
        this.$store.state.select.hmdygzs_u = data.dygzs;

      }
    },
    startAuto() {
      if (this.$store.state.autoService) {
        var data = {
          taskList: this.$store.state.taskList,
          config: this.$store.state.config,
        };
        // console.log(data.config);

        if (this.timer == null) {
          this.$toast("任务启动中，请等待10秒");
          this.$u.setStorage("data", data);
          this.$u.sendCmd("startAuto", data);
          this.timer = setTimeout(() => {
            clearTimeout(this.timer);
            this.timer = null;
          }, 10000);
        }
      } else {
        this.$toast("请在系统配置中开启无障碍服务");
      }
    },
    backFun() {
      this.$store.state.parameterClick = false;
      this.$store.state.taskClick = false;
    },
    autoSubmit() {
      this.backFun();
    },
    taskSubmit() {
      this.backFun();
    },
  },
};
</script>

<style lang="scss" scoped>
@import ".././assets/css/common.scss";
.tabs {
  display: flex;
  margin: px2rem(30px) px2rem(30px) 0;

  label {
    flex: 1;
    display: flex;
    color: #999999;
    align-items: center;
    justify-content: center;
    padding: px2rem(20px) 0;
    background-color: #efefef;
    @include font-dpr(16px);
    font-weight: 500;

    &.active {
      color: #d79041;
      background-color: white;
    }
  }
}

.Home {
  background-color: #f8f8f8;
  // min-height: calc(100% - #{px2rem(100px)});
}
.title {
  font-weight: bold;
  color: #2b2b2b;
  @include font-dpr(17px);
  margin-left: px2rem(30px);
  padding-left: px2rem(16px);
  position: relative;

  &::before {
    top: 50%;
    left: 0;
    content: "";
    width: 2px;
    height: 50%;
    display: block;
    position: absolute;
    background: #d79041;
    border-radius: 2px;
    transform: translateY(-50%);
  }
}

.top {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: px2rem(50px) 0;
  background-color: #2b2b2b;

  .box {
    display: flex;
    align-items: center;
    position: relative;
    width: px2rem(317px);
    height: px2rem(317px);
    justify-content: center;
    background: url(".././assets/image/7.png") no-repeat;
    background-size: 100% 100%;

    span {
      @include font-dpr(14px);
      font-weight: 500;
      color: #ffffff;
    }

    > div {
      bottom: 0;
      display: flex;
      color: #d79041;
      font-weight: 500;
      align-items: center;
      position: absolute;
      width: px2rem(237px);
      height: px2rem(70px);
      justify-content: center;
      @include font-dpr(18px);
      background: linear-gradient(90deg, #f4edce 0%, #f3d99e 100%);
      border-radius: px2rem(35px);

      &::before {
        content: "";
        width: px2rem(20px);
        height: px2rem(30px);
        display: block;
        background-color: #d79041;
        margin-right: px2rem(10px);
        clip-path: polygon(10% 0, 100% 50%, 10% 100%);
      }
    }
  }
}

.right {
  top: 0;
  right: 0;
  position: absolute;
  width: px2rem(100px);
  height: px2rem(100px);
  padding: px2rem(30px);
  box-sizing: border-box;
}

.tips {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: px2rem(20px) px2rem(30px);
  box-sizing: border-box;
  background-color: #fff9ed;
  @include font-dpr(15px);
  letter-spacing: 2px;
  color: #d79041;
  div {
    display: flex;
    align-items: center;
  }
  img {
    &:first-child {
      width: px2rem(20px);
      height: px2rem(30px);
      object-fit: contain;
      margin-right: px2rem(10px);
    }
    &:last-child {
      width: px2rem(25px);
      height: px2rem(25px);
    }
  }
}

.marsk {
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
  position: fixed;
  background: 0 rgba(0, 0, 0, 0.3);
}

.dialog {
  top: 50%;
  left: 50%;
  z-index: 999;
  padding: px2rem(30px);
  position: absolute;
  background: #ffffff;
  border-radius: px2rem(10px);
  box-sizing: border-box;
  padding: px2rem(30px) px2rem(40px);
  transform: translate(-50%, -50%);
  .dialog-content {
    box-sizing: border-box;
    padding-bottom: px2rem(40px);
    // border-bottom: 1px solid #dddddd;
    > span {
      @include font-dpr(16px);
      color: #333333;
      display: block;
      margin-bottom: px2rem(30px);
    }
    .dialog-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: px2rem(30px);
      > span {
        display: block;
        width: px2rem(210px);
        font-weight: 400;
        color: #666666;
        @include font-dpr(15px);
        white-space: nowrap;
      }
      input {
        height: px2rem(62px);
        background: #e8e8e8;
        border-radius: px2rem(6px);
        border: 0;
        outline: 0;
        padding-left: px2rem(20px);

        &::placeholder {
          font-family: PingFangSC-Regular, PingFang SC, serif;
          color: #cacaca;
        }
      }
      .item-box {
        width: px2rem(388px);
        display: flex;
        align-items: center;
      }
    }
  }
}

.item {
  display: flex;
  align-content: center;
  margin-right: px2rem(40px);

  img {
    width: px2rem(40px);
    height: px2rem(40px);
    margin-right: px2rem(12px);
  }
}
.dy {
  margin: px2rem(40px) 0;
}
.option {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  button {
    width: px2rem(244px);
    height: px2rem(70px);
    color: white;
    border: 0;
    outline: 0;
    border-radius: px2rem(6px);
    &:first-child {
      background: #dbdbdb;
    }
    &:last-child {
      background: #d79041;
    }
  }
}
</style>