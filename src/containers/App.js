import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Header from './Header';
import Main from './Main';
import Foot from './Footer';

class App extends Component {
  render() {

    return (

        <div className="app">
          <Header className='header'/>
          <Main className='main'/>
          <Foot className='footer'/>
        </div>

    );
  }
};

export default App;
