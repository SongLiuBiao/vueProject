//引用axios 
import Vue from 'vue'
import axios from 'axios';
axios.defaults.baseURL = "http://127.0.0.1:8899/api/";


Vue.prototype.$http = axios;



import Mint from 'mint-ui';
Vue.use(Mint);
// 引用样式
import 'mint-ui/lib/style.css';