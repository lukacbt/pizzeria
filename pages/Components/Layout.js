import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import styles from '../../styles/Layout.module.css'

const Layout = props => {
  const { contentHolder } = styles

  return (
    <span>
      <div className={contentHolder}>
        <Navbar />
        {props.children}
        <Footer />
      </div>
    </span>
  )
}

export default Layout
