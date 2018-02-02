
import {CHANGE_LIST} from './actionTypes'
const defaultState = {
    list: []    //定义初始值
}
export default (state = defaultState, action)=>{
  switch (action.type){
    case CHANGE_LIST: 
    return {
      list: action.value

    }

    default: return state
  }

}