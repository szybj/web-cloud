import Vue from "vue"
import Vuex from "vuex"
import common from './modules/common'
import tags from "./modules/tags"
import user from "./modules/user"
import getters from "./getters"

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    common,
    user,
    tags
  },
  getters
})
export default store
