import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

type PageOwnProps = {
  title: string,
  data: Array<any>
}

type PageState = {
}

class Index extends Component<PageOwnProps, PageState> {

  render () {
    return (
      <View>
        new
      </View>
    )
  }
}

export default Index