<!--
 * @Author: your name
 * @Date: 2020-11-19 22:12:17
 * @LastEditTime: 2020-11-23 15:35:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \work\rzkj\src\views\Mine.vue
-->
<template>
  <div class="Mine fill">
    <custom-header />
    <div class="scroll-wrapper">
      <div class="header">
        <img src="../assets/image/14.png" alt="" />
        <p>{{ phone }}</p>
        <div class="level">
          <img src="../assets/image/15.png" alt="" />
          <span>{{ agent }}</span>
        </div>
        <div class="tips">
          <span
            ><img
              src="../assets/image/16.png"
              alt=""
            />开通会员，轻松赚钱每一天！</span
          >
          <button>去开通</button>
        </div>
      </div>
      <div class="content">
        <div class="profit">
          <div class="my-profit profit-box" @click="$router.push('/MyProfit')">
            <p class="title">我的收益</p>
            <p class="text">≈{{ myProfit }}</p>
          </div>
          <div
            class="team-profit profit-box"
            @click="$router.push('/TeamProfit')"
          >
            <p class="title">团队收益</p>
            <p class="text">≈{{ teamProfit }}</p>
          </div>
        </div>
        <div class="my-box">
          <template v-for="(item, index) in list">
            <div
              class="box"
              :key="`item-${index}`"
              @click="$router.push(`${item.path}`)"
            >
              <div class="box-left">
                <img :src="item.url" alt="" />
                <span>{{ item.myFun }}</span>
              </div>
              <img src="../assets/image/24.png" alt="" />
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomHeader from "../components/CustomHeader.vue";
export default {
  components: { CustomHeader },
  data() {
    return {
      myProfit: "1.47",
      teamProfit: "1.47",
      agent: "市级代理",
      phone: "18012345678",
      list: [
        {
          url: require(".././assets/image/19.png"),
          myFun: "缴费中心",
          path: "/Payment",
        },
        {
          url: require(".././assets/image/20.png"),
          myFun: "管理下级",
          path: "/Subordinate",
        },
        {
          url: require(".././assets/image/21.png"),
          myFun: "邀请码",
          path: "/Invitation",
        },
        {
          url: require(".././assets/image/22.png"),
          myFun: "修改密码",
          path: "/EditPwd",
        },
        {
          url: require(".././assets/image/23.png"),
          myFun: "退出登录",
          path: "/Login",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import ".././assets/css/common.scss";
.Mine {
  min-height: calc(100% - #{px2rem(100px)});
}
.header {
  background: #2b2b2b;
  box-sizing: border-box;
  text-align: center;
  padding-bottom: px2rem(20px);
  > img {
    width: px2rem(155px);
    height: px2rem(155px);
    margin: px2rem(45px) 0 px2rem(15px);
  }
  p {
    color: white;
    @include font-dpr(18px);
    letter-spacing: 2px;
    margin: 0;
  }
  .level {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: px2rem(10px);
    img {
      height: px2rem(45px);
      width: px2rem(48px);
      margin-right: px2rem(5px);
    }
    span {
      @include font-dpr(13px);
      color: white;
    }
  }
  .tips {
    display: flex;
    align-items: center;
    background: #000000;
    margin: px2rem(50px) px2rem(30px) 0;
    box-sizing: border-box;
    padding: px2rem(20px);
    align-items: center;
    justify-content: space-between;

    span {
      display: flex;
      color: #e7e1be;
      @include font-dpr(12px);
      letter-spacing: 2px;
      white-space: nowrap;
      align-items: center;

      img {
        width: px2rem(28px);
        height: px2rem(26px);
        margin-right: px2rem(23px);
      }
    }
    button {
      padding: px2rem(6px) px2rem(15px);
      white-space: nowrap;
      background: linear-gradient(90deg, #f4edce 0%, #f3d99e 100%);
      border-radius: px2rem(24px);
      border: 0;
      outline: 0;
      margin-left: px2rem(40px);
    }
  }
}
.content {
  padding: px2rem(30px) px2rem(30px) px2rem(20px);
  .profit {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f8f8f8;
    .profit-box {
      width: px2rem(335px);
      height: px2rem(200px);
      box-sizing: border-box;
      padding: px2rem(40px) 0 0 px2rem(20px);
      span {
        @include font-dpr(16px);
        font-weight: 500;
        color: #333333;
        line-height: 45px;
      }
      .text {
        @include font-dpr(23px);
        font-weight: bold;
        color: #a55600;
        line-height: 54px;
        margin-left: px2rem(14px);
      }
    }
    .my-profit {
      background: url("../assets/image/17.png") no-repeat;
      background-size: 100% 100%;
    }
    .team-profit {
      background: url("../assets/image/18.png") no-repeat;
      background-size: 100% 100%;
    }
    .line {
      width: px2rem(5px);
      height: px2rem(17px);
      background: #2b2b2b;
      border-radius: 2px;
      display: inline-block;
      margin-right: px2rem(9px);
    }
  }

  .box {
    width: 100%;
    height: px2rem(128px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eeeeee;
    .box-left {
      display: flex;
      align-items: center;
      img {
        width: px2rem(50px);
        height: px2rem(47px);
        margin-right: px2rem(20px);
      }
    }
    > img {
      width: px2rem(20px);
      height: px2rem(38px);
    }
    span {
      font-weight: 400;
      color: #333333;
    }
  }
}
.title {
  font-weight: 500;
  color: #333333;
  @include font-dpr(16px);
  margin: 0 0 0 px2rem(20px);
  padding-left: px2rem(10px);
  position: relative;
  // padding: px2rem(30px) 0 px2rem(34px) px2rem(16px);
  &::before {
    top: 50%;
    left: 0;
    content: "";
    width: 2px;
    height: 40%;
    display: block;
    position: absolute;
    background: black;
    border-radius: 2px;
    transform: translateY(-50%);
  }
}
</style>