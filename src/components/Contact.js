import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-bootstrap'
import { SiLinkedin } from 'react-icons/si'
import { HiOutlineMail } from 'react-icons/hi'

export default function Contact() {



  return <div className='d-flex flex-row m-5'>

    <div>
      <h2 id='title' className='color-text'>Contact Me</h2>
      <p>Want to have an e-coffee for want to get in touch about new opportunities? I want to hear from you!</p>
    </div>
    <div className="d-flex flex-row justify-content-end">
      <div className='card'>
        <a href="https://www.linkedin.com/in/eekulesa/">
          <SiLinkedin size='5x' />
          <div>LinkedIn</div>
        </a>
      </div>
      <div className='card'>
        <a href="mailto:eekulesacodes@gmail.com">
          <HiOutlineMail size='5x' />
          <div>Email</div>
        </a>
      </div>
    </div>
  </div>
}