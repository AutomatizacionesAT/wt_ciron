import '@styles/app.scss'
import { Routes, Route } from 'react-router-dom'

import imgBackground from './assets/images/index/bgLight.jpg'
import imgBackgroundD from './assets/images/index/bgDark.jpg'

import Navbar from './components/Navbar/Navbar'
import Bienvenida from './components/Bienvenida/Bienvenida'
import Corrector from './components/Corrector/Corrector'
import GlobalContext, { GlobalProvider } from './context/GlobalContext'
import CheckListBase from './components/Checklist/CheckListBase'
import Testeos from './components/Test/Testeos'
import Notas from './components/Gestor_de_Notas/Notas'
import { useContext } from 'react'
import TimeLine from './components/TimeLine/TimeLine'
import Tipificador from './components/Tipificador/Tipificador'

const App = () => {
	const { scheme } = useContext(GlobalContext)
	const style = {
		backgroundImage: `url(${scheme === 'light' ? imgBackground : imgBackgroundD})`,
		backgroundSize: '100% 100%',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		colorScheme: scheme,
	}
	return (
		<div className="app" style={style}>
			<Navbar />
			<Routes>
				<Route path="/" element={<Bienvenida />} />
				<Route path="/checklist" element={<CheckListBase checklist="ejemploA" />} />
				<Route path="/checklist/despachoTicket" element={<CheckListBase checklist="despachoTicket" />} />
				<Route path="/checklist/tipoFacturacion" element={<CheckListBase checklist="tipoFacturacion" />} />
				<Route path="/gestorNotas" element={<Notas nameNote="nota_ejemplo" />} />
				<Route path="/gestorNotas/aperturaTickets" element={<Notas nameNote="aperturaTickets" />} />
				<Route path="/gestorNotas/escalamientoCED" element={<Notas nameNote="escalamientoCED" />} />
				<Route path="/gestorNotas" element={<Notas nameNote="nota_ejemplo" />} />
				<Route path="/tipificador" element={<Tipificador />} />
				<Route path="/calculadoras/estandar" element={<Tipificador />} />
				<Route path="/timeline" element={<TimeLine />} />
				<Route path="/corrector" element={<Corrector />} />
				<Route path="/testeos" element={<Testeos />} />
			</Routes>
		</div>
	)
}

export default App
