import React from "react";
import { useState } from "react";


const Formulario = () => {
	const [datosContacto, setdatosContacto] = useState({
		nombre: "",
		apellido: "",
		telefono: "",
		mail: ""
	})
	const [error, setError] = useState(false);
	const [mostrar, setMostrar] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault();
		setError(false)

		//validacion telefono
		let regex = /^[0-9]*$/;
		const telefonoValidado = regex.test(datosContacto.telefono);

		//validacion mail.
		regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		const mailValidado = regex.test(datosContacto.mail);

		//Validar inputs.
		if (datosContacto.nombre.length < 6
			|| datosContacto.nombre.length > 20
			|| datosContacto.apellido.length < 3
			|| datosContacto.apellido.length > 20
			|| !telefonoValidado
			|| datosContacto.telefono.length < 10
			|| !mailValidado
		) {
			console.log("Hubo un error con su envio")
			setError(true)
		}
		else {
			setMostrar(true);
			console.log("Se envio su mensaje, nos contactaremos a la novedad.")
		}




	}

	//Aqui deberan implementar el form completo con sus validaciones
	return (
		<>
		{error && <h3>Por favor verifique su información nuevamente. </h3>}
		{mostrar	?
		<h2>Gracias {datosContacto.nombre}, te contactaremos cuando antes vía mail.</h2>
		:
		<form >
			<div>
				<label htmlFor="nombre">Nombre:</label>
				<input
					type="text"
					id="nombre"
					name="nombre"
					placeholder="Ingresa tu nombre"
					onChange={(e) => { setdatosContacto({ ...datosContacto, nombre: e.target.value }) }}
					required
				/>
			</div>
			<div>
				<label htmlFor="apellido">Apellido:</label>
				<input
					type="text"
					id="apellido"
					name="apellido"
					placeholder="Ingresa tu apellido"
					onChange={(e) => { setdatosContacto({ ...datosContacto, apellido: e.target.value }) }}
					required
				/>
			</div>
			<div>
				<label htmlFor="telefono">Teléfono:</label>
				<input
					type="tel"
					id="telefono"
					name="telefono"
					placeholder="Ingresa tu telefono"
					onChange={(e) => { setdatosContacto({ ...datosContacto, telefono: e.target.value }) }}
					required
				/>
			</div>
			<div>
				<label htmlFor="mail">Email:</label>
				<input
					type="email"
					id="mail"
					name="mail"
					placeholder="Ingresa tu Correo"
					onChange={(e) => { setdatosContacto({ ...datosContacto, mail: e.target.value }) }}
					required
				/>
			</div>
			<button onClick={handleSubmit}>Enviar</button>
		</form>
		}
		</>
	);
};
export default Formulario;
