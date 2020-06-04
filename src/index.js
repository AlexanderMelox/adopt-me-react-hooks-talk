import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import Global from './components/Global'

ReactDOM.render(
  <React.StrictMode>
    <Global />
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
