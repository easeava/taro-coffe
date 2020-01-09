/* eslint-disable react/sort-comp */
/* eslint-disable no-unused-vars */
import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image, Text, ScrollView } from '@tarojs/components'
import { AtTag } from 'taro-ui'
import * as api from '../../utils/api'
import './menu.scss'

type PageOwnProps = {}

type PageState = {
  banners: Array<{
    id: string | number,
    clickUrl: string,
    sourceUrl: string
  }>
}

class Index extends Component<PageOwnProps, PageState> {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '',
    navigationStyle: 'custom',
    disableScroll: true
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () {
    this.requestBanners()
  }

  componentDidHide () { }

  constructor (props) {
    super(props)
    this.state = {
      banners: []
    }
  }

  async requestBanners () {
    const response: any = await api.get('/menu/banners', {}, false)
    const banners = response.data.length > 0 ? response.data : []

    this.setState({
      banners
    })
  }

  renderBanner () {
    const { banners } = this.state
    const images = banners.map((item: any) => {
      return <SwiperItem key={item.id}>
        <Image className='swiper-image' src={item.sourceUrl} />
      </SwiperItem>
    })

    return <View className='banner-section'>
      <Swiper className='swiper-section' autoplay circular duration={500} indicatorActiveColor='#fff' indicatorColor='rgba(255, 255, 255, 0.5)' indicatorDots interval={5000}>
        {images}
      </Swiper>
    </View>
  }

  renderAddress () {
    return <View className='d-flex flex-row justify-content-between align-items-center address-section'>
      <View className='d-flex flex-row align-items-center'>
        <View className='at-icon at-icon-map-pin'></View>
        <View className='address'>
          <View className='detail'>前程商务店</View>
          <View className='info'>
            <Text className='name'>距您 151m</Text>
          </View>
        </View>
      </View>
      <View className='d-flex flex-row switch'>
        <View className='switch-label'>自提</View>
        <View className='switch-label selected'>外送</View>
      </View>
    </View>
  }

