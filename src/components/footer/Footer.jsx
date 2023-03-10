import React from 'react'
import { FaMapMarkerAlt} from 'react-icons/fa'
import { BsTelephoneFill} from 'react-icons/bs'
import { FaFacebookF} from 'react-icons/fa'
import { FaTwitter} from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="wrapper container">
          <div className='footer-container'>
            <h3>Information</h3>
            <p>En gastropub er en hybrid pub, bar og restaurant, der er kendt for servering af alkoholiske drikkevarer og mad.</p>
          </div>

          <div className='footer-container contact-container'>
            <h3>Kontakt</h3>
              <p>
                <span><FaMapMarkerAlt /></span>    
                Valhallavej 23, 8800 Viborg
              </p>
            <p>
              <span><BsTelephoneFill /></span>
              +45 12 34 56
            </p>
          </div>

          <div className='footer-container some-container'>
          <h3>Social Media</h3>
          <div>
            <a href='https://facebook.com'><FaFacebookF/></a>
            <a href='https://instagram.com'><FaInstagram/></a>
            <a href='https://twitter.com'><FaTwitter/></a>
          </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer