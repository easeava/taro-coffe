import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'

import './pop.scss'

type PageOwnProps = {
  title: string,
  data: Array<any>
}

type PageState = {
}

class Index extends Component<PageOwnProps, PageState> {

  static options = {
    addGlobalClass: true
  }

  render () {
    const { title } = this.props
    return (
      <View className='pop-section'>
        <View className='d-flex justify-content-between'>
          <View className='title'>
            {title || '瑞幸潮品'}
            <Image className='title-img' src='https://static.luckincoffeecdn.com/mini/images/home/ico_send_label.png' />
          </View>
          <View className='more'>更多</View>
        </View>
        <View className='d-flex flex-row flex-wrap justify-content-between pop-container'>
          <View className='pop-item'>1</View>
          <View className='pop-item'>1</View>
          <View className='pop-item'>1</View>
          <View className='pop-item'>1</View>
        </View>
      </View>
    )
  }
}

export default Index