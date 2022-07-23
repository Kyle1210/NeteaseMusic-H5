import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入iconfont图标样式
import '@/assets/font/iconfont.css'
// 引入normalize，样式初始化
import 'normalize.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
