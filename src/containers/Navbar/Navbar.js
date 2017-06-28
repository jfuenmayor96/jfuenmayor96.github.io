import React, { Component } from 'react';
import {NAV, NavbarDiv, NavbarLogo, LI, ToggleButton} from './Navbar.style';

class Navbar extends Component {
    render() {
        return (
            <div>
                <NAV className='navbar navbar-fixed-top navbar-light'>
                    <div className="container-fluid">
                        <div className='navbar-header'>
                            <a id='navbar-logo' className='navbar-brand' href='#top'><span><NavbarLogo className='responsive-image' src={require('../../assets/Navbar/logo-blackfilled.png')}/></span></a>
                            <ToggleButton type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </ToggleButton>
                        </div>
                        <NavbarDiv id="navbar" className='navbar-collapse collapse'>
                            <ul className='navbar-nav nav navbar-right'>
                                <LI className='navbar-item' style={{textAlign: 'center'}}><a href='#about'><span><i className="fa fa-user-circle" aria-hidden="true"></i> ABOUT ME</span></a></LI>
                                <LI className='navbar-item' style={{textAlign: 'center'}}><a href='#projects'><span><i className="fa fa-cogs" aria-hidden="true"></i> PROJECTS</span></a></LI>
                                <LI className='navbar-item' style={{textAlign: 'center'}}><a href='#contact'><span><i className="fa fa-at" aria-hidden="true"></i> CONTACT</span></a></LI>
                            </ul>
                        </NavbarDiv>
                    </div>
                </NAV>
            </div>
        );
    }
}

export default Navbar;