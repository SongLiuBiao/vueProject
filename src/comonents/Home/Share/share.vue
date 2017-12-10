<template>
   <div class="mui-content">
     <div class="title">
        <ul>
        <li><a>全部</a></li>
        <li><a>家居生活</a></li>
        <li><a>摄影设计</a></li>
        <li><a>明星美女</a></li>
        <li><a>空间设计</a></li>
        <li><a>户型装饰</a></li>
        <li><a>摄影设计</a></li>
        <li><a>明星美女</a></li>
        <li><a>空间设计</a></li>
        <li><a>户型装饰</a></li>
        <li><a>摄影设计</a></li>
        <li><a>明星美女</a></li>
        <li><a>空间设计</a></li>
        <li><a>户型装饰</a></li>
      </ul>
     </div>
     <div class="content">
       <ul>
          <li>
            <a href="#">
              <img src="http://vue.studyit.io/upload/201504/18/thumb_201504181230434303.jpg" alt="">
            </a>
            <div class="footer">
                  <p>现代简约 明亮的外表卧室卧室背景墙、吊顶黄色</p>
                  <p>
                        不要简朴不要素雅洋气卧室我做主，高低床榻榻米式靓丽卧室装扮，现代油画壁画帆布画卧室餐厅仟象映画，现代中式卧室装修图欣赏，温馨浪漫，而且很时尚的卧室设计，欧式卧室飘窗装修效果图。
                    </p>
            </div>
          </li>
            <li>
            <a href="#">
              <img src="http://vue.studyit.io/upload/201504/18/thumb_201504181230434303.jpg" alt="">
            </a>
          </li>
       </ul>
     
     </div>
  </div>
</template>
<script>
  

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
     width: 1000px;
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

