<template>
  <div id="app">
    <router-view></router-view>
    <footers v-if="$route.meta.TabbarShow"></footers>
  </div>
</template>
<script>
import footers from "./components/footer/index";
export default {
  name: "App",
  data() {
    return {

    };
  },
  watch: {},
  created() {

   
  },
  methods: {},
  components: {
    footers,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 0;
  margin: 0;
}
</style>


