import React, { Component } from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import { View as CommonWrapper} from '../components/CommonWrapper/'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux' 
import {View as Home } from '../pages/Home/'
import {View as Detail } from '../pages/Detail/'
import { View as List } from '../pages/List/'
import store from '../store'
import 'whatwg-fetch'


import './reset.css'
import './style.css'
import 'antd/dist/antd.css'

const history = syncHistoryWithStore(browserHistory, store)
class App extends Component {
  render() {
    return (
      <div className='main'>
        <Provider store={store}> 
          <Router history={history}>
            <Route path='/' component={CommonWrapper}>
              <IndexRoute  component={Home}></IndexRoute>
              <Route path='detail/:id' component={Detail}></Route>
              <Route path='list/:id' component={List}></Route>
            </Route>
          </Router>
        </Provider>
      </div>  
      )
  }
}

export default App;
