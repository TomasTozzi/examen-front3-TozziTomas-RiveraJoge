import { useParams, useSearchParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { useClinicaStates } from '../Context/GlobalContext'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detalle = () => {
  const {id} = useParams()
  const {odontologoSeleccionado, setOdontologoSeleccionado} = useState({})

  const {state, dispatch} = useClinicaStates()
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico


  useEffect(() => {
 
    const getOdonto = async()=>{
      let odontoData = await getodontoById(id);
      setOdontologoSeleccionado(odontoData);
    }
    getOdonto()

  }, [id]);



  return (
    <>
      <h1>Detail Dentist id </h1>

      <div>
        <p>Name: {odontologoSeleccionado.name}</p>
        <p>Email: {odontologoSeleccionado.email}</p>
        <p>Phone: {odontologoSeleccionado.phone}</p>
        <p>Website: {odontologoSeleccionado.website}</p>
        <button onClick={() => dispatch({type: "AGREGAR_FAVORITO", payload: odontologoSeleccionado})}></button>
      </div>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detalle