import React, { Component } from 'react'
import { List, Avatar } from 'antd'
import { bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from './actionCreator'
import { Link } from 'react-router'
class Home extends Component {
  render() {
    return (
        <div style={{marginTop:'20px'}}>
          <List bordered={true}
            itemLayout="horizontal"
            dataSource={this.props.list}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={<Link to={item.link}>{item.title}</Link>}
                  description={'【'+item.theme+'】 ' + item.pubdate }
              />
                </List.Item>
            )}
          />
        </div>
      )
  }
  componentDidMount(){
   
    if(!this.props.list.length){
      // this.props.getList()
      this.props.actions.getActionList()

    }
  }
 
}
const mapStateToProps = (state) => {   // store 中的数据在state中 return一个映射
  return {
    list: state.home.list
  }                     
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions,dispatch)
    /*getList(){
      const action = getActionList()
      dispatch(action)

    }*/
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)