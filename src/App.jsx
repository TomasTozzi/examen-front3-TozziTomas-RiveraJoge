import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Inicio  from './Routes/Inicio'
import  Favoritos from "./Routes/Favoritos"
import  Detalle from "./Routes/Detalle"

function App() {
	return (
		<>
			<h1>Soy la App</h1>
		<BrowserRouter>
				<Routes>
					<Route path="/" element={<Inicio/>}/>
					<Route path="/favoritos" element={<Favoritos/>}/>
					<Route path="/Detalle" element={<Detalle/>}/>
					<Route path="*" element={<h1>Pagina No Encontrada</h1>}/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
