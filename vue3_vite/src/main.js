import './assets/main.css'

import { createApp } from 'vue'

// 引入element-ui 组件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入router组件
import router from './router'

// 引入app组件
import App from './App.vue'
// 创建一个app实例对象
const app = createApp(App)

// 应用element-ui插件
app.use(ElementPlus)
// 应用router组件
app.use(router)

// 挂载app组件
app.mount('#app')
