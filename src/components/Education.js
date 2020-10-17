import React, { Component } from 'react';

import Header from './Header.js';
import Footer from './Footer.js';

import './Education.css';

class Education extends Component{
    render(){
        return (
			<div>
			    <Header />
			    <div className="educationMainContainer">
			    	<div className="educationCont">
			    		<span>Education</span>
						<br />
			    		<div className="educationTextCont">
			    			<div className="educationUCISOELogoCont">
							</div>

							<div className="contentRightAlign">
								<span className="normalSizeText"><b>Expected Graduation: </b>March 2021</span>
								<span className="normalSizeText">September 2018 to March 2021</span>
							</div>
			    		</div>
			    		<div className="textAlignLeft">
							<span className="normalSizeText"><b>Bachelor of Science</b>, Computer Engineering </span>
			    			<span className="normalSizeText"><b>GPA: </b>3.45, Dean's Honor List (multiple quarters)</span>
			    		</div>
			    		<br />
			    		<div className="educationTextCont">
			    			<div className="educationUCSCSOELogoCont">
							</div>

							<div className="contentRightAlign">
								<span className="normalSizeText">September 2016 to June 2018&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
							</div>
			    		</div>
			    		<div className="textAlignLeft">
			    			<span className="normalSizeText"><b>Bachelor of Science</b>, Computer Engineering </span>
			    			<span className="normalSizeText">Transferred to University of California, Irvine</span>
			    		</div>
			    	</div>

			    	<div className="courseworkCont">
			    		<span>Coursework</span>
			    		<br />
			    		<div className="textAlignLeft">
			    			<span className="courseworkSectionTitle"><b>Computer Science</b></span>
			    				<table className="tableCSS">
			    					<tbody>
				    					<tr>
					                        <td>Data Structures & Algorithms</td>
					                        <td>Assembly Language</td>
					                        <td>Computer Systems & C Programming</td>
					                        <td>Object Oriented Programming</td>
				                    	</tr>
				                    	<tr>
				                    		<td>Computer Architecture</td>
					                        <td>Operating Systems</td>
				                    		<td>Machine / Computer Vision</td>
					                        <td>Computer Networks</td>
				                    	</tr>
				                    	<tr>
				                    		<td></td>
				                    		<td>Hardware-Software Interfacing</td>
				                    		<td>Databases</td>
				                    		<td></td>
				                    	</tr>
			    					</tbody>
			    				</table>
			    		</div>

			    		<div className="textAlignLeft">
			    			<span className="courseworkSectionTitle"><b>Electrical Engineering</b></span>
			    			<table className="tableCSS">
			    				<tbody>
			    					<tr>
			    						<td>Digital Systems & Logic Design</td>
			    						<td>Circuit Analysis</td>
			    						<td>Semiconductor Analysis</td>
			    						<td>Large Scale Integration - Chip Design</td>
			    					</tr>
			    				</tbody>
			    			</table>
			    		</div>

			    		<div className="textAlignLeft">
			    			<span className="courseworkSectionTitle"><b>Other Relevant Coursework</b></span>
			    			<table className="tableCSS">
			    				<tbody>
				    				<tr>
					                    <td>Calculus - Derivatives</td>
					                    <td>Calculus - Integrals</td>
				                        <td>Vector Calculus</td>
				                        <td>Multivariable Calculus</td>
			                    	</tr>
			                    	<tr>
			                    		<td>Discrete Math</td>
				                        <td>Discrete Time Signals & Systems</td>
			                    		<td>Linear Algebra</td>
				                        <td>Differential Equations</td>
			                    	</tr>
			                    	<tr>
			                    		<td>Probability & Statistics</td>
			                    		<td>Physics - Mechanics</td>
			                    		<td>Physics - Wave Motion & Optics</td>
			                    		<td>Physics - Electricity & Magnetism</td>
			                    	</tr>
		    					</tbody>
		    				</table>
			    		</div>
			    	</div>
			    </div>
			    <Footer />
	        </div>
        );
    }
}
export default Education;