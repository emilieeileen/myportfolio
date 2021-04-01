import React from 'react'
import { HashRouter, Switch, Route, withRouter } from 'react-router-dom'
import ReactTypingEffect from 'react-typing-effect';
import About from "./components/About.js"
import './styles/style.css'
import NavBar from './components/NavBar'
import Projects from './components/Projects.js'

import Contact from './components/Contact'

const App = () => (
  <HashRouter basename='/myportfolio'>
    <NavBar></NavBar>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      {/* <Route path="/contact" component={Contact} /> */}
    </Switch>
   
  </HashRouter>
)

const Home = () => {
  return <div>
    <div className='mt-5'>
      <h1 className="d-flex justify-content-center color-text" id='title'>Emily Kulesa</h1>
      <br />
      <div className="d-flex justify-content-center">
      <ReactTypingEffect
        
        text={["software developer", "programmer", "sustainability advocate"]}
        typingDelay={1000}
        eraseDelay={3000}
        cursorRenderer={cursor => <h2>{cursor}</h2>}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={i % 2 === 0 ? { color: 'black' } : { color: 'black' }}
                  >{char}</span>
                );
              })}
            </h1>
          );
        }}
      />
      </div>
    </div>
  </div>
}

export default App
