// npm install - install all dependancies
import React, { Component } from 'react';

import {
  Route,
  Switch,
  Redirect,
  withRouter
} from 'react-router-dom'

import Home from './components/Home/Home';

import Appointments from './components/Appointments/Appointments'

import './App.css';
import { appointments } from './lib/MockData';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         {/* <Home/> */}
//         <Appointments />
//       </div>
//     );
//   }
// }

class App extends Component {
  render() {
    const { history } = this.props

    return(
      <div className='App'>
        <Switch>
          <Route history={history} path='/home' component={Home} />
          <Route history={history} path='/appointments' component={Appointments} />
          <Redirect from='/' to='/home' />
        </Switch>

      </div>
    );
  }
}

export default App;