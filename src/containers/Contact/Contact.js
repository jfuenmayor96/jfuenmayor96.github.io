import React, { Component } from 'react';
import {DivForm, H2, INPUT, PFormulario, Submit, TEXTAREA, Quotes} from './Contact.style';

class Contact extends Component {

    constructor(props) {
        super();
        this.recaptchaKey = process.env.NODE_ENV === "development" ? "6LesXycUAAAAAE48JFPGFBn77ahVF05RCCSjWVEN" : "6Lc6QycUAAAAAMtYdIOC_gnt835PfAMJzXFMojog";
        this.action = "https://script.google.com/macros/s/AKfycbw_TH-k1BWgONknURkQ_2oxUsyybNFCAQCq--VE_p_vPL66nQY/exec";
        this.quotes = [
            {"quote": "I think it's a new feature. Don't tell anyone it was and accident.", "author": "Larry Wall"},
            {"quote": "Dreams absolutely come true, but they take time, dedication and patience.", "author": "Seán McLaughlin"},
            {"quote": "Bad programmers worry about the code. Good programmers worry about data structures and their relationships.", "author": "Linus Torvalds"},
            {"quote": "Never memorize something that you can look up.", "author": "Albert Einstein"}
        ]
        this.height = 0;
        this.index = Math.floor(Math.random()*4);
    }

    componentDidMount() {
        this.height = document.getElementById("contact").offsetHeight;
    }

    getQuote() {
        var index = Math.floor(Math.random()*4);
        return this.quotes[index];

    }


    render() {
        return (
            <div style={{paddingBottom: "15px"}}>
                    <div className="container-fluid">
                        {/*Contact section*/}
                        <div className="row"  >
                            <div id="contact" className="col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{marginTop: "-57px", paddingTop: "57px"}}>
                                <h2>Contact me</h2>
                                <p style={{paddingBottom: "15px"}}>If you are interested in a budget for your web site project, a consultation, want me to create a website for you or want to contact me for anything else, please fill up the form.</p>

                                <form id="gform" method="POST" action={this.action}>
                                    <div className='has-warning'>
                                        <span>Name*</span>
                                        <span id="contactAlert" style={{display: 'none', color: "red"}}> I need to know who you are!</span>
                                        <INPUT id='Contact' className="form-control pagination-center" placeholder="John Doe" type="text" name="Contact"/><br/>
                                    </div>
                                    <div className='has-warning'>
                                        <span>Email*</span>
                                        <span id="emailAlert" style={{display: 'none', color: "red"}}> I need to know where to contact you!</span>
                                        <span id="emailAlert2" style={{display: 'none', color: "red"}}> That email address doesn't seem right.</span>
                                        <INPUT id='email' className="form-control pagination-center" placeholder="user@server.com" type="text" name="Email"/><br/>
                                    </div>
                                    <div className='has-warning'>
                                        <span>Message*</span>
                                        <span id="messageAlert" style={{display: 'none', color: "red"}}> Wait... you forgot your message.</span>
                                        <TEXTAREA id='message' className="form-control pagination-center" placeholder="Write your message here." type="text" name="Message"></TEXTAREA><br/>
                                    </div>
                                    <div id="recaptcha" className="g-recaptcha" data-sitekey={this.recaptchaKey} style={{paddingBottom: "10px"}}></div>
                                    <span id="captchaMessage" style={{display: 'none', color: "red"}}> I don't get along well with bots. Please, show me you're human.</span>

                                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center'>
                                        <Submit id="submit-button-1" onClick={this.handleFormSubmit}>SEND</Submit>
                                    </div>

                                </form>
                            </div>
                            {/* Quotes section*/}
                            <Quotes className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <h3 style={{fontFamily: "Parisienne"}}>{this.quotes[this.index].quote}<br/>
                                    <h4 style={{fontFamily: "Parisienne", textAlign: "right"}}>{this.quotes[this.index].author}</h4>
                                </h3>
                            </Quotes>
                        </div>



                        {/*Social networks section*/}


                    </div>
            </div>
        );
    }
}

export default Contact;
