import React from 'react'
import logo from '../assets/images/logo-188x188@2x.png'
import {Helmet} from 'react-helmet';

const Index = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>littlerobot.io - AWS consultancy in Cambridgeshire</title>
            </Helmet>
            <div className="coming-soon-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="coming-soon-content">
                            <img src={logo} alt=""/>
                            <h2>New website coming soon</h2>
                            <a href="mailto:hello@littlerobot.io" class="default-btn">
                                <i class="flaticon-right"></i>
                                Send an email
                                <span></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Index
