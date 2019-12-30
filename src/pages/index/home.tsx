/* eslint-disable react/sort-comp */
import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import classNames from 'classnames'
import './home.scss'
import * as api from '../../utils/api'

const loop = e => e.stopPropagation()

declare interface IProps {}

declare interface ISate {
  show: boolean,
  autoplay: boolean,
  interval: number,
  duration: number,
  banners: string[]
}

export default class Home extends Component <IProps, ISate> {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Taro.Config = {
    navigationBarTitleText: '首页1'
  }

  componentWillMount () { }

  componentDidMount () { }

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
