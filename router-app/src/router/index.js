import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Son from '../pages/son.vue'

export default new VueRouter({
    routers: [
        {
            name: 'son1',
            path: '/son',
            component: Son
        }
    ]
})
