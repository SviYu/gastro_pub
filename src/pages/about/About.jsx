import React from 'react'
import AboutSection from '../../components/AboutSection'
import Header from '../../components/Header'
import image from '../../images/About-bg.jpg'
import { BsChevronUp } from 'react-icons/bs'

import './about.css'

const About = () => {
  return (
    <>
      <Header title="Om GastroPub" image={image} />
      <AboutSection />
      <div className="go-to-top">
        <a href='#top'><BsChevronUp /></a>
      </div>
    </>
  )
}

export default About