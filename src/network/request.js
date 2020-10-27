import axios from 'axios'
export function request(config) {
  const instance = axios.create({
    baseURL: '',
    timeout: 150000
  })

//axios拦截器
  //1、发送拦截
  // instance.interceptors.request.use(request =>{
  //   console.log(request);
  //   return request
  // },err => {
  //   console.log(err);
  // })
  //2、响应拦截
  instance.interceptors.response.use(res => {

    return res.data
  },err => {
    console.log(err);
  })

  return instance(config)
}

