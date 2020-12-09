<!--
 * @Author: your name
 * @Date: 2020-11-19 21:09:37
 * @LastEditTime: 2020-12-04 15:03:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \work\rzkj\src\components\TaskList.vue
-->
<template>
  <div class="AutoList">
    <div class="tab-appName">
      <template v-for="(item, index) in tabs">
        <label :key="`tab-${index}`" :data-text="item"></label>
      </template>
    </div>
    <div class="list-box">
      <template v-for="(item, index) in list">
        <div :key="`list-${index}`" class="item">
          <img
            @click="item.check_u_c = !item.check_u_c"
            :src="require(`.././assets/image/${item.check_u_c ? 9 : 10}.png`)"
            alt=""
          />
          <span>{{ item.appName }}</span>
          <span @click="showDialog(item)">参数配置</span>
          <span>软件下载</span>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: "AutoList",
  computed: {
    list() {
      return this.$store.state.taskList.filter((o) => o.type == "view");
    },
  },
  data() {
    return {
      tabs: ["平台", "配置", "下载"],
    };
  },
  methods: {
    showDialog(item) {
      this.$store.state.taskClick = true;
      this.$store.state.select = item;
    }
  },
};
</script>
<style lang="scss" scoped>
@import ".././assets/css/common.scss";
.item {
  display: flex;
  position: relative;
  margin: px2rem(30px) 0;
  padding-left: px2rem(100px);
  border-bottom: 1px solid #f2f2f2;
  padding-bottom: px2rem(15px);

  img {
    width: px2rem(40px);
    height: px2rem(40px);
    position: absolute;
    left: px2rem(50px);
  }
  span {
    flex: 1;
    display: flex;
    color: #333333;
    align-items: center;
    justify-content: center;

    &:nth-child(n + 1) {
      color: #d79041;
    }

    &.gray {
      color: #666666;
    }
  }
}

.AutoList {
  background-color: white;
  padding-top: px2rem(30px);
  margin: 0 px2rem(30px) px2rem(30px);
}
.tab-appName {
  display: flex;
  padding-left: px2rem(100px);

  label {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    &::after {
      display: flex;
      align-items: center;
      color: white;
      content: attr(data-text);
      width: px2rem(112px);
      height: px2rem(44px);
      justify-content: center;
      background: linear-gradient(212deg, #e5c4a4 0%, #b07647 100%);
      border-radius: px2rem(4px);
    }
  }
}
</style>