import React from 'react'
import { useClinicaStates } from '../Context/GlobalContext'


const Inicio = () => {

  const { state, dispatch } = useClinicaStates()




  return (




    <div>Home. Modo:{ state.darkMode ? "oscuro" : "claro" }</div>
  )
}

export default Inicio
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
