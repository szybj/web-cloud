import Vue from "vue";
import vueRouter from "vue-router";
import pageRouter from "./page/";
import viewRouter from "./view/";
import routerPlugin from "./routerPlugin";
import Store from "../store/";
Vue.use(vueRouter);
let Router = new vueRouter({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop;
      }
      return {
        x: 0,
        y: to.meta.savedPosition || 0
      };
    }
  }
});
routerPlugin.install(Router, Store);
Router.addRoutes([...pageRouter, ...viewRouter]);
export default Router;
