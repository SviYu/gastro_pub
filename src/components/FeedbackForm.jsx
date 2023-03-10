import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const FeedbackForm = () => {
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm({ mode: 'onBlur' });

    const [fdbName, setFdbName] = useState('');
    const [fdbmessage, setFdbMessage] = useState('');
    const [fdbAnswer, setFdbAnswer] = useState('');

    const feedbackToSubmit = {
        "name": fdbName,
        "message": fdbmessage
    }

    const submitFdbForm = () => {
        setFdbAnswer(
                <div className="feedback-answer">
                    <h2 className='feedback-answer-title'>Tak {fdbName} for din mening!</h2>
                    <p className='feedback-answer-text'>
                        Det er vigtigt for os at vide om hvad du tænker om os.</p>
                </div>
        )



        fetch('https://gastropub.webexam-mcdm.dk/api/surveys', {
            method: 'POST',
            body: JSON.stringify(feedbackToSubmit),
            headers: {'Content-Type': 'application/json;charset=UTF-8'}
        }).then(res => res.json())
            .then(res => console.log('Answer', res))
        .catch(err => console.log(err.message))
        
        
        setFdbName('');
        setFdbMessage('');
    }

  return (
      <div className='feedback-form-container'>
          <h2 className='feedback-form-container-title'>Fortæl os om dit besøg</h2>
          <form className='contact-form feedback-form' method='post' onSubmit={handleSubmit(submitFdbForm)}>
                <input type="text" placeholder='➢  Navn*'
                        {...register("name", {
                              required: true
                        })}
                  value={fdbName}
                  onChange={(e) => setFdbName(e.target.value)}
                />
                <div className="err-txt">{errors?.name && 
                          <p>*Navnet skal udfyldes</p>}
              </div>
              
              <textarea placeholder='✎  Besked*' rows={5}
                {...register("message", {
                    required: true
                })}
                value={fdbmessage}
                  onChange={(e) => setFdbMessage(e.target.value)}>
                  
                </textarea>
                <div className="err-txt">{errors?.message && 
                    <p>*Skriv os din mening</p>}
                </div>
              
              <div>
                <input type='submit' className='feedback-form-btn btn' value="Send"/>
              </div>

              {fdbAnswer}
          </form>

    </div>
  )
}

export default FeedbackForm