import React,{Component} from 'react'
import { Menu, Dropdown, Tabs, Icon } from 'antd'

import { Link } from 'react-router-dom'
class Nav extends Component {
  getMenu(data) {
    let list =  data.map((item,index)=>{
       return <Menu.Item key={index}><Link to={`/${item.url.split('/')[1]}`}>{item.text}</Link></Menu.Item>
     })
     return (<Menu selectable={false}>{ list }</Menu>)
  }
  render(){
    const {navData} = this.props
    return (
      <>
      <span className='blog_name'>个人主页</span>
      <Tabs tabBarGutter={0}  tabBarStyle={{borderBottom: 'none'}} >
        {
         navData.map(item=>{
           if(item.children){
            let temp =(
              <Dropdown overlay={this.getMenu(item.children)}  trigger={['hover','click']} >
                <span>{item.text} <Icon type='down' /></span>
              </Dropdown>)
            return (<Tabs.TabPane tab={temp} key={item.text} forceRender={true} />)
           }else{
            let temp = (<Link to={`/${item.url.split('/')[1]}`}  key={item.text} >{item.text}</Link>)
            return (<Tabs.TabPane tab={temp} key={item.text} forceRender={false}/>)
           }
         })
        }
      </Tabs>
      </>
    )
  }
}


export default Nav