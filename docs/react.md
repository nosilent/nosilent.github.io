#  `react` 、`react-dom`

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
//React创建jsx内容，ReactDom渲染数据

//创建组件，组件首字母必须大写
//有状态组件，内部可以有自己的数据
class App extends React.Component {
    
    render(){
        // 返回内容，若不返回任何内容则返回null
        return ...
    }
}

//无状态组件
function App(){
	// 返回内容，若不返回任何内容则返回null
	return ...
}

//将组件渲染到node节点内
ReactDOM.render(<App/>,node)
```



#  `styled-components` 

​		**主要用于创建`css`只作用于当前组件的组件**

```jsx
//style.js
import styled from 'styled-components'

//创建带有样式的组件
export const Div = styled.div`
	//与css、less、sass语法类似
	//注意： background：url（），url中必须是变量，字符串也将解析成变量，达不到想要的结果
	//使用 import 先引入资源再使用：import logo from '../../static/nav-logo.png'
	//background：url（logo）
`
//在react中引入,
import { Div } from 'style.js'
```



# `redux` 、`react-redux`

​		**创建公共管理数据的仓库**

```jsx
import { createStore，combineReducers } from 'redux'
// redux用于创建公共管理数据的仓库

// reducer根据接收到的不同的action更新数据
// 可以给state一个初始值
const reducer = (state,action)=>{
    switch(action.type){
        case ...: 
            return ...
        case ...:
            return ....
        default:
            return state
    }
}
//action = {type: 'dddd',....}

//combineReducers可以将多个reducer组合起来,再使用createStore创建仓库
const reducer = combineReducers({
    reducer1,reducer2,....
})

//createStore用于创建仓库
const store = createStore(reducer)
export default store

//react-redux 用于使用仓库数据和连接仓库
import { connect, Provider } from 'react-redux'

function App(){
    //Provider内的所有组件都能使用store中的数据
    return <Provider store = { store }>
    	....
    </Provider>
}

//将仓库中想要的数据映射到组件中
const mapState = (state)=>{
	return {
        //在组件中通过this.props.data获取
        data: state.data
    }
}

//发送action改变数据
const mapDispatch = (dispatch)=>{
	return {
        //定义方法，在组件中通过this.props.func1获取
        func1(){
            dispatch(action1)
        },
        //通过this.props.func2获取
        func2(){
            dispatch(action2)
        }
    }
}

//将App组件连接到仓库
export default connect(mapState，mapDispatch)(App)
```



#  `redux-thunk` 

​		**使dispatch可以发送一个函数,发送异步action**

```jsx
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose} from 'redux';

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? 			window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose; 
const enhancer = composeEnhancers(
    //在这里使用后dispatch可以发送一个函数
    applyMiddleware(thunk)
  );
const store = createStore(
  reducer,enhancer
)
export default store


//创建一个发送action的函数，可以发送异步请求，然后将请求数据dispatch
const function func(){
	return (dispatch)=>{
		axios.get('/api/data.json').then(res=>{
        	const action ={
            	type: '....',
            	data: res.data
        	}
			dispatch(action)
        }
    }
} 
    
//在组件中  
const mapDispatch = (dispatch)=>{
	return {
        func2(){
            //在此处发送一个func()
            dispatch(func())
        }
    }	    
}
export default connect(mapState，mapDispatch)(App)
```



#  `react-router-dom` 

​		**用于创建路由**

```jsx
import { Route, BrowserRouter } from 'react-router-dom'
//在App组件中，创建路由
function App(){
   return (<BrowserRouter>
          		<Route path='/' exact component={ Home }/>
          		<Route path='/detail/:id' exact component={ Detail } />
        	</BrowserRouter>)
}
//其他组件中使用
import { Link } from 'react-router-dom'
function Sub(){
   //只有在<BrowserRouter>中的组件，才能使用<Link>，否则会报错
    return (
    	<Link to='/detail'> 。。。<Link>
    )
}
```



