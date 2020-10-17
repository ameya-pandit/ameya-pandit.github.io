import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import './otherCSSwork.scss';

class Header extends Component{
    render(){
        return (
        	<div className="headerContainer">
        		<div className="logoContainer">
        			<Link to="/">
        				<span> AP </span>
        			</Link>
        		</div>

        		<div className="restContainer">
        			<div className="headerRedirectStyles">
        				<Link to="/AboutMe">
        					<span>About Me</span>
        				</Link>
        			</div>
        			
        			<div className="headerRedirectStyles">
						<Link to="/Education">
        					<span>Education</span>
        				</Link>
        			</div>
        			
        			<div className="headerRedirectStyles">
        				<Link to="/Experience">
        					<span>Experience</span>
        				</Link>
        			</div>

        			<div className="headerRedirectStyles">
        				<Link to="/Skills">
        					<span>Skills</span>
        				</Link>
        			</div>

        			<div className="headerRedirectStyles">
        				<Link to="/Portfolio">
        					<span>Portfolio</span>
        				</Link>
        			</div>

        			 <div className="headerRedirectStyles">
        				<Link to="/Connect">
        					<span>Connect</span>
        				</Link>
        			</div>
        		</div>
        	</div>
        );
    }
}
export default Header;