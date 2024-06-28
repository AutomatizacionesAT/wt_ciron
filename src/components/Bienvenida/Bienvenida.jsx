import { useState } from 'react'
import imgCirion from '../../assets/images/index/imgCirion.svg'

export default function Bienvenida() {
	return (
		<div className="welcome">
			<span className="animate__animated animate__bounceInDown">Bienvenidos a</span>
			<span className="animate__animated animate__bounceInLeft">Web Training</span>
			<figure className='welcome__image animate__animated animate__zoomIn'>
				<img src={imgCirion} alt="" />
			</figure>
		</div>
	)
}
