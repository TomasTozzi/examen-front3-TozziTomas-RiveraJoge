import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Routes/Inicio'
import Favoritos from "./Routes/Favoritos"
import Detalle from "./Routes/Detalle"
import Contacto from "./Routes/Contacto"
import Layout from "./Layout/Layout"

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route path="/" element={<Inicio />} />
						<Route path="/favoritos" element={<Favoritos />} />
						<Route path="/Detalle" element={<Detalle />} />
						<Route path='/contacto' element={<Contacto />}/>
					</Route>
					<Route path="*" element={<h1>Pagina No Encontrada</h1>} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
