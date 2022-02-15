import HiRequest from './request'
import { BASE_URL } from './request/config'

const hiRequest = new HiRequest({
  baseURL: BASE_URL
  // interceptors: { ... } => 实例拦截器
})

export default hiRequest
