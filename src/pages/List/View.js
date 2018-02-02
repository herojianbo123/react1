import React, { Component } from 'react'
// import { Card,  Col, Row, Menu } from 'antd'
// import { Table, Icon, Divider } from 'antd';
import Canvas  from './clock'
import { Link } from 'react-router'
import {connect} from 'react-redux'
import { getChangeListAction } from './actionCreator'
import Audio from './Audio'
// import './style.css'
// const { Column, ColumnGroup } = Table;
class List extends Component {
  render () {
    return (
      <div>
      <div className="list" style={{border:"1px solid #ccc",
      background:"#fff", lineHeight:"30px", marginTop:"6px",textIndent:"6px"}}>
      最新发布：
      <span className="item" style={{marginLeft:"60px"}}>听力在线</span>
      <span className="item">下载英语听力</span>
      <span className="item">在线英语视频</span>
      </div>
      <div style={{background:"#fff",marginTop:"3px", paddingBottom:"20px"}}>
        <img alt="" src={'http://www.easyvoa.com/templets/images/studioclassroom/studio_logo.png'} />
        <img alt="" style={{marginLeft:"130px"}}src={'http://www.easyvoa.com/templets/images/studioclassroom/studio_ad.gif'}/>
      </div>
      <div style={{background:'#fff'}}>
      <ul className="ul">
      <img alt="" src={'http://www.easyvoa.com/templets/images/studioclassroom/ad_title.png'}
            style={{position:"absolute", top:"-30px"}}
      />
      <li>往期试听：</li> 
        {this.props.list.map((value)=>{
          return(
            <li key={value.id}>
              <Link to={value.link}>
                {value.title }
              </Link>
            </li>
          )
        })
      }

      <Canvas/>
      </ul>
      
      </div>
      </div>
     

    )
  }
  componentDidMount(){
    this.getList()
  }
  getList(){
    fetch('/api/list.json')
        .then((res)=>res.json())
        .then(this.props.getList)

  }


}
const mapStateToProps = (state)=>({ list:state.list.list})
const mapDispatch = (dispatch) => {
  return {
    getList(res){
      const action = getChangeListAction(res.data.list)
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatch)(List)