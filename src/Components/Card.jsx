import { Link } from "react-router-dom";
import { useClinicaStates } from "../Context/GlobalContext";
import { useState } from "react";

const Card = ({ odonto }) => {
	const { state, dispatch } = useClinicaStates();

	return (
		<div key={odonto.id} className={state.darkMode ? "card-dark" : "card-white"}>
			Name: {odonto.name}
			<img src="../../public/images/doctor.jpg" alt="Doctor Image"></img>
			<div>
				<Link to={`/detalle/${odonto.id}`}>

					<p>  Username:{odonto.username} - ID: {odonto.id}
					</p>
				</Link>
			</div>
			{/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
			{/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
			<button className={state.darkMode ? "button-common-dark button-common-dark:hover" : "button-common-white button-common-white:hover"} onClick={() => dispatch({ type: "AGREGAR_FAVORITO", payload: odonto })}>
				Agregar Favorito
			</button>
		</div>
	);
};

export default Card;
