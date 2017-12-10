<template>
  <div class="mui-content">
     <div class="title">
          <h3>{{news.title}}</h3>
          <span>{{news.add_time|fmtdate('YYYY-MM-DD HH:mm:ss')}}</span>
         &nbsp;&nbsp;
          <span>{{news.click}}次浏览</span>
     </div>
     <div class="content" v-html="news.content">
        
     </div>

           <myconment :id="id"></myconment>
  </div>
</template>



<script>
    
    import '../../../../statics/css/style.css';
    // import { Toast } from 'mint-ui'
   import  comment from '../../Conment/comment.vue'
    export default({
        data(){
            return{
                news:[],
                
               
            }
        },
      props: ['id'],
        created(){
           
            this.getnew();
         
        },
        methods:{
            getnew(){
                this.$http
                .get('getnew/'+this.id)
                .then((res)=>{
                   if(res.status===200&&res.data.status===0){
                       if(res.data.message.length>0){
                       this.news=res.data.message[0]
                     
                       }
                   }
                })
                .catch((err)=>{
                    console.error(err)
                })
            }
        },
        components:{
            myconment:comment
        }
     
   
   
   })

</script>
<style scoped>
    .title{
        padding: 10px;
        background: #fff;
        font-size: 12px;
        color:#8f8f94;
        border-bottom:2px solid rgba(92,92,92,0.1);
    }
    h3{
        font-size: 16px;
        color: #0094ff
    }
   .content{
        background: #fff;
   }



</style>

