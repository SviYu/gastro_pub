import React, { useEffect } from 'react'
import chefImg from '../images/MasterChef.jpg'
import '../pages/team/team.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Chefsection = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
      <section className='chef-section' data-aos="slide-right">
          <div className="chef-section-wrapper container">
            <div className="chef-section-left">
                <h2 className='chef-section-title'>Chefkok - Bob Vestermark</h2>
                <p className='chef-section-text'>
                    Jeg startede mit madeventyr hos Buggedal Kro og efter 10 år, besluttede jeg at tage et stort skridt videre i min karriere, da jeg mente, at det var tid til at skabe min egen succes. Min store passion for mad og lysten til at skabe mit eget sted blev d. 2. juni til virkelighed, da jeg åbnede dørene op for Viborgs nyeste Gastropub.
                </p>
            </div>
            <div className="chef-section-right">
                <img className='chef-image' src={chefImg} alt="Master Chef" />
            </div>
          </div>
        </section>
  )
}

export default Chefsection