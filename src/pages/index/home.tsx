/* eslint-disable react/sort-comp */
/* eslint-disable no-unused-vars */
import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import classNames from 'classnames'
import { connect } from '@tarojs/redux'
import { changeScene } from '../../actions/app'
import * as api from '../../utils/api'

import './home.scss'

const loop = e => e.stopPropagation()

// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

type PageStateProps = {
  app: {
    scene: string
  }
}

type PageDispatchProps = {
  changeScene: (object) => any
}

type PageOwnProps = {}

type PageState = {
  show: boolean,
  autoplay: boolean,
  interval: number,
  duration: number,
  banners: string[]
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps;
}

@connect(({ app }) => ({
  app
}), (dispatch) => ({
  changeScene (data) {
    dispatch(changeScene(data))
  }
}))
class Index extends Component<IProps, PageState> {

    /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () {
    
    this.requestPage()
  }

  componentDidHide () { }

  constructor (props) {
    super(props)
    this.state = {
      show: false,
      autoplay: true,
      interval: 5000,
      duration: 500,
      banners: []
    }
  }

  async requestPage () {
    const response: any = await api.get('/banners', {}, false)
    const banners = response.data.length > 0 ? response.data : []

    this.setState({
      banners
    })
  }

  showPageDetail = (e) => {
    e.stopPropagation()
    
    Taro.hideTabBar({
      animation: true,
      complete: () => {
        this.setState({
          show: true
        })
      }
    })
  }

  hidePageDetail = (e) => {
    e.stopPropagation()
    Taro.showTabBar({
      animation: true,
      complete: () => {
        this.setState({
          show: false
        })
      }
    })
  }

  renderButton = () => {
    return <View className='at-row at-row__align--center at-row__justify--center'>
      <View className='at-col-3'>
        <AtButton type='primary' size='small' onClick={this.showPageDetail}>按钮</AtButton>
      </View>
    </View>
  }

  renderPageDetail = () => {
    const { show } = this.state
    const className = classNames(
      'page-detail',
      {
        'active': show
      }
    )
    return <View className={className} onClick={loop}>
      <AtButton type='primary' size='small' onClick={this.hidePageDetail}>按钮</AtButton>
    </View>
  }

  renderBanner () {
    const { autoplay, duration, interval, banners } = this.state

    return <View className='banner-box'>
      <View className='banner-radius'>
        <Swiper
          indicatorColor='rgba(255, 255, 255, 0.5)'
          indicatorActiveColor='#fff'
          circular
          indicatorDots
          duration={duration}
          interval={interval}
          autoplay={autoplay}
        >
          {banners.map((item: any) => {
            return <SwiperItem key={item.id}>
              <Image className={classNames('banner-image')} src={item.sourceUrl} />
            </SwiperItem>
          })}
        </Swiper>
      </View>
    </View>
  }

  render () {
    return (
      <View className='page home'>
        {this.renderBanner()}
      </View>
    )
  }
}

// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion

export default Index as ComponentClass<PageOwnProps, PageState>
