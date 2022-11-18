import request from '@/service/index'
interface LoginDataType {
  username: string
  password: string
}

/**
 * login
 * @param data
 * @returns
 */
export const login = (data: LoginDataType) => {
  return request({
    url: '/api/sys/login',
    method: 'POST',
    data,
  })
}
