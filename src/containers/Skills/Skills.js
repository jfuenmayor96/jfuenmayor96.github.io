import React, { Component } from 'react';
import {H2, H3, DIV, IMG} from "./Skills.style";

class Skills extends Component {
    render() {
        return (
            <div className="container-fluid">
                <DIV className="row" data-aos="zoom-in" data-aos-once="true">
                    <H2 className="text-center">Skills</H2>
                </DIV>

                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"><span></span></div>


                <div id="carousel" className="carousel slide col-lg-8 col-md-8 col-sm-12 col-xs-12" data-ride="carousel" data-interval="5000" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true" style={{height: '170px'}}>

                    <div className="carousel-inner ">
                        <DIV className="item">
                            <div className="row-fluid" alt="Operating systems">
                                <H3>Operating Systems</H3><br/>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-2"><span></span></div>
                                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4">
                                    <IMG src={require("../../assets/About/icons/debian.png")} alt="Linux/Debian" title="Linux/Debian"/>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4">
                                    <IMG src={require("../../assets/About/icons/Windows.png")} alt="Microsoft Windows" title="Microsoft Windows"/>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-2"><span></span></div>
                            </div>
                        </DIV>
                        <DIV className="item active" alt="Front and back end">
                            <div className="row-fluid">    
                                <H3 data-aos="zoom-in" data-aos-offset="80" data-aos-once="false" data-aos-delay='900'>Front and Back end Tools</H3><br/>
                                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4" data-aos="fade-down" data-aos-offset="80" data-aos-once="true" data-aos-delay='100'>
                                    <IMG src={require("../../assets/About/icons/html5.png")} alt="HTML5" title="HTML5"/>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4" data-aos="fade-down" data-aos-offset="80" data-aos-once="true" data-aos-delay='200'>
                                    <IMG src={require("../../assets/About/icons/jquery.png")} alt="jQuery" title="jQuery"/>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4" data-aos="fade-down" data-aos-offset="80" data-aos-once="true" data-aos-delay='300'>
                                    <IMG src={require("../../assets/About/icons/react.png")} alt="ReactJS" title="ReactJS"/>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4" data-aos="fade-down" data-aos-offset="80" data-aos-once="true" data-aos-delay='400'>
                                    <IMG src={require("../../assets/About/icons/CSS3.png")} alt="CSS3" title="CSS3"/>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4" data-aos="fade-down" data-aos-offset="80" data-aos-once="true" data-aos-delay='500'>
                                    <IMG src={require("../../assets/About/icons/nodejs.png")} alt="NodeJS" title="NodeJS"/>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4" data-aos="fade-down" data-aos-offset="80" data-aos-once="true" data-aos-delay='600'>
                                    <IMG src={require("../../assets/About/icons/web2py.jpg")} alt="web2py" title="web2py"/>
                                </div>
                            </div>
                        </DIV>
                        <DIV className="item" alt="Tools">
                            <H3 data-aos="zoom-in" data-aos-offset="80" data-aos-once="true" data-aos-delay='0'>Tools</H3><br/>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4" data-aos="fade-down" data-aos-offset="80" data-aos-once="false" data-aos-delay='0'>
                                <IMG src={require("../../assets/About/icons/vscode.png")} alt="Visual Studio Code" title="Visual Studio Code"/>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4" data-aos="fade-down" data-aos-offset="80" data-aos-once="false" data-aos-delay='800'>
                                <IMG src={require("../../assets/About/icons/filezilla.png")} alt="Filezilla" title="Filezilla"/>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4" data-aos="fade-down" data-aos-offset="80" data-aos-once="false" data-aos-delay='900'>
                                <IMG src={require("../../assets/About/icons/gimp.png")} alt="GIMP" title="GIMP"/>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4" data-aos="fade-down" data-aos-offset="80" data-aos-once="false" data-aos-delay='1000'>
                                <IMG src={require("../../assets/About/icons/inkscape.png")} alt="Inkscape" title="Inkscape"/>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4" data-aos="fade-up" data-aos-offset="80" data-aos-once="false" data-aos-delay='1100'>
                                <IMG src={require("../../assets/About/icons/sublime.png")} alt="Sublime Text" title="Sublime Text"/>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4" data-aos="fade-up" data-aos-offset="80" data-aos-once="false" data-aos-delay='1200'>
                                <IMG src={require("../../assets/About/icons/gsuite.png")} alt="Google Tools Suite" title="Google Tools Suite"/>
                            </div>
                        </DIV>
                        <DIV className="item" alt="Version control">
                            <H3>Version control</H3><br/>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-2"><span></span></div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4">
                                <IMG src={require("../../assets/About/icons/github.png")} alt="GitHub" title="GitHub"/>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4">
                                <img src={require("../../assets/About/icons/git.png")} alt="GIT" title="GIT"/>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-2"><span></span></div>
                        </DIV>
                        <DIV className="item" alt="Programming Languages">
                            <H3>Programming Languages</H3><br/>
                            <div className="col-lg-1 col-md-1 col-sm-1"><span></span></div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4">
                                <IMG src={require("../../assets/About/icons/java.png")} alt="Java" title="Java"/>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4">
                                <IMG src={require("../../assets/About/icons/python.png")} alt="Python" title=""/>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4">
                                <IMG src={require("../../assets/About/icons/js.png")} alt="Javascript" title="Javascript"/>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                                <IMG src={require("../../assets/About/icons/C.png")} alt="C" title="C"/>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                                <IMG src={require("../../assets/About/icons/ruby.png")} alt="Ruby" title="Ruby"/>
                            </div>
                            <div className="col-lg-1 col-md-1 col-sm-1"><span></span></div>
                        </DIV>
                        <DIV className="item" alt="Databases">
                            <H3>Databases</H3><br/>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-2"><span></span></div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4">
                                <IMG src={require("../../assets/About/icons/posgresql.png")} alt="PostgreSQL" title="PostgreSQL"/>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4">
                                <IMG src={require("../../assets/About/icons/sqlite.png")} alt="SQLite" title="SQLite"/>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-2"><span></span></div>
                        </DIV>
                    </div>
                    
                    <a className="left carousel-control" href="#carousel" data-slide="prev" style={{background: 'none'}}>
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#carousel" data-slide="next" style={{background: 'none'}}>
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"><span></span></div>

            </div>

        );
    }
}

export default Skills;