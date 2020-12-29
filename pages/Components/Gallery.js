import React from 'react'
import styles from '../../styles/Gallery.module.css'

const Gallery = () => {
  const { galleryHolder, galleryLeft, eachPic, firstPicHolder, firstPic, secondPicHolder, secondPic, thirdPicHolder, thirdPic, fourthPicHolder, fourthPic, galleryRight } = styles

  return (
    <div id="Galerija" className={`${galleryHolder} inner-width`}>
      <div className={`${galleryLeft}`}>
        <div className={`${firstPicHolder}`}>
          <div className={`${firstPic} ${eachPic}`}></div>
        </div>
        <div className={`${thirdPicHolder}`}>
          <div className={`${thirdPic} ${eachPic}`}></div>
        </div>
      </div>
      <div className={`${galleryRight}`}>
        <div className={`${secondPicHolder}`}>
          <div className={`${secondPic} ${eachPic}`}></div>
        </div>
        <div className={`${fourthPicHolder}`}>
          <div className={`${fourthPic} ${eachPic}`}></div>
        </div>
      </div>
    </div>
  )
}

export default Gallery