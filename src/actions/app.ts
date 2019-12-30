import {
  SCENE,
  OPENID
} from '../constants/app'

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