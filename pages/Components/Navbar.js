import React, { useState, useEffect } from 'react'
import styles from '../../styles/Navbar.module.css'

const Navbar = () => {
  const { navbarHolder, navbarContainer, navImg, navbarShadow, eachNavHolder, eachNav, active } = styles
  const navLeft = ['Početna', 'Menu', 'Galerija']
  const navRight = ['Rezerviraj', 'Onama', 'Kontakt']
  const [ activeNav, setActiveNav ] = useState('Početna')
  const [ scroll, setScroll ] = useState(0)

  const handleClick = (e) => {
    setActiveNav(e.target.name)
    const menu = document.getElementById(e.target.name)
    menu?.scrollIntoView({ behavior: 'smooth'})
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY)
      if (window.innerWidth > 1024) {
        if (window.scrollY >= 800 && window.scrollY < 1760) {
          setActiveNav('Menu')
        } else if (window.scrollY >= 1760 && window.scrollY < 3300) {
          setActiveNav('Galerija')
        } else if (window.scrollY >= 3300 && window.scrollY < 4100) {
          setActiveNav('Rezerviraj')
        } else if (window.scrollY >= 4100 && window.scrollY < 4960) {
          setActiveNav('Onama')
        } else if (window.scrollY >= 4960) {
          setActiveNav('Kontakt')
        } else {
          setActiveNav('Početna')
        }
      }

      if (window.innerWidth > 768 && window.innerWidth < 1025) {
        if (window.scrollY >= 510 && window.scrollY < 1350) {
          setActiveNav('Menu')
        } else if (window.scrollY >= 1350 && window.scrollY < 2610) {
          setActiveNav('Galerija')
        } else if (window.scrollY >= 2610 && window.scrollY < 3315) {
          setActiveNav('Rezerviraj')
        } else if (window.scrollY >= 3315 && window.scrollY < 4000) {
          setActiveNav('Onama')
        } else if (window.scrollY >= 4000) {
          setActiveNav('Kontakt')
        } else {
          setActiveNav('Početna')
        }
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
                name={nav}
                key={nav}
                className={`${eachNav} ${activeNav === nav && active} roboto`} 
                onClick={handleClick}
              >
                {nav}
              </a>
            ))
          }
        </div>
        <img src="/navbar/logo.png" className={`${navImg}`} alt="Come To Mama" />
        <div className={`${eachNavHolder}`}>
          {
            navRight.map(nav => (
              nav == 'Onama'
              ?
              <a 
                name={nav}
                key={nav}
                className={`${eachNav} ${activeNav === nav && active} roboto`} 
                onClick={handleClick}
              >
                O nama
              </a>
              :
              <a 
                name={nav}
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
