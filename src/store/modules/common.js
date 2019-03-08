import { setStore, getStore } from "utils/store"
import website from "assets/website"
import {validateNull } from "utils/validate"
import { getDistrictCode } from 'api/common'

const common = {
  state: {
    isCollapse: false,
    salesDistrict: getStore({ name: 'salesDistrict' }) || {}, // 销售地区
    website: website
  },
  actions: {
    // 获取销售区域
    getSalesDistrict({ commit }) {
      return new Promise((resolve, reject) => {
        getDistrictCode().then(res => {
          const data = res.data.data
          commit('SET_SALESDISTRICT', data)
        }).catch(err => {
          reject(err)
        })
      })
    },
  },
  mutations: {
    SET_COLLAPSE: (state, action) => {
      state.isCollapse = !state.isCollapse
    },
    SET_SALESDISTRICT: (state, districtCode) => {
      state.salesDistrict = districtCode
      setStore({ name: 'salesDistrict', content: state.salesDistrict, type: 'session' })
    }
  }
}
export default common
