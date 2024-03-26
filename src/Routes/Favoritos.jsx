import React, { useEffect } from "react";
import { useClinicaStates } from "../Context/GlobalContext";
import { useState } from "react";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favoritos = () => {
  const [favoritos, setFavoritos] = useState([]);
  // const { state, dispatch } = useClinicaStates()
  // console.log("Favoritos:")
  // console.log(state.Favoritos)

  useEffect(() => {
    const favsRecuperadoString = localStorage.getItem('favs');
    console.log(favsRecuperadoString)
    // Convertir la cadena JSON de nuevo a un objeto JavaScript
    let recuperados = JSON.parse(favsRecuperadoString);
    console.log(recuperados)
    setFavoritos(recuperados)

  }, [])


  console.log(favoritos);






  return (
    <>
      <h1>Dentistas Favs</h1>
      <div>
        <h1></h1>
         {favoritos.map((favoritos) => {
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
