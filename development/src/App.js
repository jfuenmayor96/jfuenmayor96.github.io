import React, { Component } from 'react';
import About from './containers/About/About';
import Main from './containers/Main/Main';
import Navbar from './containers/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div style={{paddingLeft: '50px', paddingRight: '50px'}}>
          <Main/>
          <About/>
        </div>
      </div>
    );
  }
}

export default App;
