import React from 'react'
import styles from '../../styles/Hero.module.css'

const Hero = () => {
  const { heroHolder, titleHolder, pizzeriaName, pizzeriaDesc } = styles

  return (
    <div className={heroHolder}>
      <div className={titleHolder}>
        <h2 className={`${pizzeriaName} playFair`}>Come To Mama</h2>
        <h3 className={`${pizzeriaDesc} roboto`}>A fine dinning restaurant</h3>
      </div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Hero
