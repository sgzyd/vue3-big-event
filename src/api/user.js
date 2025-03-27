import { service } from '@/utils/request'
//注册接口
export const userRegisterService = (username, password, repassword) => {
  return service.post('/posts', {
    username,
    password,
    repassword,
  })
}
