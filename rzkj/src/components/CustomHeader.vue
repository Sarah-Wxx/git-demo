<!--
 * @Author: your name
 * @Date: 2020-11-19 17:06:25
 * @LastEditTime: 2020-11-19 20:28:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \work\rzkj\src\components\CustomHeader.vue
-->
<template>
  <div class="CustomHeader">
    <img
      v-if="$route.meta.layer != 1"
      @click="$router.goBack()"
      src=".././assets/image/5.png"
      alt
    />
    <header>{{ $route.meta.title }}</header>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CustomHeader",
};
</script>

<style lang="scss" scoped>
@import ".././assets/css/common";

.CustomHeader {
  width: 100%;
  position: relative;
  background-color: $ac;
  height: px2rem(100px);

  &.white {
    background-color: white;

    img:first-child {
      transform: rotate(0);
    }

    header {
      color: white;
      background-color: white;
    }
  }

  img:first-child {
    left: 0;
    z-index: 1;
    height: px2rem(100px);
    position: absolute;
    width: px2rem(100px);
    box-sizing: border-box;
    padding: px2rem(30px) px2rem(40px);
  }

  header {
    left: 0;
    z-index: 0;
    width: 100%;
    height: px2rem(100px);
    position: absolute;
    text-align: center;
    color: white;
    font-weight: bold;
    @include font-dpr(18px);
    line-height: px2rem(100px) !important;
  }
}
</style>
