import React from 'react'
import Header from '../../components/Header'
import MenuCard from '../../components/MenuCard'
import image from '../../images/Menu-bg.jpg'
import './menu.css'
import { BsChevronUp } from 'react-icons/bs'

const Menu = () => {
  return (
    <>
      <Header title="Menu" image={image} />
      <MenuCard />
      <div className="go-to-top">
        <a href='#top'><BsChevronUp /></a>
      </div>
    </>
  )
}

export default Menu