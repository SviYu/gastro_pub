import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'

const Contact = () => {
  const [headerImg, setHeaderImg] = useState([]);

  useEffect(() => {
    fetch('https://gastropub.webexam-mcdm.dk/api/images')
      .then(response => response.json())
      .then(response => {
        console.log(response)
        setHeaderImg(response)
      })
    .catch(err => console.log(err.message))
  }, [])

  
  return (
    <>
      <Header title="Kontakt">

        {headerImg.map((img) => {
          
          return <img src={img.id} alt='Interior' key={img.id}/>
        })}

      </Header>

      <section></section>
    </>
  )
}

export default Contact