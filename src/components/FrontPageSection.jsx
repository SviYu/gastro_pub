import React from 'react'
import { Link } from 'react-router-dom'
import '../pages/home/home.css'
import '../index.css'

const FrontPageSection = ({img, title, children, link, linkTitle}) => {
  return (
      <section className='front-page-section' id="top">
          <img className='front-page-section-bg' src={img} alt="Background Img" />
          <div className='container front-page-section-container'>
              <h2 className='front-page-section-title'>{title}</h2>
              <p className='front-page-section-text'>{children}</p>
              <Link className='front-page-section-btn btn' to={link}>{linkTitle}</Link>
          </div>
        </section>
  )
}

export default FrontPageSection