import React from 'react'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

	return (
		<nav>
			<h2>DH Odondto</h2>
				<ul>
					<Link to="/">Home</Link>
					<Link to="/favs">Favoritos</Link>
					<Link to="/carrito">Carrito</Link>
				</ul>


			{/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
			{/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
			<button>Change theme</button>
		</nav>
	)
}

export default Navbar