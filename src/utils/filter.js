import Vue from 'vue'
import { getArea } from 'utils/loginUtils.js'
import * as dict from 'assets/dic.js'
import { getInvestorList } from 'utils/loginUtils.js'

// 占位
export const customPlaceholder = (value, symbol = '----') => value || symbol

// 时间格式转换 基于vue-filter https://github.com/wy-ei/vue-filter#date
export const customDate = (value, format = '%F', placeholder = '----') => Number(value) ? Vue.filter('date')(Number(value), format) : placeholder

// 货币
export const customCurrency = (value, digit = 2, placeholder = '----') => value || value === 0 ? Vue.filter('currency')(value, '', digit) : placeholder

// 订单状态
export const orderState = (value, orderDict = dict.orderStatusDict, placeholder = '----') => orderDict[value.step][value.state] ? orderDict[value.step][value.state] : placeholder

/***
 * 资方映射
 * @param val
 * @returns {string}
 */
export const investorFormatter = (val) => {
  let investorFormatterVal = '----'
  let investorSourceData = JSON.parse(getInvestorList())
  for (let k of investorSourceData) {
    if (k.id === val) {
      investorFormatterVal = k.shortName
    }
  }
  return investorFormatterVal
}
/***
 * 销售区域映射
 * @param val
 * @param districtCode
 * @param district
 * @returns {*}
 */
export const districtFormatter = (val, districtCode = 'districtCode', district = 'district') => {
  const districtObj = {
    district: '',
    city: '',
    type: '',
    parentDistrict: ''
  }
  let districtData = JSON.parse(getArea())
  districtData.forEach((item, index) => {
    item.subDistrict.forEach((k, index) => {
      if (k.district_code === val.parentCode) {
        districtObj.parentDistrict = k.district
      }
      if (k.district_code === val[districtCode]) {
        districtObj.district = item.district
        districtObj.city = k.district
        districtObj.type = k.district_type
      }
    })
  })
  if (districtObj.type === 40) {
    return val[districtCode] && districtObj.district && districtObj.city ? `${districtObj.district}-${districtObj.city}（${districtObj.parentDistrict}${dict.districtTypeDict[districtObj.type]}）` : val[district] || '----'
  }
  return val[districtCode] && districtObj.district && districtObj.city ? `${districtObj.district}-${districtObj.city}` : val[district] || '----'
}

