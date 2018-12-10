import {setToken, removeToken} from 'utils/auth'
import {setStore, getStore} from 'utils/store'
import {isURL} from 'utils/validate'
import {encryption, deepClone} from 'utils/util'
import webiste from 'assets/website'
import {logIn, logOut, refeshToken} from 'api/user'

const user = {
  state: {
    userInfo: getStore({ name: 'userInfo' }) || {},
    // permissions: {}, // 用户权限
    roles: [], // 角色
    // userMenu: getStore({name: 'sidebarMenu'}) || [], // 用户菜单
    sysMenu: getStore({ name: 'sysMenu' }) || [], // 系统菜单
    token: getStore({name: 'token'}) || ''
  },
  actions: {
    // 登录并获取用户，菜单等信息
    logIn({commit}, userInfo) {
      console.log('userInfo', userInfo)
      // 信息加密
      // const user = encryption({
      //   data: userInfo,
      //   type: 'Aes',
      //   key: 'orange',
      //   param: ['username', 'password']
      // })
      return new Promise((resolve, reject) => {
        logIn(userInfo).then(res => {
          const data = res.data.data
          const currentDate = new Date().getTime()
          commit('SET_TOKEN', currentDate) // 模拟 Token
          commit('SET_USERINFO', data.sysUser)
          commit('SET_ROLES', data.groups)
          commit('SET_MENU', data.sysMenu)
          commit('DEL_ALL_TAG')
          setToken(currentDate)
          resolve(data)
        }).catch(err => {
          reject(err)
        })
      })
    },
    refeshToken({commit}) {
      return new Promise((resolve, reject) => {
        refeshToken().then(res => {
          const data = res.data.data
          commit('SET_TOKEN', data)
          setToken(data)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    logOut({ commit }) {
      commit('SET_TOKEN', '')
      commit('SET_MENU', [])
      commit('SET_ROLES', [])
      commit('DEL_ALL_TAG')
      removeToken()
    },
    //注销session
    fedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_MENU', [])
        commit('SET_ROLES', [])
        commit('DEL_ALL_TAG')
        removeToken()
        resolve()
      })
    }
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
      setStore({name: 'token', content: state.token, type: 'session'})
    },
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo
      setStore({name: 'userInfo', content: state.userInfo, type: 'session'})
    },
    SET_MENU: (state, menu) => {
      state.sysMenu = menu
      setStore({name: 'sysMenu', content: state.sysMenu, type: 'session'})
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
  }
}
export default user
