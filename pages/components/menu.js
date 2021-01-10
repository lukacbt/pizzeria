import React from 'react'
import styles from '../../styles/Menu.module.css'
import EachMenu from './eachmenu'
import dishes from './dishes'

const Menu = () => {
  const { menuHolder, menuLeft, menuP, menuButton, menuLeftHolder, menuRight, menuRightHolder } = styles
  
  return (
    <div id="Menu" className={`${menuHolder} inner-width`}>
      <div className={`${menuLeft}`}>
        <div className={`${menuLeftHolder}`}>
          <h1 className={`title playFair`}>Come to Mama - Mama Knows Best</h1>
          <p className={`${menuP} paragraph roboto`}>Come to Mama novootvoreno mjesto za vrhunsku pizzu na zagrebačkim Vrbanima koje već na prvi pogled osvaja divnim cosy interijerom koji će baš svako druženje dodatno upotpuniti i navesti goste da se iznova vraćaju. <br/>  Ovo divno mjesto u svojoj ponudi nudi izbor između deset pizza koje će, sigurni smo, zadovoljiti baš svačiji ukus. </p>
          <a className={`${menuButton} roboto`} target="_blank" href="/comeToMamaPDF.pdf">Cijeli menu</a>
        </div>
      </div>
      <div className={`${menuRight}`}>
        <div className={`${menuRightHolder}`}>
          { dishes.length > 0 &&
            dishes.map(dish => (
              <EachMenu
                key={dish.title}
                title={dish.title}
                dishes={dish.eachDish}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Menu
