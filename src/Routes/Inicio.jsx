import React, { useState, useEffect } from 'react'
import { useClinicaStates } from '../Context/GlobalContext'
import axios from 'axios'

const Inicio = () => {
  let url = "https://jsonplaceholder.typicode.com/users"

  const { state, dispatch } = useClinicaStates()

  const [odonto, setOdonto] = useState({})

  useEffect(() => {
    const pedirOdontologos = async () => {
      const resultado = await axios(url)
      console.log(resultado.data)
      setOdonto(resultado.data[0])
    }
    pedirOdontologos()
  }, [])

  console.log(odonto)





  return (


    <>
      <p>Odontologo: {odonto.name}</p>
      <div>Home. Modo:{state.darkMode ? "oscuro" : "claro"}</div>
    </>
  )
}

export default Inicio
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
