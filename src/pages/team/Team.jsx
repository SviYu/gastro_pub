import React from 'react'
import Header from '../../components/Header'
import headerTeamBg from '../../images/Team-bg.jpg'
import { BsChevronUp } from 'react-icons/bs'
import Chefsection from '../../components/Chefsection'
import TeamSection from '../../components/TeamSection'

const Team = () => {
  return (
    <>
      <Header title="Vores Team" image={headerTeamBg} />
      <Chefsection />
      <TeamSection />
      
      <div className="go-to-top">
        <a href='#top'><BsChevronUp /></a>
      </div>
    </>
  )
}

export default Team