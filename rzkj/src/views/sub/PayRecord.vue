<!--
 * @Author: your name
 * @Date: 2020-11-20 15:25:46
 * @LastEditTime: 2020-11-23 15:04:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \work\rzkj\src\views\sub\PayRecord.vue
-->

<template>
  <div class="PayRecord">
    <custom-header />
    <div class="scroll-wrapper">
      <div class="scroll-content">
        <div>
          <template v-for="(item, index) in list">
            <div class="pay-box" :key="`item-${index}`">
              <div class="phone">
                <span>{{ item.phone }}</span>
                <span>{{ item.time }}</span>
              </div>
              <div class="money">
                <span>-{{ item.money }}</span>
                <span>{{ item.payMethods }}</span>
              </div>
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
  name: "PayRecord",
  data() {
    return {
      list: [
        {
          phone: "18012345678",
          time: "11/01 13:14:15",
          money: "150",
          payMethods: "季度缴费",
        },
        {
          phone: "18012345678",
          time: "11/01 13:14:15",
          money: "150",
          payMethods: "季度缴费",
        },
        {
          phone: "18012345678",
          time: "11/01 13:14:15",
          money: "150",
          payMethods: "季度缴费",
        },
        {
          phone: "18012345678",
          time: "11/01 13:14:15",
          money: "150",
          payMethods: "季度缴费",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/common.scss";
.PayRecord {
  background-color: #f8f8f8;
}

.pay-box {
  width: 100%;
  height: px2rem(150px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 px2rem(30px);
  box-sizing: border-box;
  border-bottom: 1px solid #f8f8f8;
  background-color: white;
  span {
    display: block;
  }
  .phone {
    span {
      &:first-child {
        font-weight: 400;
        color: #333333;
        @include font-dpr(16px);
        margin-bottom: px2rem(10px);
      }
      &:last-child {
        display: flex;
        align-items: center;
        justify-content: center;
        // width: px2rem(180px);
        // height: px2rem(37px);
        padding: px2rem(5px) px2rem(10px);
        background: #d8d8d8;
        border-radius: px2rem(6px);
        font-weight: 400;
        color: #ffffff;
        @include font-dpr(13px);
      }
    }
  }
  .money {
    span {
      display: flex;
      justify-content: center;
      &:first-child {
        color: #ff0707;
        font-weight: 400;
        @include font-dpr(23px);
      }
      &:last-child {
        @include font-dpr(14px);
        font-weight: 400;
        color: #999999;
        letter-spacing: 2px;
      }
    }
  }
}
</style>