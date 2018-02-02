import React, { Component } from 'react'
import { Card, Menu } from 'antd'
import {connect} from 'react-redux'
import { getFooterListAction} from './actionCreator'
// import { Link } from 'react-router'
class Footer extends Component{
  render() {
    return (
      <Card title="voa友情链接"  style={{  marginTop: '20px'}}>
        <Menu mode="horizontal">
          {this.props.list.map((value)=>{
            return (
                  
                  <Menu.Item key={value.id} >
                  <a href={value.link}>
                    {value.title}
                  </a>
                  </Menu.Item>
                  
                  )
          })
        }
          

        </Menu>
      </Card>
    )
  }
  componentDidMount(){
    this.FooterList()
  }
  FooterList(){
    fetch('/api/footer.json')
      .then((res)=>res.json())
      .then(this.props.changList)
      
  }
  handleFooterListSucc(res){
    console.log(res)
  }
}
const mapStateToProps = (state) => ({ list: state.footer.list })
const mapDispatchToProps = (dispatch) =>{
  return {
    changList: (res)=>{
      const action = getFooterListAction(res.data.list)
      dispatch(action)
    }
  }
   

}
export default connect(mapStateToProps, mapDispatchToProps)(Footer)

