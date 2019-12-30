import {
  SCENE,
  OPENID
} from '../constants/app'

const INITIAL_STATE = {
  scene: '',
  openid: ''
}

export default function app (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SCENE:
      console.log('asd', action)
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
