import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import styles from '../../styles/Layout.module.css'

const Layout = props => {
  const { contentHolder, fixedLeft, fixedRight, fixed, paragraphLeft, paragraphRight } = styles

  return (
    <span>
      <div className={contentHolder}>
        <div className={`${fixedLeft} ${fixed}`}>
          <p className={`${paragraphLeft} roboto`}>Cijeli Meni</p></div>
        <div className={`${fixedRight} ${fixed}`}>
          <p className={`${paragraphRight} roboto`}>Rezerviraj Stol</p>
        </div>
        <Navbar />
        {props.children}
        <Footer />
      </div>
    </span>
  )
}

export default Layout
