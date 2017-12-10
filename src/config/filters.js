//引用 moment 格式化时间模块\
import moment from 'moment'
import Vue from 'vue'
Vue.filter('fmtdate', (date, fmrStr) => {
    return moment(date).format(fmrStr)

})

import '../../statics/css/mui.min.css'