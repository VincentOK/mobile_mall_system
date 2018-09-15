import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import getters from './getters'
import  mutations  from './mutations'
import actions from './actions'

const state = {
  isShow:false
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
