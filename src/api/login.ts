import request from '@/service/index'

/**
 * login
 */
interface LoginDataType {
  username: string
  password: string
}
export const login = (data: LoginDataType) => {
  return request({
    url: '/api/sys/login',
    method: 'POST',
    data,
  })
}
