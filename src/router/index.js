import { createRouter, createWebHistory } from 'vue-router'
import { trackRouter } from "vue-gtag-next";
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/ladingPage',
        name: 'LandingPage',
        component: () => import(/* webpackChunkName: "about" */ '../views/LadingPage.vue')
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
        path: '/userview',
        name: 'UserView',
        component: () => import(/* webpackChunkName: "about" */ '../views/UserView.vue')
    },
    {
        path: '/topics/:topic_id',
        name: 'TopicView',
        component: () => import(/* webpackChunkName: "about" */ '../views/TopicView.vue')
    },
    {
        path: '/resetPassword',
        name: 'ResetPassword',
        component: () => import(/* webpackChunkName: "about" */ '../views/ResetPassword.vue')
    },
    {
        path: '/changepassword',
        name: 'ChangePassword',
        component: () => import('../views/ChangePassword.vue')
    },
    {
        path: '/games/:game',
        name: 'GameView',
        props: true,
        component: () => import('../views/GameView.vue')
    },
    {
        path: '/cadastrarTopicos/:game',
        name: 'CadastrarTopicos',
        component: () => import(/* webpackChunkName: "about" */ '../views/CadastrarTopicos.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

trackRouter(router);

export default router