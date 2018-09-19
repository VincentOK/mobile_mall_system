import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    routes: [
        {
          path: '/',
          component: resolve => require(['../components/index.vue'], resolve),
          redirect: '/home',
          meta: { title: '自述文件' },
          children:[
            {
              path: '/home',
              component: resolve => require(['../components/index/home.vue'], resolve),
              meta: { title: '首页' },
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
            {
              path: '/onlineManagement',
              component: resolve => require(['../components/commodityManage/onlineManagement.vue'], resolve),
              meta: { title: '线上商品' },
            },
            {
              path: '/goodsDetail',
              component: resolve => require(['../components/commodityManage/goodsDetail.vue'], resolve),
              meta: { title: '商品详情' },
            },
            {
              path: '/changePassword',
              component: resolve => require(['../components/personal/changePassword.vue'], resolve),
              meta: { title: '修改密码' },
            },
          ]
        },
      {
        path: '/tenants',
        component: resolve => require(['../components/tenants.vue'], resolve),
        meta: { title: '商家入驻申请' },
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
    ]
})
