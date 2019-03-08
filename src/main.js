import 'babel-polyfill'
import 'classlist-polyfill'
import './mock'
import Vue from 'vue'
import App from './App.vue'
import axios from './api/axios'
import VueAxios from 'vue-axios'
import './permission'
import router from 'router/router'
import store from './store'
import Element from 'element-ui'
import components from './components'
import vueFilter from 'vue-filter'
import Vue2Filters from 'vue2-filters'
import 'element-ui/lib/theme-chalk/index.css'
import 'assets/styles/index.scss'
import { loadStyle } from 'utils/util'

import { iconfontUrl, iconfontVersion } from 'config/env'
iconfontVersion.forEach(ele => {
  loadStyle(iconfontUrl.replace('$key', ele))
})
Vue.use(Element)
Vue.use(router)
Vue.use(components)
Vue.use(Vue2Filters)
Vue.use(vueFilter)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
