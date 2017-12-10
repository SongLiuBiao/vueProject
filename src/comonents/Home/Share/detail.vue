<template>
   <div class="mui-content">
       <div class="title">
           <h3>{{ menus.title }}</h3>
           <span>{{ menus.add_time | fmtdate('YYYY-MM-DD') }}</span>&nbsp;&nbsp;&nbsp;
           <span>{{ menus.click }}次浏览</span>
       </div>
         <ul>
               <li v-for="(item,index) in images":key="index">
                   <a href="#">
                       <img :src="item.src"alt="">
                    </a>
               </li>
         </ul>
         <p v-html="menus.content">
           
         </p>
            <mycomment :id="id"></mycomment>
   </div>
   
</template>



<script>
import comment from '../../Conment/comment.vue'
    export default{
        data(){
            return{
                menus:[],
                images:[]
            }
        },

        components:{
            mycomment:comment
        },
        created(){
          this.getimageInfo()
          this.getthumimages()
        },
        props:['id'],
        methods:{
            getimageInfo(){
                let url ='getimageInfo/'+this.id
                   
                this.$http
                .get(url)
                .then((res)=>{
                    if(res.status ===200 && res.data.status ===0){
                       if(res.data.message.length > 0){
                        this.menus =res.data.message[0]
                            console.log(this.menus);
                       }
                    
                    }
               
                    
                })
            },
            getthumimages(){
                let url ='getthumimages/'+this.id;
                this.$http
                .get(url)
                .then((res)=>{
                    if(res.status === 200 && res.data.status ===0){
                        this.images = res.data.message
                        console.log(res);
                    }else{
                        console.log('服务器内部出错');
                    }
                })
                .catch((err)=>{
                    console.error(err)
                })
            }
        }
    }
</script>
<style scoped>
.mui-content{
    background: #fff;
}

.title {
    padding: 10px 5px;
}
.title h3 {
    font-size: 16px;
    color:#0094ff;
}
.title span {
    font-size: 12px;
    color:rgba(92,92,92,0.6);
}
ul{
    list-style: none;
    padding: 0px;
    margin: 0px;
    overflow: hidden;
}
ul li a img {
    width: 100px;
    height: 100px;   
}
ul li  {
    padding: 0px 10px;
    float: left;
}
p {
    padding: 5px;
}
</style>
