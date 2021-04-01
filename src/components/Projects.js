import React, { useEffect, useState } from 'react'
import {
  DiJsBadge,
  DiHtml5,
  DiCss3,
  DiSass,
  DiReact,
  DiNodejsSmall,
  DiGit,
  DiNpm,
  DiVisualstudio,
} from 'react-icons/di'
import {
  SiFlask,
  SiPostgresql,
  SiHeroku,
  SiWordpress,
  SiWebpack,
  SiMongodb,
  SiBulma,
  SiGithub
} from 'react-icons/si'
import winston_game from '../images/winston-game-screenshot.png'
import smp from "../images/FFN_img1.png"
import arrivr_home from "../images/arrivr_home.png"
import lc_post from "../images/LC_post2.png"
import DAUKWEB from "../images/dauk_web.png"
import { CgWebsite } from 'react-icons/cg'


export default function Projects() {



  return <div>
    <h1 id='title' className='color-text m-5'>Projects</h1>


    <div className='card-fluid p-5 m-5' id='projectCard'>
      <h2>Arrivr</h2>
      <div className='d-flex flex-row' id='mobileCard'>

        <div className='d-flex flex-column'>

          <img className='projectIMG' src={arrivr_home} width="600px" />
        </div>
        <div className='d-flex flex-column'>
          <p className='p-3 mr-5'>A week-long group project. My group created an AirBnb clone, where we created our own MongoDB database and linked it to a React frontend. My role focused on creating the backend, specifically the controllers in Express and formatting how users saw bookings and comments on the front end depending on if they are a host, guest or regular user.</p>
          <div className='d-flex flex-row justify-content-center'>
            <div className='p-2 m-2'><a href='https://github.com/emilieeileen/project_3'><SiGithub size='5x' /></a></div>
            <div className='p-2 m-2'><a href='https://arrivr-sei53.herokuapp.com/'><CgWebsite size='5x' /></a></div>
          </div>
          <h4 className='ml-4' id='techbox'>Technologies Used</h4>
          <div className="d-flex flex-wrap">
          <div className='card'>
              <DiHtml5 size='5x' id='nohover'/>
          HTML
        </div>
            <div className='card'>
            <DiSass size='5x' id='nohover'/>
          SASS
        </div>
            <div className='card'>
            <DiReact size='5x' id='nohover'/>
          React
        </div>
            <div className='card'>
            <SiBulma size='5x' id='nohover'/>
          Bulma
        </div>
            <div className='card'>
            <DiNpm size='5x' id='nohover'/>
          npm
        </div>
            <div className='card'>
            <DiNodejsSmall size='5x' id='nohover'/>
          Node
        </div>
            <div className='card'>
            <SiMongodb size='5x' id='nohover'/>
          MongoDB
        </div>
            <div className='card'>
            <i className="singleIcon devicon-express-original" width='40px' id='nohover'></i>
          Express
        </div>
        <div className='card'>
            <DiVisualstudio size='5x' id='nohover'/>
          VS Code
        </div>
            <div className='card'>
            <DiGit size='5x' id='nohover'/>
          Git
        </div>
            <div className='card'>
            <SiGithub size='5x' id='nohover'/>
          GitHub
        </div>
        <div className='card'>
            <SiHeroku size='5x' id='nohover'/>
          Heroku
        </div>
          </div>
        </div>
      </div>
    </div>


    <div className='card-fluid p-5 m-5' id='projectCard'>
      <h2>Language Connect</h2>
      <div className='d-flex flex-row' id='mobileCard'>

        <div className='d-flex flex-column'>

          <img className='projectIMG' src={lc_post} width="600px" />
        </div>
        <div className='d-flex flex-column'>
          <p className='p-3 mr-5'>A week-long group project. My group created a networking website for people wanting to learn or teach a new language. My role consisted of Project Lead, where I took charge of organising our team schedule. My technical work focused on the creation of the PostgreSQL database and the styling of the front end. I also aided in the creation of the Formik forms.</p>
          <div className='d-flex flex-row justify-content-center'>
            <div className='p-2 m-2'><a href='https://github.com/emilieeileen/project4'><SiGithub size='5x' /></a></div>
            <div className='p-2 m-2'><a href='https://language-connect.herokuapp.com/'><CgWebsite size='5x' /></a></div>
          </div>
          <h4 className='ml-4' id='techbox'>Technologies Used</h4>
          <div className="d-flex flex-wrap">
          <div className='card'>
              <DiHtml5 size='5x' id='nohover'/>
          HTML
        </div>
            <div className='card'>
            <DiSass size='5x' id='nohover'/>
          SASS
        </div>
            <div className='card'>
            <DiReact size='5x' id='nohover'/>
          React
        </div>
            <div className='card'>
            <SiBulma size='5x' id='nohover'/>
          Bulma
        </div>
            <div className='card'>
            <DiNpm size='5x' id='nohover'/>
          npm
        </div>
            <div className='card'>
            <DiNodejsSmall size='5x' id='nohover'/>
          Node
        </div>
            <div className='card'>
            <SiFlask size='5x' id='nohover'/>
          Flask
        </div>
            <div className='card'>
            <SiPostgresql size='5x' id='nohover'/>
          PostgreSQL
        </div>
        <div className='card'>
            <DiVisualstudio size='5x' id='nohover'/>
          VS Code
        </div>
            <div className='card'>
            <DiGit size='5x' id='nohover'/>
          Git
        </div>
            <div className='card'>
            <SiGithub size='5x' id='nohover'/>
          GitHub
        </div>
        <div className='card'>
            <SiHeroku size='5x' id='nohover'/>
          Heroku
        </div>
          </div>
        </div>
      </div>
    </div>

    <div className='card-fluid p-5 m-5' id='projectCard'>
      <h2>Democrats Abroad UK</h2>
      <div id='mobileCard'>

        <div className='d-flex flex-column'>

          <img className='projectIMG' src={DAUKWEB} />
        </div>
        <div className='d-flex flex-column'>

          <p className='p-3 mr-5'>Since April 2020, I have been working with the Democrats Abroad UK Web Development team to create a new site for the organisation. During the development process, I aided in the creation of pages for multiple groups as well as conducted QA testing. My current role includes, but is not limited to, posting events, design editing content blocks and Wordpress training for group and caucus leaders.</p>
          <div className='d-flex flex-row justify-content-center'>
            
            <div className='p-2 m-2'><a href='https://emilieeileen.github.io/project-1-pacman/'><CgWebsite size='5x' /></a></div>
          </div>
          <h4 className='ml-4'>Technologies Used</h4>
          <div className="d-flex flex-wrap" id="tech-box">
            <div className='card'>
              <DiHtml5 size='5x' id='nohover'/>
          HTML
        </div>
            <div className='card'>
            <DiCss3 size='5x' id='nohover'/>
          CSS
        </div>
            <div className='card'>
            <SiWordpress size='5x' id='nohover'/>
          Wordpress
        </div>
            
          </div>
        </div>
      </div>
    </div>


    <div className='card-fluid p-5 m-5' id='projectCard'>
      <h2>The Adventures of Winston</h2>
      <div id='mobileCard'>

        <div className='d-flex flex-column'>

          <img className='projectIMG' src={winston_game} />
        </div>
        <div className='d-flex flex-column'>

          <p className='p-3 mr-5'>A week-long independent project where we created a classic grid style game. I chose a Pac-Man style game based on my corgi, Winston, using CSS and vanilla JavaScript to create the logic for the movements of the squirrels and Winston. I also used JavaScript to create a points and lives system, as well as a local storage scoreboard.</p>
          <div className='d-flex flex-row justify-content-center'>
            <div className='p-2 m-2'><a href='https://github.com/emilieeileen/project-1-pacman'><SiGithub size='5x' /></a></div>
            <div className='p-2 m-2'><a href='https://emilieeileen.github.io/project-1-pacman/'><CgWebsite size='5x' /></a></div>
          </div>
          <h4 className='ml-4'>Technologies Used</h4>
          <div className="d-flex flex-wrap" id="tech-box">
            <div className='card'>
              <DiHtml5 size='5x' id='nohover'/>
          HTML
        </div>
            <div className='card'>
            <DiCss3 size='5x' id='nohover'/>
          CSS
        </div>
            <div className='card'>
            <DiJsBadge size='5x' id='nohover'/>
          JavaScript
        </div>
            <div className='card'>
            <DiVisualstudio size='5x' id='nohover'/>
          VS Code
        </div>
            <div className='card'>
            <DiGit size='5x' id='nohover'/>
          Git
        </div>
            <div className='card'>
            <SiGithub size='5x' id='nohover'/>
          GitHub
        </div>
          </div>
        </div>
      </div>
    </div>
  

    <div className='card-fluid p-5 m-5' id='projectCard'>
      <h2>Friday Night Films</h2>
      <div className='d-flex flex-row' id='mobileCard'>

        <div className='d-flex flex-column'>

          <img className='projectIMG' src={smp} width="600px" />
        </div>
        <div className='d-flex flex-column'>
          <p className='p-3 mr-5'>A 48 Hour pair programming project where my partner and I used The Movie DataBase API to create an old Hollywood, Art Deco style movie search and suggestion app. My role focused on the styling of the website, as well as setting up the components for each page type to display the relevant information from the API.</p>
          <div className='d-flex flex-row justify-content-center'>
            <div className='p-2 m-2'><a href='https://github.com/emilieeileen/project-2'><SiGithub size='5x' /></a></div>
            <div className='p-2 m-2'><a href='https://emilieeileen.github.io/project-2/'><CgWebsite size='5x' /></a></div>
          </div>
          <h4 className='ml-4'>Technologies Used</h4>
          <div className="d-flex flex-wrap" id='techbox'>
          <div className='card'>
              <DiHtml5 size='5x' id='nohover'/>
          HTML
        </div>
            <div className='card'>
            <DiCss3 size='5x' id='nohover'/>
          CSS
        </div>
            <div className='card'>
            <DiReact size='5x' id='nohover'/>
          React
        </div>
            <div className='card'>
            <SiWebpack size='5x' id='nohover'/>
          Webpack
        </div>
            <div className='card'>
            <DiNpm size='5x' id='nohover'/>
          npm
        </div>

        <div className='card'>
            <DiVisualstudio size='5x' id='nohover'/>
          VS Code
        </div>
            <div className='card'>
            <DiGit size='5x' id='nohover'/>
          Git
        </div>
            <div className='card'>
            <SiGithub size='5x' id='nohover'/>
          GitHub
        </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}