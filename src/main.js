import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入iconfont图标样式
import '@/assets/font/iconfont.css'
// 引入normalize，样式初始化
import 'normalize.css'
// 引入vant UI
import Vant, { Lazyload } from 'vant'
// 引入vant UI 样式
import 'vant/lib/index.css'

Vue.config.productionTip = false

// 将vant ui 安装为vue的插件
Vue.use(Vant)
Vue.use(Lazyload)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
