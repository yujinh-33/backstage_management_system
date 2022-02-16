import HiRequest from './request'
import { BASE_URL } from './request/config'
import localCache from '@/utils/cache'

const hiRequest = new HiRequest({
  baseURL: BASE_URL,
  interceptors: {
    requestInterceptor: (config) => {
      const token = localCache.getItem('token')

      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
      }

      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default hiRequest
