import axios from 'axios'
// import { useCounterStore } from '@/stores'
// import { ElMessage } from 'element-plus'
// import router from '@/router'

export const service = axios.create({
  baseURL: '/api',
  timeout: 5000,
})

service.interceptors.request.use((config) => {
  return config
})
service.interceptors.response.use((res) => {
  return res.data
})
