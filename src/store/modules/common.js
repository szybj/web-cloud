import { setStore, getStore } from "utils/store"
import website from "assets/website"
import {validateNull } from "utils/validate"
import { getDistrictCode, viewConfig, viewData } from 'api/common'

const common = {
  state: {
    isCollapse: false,
    salesDistrict: getStore({ name: 'salesDistrict' }) || {}, // 销售地区
    detailQuery: getStore({ name: 'detailQuery' }) || {}, // 详情页配置参数
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
    getViewConfig ({ commit }, viewId) {
      return new Promise((resolve, reject) => {
        viewConfig(viewId).then(res => {
          const resData = res.data.data
          resolve(resData)
        })
      })
    },
    getViewData ({ commit }, {url, formParams}) {
      console.log('url', url)
      console.log('searchParams', formParams)
      return new Promise((resolve, reject) => {
        viewData(url, formParams).then(res => {
          const resData = res.data.data
          resolve(resData)
        })
      })
    }
  },
  mutations: {
    SET_COLLAPSE: (state, action) => {
      state.isCollapse = !state.isCollapse
    },
    SET_DETAILQUERY: (state, params) => {
      state.detailQuery = params
      setStore({ name: 'detailQuery', content: state.detailQuery, type: 'session' })
    },
    SET_SALESDISTRICT: (state, districtCode) => {
      state.salesDistrict = districtCode
      setStore({ name: 'salesDistrict', content: state.salesDistrict, type: 'session' })
    }
  }
}
export default common
