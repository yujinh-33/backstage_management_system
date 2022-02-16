import { defineStore } from 'pinia'
import type { LoginState } from './types'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenuByRoleId
} from '@/service/login'
import { Account } from '@/service/login/types'
import localCache from '@/utils/cache'

// useRouter只能在组件中使用, 我们可以使用router中默认导出的router对象进行跳转
import router from '@/router'

export const useLoginStore = defineStore('login', {
  state: (): LoginState => ({
    token: '',
    userInfo: {},
    userMenus: []
  }),
  getters: {},
  actions: {
    async accountLogin(payload: Account) {
      const loginResult = await accountLoginRequest(payload)

      // 请求并保存token
      this.token = loginResult.data.token
      const id = loginResult.data.id
      localCache.setItem('token', this.token)

      // 请求并保存用户信息
      const userInfoResult = await requestUserInfoById(id)
      this.userInfo = userInfoResult.data
      localCache.setItem('userInfo', this.userInfo)

      // 请求并保存用户菜单
      const userMenusResult = await requestUserMenuByRoleId(
        this.userInfo.role.id
      )
      this.userMenus = userMenusResult
      localCache.setItem('userMenus', this.userMenus)

      // 跳转到首页
      router.push('/main')
    },
    loadLocalLogin() {
      const token = localCache.getItem('token')
      if (token) this.token = token

      const userInfo = localCache.getItem('userInfo')
      if (userInfo) this.userInfo = userInfo

      const userMenus = localCache.getItem('userMenus')
      if (userMenus) this.userMenus = userMenus
    }
  }
})
