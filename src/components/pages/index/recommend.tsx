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
    console.log(this.props)
    return (
      <View>
        asd
      </View>
    )
  }
}

export default Index