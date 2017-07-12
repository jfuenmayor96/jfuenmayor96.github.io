import React, { Component } from 'react';
import {H2, HR, IMG, P} from './About.style';

class About extends Component {
    render() {
        return (
            <div>
                <div id="about" className="container-fluid" style={{marginTop: "-57px", paddingTop: "57px"}}>
                    <div className="row"  >
                        <div className='col-lg-7 col-md-8 col-sm-12 col-xs-12' data-aos="fade-in-up" data-aos-delay="1500" data-aos-duration="1000" data-aos-offset="60" data-aos-once="true">
                            <H2>About me</H2><br/>
                            <P>My name is Julio Fuenmayor and I am 21 years old. Currently I'm studying the 4th, out of 5, year of Computer Science degree at the Universidad Simon Bolivar in Caracas, Venezuela. I'm interested in subjects like information systems, software engineering, web and software development, systems administration and Unix-like environments. I'm a very curious and self-taught person who likes reading about new tools and technologies. I like to propose efficient solutions to improve any type of process and thus offer final products of high quality.</P>
                        </div>
                        <div className='col-lg-5 col-md-4 col-sm-12 col-xs-12 text-center' data-aos="fade-in-up" data-aos-delay="1500" data-aos-duration="1000" data-aos-offset="60" data-aos-once="true">
                            <IMG className="image-responsive" src={require("../../assets/About/profile_pic.jpg")} style={{height: "230px", width: "230px"}}/>
                        </div>
                    </div>
                </div>
                <HR data-aos="zoom-in" data-aos-delay="500" data-aos-duration="500" data-aos-offset="0" data-aos-once="true"/>
            </div>
        );
    }
}

export default About;