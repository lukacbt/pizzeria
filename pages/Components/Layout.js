import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = props => {
  return (
    <span>
      <Navbar />
      {props.children}
      <Footer />
    </span>
  )
}

export default Layout
