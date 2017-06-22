import React, { Component } from 'react';
import Navbar from './containers/Navbar/Navbar';
import Main from './containers/Main/Main';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Main/>
      </div>
    );
  }
}

export default App;
