import axios from 'axios'

const aixosInstance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
})

aixosInstance.interceptors.request.use(
  (config) => {
    config.headers!.icode = '47CD3D47C575726C'
    return config
  },
)

export default aixosInstance
