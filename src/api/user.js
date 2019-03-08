import request from './axios'

export const logIn = data => request({
  url: `https://jarvis-api.orange-king.com/v1/api/login`,
  method: 'get',
  params: { ...data }
})
