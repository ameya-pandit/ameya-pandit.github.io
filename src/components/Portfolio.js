import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './Header.js';
import Footer from './Footer.js';

import './Portfolio.css';

class Portfolio extends Component{
    render(){
        return (
        	<div>
			    <Header />

				<div className="portfolioMainCont">
	    	        <span>Coding Projects</span>
	    	        <div className="projectsMainCont">
	    	        	<span> Here are some of my favorite projects that I've worked on which incorporate programming languages
	    	        	ranging from C to Python, and technologies ranging from the Arduino microcontroller to React Web Development!</span>
	    	        	<span>Click on the project tiles to be redirected to their respective GitHub repositories. </span>
	    	        	
	    	        	<table className="projectsTable">
	    	        		<tbody>
	    	        			<tr>
	    	        				<td>
	    	        					<a target="_blank" rel="noopener noreferrer" href="https://github.com/ameya-pandit/Battleboats-with-Arduinos">
	    	        					<div className="insideTileCont">
	    	        						<div className="imageProjContainer">
	    	        							<img className="projImage" alt="Battleboats" src="https://www.excelsupersite.com/wp-content/uploads/2017/02/2015-05-04-12_04_35-ESSE0008-BattleShip.xlsx-Excel.png"></img>
	    	        						</div>
	    	        						<div className="textInsideTile">
	    	        							<span> <b>Battleboats with Arduino</b> </span>
	    	        							<span>This C program runs the game Battleboats on an Arduino. Opponent is another (player or A.I. controlled) Arduino. </span>
	    	        						</div>
	    	        					</div>
	    	        					</a>
	    	        				</td>
	    	        				<td>
	    	        					<a target="_blank" rel="noopener noreferrer" href="https://github.com/ameya-pandit/Morsecode-with-Arduino-and-C">
	    	        					<div className="insideTileCont">
	    	        						<div className="imageProjContainer">
	    	        							<img className="projImage" alt="Morsecode" src="https://i.pinimg.com/originals/33/46/ed/3346ed3bec1ef39f389fd69a10886234.png"></img>
	    	        						</div>
	    	        						<div className="textInsideTile">
	    	        							<span> <b>Morse Code with Arduino</b> </span>
	    	        							<span>This C program uses an Arduino as a Morse code message interpreter. </span>
	    	        						</div>
	    	        					</div>
	    	        					</a>
	    	        				</td>
	    	        				<td>
	    	        					<a target="_blank" rel="noopener noreferrer" href="https://github.com/ameya-pandit/Raspberry-Pi-Irrigation-System">
		    	        				<div className="insideTileCont">
		    	        					<div className="imageProjContainer">
		    	        						<img className="projImage" alt="Raspberry Pi" src="data:image/jpeg;base64,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"></img>
		    	        					</div>
		    	       						<div className="textInsideTile">
		    	       							<span> <b>RPi 3B+ Irrigation System</b> </span>
		    	       							<span>This Python program uses the Pi along with several sensors to regularly irrigate an area of land with precisely enough water.</span>
		    	       						</div>
		    	       					</div>
		    	       					</a>
	    	        				</td>
	    	        				<td>
	    	        					<a target="_blank" rel="noopener noreferrer" href="https://github.com/ameya-pandit/Word-Count-Analyzer">
	    	        					<div className="insideTileCont">
	    	        						<div className="imageProjContainer">
	    	        							<img className="projImage" alt="Word Logo" src="https://www.voyagetech.com/images/easyblog_shared/October_2017/10-11-17/Wordlogo400.jpg"></img>
	    	        						</div>
	    	        						<div className="textInsideTile">
												<span> <b>Word Count Analyzer</b> </span>
	    	        							<span>This Java program helps output the appropriate word given the length and frequency of that word in a file.</span>
	    	        						</div>
	    	        					</div>
	    	        					</a>
	    	        				</td>
	    	        			</tr>
	    	        			<tr>
	    	        				<td>
	    	        					<a target="_blank" rel="noopener noreferrer" href="https://github.com/ameya-pandit/Chat-Application-in-C">
	    	        					<div className="insideTileCont">
	    	        						<div className="imageProjContainer">
	    	        							<img className="projImage" alt="Chat Application" src="https://i.pinimg.com/originals/35/ef/14/35ef1465616a649b5c7c7303f40057a6.png"></img>
	    	        						</div>
	    	        						<div className="textInsideTile">
												<span> <b>Chess & Chat</b> </span>
	    	        							<span>This C application is used to message other users; can also play chess with each other. GUI allows for a user friendly UI. </span>
	    	        						</div>
	    	        					</div>
	    	        					</a>
	    	        				</td>
	    	        				<td>
	    	        					<a target="_blank" rel="noopener noreferrer" href="https://github.com/ameya-pandit/Graph-Pathfinder">
	    	        					<div className="insideTileCont">
	    	        						<div className="imageProjContainer">
	    	        							<img className="projImage" alt="Graph Pathfinder" src="https://www.mindfusion.eu/screenshots/gallery5_net_pro.jpg"></img>
	    	        						</div>
	    	        						<div className="textInsideTile">
												<span> <b>Graph Pathfinder</b> </span>
	    	        							<span>This Python program builds a graph with inputs from a CSV file and then finds a path based on parameters inputted by the user. </span>
	    	        						</div>
	    	        					</div>
	    	        					</a>
	    	        				</td>
	    	        				<td>
	    	        					<a target="_blank" rel="noopener noreferrer" href="https://github.com/ameya-pandit/Levenshtein-Distance-between-Two-Strings">
	    	        					<div className="insideTileCont">
	    	        						<div className="imageProjContainer">
	    	        							<img className="projImage" alt="Levenshtein Distance" src="https://www.researchgate.net/profile/Marijn_Schraagen/publication/290304490/figure/fig2/AS:669500391309371@1536632740779/Levenshtein-edit-distance-between-the-strings-Levenshtein-and-Levinsteihn-showing.png"></img>
	    	        						</div>
	    	        						<div className="textInsideTile">
												<span> <b>Levenshtein Distance</b> </span>
	    	        							<span>This C++ program uses Dynamic Programming concepts to find the Levenshtein Distance between two strings.</span>
	    	        						</div>
	    	        					</div>
	    	        					</a>
	    	        				</td>
	    	        				<td>
	    	        					<a target="_blank" rel="noopener noreferrer" href="https://github.com/ameya-pandit/Personal-Website">
	    	        					<div className="insideTileCont">
	    	        						<div className="imageProjContainer">
	    	        							<img className="projImage" alt="Personal Website" src="https://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png"></img>
	    	        						</div>
	    	        						<div className="textInsideTile">
												<span> <b>Personal Website</b> </span>
	    	        							<span>This React application uses React, HTML, and CSS to render webpages and components on this very site!</span>
	    	        						</div>
	    	        					</div>
	    	        					</a>
	    	        				</td>
	    	        			</tr>
	    	        		</tbody>
	    	        	</table>
	    	        	<span> Head over to the <Link to="/Skills"><b>Skills</b></Link> page to check what skills I have picked up from working on these projects and many others not featured!</span>
	    	        </div>
		        </div>

		        <Footer />
		    </div>
        );
    }
}
export default Portfolio;