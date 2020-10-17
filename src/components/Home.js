import React, { Component } from 'react';

import Header from './Header.js';
import Footer from './Footer.js';

import './Home.css';
import './otherCSSwork.scss';

class HomePage extends Component  {
  constructor(props)  {
    super(props);

    this.state =  {
      mounted: false
    }
  }

  render()  {
    return (
      <div className="mainContainer">
        <div className="backgroundContainer">
          <div className="nameTitleContainer">
            <div className="nameContainer">
              <span> Ameya Pandit </span>
            </div>

            <div className="content">
              <div className="content__container">      
                <ul className="content__container__list">
                  <li className="content__container__list__item">Software Developer</li>
                  <li className="content__container__list__item">Computer Engineer</li>
                  <li className="content__container__list__item">Student</li>
                  <li className="content__container__list__item">Leader</li>
                  <li className="content__container__list__item">Creator</li>
                </ul>
              </div>
            </div>

            <div className="otherInfoContainer">
              <span> B.S. in Computer Engineering @ UC Irvine </span>
              <table className="homeLogoContainer">
                <tbody>
                  <tr>
                    <td>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ameyaspandit/">
                        <svg width="35" height="35" viewBox="0 0 128 128">
                          <path id="plain" d="M116,3H12a8.91,8.91,0,0,0-9,8.8V116.22A8.91,8.91,0,0,0,12,125H116a8.93,8.93,0,0,0,9-8.81V11.77A8.93,8.93,0,0,0,116,3ZM39.17,107H21.06V48.73H39.17Zm-9-66.21a10.5,10.5,0,1,1,10.49-10.5A10.5,10.5,0,0,1,30.12,40.77ZM107,107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87,7.36-10.87,15V107H50.53V48.73H67.89v8h.24c2.42-4.58,8.32-9.41,17.13-9.41C103.6,47.28,107,59.35,107,75Z"></path>
                        </svg>
                      </a>
                    </td>
                    <td>
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/ameya-pandit">
                        <svg width="35" height="35" viewBox="0 0 128 128">
                          <path fillRule="evenodd" clipRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
                        </svg>
                      </a>
                    </td>
                    <td>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/ameya.pandit.79/">
                        <svg width="35" height="35" align="center" viewBox="0 0 128 128">
                          <path id="original-plain" className="cls-1" d="M116.42,5.07H11.58a6.5,6.5,0,0,0-6.5,6.5V116.42a6.5,6.5,0,0,0,6.5,6.5H68V77.29H52.66V59.5H68V46.38c0-15.22,9.3-23.51,22.88-23.51a126,126,0,0,1,13.72.7V39.48H95.21c-7.39,0-8.82,3.51-8.82,8.66V59.5H104l-2.29,17.79H86.39v45.64h30a6.51,6.51,0,0,0,6.5-6.5V11.58A6.5,6.5,0,0,0,116.42,5.07Z"></path>
                        </svg>
                      </a>
                    </td>
                    <td>
                      <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Panditmonium">
                        <svg width="35" height="35" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </a>
                    </td>
                    <td>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/panditmonium/">
                        <svg width="35" height="35" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                    </td>
                    <td>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.twitch.tv/panditmonium">
                        <svg width="35" height="35" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z" fillRule="evenodd" clipRule="evenodd"/>
                        </svg>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="indicatorContainer">
            <div className="indicator">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div className="contentContainer">
          <Header />
          
          <div className="belowMainContainer">
            <div className="imageContainer">

            </div>
            <div className="textContainer">
               <span> Aspiring Computer Engineer with a passion for solving today's and tomorrow's problems with the
                      help of computers. I am a curious person interested in building <b>Embedded Systems, Full-Stack Applications, </b>
                      and <b>Intelligent Machines.</b> <br /><br />

                      I will complete my Bachelor's Program @ UC Irvine in <b>March 2021</b> and I look forward to putting to use all 
                      I that have learned from my courses, my research, and my personal projects. <br /><br />

                      Thanks for dropping by and please click through to learn more about me and what I've been working on! </span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

/*
<div className="homeLogoContainer">
                  <svg width="40" height="40" align="center" viewBox="0 0 128 128">
                    <path id="original-plain" class="cls-1" d="M116.42,5.07H11.58a6.5,6.5,0,0,0-6.5,6.5V116.42a6.5,6.5,0,0,0,6.5,6.5H68V77.29H52.66V59.5H68V46.38c0-15.22,9.3-23.51,22.88-23.51a126,126,0,0,1,13.72.7V39.48H95.21c-7.39,0-8.82,3.51-8.82,8.66V59.5H104l-2.29,17.79H86.39v45.64h30a6.51,6.51,0,0,0,6.5-6.5V11.58A6.5,6.5,0,0,0,116.42,5.07Z"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                    <path d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z" fill-rule="evenodd" clip-rule="evenodd"/>
                  </svg>
                  <svg width="100" height="100" margin="10" viewBox="0 0 256 268" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
                    <path id="original" class="cls-1" d="M40.58,115.3c47.64,0,73.69-39.47,73.69-73.69,0-1.12,0-2.24-.07-3.35a52.7,52.7,0,0,0,12.92-13.41,51.7,51.7,0,0,1-14.87,4.08A26,26,0,0,0,123.63,14.6a51.9,51.9,0,0,1-16.45,6.29A25.92,25.92,0,0,0,63.05,44.51,73.53,73.53,0,0,1,9.67,17.45a25.92,25.92,0,0,0,8,34.58A25.71,25.71,0,0,1,6,48.78c0,.11,0,.22,0,.33A25.91,25.91,0,0,0,26.73,74.5a25.86,25.86,0,0,1-11.7.44,25.93,25.93,0,0,0,24.2,18A52,52,0,0,1,7.06,104a52.72,52.72,0,0,1-6.18-.36,73.32,73.32,0,0,0,39.7,11.63" transform="translate(-0.88 -12.7)"></path>
                  </svg>
                </div>

*/

export default HomePage;