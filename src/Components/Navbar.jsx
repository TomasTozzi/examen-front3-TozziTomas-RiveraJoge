import React from 'react'
import { Link } from 'react-router-dom'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

	return (
		<nav>
			<h2>DH Odondto</h2>
				<ul>
					<Link to="/">Home</Link>
					<Link to="/favoritos">Favoritos</Link>
					<Link to="/detalle">Detalle</Link>
					<Link to="/contacto">Contacto</Link>
				</ul>

			{/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
			<button>Change theme</button>
		</nav>
	)
}

export default Navbar