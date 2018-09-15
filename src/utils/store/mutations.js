import {
  HIDEBAR,
  SHOWBAR
}
  from './mutations-type'
export default {
  [SHOWBAR](state){
    state.isShow=true;
  },
  [HIDEBAR](state){
    state.isShow=false
  }
}
