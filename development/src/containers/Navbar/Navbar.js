import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class='navbar navbar-fixed-top navbar-light'>
                    <div class="container">
                        <div class='navbar-header'>
                            <a id='navbar-logo' class='navbar-brand' href='#top'><span><img class='responsive-image' src='images/logo/logo-blackfilled.png'/></span></a>
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                        </div>
                        <div id="navbar" class='navbar-collapse collapse'>
                            <ul class='navbar-nav nav navbar-right'>
                                <li class='navbar-item'><a href='#about'><span><img src='images/icons/aboutme-black.png'/> ABOUT ME</span></a></li>
                                <li class='navbar-item'><a href='#projects'><span><img src='images/icons/project-black.png'/> PROJECTS</span></a></li>
                                <li class='navbar-item'><a href='#under-development'><span><img src="images/icons/contact-black.png"/> CONTACT</span></a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;