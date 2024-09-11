import Vue from 'vue'
import App from './App.vue'
// import maxin from './mixin'
// Vue.mixin(maxin)
import common_plugin from './plugins/common'
Vue.config.productionTip = false
Vue.use(common_plugin);
new Vue({
  render: h => h(App),
}).$mount('#app')
