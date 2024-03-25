import React from 'react'
import { createContext, useContext, useReducer } from 'react'

const ClinicaStates = createContext();

let estadoInicial = {
        favoritos: [],
        darkMode: false,
        odontologos: []
}

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
        const [state, dispatch] = useReducer(clinicaReducer, estadoInicial)

        //funciones globales
        let datos = { state, dispatch }

        return (
                <ClinicaStates.Provider value={datos}>{children}</ClinicaStates.Provider>
        )
}

export default GlobalContext

export const useClinicaStates = () => useContext(ClinicaStates)