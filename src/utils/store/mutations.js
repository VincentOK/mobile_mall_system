import {
  getStorage,
  setStorage
} from "../config/sessionStorage";
import {
  HIDEBAR,
  SHOWBAR,
  GET_USERINFO,
  GET_RESOURCE,
  GET_USERTOKEN,
  GET_LOCALUSERINFO
}
  from './mutations-type'
import {
  Encrypt,
  Decrypt
} from "../config/crypto_js";

export default {
  //显示左侧菜单
  [SHOWBAR](state){
    state.isShow=true;
  },
  //隐藏左侧菜单
  [HIDEBAR](state){
    state.isShow=false
  },
  //获取用户token存入vuex
  [GET_USERTOKEN](state,info){
    let infoStr = JSON.stringify(info);
    setStorage('token',Encrypt(infoStr));
    state.token = info
  },
  //获取用户信息存入vuex
  [GET_USERINFO](state, info) {
    let infoStr = JSON.stringify(info);
    setStorage('userInfo',Encrypt(infoStr));
    state.userInfo = info
  },
  //获取角色菜单存入vuex
  [GET_RESOURCE](state, info) {
    let infoStr = JSON.stringify(info);
    setStorage('resourceList',Encrypt(infoStr));
    state.resourceList = info
  },
  //刷新页面将缓存数据存到vuex
  [GET_LOCALUSERINFO](state){
    if(!state.userInfo && getStorage('userInfo')){
      state.userInfo =JSON.parse(Decrypt(getStorage('userInfo')))
    }
    if(!state.resourceList && getStorage('resourceList')){
      state.resourceList = JSON.parse(Decrypt(getStorage('resourceList')))
    }
    if(!state.token && getStorage('token')){
      state.token = JSON.parse(Decrypt(getStorage('token')))
    }
  }
}
