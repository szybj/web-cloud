import router from "router/router"
import store from "./store"
import { validateNull } from "utils/validate"
import NProgress from "nprogress" // progress bar
import "nprogress/nprogress.css"
import {getStore} from "./utils/store" // progress bar style
import {checkLoginState} from 'utils/util'

NProgress.configure({ showSpinner: false })

router.beforeEach((to, from, next) => {
  // 缓冲设置
  if (
    to.meta.keepAlive === true &&
    store.state.tags.tagList.some(ele => {
      return ele.value === to.fullPath
    })
  ) {
    to.meta.$keepAlive = true
  } else {
    NProgress.start()
    if (to.meta.keepAlive === true && validateNull(to.meta.$keepAlive)) {
      to.meta.$keepAlive = true
    } else {
      to.meta.$keepAlive = false
    }
  }
  const meta = to.meta || {}
  if (!checkLoginState() && to.path !== '/') {
    console.log('第二次')
    //判断是否需要认证，没有登录访问去登录页
    if (meta.isAuth === false) {
      next()
    } else {
      return next("/login")
    }
  } else {
    if (to.path === '/login') { //如果登录成功访问登录页跳转到主页
      next({ path: '/' })
    } else {
      //如果用户信息为空则获取用户信息，获取用户信息失败，跳转到登录页
      let userInfo = getStore({name: 'userInfo'})
      if (validateNull(userInfo)) {
        store.dispatch('fedLogOut').then(() => {
          next({ path: '/login' })
        })
      } else {
        const value = to.query.src || to.fullPath
        const label = to.query.name || to.name
        if (meta.isTab !== false && !validateNull(value) && !validateNull(label)) {
          store.commit('ADD_TAG', {
            label: label,
            value: value,
            params: to.params,
            query: to.query,
            group: router.$orangeRouter.group || []
          })
        }
        next()
      }
    }
  }
})
router.afterEach(() => {
  NProgress.done()
  const title = store.getters.tag.label
  // 根据当前的标签也获取label的值动态设置浏览器标题
  router.$orangeRouter.setTitle(title)
})
