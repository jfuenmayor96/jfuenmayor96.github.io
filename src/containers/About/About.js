import React, { Component } from 'react';
import {H2, HR, P} from './About.style';

class About extends Component {
    render() {
        return (
            <div>
                <div id="about" className="container-fluid" style={{marginTop: "-57px", paddingTop: "57px"}}>
                    <div className="row"  data-aos="slide-right" data-aos-delay="1500" data-aos-duration="1000" data-aos-offset="60" data-aos-once="true">
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                            <H2>About me</H2>
                        </div>
                        <div className='col-lg-7 col-md-8 col-sm-12 col-xs-12'>
                            <P>My name is Julio Fuenmayor and I am 21 years old. Currently I'm studying the 4th, out of 5, year of Computer Science degree at the Universidad Simon Bolivar in Caracas, Venezuela. I'm interested in subjects like information systems, software engineering, web and software development, systems administration and Unix-like environments. I'm a very curious and self-taught person, eager to learn new things in order to succeed in reaching new goals. </P>
                        </div>
                    </div>
                </div>
                <HR data-aos="zoom-in" data-aos-delay="1500" data-aos-duration="1000" data-aos-offset="0" data-aos-once="true"/>
            </div>
        );
    }
}

export default About;