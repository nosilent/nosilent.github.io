import React from 'react'
import './assets/css/common.css'
import './assets/css/table.css'
import Body from './components/body'
import Nav from './components/nav'
import axios from 'axios'
import { Route,withRouter } from 'react-router-dom'
class App extends React.Component {
  constructor(){
    super()
    this.state={
      config: {},
    }
  }
  componentDidMount(){
    axios.get('/config.json').then(res=>{
      this.setState({
        config: res.data,
      })
    }).then(res=>{
      if(window.location.pathname.slice(1)===''&&this.props.location.pathname.slice(1)===''){
        this.props.history.push(`/${this.state.config.index}`)
      }
    })
    
  }
  render(){
    return (
      <div className='my_box'>
        {/* 顶部导航 */}
        <div className='nav'>
        {Object.keys(this.state.config).length>0 && <Nav navData={this.state.config.navData} />}
        </div>
        {/* 内容部分 */}
        <Route path='/:url' component={Body}/>
      </div>
    )
  }
}

export default withRouter(App)
