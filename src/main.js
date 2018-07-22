// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/filter'
import FastClick from 'fastclick'
import 'style/index.scss'
import '@/assets/iconfont/iconfont.css'
import '@/assets/iconfont/iconfont.js'
Vue.config.productionTip = false
// 添加fastclick,解决移动端浏览器点击延迟300ms的问题
if ('addEventListener' in document) {
  // dom加载完成后再初始化实例
  document.addEventListener('DOMContentLoaded', function () {
    // 初始化实例
    FastClick.attach(document.body)
  }, false)
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
