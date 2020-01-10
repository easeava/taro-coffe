import Taro from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import AtComponent from '../common'
import './index.scss'

type PageOwnProps = {
}

type PageState = {
}

export default class Index extends AtComponent<PageOwnProps, PageState> {

  static defaultProps: PageOwnProps = {
  }


  render () {

    return (
      <View className='empty-list'>
        <View className='empty-img'></View>
        <View className='empty-tips'>您还没有订单哦</View>
        <Button className='empty-btn'>去喝一杯</Button>
      </View>
    )
  }
}
