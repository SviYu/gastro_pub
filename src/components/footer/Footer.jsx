import React, { useEffect, useState } from 'react'
import { FaMapMarkerAlt} from 'react-icons/fa'
import { BsTelephoneFill} from 'react-icons/bs'
import { FaFacebookF} from 'react-icons/fa'
import { FaTwitter} from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import './footer.css'

const Footer = () => {
/*   const [addressInfo, setAddressInfo] = useState([]);
  const [telInfo, setTelInfo] = useState([]); */

  const [footerInfo, setFooterInfo] = useState([]);

  useEffect(() => {
    fetch('https://gastropub.webexam-mcdm.dk/api/texts')
      .then(response => response.json())
      .then(data => {
        /* console.log(data) */
        setFooterInfo(data)
      })
    .catch(err => console.log('Error', err.message))
  }, [])

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
                {footerInfo.map(footerItem => {

                  return (
                    <span key={footerItem.id}>{
                      footerItem.name === 'Footer-txt-Adr' ? footerItem.description : ''
                    }</span>
                  ) 
                })}
            

              </p>
            <p>
            <span><BsTelephoneFill /></span>
              {footerInfo.map(footerItem => {

                    return (
                      <span key={footerItem.id}>{
                        footerItem.name === 'Footer-text-Tlf' ? footerItem.description : ''
                      }</span>
                    ) 
                  })}
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