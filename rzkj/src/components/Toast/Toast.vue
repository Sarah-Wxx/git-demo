<!--
 * @Author: your name
 * @Date: 2020-11-21 17:18:14
 * @LastEditTime: 2020-11-23 11:01:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \work\rzkj\src\components\Toast.vue
-->

<template>
  <div class="toast">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      msg: "",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../.././assets/css/common.scss";

.toast {
  background-color: rgba(0, 0, 0, 0.5);
  margin: auto;
  padding: px2rem(15px) px2rem(20px);
  @include font-dpr(12px);
  color: white;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: px2rem(10px);
  z-index: 99;
  max-width: px2rem(500px);
}
</style>