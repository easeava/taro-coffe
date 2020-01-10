/* eslint-disable react/sort-comp */
/* eslint-disable no-unused-vars */
import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import SegmentedControl from '../../components/segmented-control'
import EmptyList from '../../components/empty-list'
import './list.scss'

type PageOwnProps = {}

type PageState = {
  current: number,
  height: string|number
}

class Index extends Component<PageOwnProps, PageState>  {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '订单',
    navigationBarBackgroundColor: '#f4f4f4'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () {
    this.handleTabSwitch()
  }

  componentDidHide () { }

  constructor (props) {
    super(props)
    this.setState({
      current: 0,
      height: 0
    })
  }

  handleTabSwitch () {
    const query = Taro.createSelectorQuery()
    query.select('.tab-switch').boundingClientRect()
    query.exec(item => {
      const height = Taro.pxTransform(item[0].top + item[0].height)
      this.setState({
        height: parseInt(height.replace('rpx', '')) + 20
      })
    })
  }

  handleClick (value) {
    this.setState({
      current: value
    })
  }

  render () {
    const { height } = this.state
    return (
      <View className='d-flex order' style={{paddingTop: height + 'px'}}>
        <View className='tab-switch'>
          <SegmentedControl
            fontSize='26rpx'
            values={['全部', '立等可取', '预约订单']}
            onClick={this.handleClick.bind(this)}
            current={this.state.current}
          />
        </View>
        <View className='tab-content'>
          <EmptyList />
        </View>
      </View>
    )
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>