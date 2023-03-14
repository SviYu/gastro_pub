import React from 'react'
import { feedbacks } from '../data'
import {BsClock} from 'react-icons/bs'
import {TiMessages} from 'react-icons/ti'

const Feedback = () => {
  return (
      <section className='feedbacks-wrapper'>
          {
              feedbacks.map((feedback) => {
                  return (
                      <div className='feedback' key={feedback.id}>
                          <h3 className='feedback-name'>{feedback.name}</h3>
                          <p className='feedback-date'><BsClock/>{ feedback.date}</p>
                          <p className='feedback-msg'><TiMessages/>{ feedback.message}</p>
                      </div>
                  )
              })
          }
    </section>
  )
}

export default Feedback