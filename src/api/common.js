import request from './axios'
// 获取销售区域
export const getDistrictCode = data => request({
  url: `/falcon/collection/district`,
  method: 'get',
  data
})

// view
export const viewConfig = viewId => request({
  url: `/report/view/${viewId}`,
  method: 'get'
})

export const viewData = (url, data) => request({
  url: url,
  method: 'post',
  data
})
