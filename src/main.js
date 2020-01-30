import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import App from './app.jsx'

ReactDOM.render(
  <HashRouter><App/></HashRouter>,
  document.querySelector('.root')
)