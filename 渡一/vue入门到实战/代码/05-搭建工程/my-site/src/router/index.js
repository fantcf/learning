import Vue from 'vue'
import VueRouter from 'vue-router'
import TestEmpty from "@/test/TestEmpty.vue";
import {routerList} from "@/modals/menuList";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: TestEmpty
    },
    ...routerList(TestEmpty),
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
