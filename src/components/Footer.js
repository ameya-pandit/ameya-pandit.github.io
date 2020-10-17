import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component{
    render(){
        return (
        	<div className="footerContainer">
        		<span>&#169; Ameya Pandit 2020; Made with standard React - no frameworks </span>
                <span> For best user experience, use a Desktop Computer - Mobile Integration incomplete </span>
        	</div>
        );
    }
}
export default Footer;