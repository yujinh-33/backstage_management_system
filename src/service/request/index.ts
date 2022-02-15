import axios, { AxiosInstance } from 'axios'
import type { HiRequestConfig, HiRequestInterceptors } from './types'

class HiRequest {
  instance: AxiosInstance
  interceptors?: HiRequestInterceptors

  constructor(config: HiRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    this.instance.interceptors.request.use(
      (config) => {
        // ...
        return config
      },
      (error) => {
        // ...
        return error
      }
    )
    this.instance.interceptors.response.use(
      (response) => {
        // ...
        return response.data
      },
      (error) => {
        // ...
        return error
      }
    )
  }

  request<T>(config: HiRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      this.instance
        .request<any, T>(config)
        .then((response) => {
          if (config.interceptors?.responseInterceptor) {
            response = config.interceptors.responseInterceptor(response)
          }

          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  get<T>(config: HiRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: HiRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: HiRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: HiRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default HiRequest
