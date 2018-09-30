import {
  HIDEBAR,
  SHOWBAR
} from './mutations-type'
export default {
  async SHOWSIDEBAR({commit})
  {
      commit(SHOWBAR)
  },
  async HIDESIDEBAR({commit})
  {
    commit(HIDEBAR)
  },
  //显示loading
  async SHOWUPDATALOADINGSTATUS({commit})
  {
    commit('UPDATALOADINGSTATUS', {isLoading: true})
  },
  //隐藏loading
  async HIDEUPDATALOADINGSTATUS({commit})
  {
    commit('UPDATALOADINGSTATUS', {isLoading: false})
  },
}
