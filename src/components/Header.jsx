import React from 'react'

const Header = ({title, children}) => {
  return (
      <div className="header">
          <img src={children} alt="" />
          <h1>{ title}</h1>
    </div>
  )
}

export default Header