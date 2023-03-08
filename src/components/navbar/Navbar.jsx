import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../images/gastro-pub.svg'
import { links } from '../../data'
import {MdOutlineClose} from 'react-icons/md'
import {GoTriangleDown} from 'react-icons/go'
import { GoThreeBars } from 'react-icons/go'
import './navbar.css'
import BookingForm from '../BookingForm'

const Navbar = () => {
    const [navShowing, setNavShowing] = useState(false);
    const [subnavShowing, setSubNavShowing] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

  return (
    <nav>
          <div className="container nav-container">
              <Link to="/" className='logo'>
                  <img src={logo}
                      className="navbar-logo"
                      onClick={() => {
                          setNavShowing(false);
                          setSubNavShowing(false)
                       }}
                      
                      alt="Navbar Logo" />
              </Link>
              <ul className={`nav-links ${navShowing ? 'show-nav' : 'hide-nav'}`}>
                  {
                      links.map((links, index) => {
                          if (!links.children) {
                              return <li className="nav-list-item" key={index}>
                                  <NavLink to={links.path} 
                                      className={({ isActive }) => isActive ? "active-nav-link" : "nav-link"}
                                      onClick={() => {
                                          setNavShowing(prev => !prev)
                                          setSubNavShowing(false)
                                      }
                                      }>
                                      {links.name}
                                  </NavLink>
                                  </li>
                          } 
                          return (
                              <li className="nav-list-item" key={index}>
                                  <div className='sub-menu-anchor'>
                                      <NavLink className="nav-link"
                                          onClick={() => setSubNavShowing(prev => !prev)}>
                                          {links.name}
                                      </NavLink>
                                      <GoTriangleDown />

                                  </div>


                                    <ul className={`sub-nav-links ${subnavShowing ? 'show-sub-nav' : 'hide-sub-nav'}`}>
                                        {
                                            links.children.map((sublink, idx) => {
                                                if (!sublink.children) {
                                                    return (
                                                        <div className='sub-menu' key={idx}>
                                                            <NavLink to={sublink.path}
                                                                className={({ isActive }) => isActive ? "active-nav-link" : "sub-nav-link"}
                                                                onClick={() => setSubNavShowing(prev => !prev)}>
                                                                {sublink.name}
                                                            </NavLink>
                                                        </div>
                                                    )
                                                }
                                                return (
                                                    <li>
                                                        <div>
                                                            <NavLink>{sublink.name}</NavLink>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                              </li>
                          )
                      })
                  }
                  <button className='navbar-btn btn'
                      /* onClick={handleOpen} */
                      onClick={() => {
                          setNavShowing(false);
                          handleOpen();
              }}
                  >
                      Bestil Bord</button>
              </ul>
              <button className='nav-toggle-btn' onClick={() => {
                  setNavShowing(prev => !prev)
                  setSubNavShowing(false)
              }}>
                  {
                      navShowing ? <MdOutlineClose/> : <GoThreeBars/>
                  }
              </button>
          </div>
          {
              openModal ? <BookingForm handleClose={ handleClose} /> : null
          }
              
    </nav>
  )
}

export default Navbar