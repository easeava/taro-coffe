import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'

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
            <Image className='title-img' src='https://images.ease.smhx.net/ico_send_label.png' />
          </View>
          <View className='more'>更多</View>
        </View>
        <View className='d-flex flex-row flex-wrap justify-content-between pop-container'>
          <View className='pop-item'>
            <View className='pop-head'>
              <Image className='pop-img' src='https://images.ease.smhx.net/CtQLPF4HIK6AToYvAAF4qIipDII001.jpg' />
            </View>
            <View className='pop-body'>
              <View className='name'>产品名</View>
              <View className='cart d-flex justify-content-between'>
                <Text className='price new'>
                  ￥27
                </Text>
                <Text className='old-price'>￥30</Text>
              </View>
              <View className='d-flex justify-content-between align-items-center'>
                <View className='already-sold'>已售卖0件</View>
                <View className='add-cart'>
                  <Image src='https://images.ease.smhx.net/icon_home_pop_cart.png' />
                </View>
              </View>
            </View>
          </View>

          <View className='pop-item'>
            <View className='pop-head'>
              <Image className='pop-img' src='https://images.ease.smhx.net/CtQLPF4HIK6AToYvAAF4qIipDII001.jpg' />
              <View className='sale-style advance-sale'>
                <Text>预售开始时间</Text>
              </View>
            </View>
            <View className='pop-body'>
              <View className='name'>产品名</View>
              <View className='cart d-flex justify-content-between'>
                <Text className='price new'>
                  ￥27
                </Text>
                <Text className='old-price'>￥30</Text>
              </View>
              <View className='d-flex justify-content-between align-items-center'>
                <View className='already-sold'>已售卖0件</View>
              </View>
            </View>
          </View>
          
          <View className='pop-item'>
            <View className='pop-head'>
              <Image className='pop-img' src='https://images.ease.smhx.net/CtQLPF4HIK6AToYvAAF4qIipDII001.jpg' />
              <View className='sale-style on-sale'>
                <Text>开售剩余时间</Text>
              </View>
            </View>
            <View className='pop-body'>
              <View className='name'>产品名</View>
              <View className='cart d-flex justify-content-between'>
                <Text className='price new'>
                  ￥27
                </Text>
                <Text className='old-price'>￥30</Text>
              </View>
              <View className='d-flex justify-content-between align-items-center'>
                <View className='already-sold'>已售卖0件</View>
              </View>
            </View>
          </View>

          <View className='pop-item'>
            <View className='pop-head'>
              <Image className='pop-img' src='https://images.ease.smhx.net/CtQLPF4HIK6AToYvAAF4qIipDII001.jpg' />
            </View>
            <View className='pop-body'>
              <View className='name'>产品名</View>
              <View className='cart d-flex justify-content-between'>
                <Text className='price new'>
                  ￥27
                </Text>
                <Text className='old-price'>￥30</Text>
              </View>
              <View className='d-flex justify-content-between align-items-center'>
                <View className='already-sold'>已售卖0件</View>
                <View className='sell-out'>售罄</View>
              </View>
            </View>
          </View>

          <View className='pop-item'>
            <View className='pop-head'>
              <Image className='pop-img' src='https://images.ease.smhx.net/CtQLPF4HIK6AToYvAAF4qIipDII001.jpg' />
            </View>
            <View className='pop-body'>
              <View className='name'>产品名</View>
              <View className='cart d-flex justify-content-between'>
                <Text className='price new'>
                  ￥27
                </Text>
                <Text className='old-price'>￥30</Text>
              </View>
              <View className='d-flex justify-content-between align-items-center'>
                <View className='already-sold'>已售卖0件</View>
                <View className='add-cart'>
                  <Image src='https://images.ease.smhx.net/icon_home_pop_cart.png' />
                </View>
              </View>
            </View>
          </View>

          <View className='pop-item'>
            <View className='pop-head'>
              <Image className='pop-img' src='https://images.ease.smhx.net/CtQLPF4HIK6AToYvAAF4qIipDII001.jpg' />
              <View className='sale-style advance-sale'>
                <Text>预售开始时间</Text>
              </View>
            </View>
            <View className='pop-body'>
              <View className='name'>产品名</View>
              <View className='cart d-flex justify-content-between'>
                <Text className='price new'>
                  ￥27
                </Text>
                <Text className='old-price'>￥30</Text>
              </View>
              <View className='d-flex justify-content-between align-items-center'>
                <View className='already-sold'>已售卖0件</View>
              </View>
            </View>
          </View>
          
          <View className='pop-item'>
            <View className='pop-head'>
              <Image className='pop-img' src='https://images.ease.smhx.net/CtQLPF4HIK6AToYvAAF4qIipDII001.jpg' />
              <View className='sale-style on-sale'>
                <Text>开售剩余时间</Text>
              </View>
            </View>
            <View className='pop-body'>
              <View className='name'>产品名</View>
              <View className='cart d-flex justify-content-between'>
                <Text className='price new'>
                  ￥27
                </Text>
                <Text className='old-price'>￥30</Text>
              </View>
              <View className='d-flex justify-content-between align-items-center'>
                <View className='already-sold'>已售卖0件</View>
              </View>
            </View>
          </View>

          <View className='pop-item'>
            <View className='pop-head'>
              <Image className='pop-img' src='https://images.ease.smhx.net/CtQLPF4HIK6AToYvAAF4qIipDII001.jpg' />
            </View>
            <View className='pop-body'>
              <View className='name'>产品名</View>
              <View className='cart d-flex justify-content-between'>
                <Text className='price new'>
                  ￥27
                </Text>
                <Text className='old-price'>￥30</Text>
              </View>
              <View className='d-flex justify-content-between align-items-center'>
                <View className='already-sold'>已售卖0件</View>
                <View className='sell-out'>售罄</View>
              </View>
            </View>
          </View>
          
        </View>
      </View>
    )
  }
}

export default Index