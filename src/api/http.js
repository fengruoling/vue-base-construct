// 此文件用来对axios做基本参数设定，并封装拦截器
import axios from 'axios'
// import qs from 'qs'    // 根据接口需要，确定是否要引入qs
// import { Message } from 'element-ui'     // 根据UI库类型来引入提醒组件

const baseURL = '' // 接口基本地址

const instance = axios.create({
  baseURL: baseURL,
  withCredentials: true, // 是否允许带cookie
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 请求信息输出开关 localStorage.debug = 'true'
const isDebugging = () => localStorage.debug === 'true'

// 请求拦截器
instance.interceptors.request.use(
  config => {
    // config.data = qs.stringify(config.data) // 根据需要确定是否要用qs转换
    return config
  }, error => Promise.reject(error)
)

// 响应拦截器
instance.interceptors.response.use(
  response => {
    const res = response.data
    if (isDebugging()) {
      const config = response.config
      const url = config.url
      console.log(
        `%c${url}\n%c${JSON.stringify(res)}`,
        'color:blue',
        'color:green'
      )
    }
    if (response.status === 200) {
      // 根据需要确定是否要额外判断
      return Promise.resolve(response.data.data)
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    if (isDebugging()) {
      const config = error.config
      const url = config.url
      console.log(
        `%c${url}\n%c${error}`,
        'color:blue',
        'color:red'
      )
    }

    if (error.message.includes('timeout')) {
      Toast('数据请求超时，请稍后再试')
    }

    switch (error.response.status) {
      case 404:
        // Message('请求的资源不存在！')  // 使用项目中实际的UI框架提醒组件
        break
      // TODO 根据接口状态码来编写
    }
  }
)

export default instance
