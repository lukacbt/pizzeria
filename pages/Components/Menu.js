import React from 'react'
import styles from '../../styles/Menu.module.css'
import EachMenu from './EachMenu'
import { dishes } from './dishes'

const Menu = () => {
  const { menuHolder, menuLeft, menuTitle, menuParagraph, menuButton, menuLeftHolder, menuRight, menuRightHolder } = styles
  return (
    <div className={`${menuHolder} inner-width`}>
      <div className={`${menuLeft}`}>
        <div className={`${menuLeftHolder}`}>
          <h1 className={`${menuTitle} playFair`}>Daily food courses with drinks</h1>
          <p className={`${menuParagraph} roboto`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <a className={`${menuButton} roboto`} href="#">Preuzmi meni</a>
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
