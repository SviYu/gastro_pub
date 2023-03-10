import React from 'react'
import Feedback from './Feedback'
import FeedbackForm from './FeedbackForm'

const Feedbacks = () => {
  return (
    <section className='feedback-section container'>
      <h2 className='feedbacks-title'>Vores kunders mening</h2>
      <Feedback />
      <FeedbackForm/>
    </section>
  )
}

export default Feedbacks