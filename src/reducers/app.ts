import {
  SCENE,
  OPENID,
  SYSTEMINFO,
  CAPSULE
} from '../constants/app'

const INITIAL_STATE = {
  scene: '',
  openid: '',
  systeminfo: {},
  capsule: {}
}

export default function app (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SYSTEMINFO:
      const { systeminfo } = action.payload
      return {
        ...state,
        systeminfo: systeminfo
      }
    case CAPSULE:
      const { capsule } = action.payload
      return {
        ...state,
        capsule
      }
    case SCENE:
      return {
        ...state,
        scene: action.payload
      }
     case OPENID:
       return {
         ...state,
         openid: action.payload
       }
     default:
       return state
  }
}
