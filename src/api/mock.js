import request from './axios'

export const getTableData = data => request({
  url: `/getTableData`,
  method: 'get',
  params: { ...data }
})
