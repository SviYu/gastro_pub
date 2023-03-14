import React from 'react'
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import photo01 from '../images/gallery/galleri01.jpg'
import photo02 from '../images/gallery/galleri02.jpg'
import photo03 from '../images/gallery/galleri03.jpg'
import photo04 from '../images/gallery/galleri04.jpg'
import photo05 from '../images/gallery/galleri05.jpg'
import photo06 from '../images/gallery/galleri06.jpg'
import photo07 from '../images/gallery/galleri07.jpg'

const images = [
  {
    original: photo01,
    thumbnail: photo01
  },
  {
    original: photo02,
    thumbnail: photo02
  },
  {
    original: photo03,
    thumbnail: photo03
  },
  {
    original: photo04,
    thumbnail: photo04
  },
  {
    original: photo05,
    thumbnail: photo05
  },
  {
    original: photo06,
    thumbnail: photo06
  },
  {
    original: photo07,
    thumbnail: photo07
  }
]

const Slideshow = () => {
  return (
    <div className='gallery-wrapper container'>
      <h2 className='gallery-title'>Vores selskabslokaler</h2>
      <ImageGallery items={images}/>
    </div>
  )
}

export default Slideshow