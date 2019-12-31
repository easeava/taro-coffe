import Taro from '@tarojs/taro'
import {
  SCENE,
  OPENID,
  SYSTEMINFO,
  CAPSULE
} from '../constants/app'

export const getSysteminfo = () => {
  const systeminfo = Taro.getSystemInfoSync()
  
  return {
    type: SYSTEMINFO,
    payload: {
      systeminfo
    }
  }
}

export const getCapsule = () => {
  const capsule = Taro.getMenuButtonBoundingClientRect()

  return {
    type: CAPSULE,
    payload: {
      capsule
    }
  }
}

export const changeScene = payload => {
  return {
    type: SCENE,
    payload
  }
}

export const changeOpenid = payload => {
  return {
    type: OPENID,
    payload
  }
}