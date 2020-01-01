/* eslint-disable react/sort-comp */
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import Index from './pages/index/home'
import configStore from './store'
import { changeScene, getSysteminfo, getCapsule } from './actions/app'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Taro.Config = {
    pages: [
      'pages/index/home',
      'pages/index/menu',
      'pages/index/cart',
      'pages/order/list',
      'pages/member/center'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'luckin coffee',
      navigationBarTextStyle: 'black',
      enablePullDownRefresh: false,
      backgroundColor: '#fff',
      navigationStyle: 'default'
    },
    tabBar: {
      color: '#666',
      selectedColor: '#333999',
      backgroundColor: '#fff',
      list: [
        {
          text: '首页',
          pagePath: 'pages/index/home',
          iconPath: 'resources/images/index/index_blur.png',
          selectedIconPath: 'resources/images/index/index_focus.png'
        },
        {
          text: '菜单',
          pagePath: 'pages/index/menu',
          iconPath: 'resources/images/index/menu_blur.png',
          selectedIconPath: 'resources/images/index/menu_focus.png'
        },
        {
          text: '订单',
          pagePath: 'pages/order/list',
          iconPath: 'resources/images/index/order_blur.png',
          selectedIconPath: 'resources/images/index/order_focus.png'
        },
        {
          text: '购物车',
          pagePath: 'pages/index/cart',
          iconPath: 'resources/images/index/cart_blur.png',
          selectedIconPath: 'resources/images/index/cart_focus.png'
        },
        {
          text: '我的',
          pagePath: 'pages/member/center',
          iconPath: 'resources/images/index/mine_blur.png',
          selectedIconPath: 'resources/images/index/mine_focus.png'
        }
      ]
    },
    networkTimeout: {
      request: 15000
    }
  }

  componentDidMount () {}

  componentDidShow () {
    const { scene } = this.$router.params
    store.dispatch(changeScene(scene))
    store.dispatch(getSysteminfo())
    store.dispatch(getCapsule())
  }

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
