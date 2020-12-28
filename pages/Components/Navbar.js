import React, { useState, useEffect } from 'react'
import styles from '../../styles/Navbar.module.css'

const Navbar = () => {
  const { navbarHolder, navbarContainer, navbarShadow, eachNavHolder, eachNav, active } = styles
  const navLeft = ['Početna', 'O Nama', 'Menu']
  const navRight = ['Galerija', 'Rezerviraj', 'Kontakt']
  const [ activeNav, setActiveNav ] = useState('Početna')
  const [ scroll, setScroll ] = useState(0)
  const handleClick = (e) => {
    setActiveNav(e.target.innerHTML)
    const menu = document.getElementById(e.target.innerHTML)
    menu?.scrollIntoView({ behavior: 'smooth'})
  }
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY)
      if (window.scrollY >= 850 && window.scrollY < 1800) {
        setActiveNav('Menu')
      } else {
        setActiveNav('Početna')
      }
    })
  }, [])

  return (
    <div className={`${navbarHolder} ${scroll >= 100 && navbarShadow}`}>
      <div className={`${navbarContainer}`}>
        <div className={`${eachNavHolder}`}>
          {
            navLeft.map(nav => (
              <a 
                key={nav}
                className={`${eachNav} ${activeNav === nav && active} roboto`} 
                onClick={handleClick}
              >
                {nav}
              </a>
            ))
          }
        </div>
        <img src="/navbar/logo.png" width="auto" height="90px" alt="Come To Mama" />
        <div className={`${eachNavHolder}`}>
          {
            navRight.map(nav => (
              <a 
                key={nav}
                className={`${eachNav} ${activeNav === nav && active} roboto`} 
                onClick={handleClick}
              >
                {nav}
              </a>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar
