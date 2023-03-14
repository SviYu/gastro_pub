import React from 'react'
import Header from '../../components/Header'
import Slideshow from '../../components/Slideshow'
import { BsChevronUp } from 'react-icons/bs'
import headerBg from '../../images/Galleri-bg.jpg'
import './gallery.css'

const Gallery = () => {
  return (
    <>
      <Header title="Galleri" image={headerBg} />
      <Slideshow />

      <div className="go-to-top">
        <a href='#top'><BsChevronUp /></a>
      </div>
    </>
  )
}

export default Gallery