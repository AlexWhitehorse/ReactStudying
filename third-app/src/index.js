import React from 'react'
import ReactDOM from 'react-dom'

import { Router } from 'react-router-dom'
import {createBrowserHistory} from 'history'

//сначала подключем общие стили
import './index.css'

//затем компоненты
import App from './App'

// создаём кастомную историю
const history = createBrowserHistory()

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render((
    <Router history={history}>
        <App/>
    </Router>
  ), document.getElementById('root')
)