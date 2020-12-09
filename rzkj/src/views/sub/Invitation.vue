<!--
 * @Author: your name
 * @Date: 2020-11-20 14:17:15
 * @LastEditTime: 2020-11-23 15:49:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \work\rzkj\src\views\sub\Invitation.vue
-->

<template>
  <div class="Invitation fill">
    <img
      @click="$router.goBack()"
      src="../.././assets/image/5.png"
      class="back"
      alt=""
    />
    <div class="invite-content">
      <div class="invite">
        <template v-for="(item, index) in tabs">
          <div class="invite-box" :key="`item-${index}`">
            <img :src="item.url" alt="" />
            <span>{{ item.text }}</span>
          </div>
        </template>
      </div>
      <div class="invite-num">
        <span>我的邀请码：{{ invite }}</span>
        <div class="code-box">
          <div id="code"></div>
        </div>
      </div>
    </div>
    <div class="foot">
      <span>已邀请的好友</span>
      <div class="title">
        <span>手机号 </span>
        <span>邀请时间</span>
      </div>
      <div class="scroll-wrapper">
        <div class="scroll-content">
          <div>
            <template v-for="(item, index) in list">
              <div class="box" :key="`item-${index}`">
                <span>{{ item.phone }}</span>
                <span>{{ item.time }}</span>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomHeader from "../../components/CustomHeader.vue";
export default {
  components: { CustomHeader },
  name: "Invitation",
  data() {
    return {
      invite: "IHFu78",
      tabs: [
        { url: require("../../assets/image/27.png"), text: "平台多样" },
        { url: require("../../assets/image/28.png"), text: "会员特权" },
        { url: require("../../assets/image/29.png"), text: "福利多多" },
      ],
      list: [
        { phone: "18012345678", time: "2020/11/18 14:15:10" },
        { phone: "18012345678", time: "2020/11/18 14:15:10" },
        { phone: "18012345678", time: "2020/11/18 14:15:10" },
        { phone: "18012345678", time: "2020/11/18 14:15:10" },
      ],
    };
  },
  mounted() {
    this.$nextTick(() => {
      new QRCode(document.getElementById("code"), {
        text: "www.baidu.com",
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#FFFFFF",
        correctLevel: QRCode.CorrectLevel.H,
      });
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/common.scss";
.back {
  z-index: 99;
  position: absolute;
  width: px2rem(100px);
  height: px2rem(100px);
  box-sizing: border-box;
  padding: px2rem(30px) px2rem(40px);
}

.Invitation {
  display: flex;
  position: relative;
  flex-direction: column;
  background: url("../../assets/image/26.png") no-repeat;
  background-size: 100% 100%;
}

.invite-content {
  position: relative;
}
.invite {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: px2rem(300px);
  .invite-box {
    display: flex;
    align-items: center;
    > img {
      width: px2rem(36px);
      height: px2rem(35px);
      margin-right: px2rem(13px);
    }
    span {
      font-weight: 400;
      color: #f3cca1;
      @include font-dpr(14px);
    }
  }
}
.invite-num {
  margin-top: px2rem(90px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  span {
    display: block;
    @include font-dpr(16px);
    font-weight: 500;
    color: #f3cca1;
  }
  .code-box {
    // width: px2rem(290px);
    // height: px2rem(290px);
    padding: px2rem(10px);
    background-color: white;
    margin-top: px2rem(30px);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.foot {
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: px2rem(30px);
  text-align: center;
  background-color: rgb(31, 32, 32);
  margin: px2rem(80px) px2rem(30px) px2rem(30px);
  border-radius: px2rem(15px);
  box-shadow: 0 0 15px 3px rgba(0, 0, 0, 0.5);

  span {
    font-weight: 500;
    color: #f3cca1;
    @include font-dpr(16px);
  }
  .title {
    width: 100%;
    display: flex;
    align-items: center;
    padding: px2rem(10px) 0;
    justify-content: space-around;
    background: url("../../assets/image/31.png") no-repeat;
    background-size: 100% 100%;
    margin-top: px2rem(10px);
    span {
      color: #9f9f9f;
    }
  }
  .box {
    width: 100%;
    height: px2rem(105px);
    border-bottom: 1px solid #4d4136;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
}
</style>