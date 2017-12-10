//引入  Vue.js
import Vue from 'vue'
//引入app.vue
import app from './app.vue'
//引入路由
import router from './config/router'

//引入过滤器
import './config/filters'
//引入外部插件
import './config/plugins'





new Vue({
    el: '#app',
    router,
    render: c => c(app),
    created() {
        this.$http.interceptors.request.use(function(config) {
            // console.log(this);
            // Do something before request is sent
            this.$indicator.open('正在加载...');
            return config;
        }.bind(this), function(error) {
            // Do something with request error
            return Promise.reject(error);
        });

        // Add a response interceptor
        this.$http.interceptors.response.use(function(response) {
            // Do something with response data
            this.$indicator.close();

            return response;
        }.bind(this), function(error) {
            // Do something with response error
            return Promise.reject(error);
        });
    }
})