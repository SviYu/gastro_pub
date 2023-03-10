import React, { useEffect, useState } from 'react'
import ContactBody from '../../components/ContactBody';
import Header from '../../components/Header'
import './contact.css'
import imageBg from '../../images/Contact-bg.jpg'

const Contact = () => {
  
  return (
    <>
      <Header title="Kontakt" image={imageBg }/>
      <ContactBody/>
    </>
  )
}

export default Contact