import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 引入VueRouter
import router from './router'

console.log('Router打印出来, ', router)

new Vue({
  render: h => h(App),
  router //注册路由
}).$mount('#app')
