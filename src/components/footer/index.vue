<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" @click="to('/', 0)">首页</van-tabbar-item>
      <van-tabbar-item icon="search" @click="to('/search', 1)"
        >查询</van-tabbar-item
      >
      <van-tabbar-item icon="friends-o" @click="to('/about', 2)"
        >关于</van-tabbar-item
      >
      <van-tabbar-item icon="setting-o" @click="to('/set', 3)"
        >设置</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  watch: {
  },
  created() {
    this.active =
      this.$route.name == "首页"
        ? 0
        : this.$route.name == "查询"
        ? 1
        : this.$route.name == "关于"
        ? 2
        : 3;
  },
  methods: {
    to(e, index) {
      this.$router.push(e);
    },
  },
};
</script>

<style>
</style>