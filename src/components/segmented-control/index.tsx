import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import AtComponent from '../common'
import './index.scss'

type PageOwnProps = {
  customStyle?: any
  className?: any
  current: number
  color?: string
  selectedColor?: string
  fontSize?: string
  disabled?: boolean
  values: any[]
  onClick?: any
}

type PageState = {
}

export default class SegmentedControl extends AtComponent<PageOwnProps, PageState> {

  static defaultProps: PageOwnProps = {
    customStyle: '',
    className: '',
    current: 0,
    color: '',
    fontSize: '0',
    disabled: false,
    selectedColor: '',
    values: [],
    onClick: () => {}
  }

  componentWillMount () {
 
  }

  handleClick () {
    if (this.props.disabled) return
    this.props.onClick(...arguments)
  }

  render () {
    const {
      customStyle,
      className,
      disabled,
      values,
      selectedColor,
      current,
      color,
      fontSize
    } = this.props

    const rootStyle = {
      borderColor: selectedColor
    }
    const itemStyle = {
      color: selectedColor,
      fontSize,
      borderColor: selectedColor,
      backgroundColor: color,
    }
    const selectedItemStyle = {
      color,
      fontSize,
      borderColor: selectedColor,
      backgroundColor: selectedColor,
    }
    const rootCls = classNames('at-segmented-control', {
      'at-segmented-control--disabled': disabled
    }, className)

    return (
      <View
        className={rootCls}
        style={this.mergeStyle(rootStyle, customStyle)}
      >
        {
          values.map((value, i) => {
            return <View
              className={classNames('at-segmented-control__item', {
                'at-segmented-control__item--active': current === i
              })}
              style={current === i ? selectedItemStyle : itemStyle}
              key={value}
              onClick={this.handleClick.bind(this, i)}
            >
              <View className='at-segmented-control__item-text'>{value}</View>
            </View>
          })
        }
      </View>
    )
  }
}
