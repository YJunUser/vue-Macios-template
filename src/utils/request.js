import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
  })
  instance.interceptors.request.use(config => {
    return config
  }, error => {
    console.log(error)
    return Promise.reject(error)
  })

  instance.interceptors.response.use(res => {
    return res.data
  }, error => {
    console.log(error)
    return Promise.reject(error)
  })

  return instance(config)
}