  renderContent () {
    return <View className='d-flex overflow-hidden content-section'>
      <View className='menu-section'>
        <ScrollView className='d-flex flex-column menu-view' scrollY>
          <View className='menu-item active'>
            <View className='text'>人气TOP</View>
          </View>
          <View className='menu-item'>
            <View className='text'>大师咖啡</View>
          </View>
          <View className='menu-item'>
            <View className='text'>小鹿茶精选</View>
          </View>
          <View className='menu-item'>
            <View className='text'>瑞纳冰</View>
          </View>
          <View className='menu-item'>
            <View className='text'>鲜榨果蔬汁</View>
          </View>
          <View className='menu-item'>
            <View className='text'>经典饮品</View>
          </View>
          <View className='menu-item'>
            <View className='text'>健康轻食</View>
          </View>
          <View className='menu-item'>
            <View className='text'>瑞幸坚果</View>
            <View className='label' style='background: #D4660C'>
              <Text style='color: #FFFFFF; background: #D4660C'>66折优惠</Text>
            </View>
          </View>
          <View className='menu-item'>
            <View className='text'>幸运小食</View>
            <View className='label' style='background: #D4660C'>
              <Text style='color: #FFFFFF; background: #D4660C'>66折起</Text>
            </View>
          </View>
          <View className='menu-item'>
            <View className='text'>周边潮品</View>
            <View className='label' style='background: #D4660C'>
              <Text style='color: #FFFFFF; background: #D4660C'>上新</Text>
            </View>
          </View>
          <View className='menu-item'>
            <View className='text'>幸运小食</View>
            <View className='label' style='background: #D4660C'>
              <Text style='color: #FFFFFF; background: #D4660C'>66折起</Text>
            </View>
          </View>
          <View className='menu-item'>
            <View className='text'>周边潮品</View>
            <View className='label' style='background: #D4660C'>
              <Text style='color: #FFFFFF; background: #D4660C'>上新</Text>
            </View>
          </View>
          <View className='menu-item'>
            <View className='text'>幸运小食</View>
            <View className='label' style='background: #D4660C'>
              <Text style='color: #FFFFFF; background: #D4660C'>66折起</Text>
            </View>
          </View>
          <View className='menu-item'>
            <View className='text'>周边潮品</View>
            <View className='label' style='background: #D4660C'>
              <Text style='color: #FFFFFF; background: #D4660C'>上新</Text>
            </View>
          </View>
          <View className='menu-item'>
            <View className='text'>幸运小食</View>
            <View className='label' style='background: #D4660C'>
              <Text style='color: #FFFFFF; background: #D4660C'>66折起</Text>
            </View>
          </View>
          <View className='menu-item'>
            <View className='text'>周边潮品</View>
            <View className='label' style='background: #D4660C'>
              <Text style='color: #FFFFFF; background: #D4660C'>上新</Text>
            </View>
          </View>
          <View className='menu-item'>
            <View className='text'>幸运小食</View>
            <View className='label' style='background: #D4660C'>
              <Text style='color: #FFFFFF; background: #D4660C'>66折起</Text>
            </View>
          </View>
          <View className='menu-item'>
            <View className='text'>周边潮品</View>
            <View className='label' style='background: #D4660C'>
              <Text style='color: #FFFFFF; background: #D4660C'>上新</Text>
            </View>
          </View>
          <View className='menu-item'>
            <View className='text'>幸运小食</View>
            <View className='label' style='background: #D4660C'>
              <Text style='color: #FFFFFF; background: #D4660C'>66折起</Text>
            </View>
          </View>
          <View className='menu-item'>
            <View className='text'>周边潮品</View>
            <View className='label' style='background: #D4660C'>
              <Text style='color: #FFFFFF; background: #D4660C'>上新</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View className='d-flex product-section'>
        <ScrollView className='d-flex flex-column product-view' scrollY>
          <View className='product-content'>
            <View className='product-head'>
              <View className='d-flex flex-column head-text'>
                <View className='d-flex align-items-center mr-3 title-section'>
                  <Text className='title'>人气TOP</Text>
                </View>
              </View>
              <View className='title-hr'></View>
            </View>
            <View className='product-series'>拿铁系列</View>

            <View className='product-item'>
              <View className='product-img-section'>
                <Image className='product-img' src='https://img03.luckincoffeecdn.com/group1/M01/41/50/CtQLPF4S19KAdCZKAADX0W82LpU856.jpg' />
                <View className='product-disc'>充2赠1</View>
              </View>
              <View className='product-info'>
                <View className='d-flex justify-content-between align-items-center product-title'>
                  <Text className='product-name'>椰风灵感拿铁</Text>
                  <View className='product-tag'>
                    <AtTag 
                      type='primary'
                      size='small'
                      customStyle='background: red; color: #fff'
                    >
                      限定
                    </AtTag>
                  </View>
                </View>
                <Text className='product-ename'>Coconut Cake Lattle</Text>
                <View className='d-flex justify-ciontent-between product-bottom'>
                  <View className='product-price'>
                    <Text className='after'>
                      <Text className='unit'>￥</Text>17
                    </Text>
                    <Text className='before'>￥27</Text>
                  </View>
                  <View>
                    <View className='product-add'></View>
                  </View>
                </View>
              </View>
            </View>
            <View className='product-item'>
              <View className='product-img-section'>
                <Image className='product-img' src='https://img03.luckincoffeecdn.com/group1/M01/41/50/CtQLPF4S19KAdCZKAADX0W82LpU856.jpg' />
                <View className='product-disc'>充2赠1</View>
              </View>
              <View className='product-info'>
                <View className='d-flex justify-content-between align-items-center product-title'>
                  <Text className='product-name'>椰风灵感拿铁</Text>
                  <View className='product-tag'>
                    <AtTag 
                      type='primary'
                      size='small'
                      customStyle='background: red; color: #fff'
                    >
                      限定
                    </AtTag>
                  </View>
                </View>
                <Text className='product-ename'>Coconut Cake Lattle</Text>
                <View className='d-flex justify-ciontent-between product-bottom'>
                  <View className='product-price'>
                    <Text className='after'>
                      <Text className='unit'>￥</Text>17
                    </Text>
                    <Text className='before'>￥27</Text>
                  </View>
                  <View>
                    <View className='product-add'></View>
                  </View>
                </View>
              </View>
            </View>
            <View className='product-item'>
              <View className='product-img-section'>
                <Image className='product-img' src='https://img03.luckincoffeecdn.com/group1/M01/41/50/CtQLPF4S19KAdCZKAADX0W82LpU856.jpg' />
                <View className='product-disc'>充2赠1</View>
              </View>
              <View className='product-info'>
                <View className='d-flex justify-content-between align-items-center product-title'>
                  <Text className='product-name'>椰风灵感拿铁</Text>
                  <View className='product-tag'>
                    <AtTag 
                      type='primary'
                      size='small'
                      customStyle='background: red; color: #fff'
                    >
                      限定
                    </AtTag>
                  </View>
                </View>
                <Text className='product-ename'>Coconut Cake Lattle</Text>
                <View className='d-flex justify-ciontent-between product-bottom'>
                  <View className='product-price'>
                    <Text className='after'>
                      <Text className='unit'>￥</Text>17
                    </Text>
                    <Text className='before'>￥27</Text>
                  </View>
                  <View>
                    <View className='product-add'></View>
                  </View>
                </View>
              </View>
            </View>
            <View className='product-item'>
              <View className='product-img-section'>
                <Image className='product-img' src='https://img03.luckincoffeecdn.com/group1/M01/41/50/CtQLPF4S19KAdCZKAADX0W82LpU856.jpg' />
                <View className='product-disc'>充2赠1</View>
              </View>
              <View className='product-info'>
                <View className='d-flex justify-content-between align-items-center product-title'>
                  <Text className='product-name'>椰风灵感拿铁</Text>
                  <View className='product-tag'>
                    <AtTag 
                      type='primary'
                      size='small'
                      customStyle='background: red; color: #fff'
                    >
                      限定
                    </AtTag>
                  </View>
                </View>
                <Text className='product-ename'>Coconut Cake Lattle</Text>
                <View className='d-flex justify-ciontent-between product-bottom'>
                  <View className='product-price'>
                    <Text className='after'>
                      <Text className='unit'>￥</Text>17
                    </Text>
                    <Text className='before'>￥27</Text>
                  </View>
                  <View>
                    <View className='product-add'></View>
                  </View>
                </View>
              </View>
            </View>
            <View className='product-item'>
              <View className='product-img-section'>
                <Image className='product-img' src='https://img03.luckincoffeecdn.com/group1/M01/41/50/CtQLPF4S19KAdCZKAADX0W82LpU856.jpg' />
                <View className='product-disc'>充2赠1</View>
              </View>
              <View className='product-info'>
                <View className='d-flex justify-content-between align-items-center product-title'>
                  <Text className='product-name'>椰风灵感拿铁</Text>
                  <View className='product-tag'>
                    <AtTag 
                      type='primary'
                      size='small'
                      customStyle='background: red; color: #fff'
                    >
                      限定
                    </AtTag>
                  </View>
                </View>
                <Text className='product-ename'>Coconut Cake Lattle</Text>
                <View className='d-flex justify-ciontent-between product-bottom'>
                  <View className='product-price'>
                    <Text className='after'>
                      <Text className='unit'>￥</Text>17
                    </Text>
                    <Text className='before'>￥27</Text>
                  </View>
                  <View>
                    <View className='product-add'></View>
                  </View>
                </View>
              </View>
            </View>
            <View className='product-item'>
              <View className='product-img-section'>
                <Image className='product-img' src='https://img03.luckincoffeecdn.com/group1/M01/41/50/CtQLPF4S19KAdCZKAADX0W82LpU856.jpg' />
                <View className='product-disc'>充2赠1</View>
              </View>
              <View className='product-info'>
                <View className='d-flex justify-content-between align-items-center product-title'>
                  <Text className='product-name'>椰风灵感拿铁</Text>
                  <View className='product-tag'>
                    <AtTag 
                      type='primary'
                      size='small'
                      customStyle='background: red; color: #fff'
                    >
                      限定
                    </AtTag>
                  </View>
                </View>
                <Text className='product-ename'>Coconut Cake Lattle</Text>
                <View className='d-flex justify-ciontent-between product-bottom'>
                  <View className='product-price'>
                    <Text className='after'>
                      <Text className='unit'>￥</Text>17
                    </Text>
                    <Text className='before'>￥27</Text>
                  </View>
                  <View>
                    <View className='product-add'></View>
                  </View>
                </View>
              </View>
            </View>

          </View>
          <View className='product-content'>
            <View className='product-head'>
              <View className='d-flex flex-column head-text'>
                <View className='d-flex align-items-center mr-3 title-section'>
                  <Text className='title'>人气TOP</Text>
                </View>
                <View className='d-flex align-items-center subtitle-section'>
                  <Text className='subtitle'>描述信息</Text>
                </View>
              </View>
              <View className='title-hr'></View>
            </View>
            <View className='product-series'>拿铁系列</View>

            <View className='product-item'>
              <View className='product-img-section'>
                <Image className='product-img' src='https://img03.luckincoffeecdn.com/group1/M01/41/50/CtQLPF4S19KAdCZKAADX0W82LpU856.jpg' />
                <View className='product-disc'>充2赠1</View>
              </View>
              <View className='product-info'>
                <View className='d-flex justify-content-between align-items-center product-title'>
                  <Text className='product-name'>椰风灵感拿铁</Text>
                  <View className='product-tag'>
                    <AtTag 
                      type='primary'
                      size='small'
                      customStyle='background: red; color: #fff'
                    >
                      限定
                    </AtTag>
                  </View>
                </View>
                <Text className='product-ename'>Coconut Cake Lattle</Text>
                <View className='d-flex justify-ciontent-between product-bottom'>
                  <View className='product-price'>
                    <Text className='after'>
                      <Text className='unit'>￥</Text>17
                    </Text>
                    <Text className='before'>￥27</Text>
                  </View>
                  <View>
                    <View className='product-add'></View>
                  </View>
                </View>
              </View>
            </View>
            <View className='product-item'>
              <View className='product-img-section'>
                <Image className='product-img' src='https://img03.luckincoffeecdn.com/group1/M01/41/50/CtQLPF4S19KAdCZKAADX0W82LpU856.jpg' />
                <View className='product-disc'>充2赠1</View>
              </View>
              <View className='product-info'>
                <View className='d-flex justify-content-between align-items-center product-title'>
                  <Text className='product-name'>椰风灵感拿铁</Text>
                  <View className='product-tag'>
                    <AtTag 
                      type='primary'
                      size='small'
                      customStyle='background: red; color: #fff'
                    >
                      限定
                    </AtTag>
                  </View>
                </View>
                <Text className='product-ename'>Coconut Cake Lattle</Text>
                <View className='d-flex justify-ciontent-between product-bottom'>
                  <View className='product-price'>
                    <Text className='after'>
                      <Text className='unit'>￥</Text>17
                    </Text>
                    <Text className='before'>￥27</Text>
                  </View>
                  <View>
                    <View className='product-add'></View>
                  </View>
                </View>
              </View>
            </View>
            <View className='product-item'>
              <View className='product-img-section'>
                <Image className='product-img' src='https://img03.luckincoffeecdn.com/group1/M01/41/50/CtQLPF4S19KAdCZKAADX0W82LpU856.jpg' />
                <View className='product-disc'>充2赠1</View>
              </View>
              <View className='product-info'>
                <View className='d-flex justify-content-between align-items-center product-title'>
                  <Text className='product-name'>椰风灵感拿铁</Text>
                  <View className='product-tag'>
                    <AtTag 
                      type='primary'
                      size='small'
                      customStyle='background: red; color: #fff'
                    >
                      限定
                    </AtTag>
                  </View>
                </View>
                <Text className='product-ename'>Coconut Cake Lattle</Text>
                <View className='d-flex justify-ciontent-between product-bottom'>
                  <View className='product-price'>
                    <Text className='after'>
                      <Text className='unit'>￥</Text>17
                    </Text>
                    <Text className='before'>￥27</Text>
                  </View>
                  <View>
                    <View className='product-add'></View>
                  </View>
                </View>
              </View>
            </View>
            <View className='product-item'>
              <View className='product-img-section'>
                <Image className='product-img' src='https://img03.luckincoffeecdn.com/group1/M01/41/50/CtQLPF4S19KAdCZKAADX0W82LpU856.jpg' />
                <View className='product-disc'>充2赠1</View>
              </View>
              <View className='product-info'>
                <View className='d-flex justify-content-between align-items-center product-title'>
                  <Text className='product-name'>椰风灵感拿铁</Text>
                  <View className='product-tag'>
                    <AtTag 
                      type='primary'
                      size='small'
                      customStyle='background: red; color: #fff'
                    >
                      限定
                    </AtTag>
                  </View>
                </View>
                <Text className='product-ename'>Coconut Cake Lattle</Text>
                <View className='d-flex justify-ciontent-between product-bottom'>
                  <View className='product-price'>
                    <Text className='after'>
                      <Text className='unit'>￥</Text>17
                    </Text>
                    <Text className='before'>￥27</Text>
                  </View>
                  <View>
                    <View className='product-add'></View>
                  </View>
                </View>
              </View>
            </View>
            <View className='product-item'>
              <View className='product-img-section'>
                <Image className='product-img' src='https://img03.luckincoffeecdn.com/group1/M01/41/50/CtQLPF4S19KAdCZKAADX0W82LpU856.jpg' />
                <View className='product-disc'>充2赠1</View>
              </View>
              <View className='product-info'>
                <View className='d-flex justify-content-between align-items-center product-title'>
                  <Text className='product-name'>椰风灵感拿铁</Text>
                  <View className='product-tag'>
                    <AtTag 
                      type='primary'
                      size='small'
                      customStyle='background: red; color: #fff'
                    >
                      限定
                    </AtTag>
                  </View>
                </View>
                <Text className='product-ename'>Coconut Cake Lattle</Text>
                <View className='d-flex justify-ciontent-between product-bottom'>
                  <View className='product-price'>
                    <Text className='after'>
                      <Text className='unit'>￥</Text>17
                    </Text>
                    <Text className='before'>￥27</Text>
                  </View>
                  <View>
                    <View className='product-add'></View>
                  </View>
                </View>
              </View>
            </View>
            <View className='product-item'>
              <View className='product-img-section'>
                <Image className='product-img' src='https://img03.luckincoffeecdn.com/group1/M01/41/50/CtQLPF4S19KAdCZKAADX0W82LpU856.jpg' />
                <View className='product-disc'>充2赠1</View>
              </View>
              <View className='product-info'>
                <View className='d-flex justify-content-between align-items-center product-title'>
                  <Text className='product-name'>椰风灵感拿铁</Text>
                  <View className='product-tag'>
                    <AtTag 
                      type='primary'
                      size='small'
                      customStyle='background: red; color: #fff'
                    >
                      限定
                    </AtTag>
                  </View>
                </View>
                <Text className='product-ename'>Coconut Cake Lattle</Text>
                <View className='d-flex justify-ciontent-between product-bottom'>
                  <View className='product-price'>
                    <Text className='after'>
                      <Text className='unit'>￥</Text>17
                    </Text>
                    <Text className='before'>￥27</Text>
                  </View>
                  <View>
                    <View className='product-add'></View>
                  </View>
                </View>
              </View>
            </View>

          </View>
        </ScrollView>
      </View>
    </View>
  }

  render () {
    return (
      <View className='d-flex flex-column menu'>
        {this.renderBanner()}
        {this.renderAddress()}
        {this.renderContent()}
      </View>
    )
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>
