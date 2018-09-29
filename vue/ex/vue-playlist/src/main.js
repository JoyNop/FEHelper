// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//import  User from './components/User'   //全局注册user
import '../static/ue/ueditor.config.js'
import '../static/ue/ueditor.all.js'
import '../static/ue/lang/zh-cn/zh-cn.js'
import '../static/ue/ueditor.parse.js'

Vue.config.productionTip = false
//全局注册组件
//Vue.component("user",User);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
