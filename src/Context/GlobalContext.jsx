import React from "react";
import { createContext, useContext, useReducer, useState, useEffect } from "react";
import axios from "axios";



const ClinicaStates = createContext();


let estadoInicial = {
  favoritos: [],
  darkMode: false,
  odontologos: [],
};

const clinicaReducer = (state, action) => {
  switch (action.type) {
    case "AGREGAR_FAVORITO":
      return { ...state, favoritos: [...state.favoritos, action.payload] };
    case "CAMBIAR_THEME":
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
};

const GlobalContext = ({ children }) => {
  //estados necesarios para la app.
  const [state, dispatch] = useReducer(clinicaReducer, estadoInicial);
  const [odonto, setOdonto] = useState([]);
  let url = "https://jsonplaceholder.typicode.com/users"

useEffect(() => {
  const pedirOdontologos = async () => {
    const resultado = await axios(url);
    console.log(resultado.data);
    setOdonto(resultado.data);
    console.log(odonto);
  };
  pedirOdontologos();
}, []);
  //funciones globales
  let datos = { state, dispatch, odonto };
  return (
    <ClinicaStates.Provider value={datos}>{children}</ClinicaStates.Provider>
  );

};



export default GlobalContext;

export const useClinicaStates = () => useContext(ClinicaStates);
