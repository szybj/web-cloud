import website from "assets/website"
import { setStore, getStore, removeStore } from "utils/store"
import {validatenull } from "utils/validate"

const common = {
  state: {
    isCollapse: false,
    website: website
  },
  actions: {},
  mutations: {
    SET_COLLAPSE: (state, action) => {
      state.isCollapse = !state.isCollapse
    }
  }
}
export default common
