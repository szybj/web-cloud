import request from "./axios"

export const salesList = data => request({
  url: `/jarvis/salesman/list`,
  method: 'get',
  params: { ...data }
})
