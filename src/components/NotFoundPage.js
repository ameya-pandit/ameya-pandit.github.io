import React, { Component } from 'react';

import Header from './Header.js';
import Footer from './Footer.js';

import './Portfolio.css'

class NotFoundPage extends Component{	
    render(){
        return (
        	<div>
        		<Header />

        		<div className="portfolioMainCont">
        			<span> Whoops! </span>

        			<div className="projectsMainCont">
        				<span> Looks like you're at an invalid link.  </span>
        				<span> Please click on the logo in the top left to go back to the home page, or on
        						the tabs in the top right to go to their respective pages! </span>
        			</div>
        		</div>
         
            	<Footer />
          	</div>
        );
    }
}
export default NotFoundPage;