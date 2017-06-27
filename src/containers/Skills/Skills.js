import React, { Component } from 'react';
import {H2, H3, DIV, IMG} from "./Skills.style";

class Skills extends Component {
    render() {
        return (
            <div className="container-fluid">
                <H2>Skills</H2>
                <div id="carousel" className="carousel slide col-lg-8 col-md-8" data-ride="carousel">

                    <DIV className="carousel-inner ">
                        <DIV className="item center" alt="Operating systems">
                            <H3>Operating Systems</H3><br/>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <IMG src={require("../../assets/About/icons/debian.png")} alt="Linux/Debian" title="Linux/Debian"/>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <IMG src={require("../../assets/About/icons/Windows.png")} alt="Microsoft Windows" title="Microsoft Windows"/>
                            </div>
                        </DIV>
                        <DIV className="item active" alt="Front and back end">
                            <H3>Front and Back end Tools</H3>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <IMG src={require("../../assets/About/icons/html5.png")} alt="HTML5" title="HTML5"/>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <IMG src={require("../../assets/About/icons/jquery.png")} alt="jQuery" title="jQuery"/>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <IMG src={require("../../assets/About/icons/react.png")} alt="ReactJS" title="ReactJS"/>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <IMG src={require("../../assets/About/icons/CSS3.png")} alt="CSS3" title="CSS3"/>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <IMG src={require("../../assets/About/icons/nodejs.png")} alt="NodeJS" title="NodeJS"/>
                            </div>
                        </DIV>
                        <DIV className="item" alt="Tools">
                            <H3>Tools</H3>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <IMG src={require("../../assets/About/icons/vscode.png")} alt="Visual Studio Code" title="Visual Studio Code"/>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <IMG src={require("../../assets/About/icons/filezilla.png")} alt="Filezilla" title="Filezilla"/>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <IMG src={require("../../assets/About/icons/gimp.png")} alt="GIMP" title="GIMP"/>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <IMG src={require("../../assets/About/icons/inkscape.png")} alt="Inkscape" title="Inkscape"/>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <IMG src={require("../../assets/About/icons/sublime.png")} alt="Sublime Text" title="Sublime Text"/>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <IMG src={require("../../assets/About/icons/gsuite.png")} alt="Google Tools Suite" title="Google Tools Suite"/>
                            </div>
                        </DIV>
                        <DIV className="item" alt="Version control">
                            <H3>Version control</H3>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <IMG src={require("../../assets/About/icons/github.png")} alt="GitHub" title="GitHub"/>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <img src={require("../../assets/About/icons/git.png")} alt="GIT" title="GIT"/>
                            </div>
                        </DIV>
                        <DIV className="item" alt="Programming Languages">
                            <H3>Programming Languages</H3>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <IMG src={require("../../assets/About/icons/java.png")} alt="Java" title="Java"/>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <IMG src={require("../../assets/About/icons/python.png")} alt="Python" title=""/>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <IMG src={require("../../assets/About/icons/js.png")} alt="Javascript" title="Javascript"/>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <IMG src={require("../../assets/About/icons/C.png")} alt="C" title="C"/>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <IMG src={require("../../assets/About/icons/ruby.png")} alt="Ruby" title="Ruby"/>
                            </div>
                        </DIV>
                        <DIV className="item" alt="Databases">
                            <H3>Databases</H3>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <IMG src={require("../../assets/About/icons/posgresql.png")} alt="PostgreSQL" title="PostgreSQL"/>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <IMG src={require("../../assets/About/icons/sqlite.png")} alt="SQLite" title="SQLite"/>
                            </div>
                        </DIV>
                    </DIV>


                    
                    <a className="left carousel-control" href="#carousel" data-slide="prev" style={{background: 'none'}}>
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#carousel" data-slide="next" style={{background: 'none'}}>
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="sr-only">Next</span>
                    </a>

                </div>


            </div>
        );
    }
}

export default Skills;