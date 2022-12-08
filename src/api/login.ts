import request from '@/service/index'

interface LoginDataType {
  username: string
  password: string
}
export const login = (data: LoginDataType) => {
  return request({
    url: '/api/admin/login',
    method: 'POST',
    data,
  })
}

export const getUserInfo = () => {
  return request({
    url: '/api/admin.user',
    method: 'GET',
  })
}
