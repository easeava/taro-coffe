import Taro from '@tarojs/taro'
import config from '../config'

interface RequestFunc {
  (path: string, data?: object, method?: keyof Taro.request.method, loading?: boolean): Promise<{}>
}

const request: RequestFunc = (path, data = {}, method = 'POST', loading = true) => {
  return new Promise(async (resolve, reject) => {
    const url = config.api.domain + path
  
    loading && Taro.showLoading({
      title: '加载中...',
      mask: true
    })

    try {
      const response = await Taro.request({
        url,
        data,
        header: {},
        method
      })

      config.api.debug && console.log(`请求参数：`, data,  `返回结果：`, response)
      loading && Taro.hideLoading()
      resolve(response.data)
    } catch (error) {
      console.log(error)
      Taro.showToast({
        title: '网络连接失败',
        icon: 'none',
        duration: 2000
      })

      reject(error)
    }
  })
}

export default request
export const get = (path, data = {}, loading = true) => request(path, data, 'GET', loading)
export const post = (path, data = {}, loading = true) => request(path, data, 'POST', loading)
