import React from 'react'
import Header from '../../components/Header'
import NewMenu from '../../components/NewMenu'
import headerBg from '../../images/newsHeader.jpg'
import { BsChevronUp } from 'react-icons/bs'
import './news.css'
import Feedbacks from '../../components/Feedbacks'

const News = () => {
  return (
    <>
      <Header title="Nyheder" image={headerBg} />
      <NewMenu />
      <Feedbacks />
      
      <div className="go-to-top">
        <a href='#top'><BsChevronUp /></a>
      </div>
    </>
  )
}

export default News