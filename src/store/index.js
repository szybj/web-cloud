import Vue from "vue";
import Vuex from "vuex";
import tags from "./modules/tags";
import getters from "./getters";

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    tags
  },
  getters
});
export default store;
