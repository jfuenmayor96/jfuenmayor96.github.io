import React, { Component } from 'react';
import {H2, H3, HR, IMG, P} from './Projects.style';

class Projects extends Component {
    render() {
        return (
            <div id="projects" style={{paddingTop:"77px", marginTop: "-57px"}}>
                <div className="container-fluid">
                    <div className="row">
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                            <H2>Projects</H2>
                            <P style={{textAlign: "right"}}>These are the projects in which I have colaborated:</P>
                        </div>
                    </div>
                    <div className="row" style={{paddingTop: "15px", paddingBottom: "15px"}}>
                        <div className='col-lg-5 col-md-5 col-sm-12 col-xs-12 text-center'>
                            <IMG className="image-responsive" src={require("../../assets/Projects/mark-steem-down.jpg")} height="auto" width="auto"/>
                        </div>
                        <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12 pull-right'>
                            <H3>Mark Steem Down</H3>
                            <P style={{paddingTop: '15px'}}><b>Description</b>: A simple online MarkDown editor, which offers the basic functions of formatting and also shows a live preview of the post.</P>

                            <P><b>Developed using</b>: ReactJS, HTML, CSS, Bootstrap</P>

                            <P><b>Role in the project</b>: chief manager.</P>

                            <P><b>Link</b>: <a href='https://mark-steem-down.herokuapp.com/'> https://mark-steem-down.herokuapp.com/</a></P>
                            <P><b>Repository</b>: <a href='https://github.com/jfuenmayor96/mark-steem-down'>https://github.com/jfuenmayor96/mark-steem-down</a></P>
                        </div>
                    </div>
                    <div className="row" style={{paddingTop: "15px", paddingBottom: "15px"}}>  
                        <div className='col-lg-5 col-md-5 col-sm-12 col-xs-12 text-center'>
                            <IMG className="image-responsive" src={require("../../assets/Projects/agrochannel.png")} height="auto" width="auto"/>
                        </div>                  
                        <div className='col-lg-7 col-md-8 col-sm-12 col-xs-12 pull-right'>
                            <H3>Agrochannel.TV</H3>
                            <P style={{paddingTop: '15px'}}><b>Description</b>: A colombian streaming website who wants to support the population of entrepreneurs of the agricultural and livestock sector in Colombia. They offer a series of streaming shows where the farmers show they work and talk about it.</P>

                            <P><b>Developed using</b>: ReactJS, HTML, CSS, Bootstrap</P>

                            <P><b>Role in the project</b>: front-end developer and server manager.</P>

                            <P><b>Link</b>: <a href='www.agrochannel.tv'> wwww.agrochannel.tv</a></P>
                        </div>
                    </div>
                    <div className="row" style={{paddingTop: "15px", paddingBottom: "15px"}}>    
                        <div className='col-lg-5 col-md-5 col-sm-12 col-xs-12 text-center'>
                            <IMG className="image-responsive" src={require("../../assets/Projects/portfolio.png")} height="auto" width="auto"/>
                        </div>   
                        <div className='col-lg-7 col-md-8 col-sm-12 col-xs-12 pull-right'>
                            <H3>Portfolio</H3>
                            <P style={{paddingTop: '15px'}}><b>Description</b>: This is my personal portfolio. The main purpose of it is to have a nice way of showing my work to the people. Here I will publish the projects that I have taken part in and I'm proud of. Also, this portfolio will serve as a personal long-term hobby/distraction in which I will test new techniques and tools that I may discover. The stable version of the portfolio will always be on the master branch of its repository, while the tests and experimental work will be on some other branches. You are free to check my work and progress, and also comment about it. The logo illustration and the design of the site was made by myself. </P>

                            <P><b>Developed using</b>: ReactJS, HTML, CSS, Bootstrap  </P>

                            <P><b>Role in the project</b>: chief manager</P>

                            <P><b>Link</b>: <a href=' https://jfuenmayor96.github.io/'> https://jfuenmayor96.github.io/</a></P>

                            <P><b>Repository</b>: <a href='https://github.com/jfuenmayor96/jfuenmayor96.github.io'>https://github.com/jfuenmayor96/</a></P>
                        </div>
                    </div>
                    <div className="row" style={{paddingTop: "15px", paddingBottom: "15px"}}>
                        <div className='col-lg-7 col-md-8 col-sm-12 col-xs-12 pull-right'>
                            <H3>SIGPIE</H3>
                            <P style={{paddingTop: '15px'}}><b>Description</b>: Stands for Sistema de Gestion del Programa de Intercambio Estudiantil. SIGPIE is an information system created in the subject PS1116. Its main purpose was to agilize the process of the students applications to the different exchange programs that the Universidad Simon Bolivar maintains with other institutions. It allows the students to register in the program and fill in their personal information as well as attach all the documents required. The personnel in charge can manage this information and download it from the server as a CSV file, reducing significantly the amount of paper and time required to do these tasks manually. It was developed using IBM's RUP in a team of 10 persons.</P>

                            <P><b>Developed using</b>: web2py, Python, HTML5, CSS, Bootstrap, Javascript </P>

                            <P><b>Role in the project</b>: Project leader of a 10 person group, back-end designer, documenter, server administrator </P>

                            <P><b>Link</b>: <a href='https://valioso.dex.usb.ve'>https://valioso.dex.usb.ve</a> </P>

                            <P><b>Repository</b>: <a href='https://github.com/GeekzUSB2017/SIGPIE'>https://github.com/GeekzUSB2017/SIGPIE</a></P>
                        </div>
                    </div>
                    <div className="row" style={{paddingTop: "15px", paddingBottom: "15px"}}>
                        <div className='col-lg-7 col-md-8 col-sm-12 col-xs-12 pull-right'>
                            <H3>SIGPAE</H3>
                            <P style={{paddingTop: '15px'}}><b>Description</b>: Stands for Sistema de Gestión de Programas Analíticos de Estudio. SIGPAE was a web application developed with the intention of managing the analytical study programs of the Universidad Simón Bolívar, in order to have a digital database with verified information where all these programs might be found easily. The user uploads a PDF of the analytical program and then the app detects automatically some important information such as the code of the subject, time period of the program, and the department and deanery that the subject belongs to. It was developed using SCRUM with a team of 6 persons. </P>

                            <P><b>Developed using</b>: Django, Python, HTML5, CSS, Bootstrap, Javascript</P>

                            <P><b>Role in the project</b>: back-end programmer</P>

                            <P><b>Repository</b>: <a href='https://github.com/Gabogg07/WeCreate'>https://github.com/Gabogg07/WeCreate</a></P>
                        </div>
                    </div>
                </div>

                <HR data-aos="zoom-in" data-aos-delay="0" data-aos-duration="1000" data-aos-offset="0" data-aos-once="true"/>

            </div>
        );
    }
}

export default Projects;