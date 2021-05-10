import React, { useEffect, useState } from 'react'
import ReactCardFlip, { YOUR_FRONT_CCOMPONENT, YOUR_BACK_COMPONENT } from 'react-card-flip';
import {
  SiFlask,
  SiBulma,
  SiLinkedin,
  SiGithub
} from 'react-icons/si'
import { GiEarthAmerica } from 'react-icons/gi'
import { HiOutlineMail } from 'react-icons/hi'
import { RiPlantLine, RiGovernmentLine } from 'react-icons/ri'
import emily_photo from '../images/emily_picture.jpg'
import Contact from '../components/Contact.js'



export default function About() {



  return <div>
    <div className='skills'>

      <div className="d-flex flex-row m-2" id='info-div'>
        <div>
          <h1 id='title' className='color-text'>Hi, I'm Emily!</h1>
          <p className='mt-4 mr-2 bio' id='bioInfo'>As a software developer with a background in sustainability, I have seen firsthand how technology drives innovative change in the world. With a passion for problem-solving, I began learning about programming with Code First Girls. I was inspired to enroll in General Assembly’s Software Engineering Immersive, where I fine-tuned my technical skills and enhanced my communication and project management skills. I am currently working as a Junior Software Engineer at Hullabalook on their Customer Engineering team.</p>
          <p className='mt-4 mr-2 bio' id='bioInfo'>I am passionate about sustainability, technology, and data. Having experience in non-profits, policy groups, and private organisations, I have a wide range of experiences that have enhanced my skills to run and manage a diverse portfolio of projects. I am highly motivated and determined, with a keen eye for detail.</p>
        </div>
        <div className="d-flex flex-column">
          <img id='emily_photo' src={emily_photo} />
          <h3 className='text-center color-text mt-3 mb-3'>Contact Me</h3>
          <div className="d-flex flex-row justify-content-center mt-2">
            <div className='card' id='contact'>
              <a href="https://www.linkedin.com/in/eekulesa/">
                <SiLinkedin size='3x' id='contactIcon' />

              </a>
            </div>
            <div className='card' id='contact'>
              <a href="mailto:eekulesacodes@gmail.com">
                <HiOutlineMail size='3x' id='contactIcon' />

              </a>
            </div>
            <div className='card' id='contact'>
              <a href="https://www.github.com/emilieeileen">
                <SiGithub size='3x' id='contactIcon' />

              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section className='skills'>
      <h2 id='title' className='text-center'>Technical Skills</h2>
      <div className="d-flex flex-wrap m-5" id="skillsdiv">

        <div className='card'>
          <i className="singleIcon devicon-html5-plain" size='5x'></i>
          HTML
        </div>
        <div className='card'>
          <i className="singleIcon devicon-css3-plain" size='5x'></i>
          CSS
        </div>
        <div className='card'>
          <i className="singleIcon devicon-javascript-plain" size='5x'></i>
          JavaScript
        </div>
        <div className='card'>
          <i className="singleIcon devicon-react-original" size='5x'></i>
          React
        </div>
        <div className='card'>
          <i className="singleIcon devicon-sass-original" size='5x'></i>
          SASS
        </div>
        <div className='card'>
          <i className="singleIcon devicon-express-original" size='5x'></i>
          Express
          </div>
        <div className='card'>
          <i className="singleIcon devicon-python-plain" size='5x'></i>
          Python
        </div>


        <div className='card'>
          <SiFlask size="5x" />
          Flask
        </div>
        <div className='card'>
          <i className="singleIcon devicon-postgresql-plain" size='5x'></i>
          PostgreSQL
        </div>
        <div className='card'>
          <i className="singleIcon devicon-mongodb-plain" size='5x'></i>
          MongoDB
        </div>

        <div className='card'>
          <i className="singleIcon devicon-npm-original-wordmark" size='5x'></i>
          NPM
        </div>
        <div className='card'>
          <i className="singleIcon devicon-nodejs-plain-wordmark" size='5x'></i>
          Node
        </div>

        <div className='card'>
          <i className="singleIcon devicon-webpack-plain" size='5x'></i>
          Webpack
        </div>


        <div className='card'>
          <i className="singleIcon devicon-visualstudio-plain" size='5x'></i>
          VS Code
        </div>
        <div className='card'>
          <i className="singleIcon devicon-git-plain" size='5x'></i>
          Git
        </div>
        <div className='card'>
          <i className="singleIcon devicon-github-original" size='5x'></i>
          GitHub
        </div>
        <div className='card'>
          <i className="singleIcon devicon-heroku-original" size='5x'></i>
          Heroku
        </div>
        <div className='card'>
          <SiBulma size="5x" />
          Bulma
        </div>


        <div className='card'>
          <i className="singleIcon devicon-bootstrap-plain" size='5x'></i>
          Bootstrap
        </div>
        <div className='card'>
          <i className="singleIcon devicon-wordpress-plain" size='5x'></i>
          Wordpress
        </div>
        <div className='card'>
          <i className="singleIcon devicon-babel-plain" size='5x'></i>
          Babel
          </div>
        <div className='card'>
          <i className="singleIcon devicon-slack-plain" size='5x'></i>
          Slack
          </div>
        <div className='card'>
          <i className="singleIcon devicon-trello-plain" size='5x'></i>
          Trello
          </div>
        <div className='card'>
          <i className="singleIcon devicon-mysql-plain" size='5x'></i>
          MySQL
          </div>
      </div>

    </section>
    <section className='skills'>
      <h2 id='title' className='color-text'>Fun facts</h2>
      <br />
      <div id='desktop-facts'>
        <div className='d-flex flex-row justify-content-center' id='fun-facts'>
          <div className='ml-3 mr-3' id='funFact'>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h3 className='margin-center m-5'>Democrats Abroad</h3>
                  <RiGovernmentLine id='card-icon' size='100px' />
                </div>
                <div className="flip-card-back">
                  <p className='margin-center m-5'>I am an active member of Democrats Abroad UK, an expat organization that helps get American ex-pats out to vote as well as provide a community to meet other Americans with similar interests. I am particularly active in the Women's Caucus and the Environment Policy Network Group where I hold the roles of Co-Chair and Co-Lead respectively.
                  I am also a member of the web development team, where I helped build and test the new site in addition to giving group and caucus leaders Wordpress training.
            </p>
                </div>
              </div>
            </div>
          </div>

          <div className='ml-3 mr-3' id='funFact'>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h3 className='margin-center m-5'>Travel</h3>
                  <GiEarthAmerica id='card-icon' size='100px' />
                </div>
                <div className="flip-card-back">
                  <p className='margin-center m-5'>I love to explore the world and experience new cultures. My goal is to visit 50 countries and autonomous territories in my life time and I have already visited 40! I have lived all around the world including Long Island, Scotland and Fiji!
            </p>
                </div>
              </div>
            </div>
          </div>

          <div className='ml-3 mr-3' id='funFact'>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h3 className='margin-center m-5'>Sustainability</h3>
                  <RiPlantLine id='card-icon' size='100px' />
                </div>
                <div className="flip-card-back">
                  <p className='margin-center m-5'>Gaining both my undergraduate and masters degrees in Sustainable Development and Environmental Politics, I am passionate about protecting our planet. I have previously worked as a Project lead and Project Assistant in multiple environmental charities, where my work focused on air quality awareness and communication. I am a volunteer Web Manager for Curious Earth, a digital news source for environmental stories.
            </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className='d-flex flex-column justify-content-center' id='mobile-facts'>

        <div id='funFact' className='padding-fix'>
          <h3 className='margin-center m-5 color-text' id='factTitle'>Democrats Abroad <RiGovernmentLine id='card-icon' /></h3>
          
          <p className='margin-center ml-5 mr-5 pb-5' id='factInfo'>I am an active member of Democrats Abroad UK, an expat organization that helps get American ex-pats out to vote as well as provide a community to meet other Americans with similar interests. I am particularly active in the Women's Caucus and the Environment Policy Network Group where I hold the roles of Co-Chair and Co-Lead respectively. I am also a member of the web development team, where I helped build and test the new site in addition to giving group and caucus leaders Wordpress training.</p>
        </div>
        <div id='funFact' className='padding-fix'>
          <h3 className='margin-center m-5 color-text' id='factTitle'>Travel <GiEarthAmerica id='card-icon' /></h3>
          <p className='margin-center ml-5 mr-5 pb-5' id='factInfo'>I love to explore the world and experience new cultures. My goal is to visit 50 countries and autonomous territories in my lifetime and I have already visited 40! I have lived all around the world including Long Island, Scotland and Fiji!</p>
        </div>
        <div id='funFact' className='padding-fix'>
          <h3 className='margin-center m-5 color-text' id='factTitle'>Sustainability <RiPlantLine id='card-icon' /></h3>

          <p className='margin-center ml-5 mr-5 pb-5' id='factInfo'>Gaining both my undergraduate and masters degrees in Sustainable Development and Environmental Politics, I am passionate about protecting our planet. I have previously worked as a Project lead and Project Assistant in multiple environmental charities, where my work focused on air quality awareness and communication. I am a volunteer Web Manager for Curious Earth, a digital news source for environmental stories.</p>
        </div>
      </div>



    </section>
    {/* <Contact /> */}


  </div>
}