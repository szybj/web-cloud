import request from './axios'
import { baseUrl } from "config/env"

export const logIn = data => request({
  url: `${baseUrl}/api/login`,
  method: 'get',
  params: {...data}
})
