
import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Card,  Col, Row, Menu } from 'antd'
import { getChangeListAction } from './actionCreator'
import { Link } from 'react-router'
class Header extends Component {
  render() {


  return (
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row gutter={16}>
          <Col span={4}>
            <Card title="常速英语" bordered={false}>
             <Menu mode="horizontal">
             <Menu.Item>
             视频 
            </Menu.Item>
            <Menu.Item>
              音频 
            </Menu.Item>

            </Menu>
            </Card>
          </Col>
          <Col span={10}>
            <Card title="慢速英语（中级）" bordered={false}>
            <Menu mode="horizontal">
              {
                this.props.list.map((value)=>{
                  return (
                  
                  <Menu.Item key={value.id} >
                  <Link to={value.link}>
                    {value.title}
                  </Link>
                  </Menu.Item>
                  
                  )
                })
              }
            </Menu>
            </Card>
          </Col>
          <Col span={10}>
            <Card title="英语教学（初级）" >
              <Menu mode="horizontal">
              {
                this.props.list.map((value)=>{
                  return (
                  <Menu.Item key={value.id} >
                    <Link to={value.link}>
                      {value.title}
                    </Link>
                    
                  </Menu.Item>
                  )
                })
              }
            
              </Menu>
            </Card>
          </Col>
        </Row>
      </div>   
    )
}
  componentDidMount() {
    this.getHeaderInfo()
  }
  getHeaderInfo(){
    fetch('/api/header.json')
      .then((res) => res.json())
      .then(this.props.getList)
      // .catch(this.handleChangeListErr.bind(this))

  }
 
}
const mapSateToProps = (state) => ({
  list: state.header.list
})
const mapDispatchToProps = (dispatch) =>{
  return {
    getList: (res) => {
      const action = getChangeListAction(res.data.list)
      dispatch(action)
    }
  }
}
export default connect(mapSateToProps, mapDispatchToProps)(Header)