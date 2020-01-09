/* eslint-disable react/sort-comp */
/* eslint-disable no-unused-vars */
import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import classNames from 'classnames'
import { connect } from '@tarojs/redux'
import * as api from '../../utils/api'
import Recommend from '../../components/pages/index/recommend'
import New from '../../components/pages/index/new'
import Pop from '../../components/pages/index/pop'

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

interface SectionProps {
  title: string,
  data: Array<any>
}

type PageStateProps = {
  app: {
    capsule: any
  }
}

type PageDispatchProps = {
}

type PageOwnProps = {}

type PageState = {
  show: boolean,
  autoplay: boolean,
  interval: number,
  duration: number,
  banners: Array<{
    id: string | number,
    clickUrl: string,
    sourceUrl: string
  }>
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps;
}

@connect(({ app }) => ({
  app
}), () => ({
}))
class Index extends Component<PageOwnProps, PageState> {

    /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页',
    navigationStyle: 'custom'
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

  // Banner
  renderBanner () {
    const { autoplay, duration, interval, banners } = this.state

    const images = banners.map((item: any) => {
      return <SwiperItem key={item.id}>
        <Image className='banner-image' src={item.sourceUrl} />
      </SwiperItem>
    })

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
          {images}
        </Swiper>
      </View>
    </View>
  }

  // Menu
  renderMenuBox () {
    const prefix: string = 'list-new-'
    const prefixClass = (name, other = '') => classNames(prefix + name, other)

    return <View className={prefixClass('box')}>
      <View className={prefixClass('bar')}>
        <View className={prefixClass('menu')}>
          <View className={prefixClass('menu__left', 'position-relative')}>
            <View className={prefixClass('menu__item')} style="background-image: url('https://images.ease.smhx.net/ico_home_ad_menu.png')">
              <View className={prefixClass('menu__item-title')}>现在下单</View>
              <View className={prefixClass('menu__item-subtitle')}>ORDER NOW</View>
            </View>
          </View>
          <View className={prefixClass('menu__right', 'position-relative')}>
            <View className={prefixClass('menu__item')} style="background-image: url('https://images.ease.smhx.net/ico_home_ad_wallet.png')">
              <View className={prefixClass('menu__item-tip')} style="background-image: url('https://images.ease.smhx.net/ico_concern.png')">充2赠1</View>
              <View className={prefixClass('menu__item-title')}>咖啡钱包</View>
              <View className={prefixClass('menu__item-subtitle')}>COFFEE WALLET</View>
            </View>
          </View>
        </View>
        <View className={prefixClass('menu-more')}>
          <View className={prefixClass('menu-more__item')}>
            <View className={prefixClass('menu__item')} style="background-image: url('https://images.ease.smhx.net/ico_home_ad_coupon.png')">
              <View className={prefixClass('menu__item-title')}>我的优惠券</View>
              <View className={prefixClass('menu__item-subtitle')}>MY COUPONS</View>
            </View>
          </View>
          <View className={prefixClass('menu-more__item')}>
            <View className={prefixClass('menu__item')} style="background-image: url('https://images.ease.smhx.net/ico_home_ad_send.png')">
              <View className={prefixClass('menu__item-title')}>送TA咖啡</View>
              <View className={prefixClass('menu__item-subtitle')}>SEND COFFEE</View>
            </View>
          </View>
          <View className={prefixClass('menu-more__item')}>
            <View className={prefixClass('menu__item')} style="background-image: url('https://images.ease.smhx.net/ico_home_ad_pop.png')">
              <View className={prefixClass('menu__item-title')}>瑞幸潮品</View>
              <View className={prefixClass('menu__item-subtitle')}>LUCKIN POP</View>
            </View>
          </View>
        </View>
      </View>
    </View>
  }

  renderSectionSortShow () {
    
    const section = ['recommend', 'new', 'pop'].map((item) => {
      switch (item) {
        case 'recommend': {
          const data: SectionProps = {
            title: '为你推荐',
            data: [{
              name: '焦糖玛奇朵',
              enName: 'Caramel Macchiato',
              initialPrice: 27,
              discountPrice: 27
            }, {
              name: '焦糖玛奇朵',
              enName: 'Caramel Macchiato',
              initialPrice: 10,
              discountPrice: 27
            }, {
              name: '焦糖玛奇朵',
              enName: 'Caramel Macchiato',
              initialPrice: 27,
              discountPrice: 27
            }]
          }
          return <Recommend {...data} key={item} />
        }
        case 'new': {
          const data: SectionProps = {
            title: '新鲜事',
            data: [{
              sourceUrl: 'https://img04.luckincoffeecdn.com/group1/M01/F2/B5/CtQLO125sfKAE5IhAAJpP9n8b8w670.jpg'
            }, {
              sourceUrl: 'https://img04.luckincoffeecdn.com/group1/M01/31/07/CtQLO14LZt-ATvs5AACoygvNv0Q03.jpeg'
            }, {
              sourceUrl: 'https://img04.luckincoffeecdn.com/group1/M01/31/07/CtQLO14LZ4-AEknYAAUltHq0eB0693.jpg'
            }, {
              sourceUrl: 'https://img04.luckincoffeecdn.com/group1/M01/2B/FF/CtQLPF4KyXKAMzv0AAGNdFhJkJA349.png'
            }, {
              sourceUrl: 'https://img04.luckincoffeecdn.com/group1/M01/AD/84/CtQLPF3tzGaAXyieAAVTCCN-fDY930.jpg'
            }]
          }
          return <New {...data} key={item} />
        }
        case 'pop': {
          const data: SectionProps = {
            title: '瑞幸潮品',
            data: [1,2,3]
          }
          return <Pop {...data} key={item} />
        }
      }
    })

    return section
  }

  render () {
    const { capsule } = this.props.app

    return (
      <View className='page home' style={capsule ? 'padding-top:' + (capsule.top + capsule.height) + 'px' : ''}>
        {this.renderBanner()}
        {this.renderMenuBox()}
        {this.renderSectionSortShow()}
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
