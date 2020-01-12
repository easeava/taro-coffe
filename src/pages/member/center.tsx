import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { AtList, AtListItem } from "taro-ui"
import './center.scss'

export default class Center extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '个人中心',
    navigationStyle: 'custom',
    disableScroll: true
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='member'>
        <View className='head'>
          <View className='d-flex align-items-center userinfo'>
            <Image className='avatar' mode='aspectFill' src='https://static.luckincoffeecdn.com/mini/images/center/icon_header.png' />
            <View className='d-flex username'>
              <Text>用户登录</Text>
            </View>
          </View>
          <View className='d-flex wallet-list'>
            <View className='wallet-item'>
              <View className='wallet-count'>
                <Text className='count'>- -</Text>
                <Text className='unit'>元</Text>
              </View>
              <View className='wallet-title'>账户余额</View>
            </View>
            <View className='wallet-item'>
              <View className='wallet-count'>
                <Text className='count'>- -</Text>
                <Text className='unit'>张</Text>
              </View>
              <View className='wallet-title'>咖啡钱包</View>
            </View>
            <View className='wallet-item'>
              <View className='wallet-count'>
                <Text className='count'>- -</Text>
                <Text className='unit'>张</Text>
              </View>
              <View className='wallet-title'>优惠券</View>
            </View>
            <View className='wallet-item'>
              <View className='wallet-count'>
                <Text className='count'>- -</Text>
                <Text className='unit'>张</Text>
              </View>
              <View className='wallet-title'>礼品卡</View>
            </View>
          </View>
        </View>

        <View className='nav-list'>
          <AtList hasBorder={false}>
            <AtListItem thumb='https://static.luckincoffeecdn.com/mini/images/center/icon_invoice.png' hasBorder={false} title='发表管理' arrow='right' />
            <AtListItem thumb='https://static.luckincoffeecdn.com/mini/images/center/icon_notice.png' hasBorder={false} title='通知管理' arrow='right' />
            <AtListItem thumb='https://static.luckincoffeecdn.com/mini/images/center/icon_exchange.png' hasBorder={false} title='兑换优惠' arrow='right' />
            <AtListItem thumb='https://static.luckincoffeecdn.com/mini/images/center/icon_service.png' hasBorder={false} title='客户服务' arrow='right' />
          </AtList>
        </View>

        <View className='advert-link'>
          <Image mode='widthFix' src='https://img02.luckincoffeecdn.com/group1/M00/68/15/CtQLPFvQnziAHqYfAAHpN483nPA508.jpg' />
        </View>
      </View>
    )
  }
}
