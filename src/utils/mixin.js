export default{
    data(){
    },
    methods:{
        tohomesearch() {
            this.$router.push({ name: "搜索" });
        },
    },
    created(){
        console.log(123456)
    }
}