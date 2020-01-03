import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'

import './new.scss'

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
    const { title, data } = this.props
    return (
      <View className='new-section'>
        <View className='d-flex justify-content-between'>
          <View className='title'>{title || '新鲜事'}</View>
        </View>
        <Swiper className='new-swiper' circular interval={1000} nextMargin={data && data.length === 2 ? '140rpx' : '78rpx'} previousMargin={data && data.length === 2 ? '10rpx' : '78rpx'}>
          <SwiperItem className='new-swiper-item'>
            <Image className='new-img' src='https://images.ease.smhx.net/CtQLO125sfKAE5IhAAJpP9n8b8w670.jpg' />
          </SwiperItem>
          <SwiperItem className='new-swiper-item'>
            <Image className='new-img' src='https://images.ease.smhx.net/CtQLO14LZt-ATvs5AACoygvNv0Q03.jpeg' />
          </SwiperItem>
          <SwiperItem className='new-swiper-item'>
            <Image className='new-img' src='https://images.ease.smhx.net/CtQLO14LZ4-AEknYAAUltHq0eB0693.jpg' />
          </SwiperItem>
          <SwiperItem className='new-swiper-item'>
            <Image className='new-img' src='https://images.ease.smhx.net/CtQLPF4KyXKAMzv0AAGNdFhJkJA349.png' />
          </SwiperItem>
          <SwiperItem className='new-swiper-item'>
            <Image className='new-img' src='https://images.ease.smhx.net/CtQLPF3tzGaAXyieAAVTCCN-fDY930.jpg' />
          </SwiperItem>
        </Swiper>
      </View>
    )
  }
}

export default Index