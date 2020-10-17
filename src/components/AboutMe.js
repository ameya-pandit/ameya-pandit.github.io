import React, { Component } from 'react';

import Header from './Header.js';
import Footer from './Footer.js';

import './AboutMe.css';

class AboutMe extends Component{
    render(){
        return (
			<div>
			    <Header />
			    <div className="aboutMeMainContainer">
			    	<span>About Me</span>
			    	<div className="aboutMeContOne">
			    		<div className="aboutMeImgOneCont">
						</div>

						<div className="aboutMeTextContainer">
							<span> Hi! My name is Ameya Pandit and I'm an aspiring Computer Engineer attending UC Irvine.
									I was raised mostly in sunny California, but I have fond memories of my time in Mumbai, India.
									A multicultured upbringing allowed me to pick up on my Indian heritage, but also embrace the amount of
									dedication and focus it takes to be successful in America, the land of opportunities. <br /><br />

									I decided to become a Computer Engineer because I knew from an early age that I loved to build and
									(very often) break things. When it came time for schooling, I discovered I had a passion for Math and Physics.
									When my parents would use the family computer when I was a child, I would be amazed how this magical box could
									be used to connect, watch videos, draw using MS Paint, and my favorite - play games. Little did I know that the 
									possibilities would be endless. A happy medium of all of these interests was the field of Computer Engineering, 
									and I've come to discover that I made the right choice.
							 </span>
						</div>
			    	</div>

			    	<div className="aboutMeContTwo">
			    		<div className="aboutMeTextContainer">
							<span> Outside of the academic setting, I was drawn to sports. When I lived in India, I was drawn to cricket, India's national
							passion. My swing would often not connect, but when it did, I broke some windows (my parents were not impressed). 
							In America, as I was amongst the tallest in the class every year, I came to enjoy basketball. Playing basketball allowed me to 
							meet some of my closest friends, but also develop skillsets such as teamwork and dedication to a craft. The friends I met playing
							basketball introduced me to American Football. Although confusing at first, I came to enjoy the complex nature of the game, and how
							all 11 players on the field worked in unison on every single snap of the ball - in my opinion, this is the greatest team sport there is.
							I went to my first NFL game in 2019, when I went to the legendary LA Coliseum to watch the Los Angeles Rams take on the Baltimore Ravens
							(my favorite team)!
							 </span>
						</div>

			    		<div className="aboutMeImgTwoCont">
						</div>
			    	</div>

			    	<div className="aboutMeContThree">
			    		<div className="aboutMeImgThreeCont">
						</div>

			    		<div className="aboutMeTextContainer">
							<span> I've come to fall in love with the thrill of learning, seeing, and experiencing "new". Recently, I've found interest
							in Mixed Martial Arts and Soccer (otherwise known as European Football). While I'm still new to these sports,
							I will one day become knowledgeable in this space as well, as with Basketball and American Football. Before being derailed due to the COVID-19 Pandemic, I was about 8 months into my 
							commitment to regular weight-lifting and exercise to achieve and maintain peak physical shape.
							This desire for self-improvement and learning translates to the field of Computers as well, as to grow my portfolio and toolkit I self-learned technologies
							such as Python, JavaScript, React, Node.js, amongst others. <br /><br /> I want to spend my 20s pushing the boundaries on what I think I can achieve and go above and beyond that. 
							No one knows what the future holds; but I'm confident that this drive for "new" will allow me to overcome any challenges I encounter going forward!
							</span>
						</div>
			    	</div>
			    </div>
			    <Footer />
	        </div>
        );
    }
}
export default AboutMe;