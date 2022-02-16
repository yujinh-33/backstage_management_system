import hiRequest from '../index'
import type { Account, DataType, LoginResult } from './types'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', // 用法 user/1
  UserMenus = '/role/' // 用法 role/1/menu
}

export function accountLoginRequest(account: Account) {
  return hiRequest.post<DataType<LoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return hiRequest.get({
    url: LoginAPI.LoginUserInfo + id
  })
}

export function requestUserMenuByRoleId(id: number) {
  return hiRequest.get({
    url: LoginAPI.UserMenus + id + '/menu'
  })
}
