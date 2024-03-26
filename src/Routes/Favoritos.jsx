import React from "react";
import { useClinicaStates } from "../Context/GlobalContext";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favoritos = () => {

const {state , dispatch} = useClinicaStates()


  return (
    <>
      <h1>Dentistas Favs</h1>
      <div>
        {state.favoritos.map((favoritos) => {
          return <div key={favoritos.id}>
          <h1>{favoritos.name}</h1>
          </div>
        })}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favoritos;
