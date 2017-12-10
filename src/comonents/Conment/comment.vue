<template>
  <div class="comment">
         <h4>提交评论</h4>
         <div class="submitcomment">
            <textarea placeholder="请输入评论内容" v-model="value"></textarea>
            <button class="mui-btn mui-btn-primary" @click="send" >发表</button>
        </div>
        <h4 class="contact">评论列表</h4>
        <ul class="list">
            <li v-for="(item,index) in content":key="index">
                <div class="top">{{item.content}}</div>
                <div class="bottom">
                    <span>{{item.user_name}}</span>
                    <span>{{item.add_time|fmtdate('YYYY-MM-DD HH:mm:ss')}}</span>
                </div>
            </li>
            
        </ul>
           <div class="more">
                <button @click="loadmore" class="mui-btn mui-btn-primary mui-btn-outlined">加载更多</button>
            </div>

     </div>
</template>

<script>
    export default{
        data(){
            return{
                     value:'',
                pageindex:1,
                content:[]
            }
        },
        props:['id'],
        created(){
        this.getcomments();
        },
        methods:{
            getcomments(){
                        var url ='getcomments/'+this.id+'?pageindex='+this.pageindex;
                        this.$http
                        .get(url)
                        .then((res)=>{
                        
                            if(res.status===200&&res.data.status===0){
                                console.log(res);
                                this.content=this.content.concat(res.data.message)

                            }
                        })
                    },
                    send(){     
                        if(this.value.length===0){
                            this.$toast('请输入内容')
                            return
                        }    

                        var url="postcomment/"+this.id;
                        this.$http
                        .post(url,'content='+this.value)
                        .then((res)=>{
                        if(res.status===200&&res.data.status===0){
                            this.$toast(res.data.message)
                            // this.getcomments();
                            this.content.unshift({
                                user_name:'大彪子',
                                add_time:new Date(),
                                content:this.value
                            })
                            this.value=''
                        }
                        })
                        .catch((err)=>{
                        console.error(err)
                        })
                    },
                    loadmore(){
                        this.pageindex++;
                        this.getcomments();
                        
                    }
        }
       
    }
</script>

<style scoped>

        .comment{
            background: #fff
        }

      .submitcomment {
        text-align: center;
    }
    
    .submitcomment textarea {
        margin-top: 10px;
        padding: 0;
        width: 96%;
        height: 60px;
    }
    
    .submitcomment button {
        width: 96%;
    }
    .contact{
        padding: 10px;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
    }
    .list{
        list-style: none;
        padding: 0px;
        margin: 0px;
    }
    .list li {
        padding: 0 10px;
     border-bottom: 1px solid #ccc; 
    }
    .list li .top{
        font-size: 18px;
    }
    .list li .bottom {
    font-size: 14px;
    display: flex;
    justify-content: space-between;
      margin:10px 0;
    }
    .list li .bottom span:first-child{
        color: skyblue;
      
    }
     .more {
        margin: 10px 0;
        text-align: center;
    }
    
    .more>button {
        width: 96%;
    }
   
</style>
