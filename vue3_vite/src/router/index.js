import {createRouter, createWebHistory} from 'vue-router'
import routePage1 from '../views/router_page1.vue'
import routePage2 from '../views/router_page2.vue'
import routePage3 from '../views/router_page3.vue'
import routeMutiLevel from '../views/router-multiLevel.vue'
import routerQuery from '../views/router_query.vue'
import routerPropsHome from '../views/props/propsHome.vue'
import routerPropsObject from '../views/props/router_propsObject.vue'
import routerPropsBoolean from '../views/props/router_propsBoolean.vue'
import routePropsFunction from '../views/props/propsFunction.vue'
import routeProgramPush from '../views/programs/programPush.vue'
import routeProgramReplace from '../views/programs/programReplace.vue'
import routeCache from '../views/cache/cache.vue'
import { KeepAlive } from 'vue'

const routes = [
    {
        name: 'cache',
        path: '/cache',
        component: routeCache,
        meta: {
            keepAlive: true
        }
    },
    {
        name: 'Home',
        path: '/',
        component: routePage1
    },
    {
        name: 'page2',
        path: '/page2',
        component: routePage2
    },
    {
        name: 'programPush',
        path: '/programRoutePush',
        component: routeProgramPush,
        children: [
            {
                name: 'programQuery',
                path: 'query',
                component: routerQuery
            },
            {
                name: 'programParams',
                path: 'params/:name/:age/:rich',
                component: routerQuery
            },
        ]
    },
    {
        name: 'programReplace',
        path: '/programRouteReplace',
        component: routeProgramReplace,
        children: [
            {
                name: 'programQuery',
                path: 'query',
                component: routerQuery
            },
            {
                name: 'programParams',
                path: 'params/:name/:age/:rich',
                component: routerQuery
            },
        ]
    },
    {
        name: 'page3',
        path: '/page3',
        component: routePage3,
        children: [
            {
                name: 'mutiLevel',
                path: 'muti',
                component: routeMutiLevel
            },
            {
                name: 'query',
                path: 'query',
                component: routerQuery
            },
            {
                name: 'params',
                path: 'params/:id/:title/:status',
                component: routerQuery
            },
            
        ]
    },
    {
        name: 'props',
        path: '/props',
        component: routerPropsHome,
        children: [
            {
                name: 'propsObject',
                path: 'propsObject',
                component: routerPropsObject,
                props: {
                    id: 666,
                    title: 'Props Object',
                    status: 'Green'
                }
            },
            {
                name: 'propsBoolean',
                path: 'propsBoolean/:id/:title/:status',
                component: routerPropsBoolean,
                props: true
            },
            {
                name: 'propsFunction',
                path: 'propsFunction/:id/:title/:status',
                component: routePropsFunction,
                // props(route){
                //     return {
                //         id: route.params.id,
                //         title: route.params.title,
                //         status: route.params.status,
                //         name: route.query.name,
                //         age: route.query.age,
                //         rich: route.query.rich
                //     }
                // },
                props: route => ({
                    id: route.params.id,
                    title: route.params.title,
                    status: route.params.status,
                    name: route.query.name,
                    age: route.query.age,
                    rich: route.query.rich
                })
            }
        ]
    }
]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router