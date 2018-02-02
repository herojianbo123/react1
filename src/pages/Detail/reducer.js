import { CHANGE_INFO} from './actionTypes'
const defaultState = {
  title: '',
  pubdate: '',
  count: '',
  source: '',
  mp3: 'http://s2.hxen.com/m2/standard/2018/01/hxen.com_s20180124a.mp3',
  content: ''

}
export default (state = defaultState, action) => {
  switch(action.type){
    case CHANGE_INFO: 
      return{
        ...action.value
      }
    default: return state
  }
}