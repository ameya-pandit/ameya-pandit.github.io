import React, { Component } from 'react';

import Header from './Header.js';
import Footer from './Footer.js';

import './Experience.css'

class Experience extends Component{
    render(){
        return (
			<div>
			    <Header />

				<div className="experienceMainContainer">
					<span>Experience</span>	   
					<div className="indivExpContainer">
						<div className="lumentumImageContainer">
						</div>
						<div className="expTextContainer">
							<span className="experienceTitle">SWE - Manufacturing Systems Intern @ Lumentum</span>
							<span className="timeCSS">June 2020 to September 2020</span>
							<ul className="listCSS">
								<li>Utilized <b>React</b> and <b>Node JavaScript</b> technologies along with <b>Microsoft SQL</b> to develop 
									a dashboard that made it convenient for Lumentum’s Manufacturing Engineers to keep track of 220 machines 
									allocated to each wafer manufacturing pipeline in the production facility.</li>
								<li>Designed components using <b>HTML</b> and <b>CSS</b>; animated data retrieved through <b>NodeJS</b> and 
									<b> Express</b> from internal servers which monitored status of all machines involved in production.</li>
								<li>Launched dashboard which provided real-time updates, highlighted downed equipment in the
									facility, and presented information pertaining to each machine such as maintenance history.</li>
								<li>Accelerated troubleshooting process by 400% in case any machine was malfunctioning.</li>
							</ul>
						</div>
					</div> 
					<div className="indivExpContainer">
						<div className="UCIImageContainer">
						</div>
						<div className="expTextContainer">
							<span className="experienceTitle">Undergraduate Student Researcher @ UC Irvine</span>
							<span className="timeCSS">June 2019 to September 2019</span>
							<ul className="listCSS">
								<li>Utilized data mining, scripting, and tools such as <b>SciKit</b> to create a Machine Learning solution that gauged 
									the behavior of male and female developers across Open Source Projects on <b>GitHub</b>.</li>
								<li>Collaborated in developing a supervised model trained by <b>Random Forest</b> and <b>XGBoost</b> classifiers 
									that predicted the content of each commit by referencing 120,000 commit messages across 50 projects.</li>
								<li>Implemented <b>Python</b> and <b>Shell</b> scripts to web scrape 9,000 user profiles and used Google Maps and GitHub API 
									to further extract user and project related information such as location and gender.</li>
							</ul>
						</div>
					</div>   
					<div className="indivExpContainer">
						<div className="Calit2ImageContainer">
						</div>
						<div className="expTextContainer">
							<span className="experienceTitle">Calit2 Research Fellow @ UC Irvine</span>
							<span className="timeCSS">October 2018 to December 2018</span>
							<ul className="listCSS">
								<li>Mapped components onto a <b>Printed Circuit Board</b> using <b>EAGLE</b> CAD software; prioritized cost efficiency when designing PCB for Calit2’s Wattmeter device.</li>
								<li>Constructed the designed PCB by soldering components onto a physical board and conducted analysis to pinpoint weaknesses.</li>
							</ul>
						</div>
					</div>   
				</div>

				<Footer />
			</div>
        );
    }
}
export default Experience;

/*
<span>&nbsp;&nbsp;&nbsp;&nbsp; 
								&bull; Utilized React and Node JavaScript technologies along with Microsoft SQL to
										build a dashboard that made it convenient for Lumentum's Manufacturing Team
										to keep track of all the machines that are allocated to each wafer manufacturing
										pipeline. 
							</span>
*/


