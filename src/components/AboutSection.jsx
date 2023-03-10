import React from 'react'
import { GoQuote } from 'react-icons/go'
import imageOne from '../images/Contact-bg.jpg'
import imageTwo from '../images/about-interior.jpg'

const AboutSection = () => {
  return (
      <section className='about-section container'>
          <div className="about-left">
              <p className='about-left-text'>
                  Hos Gastropub lægger vi stor vægt på frisk mad komponeret fra bunden med sæsonens råvarer. I restauranten serveres der krogmodnet kød. I køkkenet bruger vi den moderne inspiration i en sammenblanding med det klassiske køkken, når vi anretter tallerknerne.
              </p>
              
              <p className='about-left-text'>
                  På vores restaurant vil du opleve, at alle råvarer kommer til udtryk i retterne. Din oplevelse på Gastropub skabes af maden, stemningen, omgivelserne og hyggen. Vi håber derfor, at dette er med til at skabe en fantastisk smagsoplevelse for vores gæster.</p>
                  
              <p className='about-left-text'>
                  Menukortet består af få, men gode retter. Disse retter er velovervejet og nøje udvalgt, for at imødekomme gæsterne, da der er tænkt over hver en detalje på tallerknerne. A la carte menuen består af 3 retter. Disse retter bliver skiftet ud hver tredje måned, samt er der hver måned en særlig månedsmenu med sæsonens råvarer.
              </p>
              
              <p className='about-quote'>
                  <span className='quote-sign'><GoQuote /></span> 
                  At skabe et sted for dig og dine venner at bruge kvalitetstid sammen er et primært formål.
              </p>
              <p className='quote-author'>
                  Bob Vestermark - Ejer
              </p>
          </div>
          <div className="about-right">
              
            <div className="about-right-image">
                <img className='about-right-img' src={imageOne } alt="Restaurant" />
            </div>
            <div className="about-right-image">
                <img className='about-right-img' src={imageTwo } alt="Restaurant" />
            </div>

              
          </div>
      </section>
  )
}

export default AboutSection