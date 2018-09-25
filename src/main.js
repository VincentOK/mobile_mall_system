// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './utils/store/store'
import router from './router'
// import '../static/css/iconfont/iconfont.css'
import  { LoadingPlugin,ToastPlugin  } from 'vux'
Vue.use(LoadingPlugin);
Vue.use(ToastPlugin, {type: 'cancel'});
Vue.use(ToastPlugin);

import {
  getStorage,
  setStorage
} from "./utils/config/sessionStorage";
import {
  Decrypt
} from "./utils/config/crypto_js";

Vue.config.productionTip = false;


//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
  let role = getStorage('userInfo');
  if (role) {
    try {
      let RoleAuthorization = JSON.parse(Decrypt(role));
      console.log("用户存在：" + JSON.stringify(RoleAuthorization));
      if (RoleAuthorization.userType !== "") {
        if (to.meta.permission) {
          if (RoleAuthorization.userType === "2") {
            next()
          } else {
            if (to.path === '/403') {
              next()
            } else {
              next('/403')
            }
          }
        } else {
          next()
        }
      }
    } catch (e) {
      console.log("用户不存在:" + e);
      alert('用户不存在000');
      if (to.path === '/login') {
        next()
      } else {
        next('/login')
      }
    }
  } else {
    console.log(to.path);
    if (to.path !== '/login' && to.path !== '/tenants' && to.path !== '/forgetpassword') {
      next('/login');
    } else {
      if (to.path === '/login' || to.path === '/tenants' || to.path === '/forgetpassword')
        next()
    }
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
