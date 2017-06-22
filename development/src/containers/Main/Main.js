import React, { Component } from 'react';
import {DivLogo, IMG} from './Main.style';

class Main extends Component {
    render() {
        return (
            <div style={{marginTop: '57px'}}>
                <div>
                    <div className="container-fluid">
                        <div className="row">
                            <DivLogo className='col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center'>
                                <IMG className='image-responsive' src={require('../../assets/Main/black-filled.svg')} alt=""/>
                            </DivLogo>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;