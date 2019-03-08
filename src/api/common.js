import request from './axios'
// 获取销售区域
export const getDistrictCode = data => request({
  url: `/falcon/collection/district`,
  method: 'get',
  data
})
