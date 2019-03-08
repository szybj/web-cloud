import axios from 'axios'
import router from 'router/router'
import { serialize } from 'utils/util'
import { Message } from 'element-ui'
import website from 'assets/website'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
axios.defaults.timeout = 15000
// 默认路径
axios.defaults.baseURL = window.config.baseUrl
// 返回其他状态码
axios.defaults.validateStatus = (status) => {
  return status >= 200 && status <= 500
}

// 跨域请求，允许保存cookie
axios.defaults.withCredentials = true

// 禁用进度环
NProgress.configure({
  showSpinner: false
})

// HTTP request拦截
axios.interceptors.request.use(config => {
  NProgress.start()
  if (config.methods === 'post' && config.headers.serialize) {
    config.data = serialize(config.data)
    delete config.data.serialize
  }
  return config
}, err => {
  return Promise.reject(err)
})

// HTTP response拦截
axios.interceptors.response.use(res => {
  NProgress.done()
  const status = Number(res.status) || 200
  const STATE = 0
  const statusWhiteList = website.statusWhiteList || []
  const message = res.data.message || '未知错误'
  // 如果请求为200则放过，否则默认统一处理，或者在website中配置statusWhiteList, 或者抛出的异常进行拦截
  if ((status !== 200 && !statusWhiteList.includes(status)) || res.data.status !== STATE) {
    Message({
      message: message,
      type: 'error'
    })
    return Promise.reject(new Error(message))
  }
  return res
}, err => {
  NProgress.done()
  return Promise.reject(new Error(err))
})
export default axios
