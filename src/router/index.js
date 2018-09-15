import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/index',
            component: resolve => require(['../components/index.vue'], resolve),
            meta: { title: '首页' },
        },
        {
            path: '/login',
            component: resolve => require(['../components/login.vue'], resolve),
            meta: { title: '登陆' },
        },
        {
            path: '/forgetpassword',
            component: resolve => require(['../components/forgetPassword.vue'], resolve),
            meta: { title: '忘记密码' },
        },
        {
            path: '/messageList',
            component: resolve => require(['../components/index/messageList.vue'], resolve),
            meta: { title: '消息列表' },
        },
        {
            path: '/messageCenter',
            component: resolve => require(['../components/index/messageCenter.vue'], resolve),
            meta: { title: '消息中心' },
        },
    ]
})