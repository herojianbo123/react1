 import React, { Component } from 'react'
 import { Layout } from 'antd'
 import { connect } from 'react-redux'
 import { getInfo } from './actionCreator'
 import Audio from './Audio'
 import EchartsTest from './pic'
 import './style.css'

 
 const {  Sider, Content } = Layout

class Datail extends Component {
  render() {
    return (
    <div>
      <Layout className='detail'style={{marginTop:'20px'}}>
        <Content>
          <h1>{this.props.title}</h1>
          <p className="content"><span>发布时间：{this.props.pubdate}</span><em> </em>
          <span>下载次数：{this.props.count}</span><em> </em>
          <span>来源：{this.props.source}</span><em> </em></p>
          <Audio/>
            
          <div dangerouslySetInnerHTML={{__html:this.props.content}}></div>
          <EchartsTest/>
         </Content>
        <Sider>

        </Sider>

      </Layout>
    </div>  
    
    )
  }
  componentDidMount(){
    this.props.changDeInfo()
    
  }
 

 }
 const mapStateToProps = (state)=>{
 /* return {
    title: state.datail.title,
    pubdate: state.datail.pubdate,
    count: state.datail.count,
    source: state.datail.source,
    mp3: state.datail.mp3,
    content: state.datail.content
    // 或者用下面的方式
  }*/
  return {
    ...state.datail
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    changDeInfo(){
      const action = getInfo()
      dispatch(action) 
    }
  }
  
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Datail) 
