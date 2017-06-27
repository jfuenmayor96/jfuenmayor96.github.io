import React, { Component } from 'react';
import {DIV, IMG} from "./Skills.style";

class Skills extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h2>Skills</h2>
                <div id="myCarousel" className="carousel col-lg-8 col-md-8" data-ride="carousel">
                    
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active" style={{backgroundColor: 'gray'}}></li>
                        <li data-target="#myCarousel" data-slide-to="1" style={{backgroundColor: 'gray'}}></li>
                        <li data-target="#myCarousel" data-slide-to="2" style={{backgroundColor: 'gray'}}></li>
                        <li data-target="#myCarousel" data-slide-to="3" style={{backgroundColor: 'gray'}}></li>
                        <li data-target="#myCarousel" data-slide-to="4" style={{backgroundColor: 'gray'}}></li>
                        <li data-target="#myCarousel" data-slide-to="5" style={{backgroundColor: 'gray'}}></li>
                    </ol>

                    <DIV className="carousel-inner ">
                        <DIV className="item" alt="Sistemas operativos" align="center">
                            <h3>Operating Systems</h3>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                <IMG src={require("../../assets/About/icons/debian.png")} alt="Linux/Debian" title=""/>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                <IMG src={require("../../assets/About/icons/windows.png")} alt="Microsoft Windows" title=""/>
                            </div>
                        </DIV>
                        <DIV className="item active" alt="Front-end">
                            <h3>Front-End Tools</h3>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                <IMG src={require("../../assets/About/icons/html5.png")} alt="HTML5" title=""/>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                <IMG src={require("../../assets/About/icons/jquery.png")} alt="jQuery" title="jQuery"/>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                <IMG src={require("../../assets/About/icons/react.png")} alt="ReactJS" title="ReactJS"/>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                <IMG src={require("../../assets/About/icons/CSS3.png")} alt="CSS3" title="CSS3"/>
                            </div>
                        </DIV>
                        <DIV className="item" alt="Tools">
                            <h3>Tools</h3>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                <IMG src={require("../../assets/About/icons/vscode.png")} alt="Visual Studio Code" title="Visual Studio Code"/>
                            </div>
                        </DIV>
                        <DIV className="item" alt="Version control">
                            <h3>Version control</h3>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                <IMG src={require("../../assets/About/icons/github.png")} alt="GitHub" title="GitHub"/>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                <img src={require("../../assets/About/icons/git.png")} alt="GIT" title="GIT"/>
                            </div>
                        </DIV>
                        <DIV className="item" alt="Programming Languages">
                            <h3>Programming Languages</h3>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                <IMG src={require("../../assets/About/icons/java.png")} alt="Java" title="Java"/>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                <IMG src={require("../../assets/About/icons/python.png")} alt="Python" title=""/>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                <IMG src={require("../../assets/About/icons/js.png")} alt="Javascript" title="Javascript"/>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                <IMG src={require("../../assets/About/icons/C.png")} alt="C" title="C"/>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                <IMG alt="Ruby" title="Ruby"/>
                            </div>
                        </DIV>
                        <DIV className="item" alt="Databases">
                            <h3>Databases</h3>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                <IMG src={require("../../assets/About/icons/posgresql.png")} alt="PostgreSQL" title="PostgreSQL"/>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                <IMG alt="SQLite" title="SQLite"/>
                            </div>
                        </DIV>
                    </DIV>

                    
                    <a className="left carousel-control" href="#myCarousel" data-slide="prev" style={{background: 'none'}}>
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next" style={{background: 'none'}}>
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>


            </div>
        );
    }
}

export default Skills;