import "babel-polyfill";
import "classlist-polyfill";
import Vue from "vue";
import App from "./App.vue";
import "./permission";
import router from "router/router";
import store from "./store";
import "assets/styles/index.scss";
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import { loadStyle } from "utils/util";

import { iconfontUrl, iconfontVersion } from "config/env";
iconfontVersion.forEach(ele => {
  loadStyle(iconfontUrl.replace("$key", ele));
})
Vue.use(Element);
Vue.use(router);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
