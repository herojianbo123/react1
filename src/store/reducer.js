import { combineReducers} from 'redux'
import { routerReducer } from 'react-router-redux' 
import {reducer as commonReducer} from '../components/CommonWrapper/'
import {reducer as homeReducer } from '../pages/Home/'
import {reducer as datailReducer } from '../pages/Detail/'
import {reducer as headerReducer } from '../components/CommonWrapper/component/Header/'
import {reducer as listReducer } from '../pages/List/'
import {reducer as footerReducer } from '../components/CommonWrapper/component/Footer/'

export default combineReducers ({
  common: commonReducer,
  home: homeReducer,
  datail: datailReducer,
  header: headerReducer,
  list: listReducer,
  footer: footerReducer,
  routing: routerReducer
  
})