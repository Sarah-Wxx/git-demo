<!--
 * @Author: your name
 * @Date: 2020-11-20 14:16:52
 * @LastEditTime: 2020-11-23 15:16:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \work\rzkj\src\views\sub\Subordinate.vue
-->

<template>
  <div class="Subordinate">
    <custom-header />
    <div class="tabs">
      <template v-for="(item, index) in tabs">
        <label :key="`tab-${index}`" :data-text="item"></label>
      </template>
    </div>
    <div class="scroll-wrapper">
      <div class="scroll-content">
        <div>
          <template v-for="(item, index) in list">
            <div class="box" :key="`item-${index}`">
              <span>{{ item.phone | filterPhone }}</span>
              <span>{{ item.partern }}</span>
              <span>{{ item.money }}</span>
              <button
                @click="
                  $router.push({
                    path: '/Payment',
                    query: { phone: `${item.phone}` },
                  })
                "
              >
                代缴费
              </button>
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
  name: "Subordinate",
  data() {
    return {
      phone: "18012345678",
      tabs: ["账号", "级别", "总收益", "操作"],
      list: [
        { phone: "18012345687", partern: "合伙人", money: "688.00" },
        { phone: "18112345687", partern: "合伙人", money: "688.00" },
        { phone: "18212345687", partern: "合伙人", money: "688.00" },
      ],
    };
  },
  filters: {
    filterPhone(val) {
      if (val) {
        return val.replace(new RegExp("(\\d{3})(\\d{4})(\\d{4})"), "$1****$3");
      }
      return "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/common.scss";
.Subordinate {
  background-color: #f8f8f8;
}
.tabs {
  display: flex;
  justify-content: space-evenly;
  margin-top: px2rem(15px);
  padding: 0 px2rem(15px) 0 px2rem(50px);
  background-color: white;
  label {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    &::after {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #b8b8b8;
      border-radius: 4px;
      content: attr(data-text);
      width: px2rem(112px);
      height: px2rem(44px);
      border-radius: px2rem(4px);
      @include font-dpr(15px);
    }
  }
}
.box {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: px2rem(120px);
  background-color: white;
  border-bottom: 1px solid #f8f8f8;
  span {
    font-weight: 400;
    color: #333333;
    @include font-dpr(16px);
    // &:first-child {
    //   width: px2rem(150px);
    //   white-space: nowrap;
    // }
    // &:nth-child(2) {
    //   width: px2rem(120px);
    // }
  }
  button {
    padding: px2rem(10px) px2rem(20px);
    background: #d79041;
    color: white;
    border-radius: px2rem(8px);
    border: none;
    outline: none;
  }
}
</style>