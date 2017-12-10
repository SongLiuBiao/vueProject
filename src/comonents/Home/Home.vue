<template>
<div class="mui-content">
    <!-- 轮播图 -->
        <myswipe :imgUrl="img_url"></myswipe>
    <!-- 九宫格 -->
  <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="item in menus" :key="item.url">
           <router-link :to="item.url">
                <span class="mui-icon" :class="item.className"></span>
                <div class="mui-media-body">{{item.title}}</div>
           </router-link>
        </li>
  </ul> 
</div>
</template>
 <script>
  //导入轮播图组件
  import swipe from '../Conment/Swipe.vue'

export default{
  data(){
    return{
        
        menus:[],
        img_url:'getlunbo'
    }
  },
  created(){
    
    this.getmenus();
  },
  methods:{
   
    getmenus(){
      this.$http
      .get('getmenus')
      .then((res)=>{
        console.log(res)
        if(res.status===200&&res.data.status===0){
          this.menus=res.data.message
        }
      })
    }
  },
  components:{
    myswipe:swipe
  }


}



</script>

<style scoped>
/* 九宫格 */

.icon-news,.icon-share,.icon-buy,.icon-feedback,
.icon-video,.icon-contact{
  width: 50px;
  height: 50px;
}
.icon-news{
 background: url('../../../statics/images/menu1.png');
   background-repeat: round;
} 
 .icon-share{
  background: url('../../../statics/images/menu2.png');
   background-repeat: round;
}
.icon-buy{
   background: url('../../../statics/images/menu3.png');
   background-repeat: round;
}
.icon-feedback{
 background: url('../../../statics/images/menu4.png');
   background-repeat: round;
}
.icon-video{
  background: url('../../../statics/images/menu5.png');
   background-repeat: round;
}
.icon-contact{
   background: url('../../../statics/images/menu6.png');
   background-repeat: round;
}

.mui-content>.mui-table-view:first-child{
  margin-top: 0;
}
.mui-grid-view.mui-grid-9{
  background: #fff;
} 
</style>

