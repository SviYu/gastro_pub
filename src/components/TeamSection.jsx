import React, { useEffect } from 'react'
import { team } from '../data'
import AOS from 'aos';
import 'aos/dist/aos.css';

const TeamSection = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
        <section className='team-wrapper container'>
          {
              team.map((team) => (
                  <div className='team-container' key={team.id} data-aos="slide-left">
                      <div className="team-avatar-container">
                         <img className='team-avatar' src={team.avatar} alt="Team Avatar" />
                      </div>
                      <h3 className='team-name'>{team.name}</h3>
                      <h5 className='team-position'>{team.position}</h5>
                      <p className='team-about'>{team.about}</p>
                </div>
              ))
          }
        </section>
  )
}

export default TeamSection