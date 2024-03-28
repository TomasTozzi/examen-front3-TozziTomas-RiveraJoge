import React, { useEffect } from "react";
import { useClinicaStates } from "../Context/GlobalContext";
import { useState } from "react";
import { Link } from "react-router-dom";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favoritos = () => {
  const { state, dispatch } = useClinicaStates();

  return (
    <>
      <h1>Favoritos</h1>
      <div className="card-container">
        {state.favoritos.map((fav) => {
          return (
            <div
              key={fav.id}
              className={
                state.darkMode
                  ? "card-dark card-container"
                  : "card-white card-container"
              }
            >
              Name: {fav.name}
              <div>
                <Link to={`/detalle/${fav.id}`}>
                  <p>
                    {" "}
                    Username:{fav.username} - ID: {fav.id}
                  </p>
                </Link>
              </div>
              <button
                className={
                  state.darkMode
                    ? "button-common-dark:hover button-common-dark"
                    : "button-common-white:hover button-common-white"
                }
                onClick={() =>
                  dispatch({ type: "BORRAR_FAVORITO_POR_ID", payload: fav.id })
                }
              >
                Quitar de favoritos
              </button>
            </div>
          );
        })}
      </div>
      <div className="card-container">
      <button
        className={
          state.darkMode
            ? "button-delete-all-dark:hover button-delete-all-dark"
            : "button-delete-all-white:hover button-delete-all-white"
        }
        onClick={() => dispatch({ type: "BORRAR_TODOS_FAVORITOS" })}
      >
        Borrar Favoritos
      </button>
      </div>
    </>
  );
};

export default Favoritos;
