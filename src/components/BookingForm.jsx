import React from 'react'
import { IoIosClose } from 'react-icons/io'
import './navbar/navbar.css'

const BookingForm = ({handleClose}) => {
    
    return (          
        <div className='booking-container'>
            <form className='booking-form'>
                <h3 className='booking-title'>Bestil Bord</h3>
                <IoIosClose onClick={handleClose}/>
                <input type="text" placeholder='➢  Navn*' />
                <input type="number" placeholder= '☏  Telefon*' min={0}/>
                <input type="text"
                    onFocus={(e) => e.target.type = 'date'}
                    
                    placeholder='🗓  Bestillings Dato*' />
                <textarea placeholder='✎  Besked*' rows={5}></textarea>
                <button className='booking-btn btn'>Send</button>
            </form>
        </div>
       
  )
}

export default BookingForm