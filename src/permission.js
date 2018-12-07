import router from "router/router"
import store from "./store"
import { validatenull } from "utils/validate"
import { getToken } from "utils/auth"
import NProgress from "nprogress" // progress bar
import "nprogress/nprogress.css" // progress bar style
NProgress.configure({ showSpinner: false })

router.beforeEach((to, from, next) => {
  console.log("to", to)
  console.log("from", from)
  console.log("next", next)
  // 缓冲设置
  if (
    to.meta.keepAlive === true &&
    store.state.tags.tagList.some(ele => {
      return ele.value === to.fullPath
    })
  ) {
    to.meta.$keepAlive = true
  } else {
    // NProgress.start()
    if (to.meta.keepAlive === true && validatenull(to.meta.$keepAlive)) {
      to.meta.$keepAlive = true
    } else {
      to.meta.$keepAlive = false
    }
  }
  const meta = to.meta || {}
  console.log("getToken()", getToken())
  if (getToken()) {
    // if (to.path === '/login') { //如果登录成功访问登录页跳转到主页
    //   next({ path: '/' })
    // } else {
    //   //如果用户信息为空则获取用户信息，获取用户信息失败，跳转到登录页
    //   if (store.getters.roles.length === 0) {
    //     store.dispatch('GetUserInfo').then(() => {
    //       next({...to, replace: true })
    //     }).catch(() => {
    //       store.dispatch('FedLogOut').then(() => {
    //         next({ path: '/' })
    //       })
    //     })
    //   } else {
    //     const value = to.query.src || to.fullPath
    //     const label = to.query.name || to.name
    //     if (meta.isTab !== false && !validatenull(value) && !validatenull(label)) {
    //       store.commit('ADD_TAG', {
    //         label: label,
    //         value: value,
    //         params: to.params,
    //         query: to.query,
    //         group: router.$avueRouter.group || []
    //       })
    //     }
    //     next()
    //   }
    // }
    console.log("token")
  } else {
    console.log("token==>false")
    //判断是否需要认证，没有登录访问去登录页
    if (meta.isAuth === false) {
      next()
    } else {
      next("/login")
    }
  }
})
router.afterEach(() => {
  // NProgress.done()
  const title = store.getters.tag.label
  console.log("title", title)
  console.log("routerp", router)
  // 根据当前的标签也获取label的值动态设置浏览器标题
  // router.$avueRouter.setTitle(title)
});
