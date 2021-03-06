import React from 'react'
import styles from '../../styles/Hero.module.css'

const Hero = () => {
  const { heroHolder, titleHolder, pizzeriaName, pizzeriaDesc, top } = styles

  return (
    <div id="Početna" className={heroHolder}>
      <div className={titleHolder}>
        <h2 className={`${pizzeriaName} playFair`}>Come To Mama</h2>
        <h3 className={`${pizzeriaDesc} roboto`}>Because Mama Knows Best</h3>
      </div>
      <div className={top}></div>
    </div>
  )
}

export default Hero
