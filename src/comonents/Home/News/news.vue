<template>
  <div class="mui-content">
    <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item  in list":key="item.id">
					<router-link :to="{name: 'newsDetail', params: {id: item.id}}">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body  mui-ellipsis">
							{{item.title}}
							<p class='time'>
                <span>发表时间：{{item.add_time | fmtdate('YYYY-MM-DD')}}</span>
                <span>点击次数{{item.click}}</span>
              </p>
						</div>
					</router-link>
				</li>
		

			</ul>
  </div>
</template>

<script>

export default {
      data(){
        return{
          list:[]
        }
      },
      created(){

        this.getnewslist()
       
      },
      methods:{
          getnewslist(){
            this.$http
            .get('getnewslist')
            .then((res)=>{
              if(res.status===200&res.data.status===0){
                this.list=res.data.message
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
  .mui-content > .mui-table-view:first-child {
    margin-top: 0;
  }
  .mui-media-body {
    font-size: 15px;
  }
  .time {
    color: #0094ff;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
  }
</style>


