import { useEffect, useState } from 'react'
import { CheckListProvider } from '../../context/ChecklistContext'
import Checklist from './Checklist'
import { Settings } from './Settings'
import despachoTicket from './BASES/despachoTicket.json'
import tipoFacturacion from './BASES/tipoFacturacion.json'

const CheckListBase = ({ checklist }) => {
	const [zoom, setZoom] = useState(false)
	const [cheklists, setCheckList] = useState({
		despachoTicket,
		tipoFacturacion,
	})
	const zoomChecklist = () => {
		setZoom(!zoom)
	}

	return (
		<>
			<CheckListProvider>
				<section className={'checklist-container ' + zoom}>
					<Settings zoomChecklist={zoomChecklist} />
					<Checklist dataCheckList={cheklists[checklist]} />
				</section>
			</CheckListProvider>
		</>
	)
}

export default CheckListBase
