import React from 'react'
import styles from '../../styles/Reservation.module.css'

const Reservation = () => {
  const { reservationHolder, date, time, option, reservationButton, input, textarea, reservationLeft, reservationRight, reservationTitle, reservationParagraph } = styles
  const timeOfDay = ["Vrijeme rezervacije *", "16:00 h", "16:30 h", "17:00 h", "17:30 h", "18:00 h", "18:30 h", "19:00 h", "19:30 h", "20:00 h", "20:30 h", "21:00 h"]
  
  return (
    <div id="Rezerviraj" className={`${reservationHolder} inner-width`}>
      <div className={`${reservationLeft}`}>
        <input className={`${input} roboto`} placeholder="Vaše ime i prezime *" type="text" />
        <input className={`${input} ${time} roboto`} placeholder="Datum rezervacije *" type="date" />
        <select className={`${input} ${date} roboto`}>
          {
            timeOfDay.map(t => (
              <option className={`${option}`} key={t}>{t}</option>
            ))
          }
        </select>
        <input className={`${input} roboto`} placeholder="Broj osoba *" type="number" />
        <input className={`${input} roboto`} placeholder="Vaš kontakt broj *" type="number" />
        <input className={`${input} roboto`} placeholder="Vaša e-mail adresa" type="email" />
        <textarea className={`${input} ${textarea} roboto`} placeholder="Dodatna poruka ..." />
        <button className={`${reservationButton} roboto`}>Pošalji upit</button>
      </div>
      <div className={`${reservationRight}`}>
        <h1 className={`${reservationTitle} playFair`}>Rezerviraj stol</h1>
        <p className={`${reservationParagraph} roboto`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  )
}

export default Reservation