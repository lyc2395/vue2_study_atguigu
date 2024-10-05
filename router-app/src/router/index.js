import VueRouter from 'vue-router'
import Vue from 'vue'
import son from '../pages/son.vue'

Vue.use(VueRouter)
const routes = [
    {
        path: '/son',
        component: son
    }
]

export default new VueRouter({
    mode: 'history', // 使用 HTML5 History API 模式
    base: process.env.BASE_URL, // 自动设置基础路径
    routes
})
