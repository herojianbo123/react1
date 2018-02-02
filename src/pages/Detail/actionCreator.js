import { CHANGE_INFO} from './actionTypes'
export const getChangeDetailInfoAction = (value) => ({

  type: CHANGE_INFO,
  value: value,
 
})

export const getInfo = () =>{
  return (dispatch) => {
    fetch('/api/datail.json?id=')
        .then((res) => res.json())
        .then((res) => {dispatch(getChangeDetailInfoAction(res.data))})

  }
  
}