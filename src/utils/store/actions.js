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
  }
}
