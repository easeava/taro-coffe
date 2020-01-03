import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'

import './recommend.scss'

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
      <View className='recommend'>
        <View className='d-flex justify-content-between'>
          <View className='title'>{title || '为你推荐'}</View>
          <View className='refresh'>换一批</View>
        </View>
        <View className='d-flex product-list'>
          {data.map(item => {
            return <View className='d-flex flex-column product-section' key={item.id}>
              <View className='product-head position-relative'>
                <Image className='product-img' src='https://images.ease.smhx.net/CtQLPFzO7Z-APFYZAALppw4chyY605.jpg' />
                <View className='product-title'>
                  <View className='name text-ellipsis'>{item.name}</View>
                  <View className='subname text-ellipsis'>{item.enName}</View>
                </View>
              </View>
              <View className='d-flex justify-content-between align-items-center product-bar'>
                {item.initialPrice === item.discountPrice ? <View className='price'>￥{item.initialPrice}</View> : <View>
                  <Text className='dis-unit'>
                    ￥<Text className='dis-price'>{item.discountPrice}</Text>
                  </Text>
                  <Text className='line-price'>
                    ￥<Text className='line-price'>{item.initialPrice}</Text>
                  </Text>
                </View>}
                <Image className='add' src='https://images.ease.smhx.net/ico_add_coffee.png' />
              </View>
            </View>
          })}
        </View>
      </View>
    )
  }
}

export default Index