import React, { Component } from 'react';
import AOS from 'aos';
import About from './containers/About/About';
import Main from './containers/Main/Main';
import Navbar from './containers/Navbar/Navbar';
import Projects from './containers/Projects/Projects';
import Skills from './containers/Skills/Skills';

AOS.init({
  duration: '1000',
  easing: 'ease-in-out',
});


class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
          <Main/>
          <About/>
          <Skills/>
          <Projects/>
      </div>
    );
  }
}

export default App;
