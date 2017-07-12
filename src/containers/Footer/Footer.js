import React, { Component } from 'react';
import "./Footer.css";

class Footer extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row-fluid">
                    <div style={{paddingTop: "7px"}} className="col-lg-6 col-md-6">
                        <p>Website designed and created by Julio Fuenmayor. All rights reserved.</p>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <p style={{textAlign: "right"}}>
                            <a href="https://linkedin.com/in/jefuenmayor"><i className="fa fa-2x fa-linkedin-square" aria-hidden="true"></i></a>
                            <a href="https://github.com/jfuenmayor96"><i className="fa fa-2x fa-github" aria-hidden="true"></i></a> 
                            <a href="https://medium.com/jfuenmayor96"><i className="fa fa-2x fa-medium" aria-hidden="true"></i></a>
                        </p>
                    </div>                   
                </div>
            </div>
        );
    }
}

export default Footer;