<!--
 * @Author: your name
 * @Date: 2020-11-19 16:37:23
 * @LastEditTime: 2020-12-04 14:40:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \work\rzkj\src\App.vue
-->
<template>
  <div id="app">
    <div class="scroll-wrapper">
      <transition :name="transitionName">
        <router-view class="child-view" />
      </transition>
    </div>
    <!-- <div class="footer" v-if="$route.meta.layer == 1">
      <template v-for="(item, index) in tabs">
        <label
          @click="goPath(index)"
          :key="`tabs-${index}`"
          :class="item.path == $route.path ? 'active' : ''"
        >
          <img
            :src="
              require(`./assets/image/tabs/${index + 1}${
                item.path == $route.path ? 1 : 0
              }.png`)
            "
            alt=""
          />
          {{ item.title }}
        </label>
      </template>
    </div> -->
  </div>
</template>
<script>
export default {
  watch: {
    "$route.name"(val) {
      const isBack = this.$router.isBack;
      // this.mode = isBack ? "out-in" : "in-out";
      this.transitionName = isBack ? "slide-right" : "slide-left";
      this.$router.isBack = false;
    },
  },
  data() {
    return {
      oldIndex: 0,
      mode: "in-out",
      changeTimer: false,
      transitionName: "slide-left",
      tabs: [
        { title: "做任务", path: "/Home" },
        { title: "我的", path: "/Mine" },
      ],
    };
  },
  methods: {
    goPath(index) {
      if (!this.changeTimer) {
        this.changeTimer = true;
        if (this.oldIndex > index) {
          this.$router.isBack = true;
        }
        this.oldIndex = index;
        this.$router.replace(this.tabs[index].path);
        const timer = setTimeout(() => {
          clearTimeout(timer);
          this.changeTimer = false;
        }, 300);
      }
    },
  },
};
</script>

<style lang="scss">
@import "./assets/css/common";
.footer {
  width: 100%;
  display: flex;
  overflow: hidden;
  height: px2rem(100px);
  box-sizing: border-box;
  background-color: $ac;

  label {
    flex: 1;
    display: flex;
    color: #999999;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @include font-dpr(12px);

    &.active {
      color: #d79041;
    }
    img {
      width: px2rem(40px);
      height: px2rem(40px);
      margin-bottom: px2rem(10px);
    }
  }
}

html,
body,
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.child-view {
  top: 0;
  bottom: 0;
  z-index: 998;
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  flex-direction: column;
  box-sizing: border-box;
  margin: 0 auto;
  background-color: white;
  // transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
  transition: all 10s linear;
}
.slide-left-enter {
  z-index: 998;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter-to {
  z-index: 999;
}
.slide-left-enter-active {
  z-index: 999;
  transition: all 0.3s linear;
}
.slide-left-leave-to {
  z-index: 998;
  transition: all 0s 0.3s linear;
  transform: translate3d(-100%, 0, 0);
}

.slide-right-leave-to {
  z-index: 9999;
  transform: translate3d(100%, 0, 0);
}
.slide-right-leave-active {
  z-index: 9999;
  transition: all 0.3s linear;
  transform: translate3d(100%, 0, 0);
}

.slide-right-enter {
  z-index: 998;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-enter-to {
  z-index: 999;
}
.slide-right-enter-active {
  z-index: 999;
  transition: all 0s linear;
}
</style>
