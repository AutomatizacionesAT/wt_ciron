import { useState } from 'react'
import aperturaTickets from './BASES/aperturaTickets.json'
import escalamientoCED from './BASES/escalamientoCED.json'
import FormNote from './FormNote'
const Notas = ({ nameNote }) => {
	const [notas, setNotas] = useState({
		aperturaTickets,
		escalamientoCED,
	})
	return (
		<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
			<FormNote jsonNote={notas[nameNote]}></FormNote>
		</div>
	)
}

export default Notas
