import React from 'react'
import { useClinicaStates } from '../Context/GlobalContext'

const Footer = () => {

  const { state } = useClinicaStates()

  return (
    <footer className={state.darkMode ? "footer-dark" : "footer-white"}>
      <p>Powered by </p>
      <img src="../../public/DH.ico" alt='DH-logo' />
    </footer>
  )
}

export default Footer
