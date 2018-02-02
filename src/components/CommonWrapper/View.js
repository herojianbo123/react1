import React, { Component } from 'react';
import { Row, Col, Menu, Icon } from 'antd'
import {connect } from 'react-redux'
import { Link } from 'react-router'
// import CommonWrapper from '../components/CommonWrapper/View'
import { getChangeListAction } from './actionCreator'
import Footer from './component/Footer/View'
import Header from './component/Header/View'
import './style.css'
class CommonWrapper extends Component {  
  render() {
    return (
      <div className='common'>
        <Row>
          <Col span={6}>
            <Link to='/'>
              <img className='common-logo' alt="" src={require('../../statics/imgs/logo.png')}/>
            </Link>
          </Col>
          <Col span={18}>
            <Menu mode="horizontal">
            {this.props.list.map((value)=>{
              return (
                 <Menu.Item key={value.id}>
                  <Icon type="appstore" />{value.title}
                </Menu.Item>
              )})
            }
            
            </Menu>
          </Col>
        </Row>
        <Header/>

        <div>{this.props.children}</div>
       <Footer/>
          
      </div>
    )
  }
  componentDidMount(){
    this.getCommonInfo()
  }

  getCommonInfo() {
    if(!this.props.list.length){
      fetch('/api/common.json')
        .then((res)=> res.json())
        .then(this.props.changeList)
        .catch(this.handleGetInfoErr.bind(this))
    }
  
  }
  handleGetInfoErr() {
    console.log("cuo")
  }


}
const mapStateToProps = (state) => {
  return {
    list: state.common.list
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeList: (res) => {
      const action = getChangeListAction(res.data.list) 
      dispatch(action)

    }
  }

}
export default connect (mapStateToProps, mapDispatchToProps)(CommonWrapper)

