<template>
  <div>
    <div class="content">
      <div @click="tohomesearch">搜索</div>
      <div class="content_box">
        <span class="content_son">测试</span>
        <span>{{ getnum | formatDate }}</span>
      </div>
      <slots>123</slots>
    </div>
  </div>
</template>

<script>
import mixin from "@/utils/mixin.js";
import slots from "@/components/slot/index";
export default {
  mixins: [mixin],
  components: {
    slots,
  },
  filters: {
    /* 格式化时间戳 */
    formatDate(val) {
      const date = new Date(val);
      const year = date.getFullYear();
      const month =
        date.getMonth() > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
      const day =
        date.getDate() > 9 ? date.getDate() + 1 : `0${date.getDate() + 1}`;
      return `${year}-${month}-${day}`;
      console.log(val);
    },
  },
computed:{
    getnum(){
        return parseInt(this.time.split('').reverse().join(''));
    }
},
  data() {
    return {
      time: "1533527037000",
    };
  },
  created() {
    this.$http
      .get(
        "xxx"
      )
      .then((res) => {
        console.log(res);
      });
  },
  methods: {

  },
};
</script>

<style  lang="scss" scoped>
@import "../../../public/static/scss/index.scss";
.content {
  width: 100%;
  height: 100px;
}
.content_box {
  .content_son {
    font-size: $font_size;
    color: $font_color;
  }
}
</style>