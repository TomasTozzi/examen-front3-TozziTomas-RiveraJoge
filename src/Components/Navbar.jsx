import React from 'react'
import { Link } from 'react-router-dom'
import { useClinicaStates } from '../Context/GlobalContext'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

	const { state, dispatch } = useClinicaStates()

	return (
		<nav className={state.darkMode ? "nav-container dark" : "nav-container white"}>
			<h2><Link to="/">DH ODONTOLOGIA</Link></h2>
				<ul>
					<Link to="/">Home</Link>
					<Link to="/favoritos">Favoritos</Link>
					<Link to="/detalle">Detalle</Link>
					<Link to="/contacto">Contacto</Link>
				</ul>

			{/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
			<button className={state.darkMode ? "nav-button-theme-dark:hover nav-button-theme-dark" : "nav-button-theme-white:hover nav-button-theme-white"} onClick={()=> dispatch( {type: "CAMBIAR_THEME"} ) }>Cambiar modo</button>
		</nav>
	)
}

export default Navbar