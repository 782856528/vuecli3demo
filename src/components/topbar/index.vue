<template>
  <div>
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    methods:{
        onClickLeft(){
            this.$router.go(-1)
        },
        onClickRight(){

        }
    }
};
</script>

<style>
</style>