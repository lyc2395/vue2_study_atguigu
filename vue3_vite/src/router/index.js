import {createRouter, createWebHistory} from 'vue-router'
import routePage1 from '../views/router_page1.vue'
import routePage2 from '../views/router_page2.vue'
const routes = [
    {
        name: 'Home',
        path: '/',
        component: routePage1
    },
    {
        name: 'page2',
        path: '/page2',
        component: routePage2
    }
]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router