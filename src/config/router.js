import Vue from 'vue'
//引入 vue-router  路由
import VueRouter from 'vue-router'
//注册路由
Vue.use(VueRouter)


import home from '../comonents/Home/Home.vue';
import member from '../comonents/Member/Member.vue';
import search from '../comonents/Search/Search.vue';
import shopcar from '../comonents/Shopcar/Shopcar.vue';


import contact from '../comonents/Home/Contact/contact.vue';
import feedback from '../comonents/Home/Feedback/feedback.vue';
import news from '../comonents/Home/News/news.vue';
import share from '../comonents/Home/Share/share.vue';
import video from '../comonents/Home/Video/video.vue';
import buy from '../comonents/Home/Buy/buy.vue';
import newsDetail from '../comonents/Home/News/detail.vue';
import shareDetail from '../comonents/Home/Share/detail.vue';





let router = new VueRouter({
    linkActiveClass: 'mui-active',
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', meta: { title: '首页' }, component: home },
        { path: '/member', meta: { title: '会员' }, component: member },
        { path: '/search', meta: { title: '搜索' }, component: search },
        { path: '/shopcar', meta: { title: '购物车' }, component: shopcar },

        { path: '/buy', component: buy },
        { path: '/contact', component: contact },
        { path: '/feedback', component: feedback },
        { path: '/news', component: news },
        { path: '/share', component: share },
        { path: '/video', component: video },


        { name: 'newsDetail', path: '/news/:id', component: newsDetail, props: true },
        { path: '/share/:id', component: shareDetail, props: true }
        // { path: '/sharDetail', component: sharDetail }


    ]
})

router.afterEach((to, from) => {
    if (to.meta.title) {
        document.title = to.meta.title
    } else {
        document.title = '子页面';
    }

})
export default router;