import React from 'react'
import '../pages/contact/contact.css'

const Header = ({title, image}) => {
  return (
    <div className="header">
          <div className="header-overlay"></div>
          <h1>{ title}</h1>
          <img src={image} alt="Background" />
    </div>
  )
}

export default Header