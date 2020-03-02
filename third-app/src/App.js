// npm install - install all dependancies
import React, { Component } from 'react';

import Home from './components/Home/Home';

import Appointments from './components/Appointments/Appointments'

import './App.css';
import { appointments } from './lib/MockData';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Home/> */}
        <Appointments />
      </div>
    );
  }
}

export default App;