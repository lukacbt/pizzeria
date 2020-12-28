import React, { useState, useEffect } from 'react'
import styles from '../../styles/Navbar.module.css'

const Navbar = () => {
  const { navbarHolder, navbarContainer, navbarShadow, eachNavHolder, eachNav, active } = styles
  const navLeft = ['Početna', 'O Nama']
  const navRight = ['Meni', 'Kontakt', 'Rezerviraj']
  const [ activeNav, setActiveNav ] = useState('Početna')
  const [ scroll, setScroll ] = useState(0)
  const handleClick = (e) => {
    setActiveNav(e.target.innerHTML)
  }

  window.addEventListener('scroll', () => {
    setScroll(window.scrollY)
  })

  return (
    <div className={`${navbarHolder} ${scroll >= 100 && navbarShadow}`}>
      <div className={`${navbarContainer}`}>
        <div className={`${eachNavHolder}`}>
          {
            navLeft.map(nav => (
              <a 
                href={`#${nav}`}
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
                href={`#${nav}`}
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
