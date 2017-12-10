<template>
   <div class="mui-content">
     <div class="title">
        <ul :style="ulWidth">
         <li>
           <a href="javascript:;" @click.prevent="getimages(-1)">全部</a>
        </li>
         <li v-for="item in title" :key="item.id">
            <a @click.prevent="getimages(item.id)" href="javascript:;">{{ item.title }}</a>
        </li>
      </ul>
     </div>
     <div class="content">
       <ul>
          <li v-for="(item,index) in share" :key="index">
            <!-- <router-link :to="{name:'shareDetail', params:{id:item.id}}"> -->
              <router-link v-bind="{to:'/share/'+item.id}"></router-link>
                 <img :src="item.img_url" alt="">
          
            <div class="footer">
                  <p>{{ item.title }}</p>
                  <p>{{ item.zhaiyao }}</p>        
            </div>
              </router-link>
          </li>
       </ul>
     
     </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
          title:[],
          share:[],
          ulWidth:'',
      }
    },
    created(){
    this.getimgcategory();
    this.getimages(-1);
    },
    methods:{
      getimgcategory(){
        this.$http
        .get('getimgcategory')
        .then((res)=>{
          if(res.status === 200 && res.data.status === 0 ){

            this.title = res.data.message
            this.ulWidth = 'width:'+70 * this.title.length+'px';
  
          } else{
            console.log('服务器内部出错')
          }
         
        })
        .catch((err)=>{
          console.error(err)
        })
      },
      getimages(id){
        let url ="getimages/"+id
        this.$http
        .get(url)
        .then((res)=>{
          if(res.status=== 200 && res.data.status ===0){
              this.share = res.data.message
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
  *{
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .title{
    
     overflow-y: hidden;
    overflow-x: auto;
    
    }

::-webkit-scrollbar{
  display: none;
}
  .title ul{

      overflow-x: auto;
      overflow-y: hidden;
      height: 62px;
      background: #fff;
     
  }

  .title ul li {
     float: left;
     height: 62px;
     line-height: 62px;
     margin: 0px 5px
  }
   .title ul li a {
     font-size: 14px;
   }
   .content li {
    position: relative;
     height: 300px;
     margin-bottom: 5px;
   }
   .content li a {
     width: 100%;
     height: 100%;
     display: block;
   }
   .content  .footer {
     position:absolute;
     z-index: 1;
     bottom: 5px;
     background: rgba(0,0,0,0.4);
 
   }
   .content  .footer p {
         color: #fff;
   }
</style>

