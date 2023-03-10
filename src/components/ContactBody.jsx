import React, { useState } from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { BsTelephoneFill} from 'react-icons/bs'
import { BsClock} from 'react-icons/bs'
import { useForm } from 'react-hook-form'

const ContactBody = () => {
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm({
        mode: "onBlur"
    });

    const [name, setName] = useState('');
    const [tlf, setTlf] = useState('');
    const [msg, setMsg] = useState('');
    const [answer, setAnswer] = useState('');

    const dataToSubmit = {
        "name": name,
        "phone": tlf,
        "message": msg
    }

    const submitForm = () => {
        setAnswer(
            <div className="answer-block">
                <div className="answer-wrapper">
                    <h2 className='answer-title'>Tak {name}!</h2>
                    <p className='answer-text'>
                        Tak for din besked. Vi svarer som hurtig som muligt til dig. Husk at tjekke din email.</p>
                </div>
            </div>
        )



        fetch('https://gastropub.webmcdm.dk/contacts', {
            method: 'POST',
            body: JSON.stringify(dataToSubmit),
            headers: {'Content-Type': 'application/json;charset=UTF-8'}
        }).then(res => res.json())
            .then(res => console.log('Answer', res))
        .catch(err => console.log(err.message))
        
        
        setName('');
        setTlf('');
        setMsg('');
    }

  return (
      <section className='contact-section'>
          <div className="contact-section-wrapper container">
            <div className="contact-left">
                <h4>Kære kunde</h4>
                <p>Du er altid velkommen til at kontakte os for spørgsmål angående deklarations indhold, allergener eller økologiske forhold. Andre spørgsmål til Gastropub er også velkomne her.</p>

                <form className='contact-form' onSubmit={handleSubmit(submitForm)} method="post">
                      <input type="text" placeholder='➢  Navn*'
                          {...register("name", {
                              required: true
                          })}
                          value={name}
                          onChange={(e) => setName(e.target.value)} />
                      <div className="err-txt">{errors?.name && 
                          <p>*Navnet skal udfyldes</p>}
                      </div>

                      <input type="number" placeholder='☏  Telefon*' min={0}
                          {...register("phone", {
                              required: true
                          })}
                          value={tlf}
                          onChange={(e) => setTlf(e.target.value)} />
                      <div className="err-txt">{errors?.phone && 
                          <p>*Telefon skal udfyldes</p>}
                      </div>
                      <textarea placeholder='✎  Besked*' rows={5}
                          {...register("message", {
                              required: true
                          })}
                          value={msg}
                          onChange={(e) => setMsg(e.target.value) }
                      ></textarea>
                      <div className="err-txt">{errors?.message && 
                          <p>*Skriv os en besked</p>}
                      </div>
                    <input type='submit' className='contact-form-btn btn' value="Send"/>
                  </form>
                  
                  {answer}
            </div>
            <div className="contact-right">
                <div className="contact-right-block">
                    <span><FaMapMarkerAlt /></span>
                    <p>Valhallavej 23, 8800 Viborg</p>
                </div>
                <div className="contact-right-block">
                    <span><BsTelephoneFill /></span>
                    <p>+45 12 34 56</p>
                </div>
                <div className="contact-right-block">
                    <span><BsClock /></span>
                      <p> Man - Søn, fra 10:00 - 23:00
                          <sub className='sub-text'>Frokost servering - 12:00 - 15:00</sub>
                      </p>
                </div>
            </div>
          </div>

    </section>
  )
}

export default ContactBody