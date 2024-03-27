import React, { useEffect } from "react";
import { useClinicaStates } from "../Context/GlobalContext";
import { useState } from "react";
import { Link } from "react-router-dom";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favoritos = () => {
	const { state, dispatch } = useClinicaStates()

	return (
		<>
			<h1>Favoritos</h1>
			{state.favoritos.map((fav) => {
				return (

					<div key={fav.id} className={state.darkMode ? "card-dark" : "card-white"}>
						Name: {fav.name}
						<div>
							<Link to={`/detalle/${fav.id}`}>
								<p>  Username:{fav.username} - ID: {fav.id}
								</p>
							</Link>
						</div>
							<button
								onClick={() =>
									dispatch({ type: "BORRAR_FAVORITO_POR_ID", payload: fav.id })
								}
							>
								Quitar de favoritos
							</button>
						</div>
						);
			})}
						<button onClick={() => dispatch({ type: "BORRAR_TODOS_FAVORITOS" })}>
							Borrar Favoritos
						</button>

						{/* este componente debe consumir los destacados del localStorage */}
						{/* Deberan renderizar una Card por cada uno de ellos */}
					</>
				);
			};

			export default Favoritos;
