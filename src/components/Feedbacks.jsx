import React, { useEffect } from 'react'
import Feedback from './Feedback'
import FeedbackForm from './FeedbackForm'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Feedbacks = () => {
 useEffect(() => {AOS.init()}, [])

  return (
    <section className='feedback-section container' data-aos="zoom-out-down">
      <h2 className='feedbacks-title'>Vores kunders mening</h2>
      <Feedback />
      <FeedbackForm data-aos="fade-down-right"/>
    </section>
  )
}

export default Feedbacks