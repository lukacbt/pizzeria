import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import styles from '../../styles/Layout.module.css'

const Layout = props => {
  const { contentHolder, fixedLeft, fixedRight, fixed, paragraphLeft, paragraphRight } = styles

  return (
    <span>
      <Navbar />
      <div className={contentHolder}>
        <a href="/comeToMamaPDF.pdf" target="_blank">
          <div className={`${fixedLeft} ${fixed}`}>
            <p className={`${paragraphLeft} roboto`}>Cijeli Menu</p>
          </div>
        </a>
        <div className={`${fixedRight} ${fixed}`}>
          <p className={`${paragraphRight} roboto`}>Rezerviraj Stol</p>
        </div>
        {props.children}
        <Footer />
      </div>
    </span>
  )
}

export default Layout
