import React, { useEffect } from 'react'
import roundImg from '../images/Menu-bg.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';


const NewMenu = () => {
  useEffect(() => {AOS.init()}, [])

  return (
    <section className='news-section' data-aos="fade-in">
      <div className="news-wrapper container">
        <div className='news-img'>
          <img src={roundImg} alt="Menu dish" className='news-avatar'/>
        </div>

        <div className="news-text-wrapper">
          <h2 className='news-title'>Nyheder på menuen</h2>

          <h5 className='news-undertitle'>Royal Belgisk Vaffel & mascarpone is med lime</h5>

          <p className='news-text'>
            Denne udsøgte vaffel af ultralet luftig dej med større firkanter, dybe lommer og bagt med syrnet gær. Vaffelen ligger godt sammen med den florlette is, rørt med mascarpone fra det sydlige italien. Den frugtholdige syrlige smag af lime afrunder desserten, hvor sødmen Holdes på plads af friske skovbær og sauce karamel.</p>
        </div>
      </div>
    </section>
  )
}

export default NewMenu