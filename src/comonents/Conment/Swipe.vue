<template>
  <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item ,index) in images" :key="index" >
             <a :href="item.url">
                 <img :src="item.img" >
             </a>
        </mt-swipe-item>
</mt-swipe>
</template>
<script>
    export default{
        data(){
            return{
                images:[],
            }
        },
        created(){
            this.getlunbo();
        },
        props: ['imgUrl'],
        methods:{
            getlunbo(){
                this.$http
                .get(this.imgUrl)
                .then((res) => {
                
                if(res.status == 200 && res.data.status == 0){
                    this.images = res.data.message
                }else{
                    console.log('请求服务器出错');
                }
                })
                .catch((err) => {
                console.error(err)
                })
            }
        }
    }
</script>
<style scoped>
/* 轮播图 */
.mint-swipe {
  height: 250px;
}
.mint-swipe img {
  width: 100%;
  height: 100%;
}

</style>
