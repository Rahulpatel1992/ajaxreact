import React, { Component } from 'react';
import './App.css';
import Ajax from './Components/ajax'
import Jaxcall from './Components/jaxcoll';

class App extends Component {
  render() {
    return (
      <div>
       <Ajax />
       <Jaxcall/>
      </div>
    );
  }
}

export default App;
