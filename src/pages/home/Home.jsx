import React from 'react'
import FrontPageSection from '../../components/FrontPageSection'
import waiterImg from '../../images/mainSite-waiter.jpg'
import foodImg from '../../images/mainSite-food.jpg'
import interiorImg from '../../images/mainSite-interior.jpg'
import { BsChevronUp } from 'react-icons/bs'
import './home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className='front-page'>
      <div className="front-page-overlay"></div>
      <FrontPageSection img={waiterImg} title="GastroPub" link="/om-gastropub" linkTitle="Om Os">
        Uanset om du skal have en forretningsfrokost, en romantisk middag ved levende lys eller bare en drink efter en travl dag, vil GastroPub altid imødekomme dine behov.
      </FrontPageSection>

      <FrontPageSection img={foodImg} title="Fantastisk Mad" link="/menu" linkTitle="Menu">
        Vores retter er tilberedt med friske råvarer fra danske økologiske gårde og egen køkkenhave. Der er kærlighed i hver ret fra kokkens hjerte.
      </FrontPageSection>

      <FrontPageSection img={interiorImg} title="Luksuriøst interiør" link="/galleri" linkTitle="Galleri">
        Vores lokaler er indrettet fra det romantiske møde, til det luksuriøse selskab. Hyggelige omgivelser til enhver lejlighed.
      </FrontPageSection>

      <div className="go-to-top">
        <a href='#top'><BsChevronUp /></a>
      </div>
    </main>
  )
}

export default Home