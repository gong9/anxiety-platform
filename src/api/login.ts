import request from '@/service/index'

interface LoginDataType {
  username: string
  password: string
}
export const login = (data: LoginDataType) => {
  return request({
    url: '/admin/login',
    method: 'POST',
    data,
  })
}

export const getUserInfo = () => {
  return request({
    url: '/admin/user',
    method: 'GET',
  })
}
