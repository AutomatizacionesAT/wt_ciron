import { useState } from 'react'
import imgCirion from '../../assets/images/index/imgCirion.svg'

export default function Bienvenida() {
	return (
		<div className="welcome">
			<span>Bienvenidos a</span>
			<span>Web Training</span>
			<figure className='welcome__image'>
				<img src={imgCirion} alt="" />
			</figure>
		</div>
	)
}
