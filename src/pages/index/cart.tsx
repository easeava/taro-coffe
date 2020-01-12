/* eslint-disable react/sort-comp */
/* eslint-disable no-unused-vars */
import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './cart.scss'

type PageStateProps = {
  app: {
    capsule: any
  }
}

type PageDispatchProps = {
}

type PageOwnProps = {}

type PageState = { }

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps;
}

@connect(({ app }) => ({
  app
}), () => ({
}))
class Index extends Component<PageOwnProps, PageState>  {

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

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { capsule } = this.props.app

    return (
      <View className='d-flex flex-column align-items-center cart'>
        <View className='banner' style={capsule ? 'padding-top:' + (capsule.top + capsule.height) + 'px' : ''}>
          <Image mode='widthFix' src='https://static.luckincoffeecdn.com/mini/images/abTest/ab_test_newBanner_2.png' />
        </View>
        <Image className='empty-cart-img' mode='widthFix' src='https://static.luckincoffeecdn.com/mini/images/cart/empty_icon.png' />
        <Text className='text'>您的购物车有点寂寞</Text>
        <View className='go-menu'>去喝一杯</View>
      </View>
    )
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>
