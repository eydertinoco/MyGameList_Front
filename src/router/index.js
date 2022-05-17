import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
    },
    {
        path: '/cadastrar',
        name: 'Cadastrar',
        component: () => import(/* webpackChunkName: "about" */ '../views/Cadastrar.vue')
    },
    {
        path: '/resetPassword',
        name: 'ResetPassword',
        component: () => import(/* webpackChunkName: "about" */ '../views/ResetPassword.vue')
    },
    {
        path: '/games/:game',
        name: 'GameView',
        props: true,
        component: () => import('../views/GameView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router