import { service } from '@/utils/request'
//注册接口
export const userRegisterService = (username, password, repassword) => {
  return service.post('/register', {
    username,
    password,
    repassword,
  })
}
//登录接口
export const userLoginService = (username, password) => {
  return service.post('/login', {
    username,
    password,
  })
}
