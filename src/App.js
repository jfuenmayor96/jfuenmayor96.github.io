import React, { Component } from 'react';
import AOS from 'aos';
import About from './containers/About/About';
import Main from './containers/Main/Main';
import Navbar from './containers/Navbar/Navbar';
import Projects from './containers/Projects/Projects';
import Skills from './containers/Skills/Skills';
import Contact from './containers/Contact/Contact';
import Footer from './containers/Footer/Footer';
import { DIV } from './App.style';

AOS.init({
  easing: 'ease-in-out',
});


class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <DIV>
          <Main/>
          <About/>
          <Skills/>
          <Projects/>
          <Contact/>
          <hr/>
          <Footer/>
        </DIV>
      </div>
    );
  }
}

export default App;
