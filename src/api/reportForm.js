import request from './axios'

// view
export const view = viewId => request({
  url: `/report/view/${viewId}`,
  method: 'get'
})

export const salesList = (viewId, data, isPage) => request({
  url: `/report/data/${viewId}?page=${data.page.page || 1}&pageRows=${data.page.pageRows || 10}`,
  method: 'post',
  data
})
