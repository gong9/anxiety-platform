import type { AxiosInstance } from 'axios'
import axios from 'axios'
import { ElMessage } from 'element-plus'
import localstorage from '@/utils/localstorage'
import { TOKEN } from '@/constant'

const aixosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
})

aixosInstance.interceptors.request.use(
  (config) => {
    config.headers!.icode = '47CD3D47C575726C'

    if (localstorage.getItem(TOKEN))
      config.headers!.Authorization = `${localstorage.getItem(TOKEN)}`

    return config
  },
)

aixosInstance.interceptors.response.use((response) => {
  const { status, data } = response

  if (status === 200 && data && data.success && data.data) {
    return data
  }

  else {
    ElMessage.error(data.message)
    return Promise.reject(new Error(data.message))
  }
}, (error) => {
  ElMessage.error(error.message)
  return Promise.reject(new Error(error))
})

export default aixosInstance
