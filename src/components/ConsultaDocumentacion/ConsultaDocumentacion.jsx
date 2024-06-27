import React, { useState } from 'react';
import './styles.scss'
import { BD_consultaDocumentacion } from './BASES/BD_consultaDocumentacion';
import { IconPdf } from '../../icons/IconPdf'
import cardBack from '../../assets/images/index/img2.jpeg'
import paperTexture from '../../assets/images/index/img1.jpeg'

export default function ConsultaDocumentacion(){
    const [selectedItem, setSelectedItem] = useState(null);
    console.log(selectedItem)

    const handleClick = (e, elemento) => {
        setSelectedItem(elemento);
        
    }

    return (
    <div className='bilbioteca'>
      <h2>Consulta de documentación</h2>
        <div 
            className='bilbioteca__contenedor'
            style={{
                backgroundImage: `url(${cardBack})`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: 'cover'
            }}
        >
        <div className="loader">
            <div className="book">
                <div className="page"></div>
                <div className="page page2"></div>
            </div>
        </div>
            <div className='bilbioteca__contenedor-left'>
                {
                    BD_consultaDocumentacion.map((ele, ind) => {
                        return(
                            <div 
                                onClick={(e) => handleClick(e, ele)} 
                                className={`bilbioteca__contenedor-left-item dato-buscado ${selectedItem === ele ? 'bilbioteca__contenedor-left-item--active' : ''}`} 
                                key={ind}
                            >
                                {ele.NOMBRE}
                            </div>
                        );
                    })
                }
            </div>
            <div 
                className='bilbioteca__contenedor-right'
                style={{
                    backgroundImage: `url(${paperTexture})`,
                    backgroundRepeat: `no-repeat`,
                    backgroundSize: 'cover'
                }}
            >
                <div 
                    className='bilbioteca__contenedor-right-corner'
                    style={{
                        backgroundImage: `url(${paperTexture})`,
                        backgroundRepeat: `no-repeat`,
                        backgroundSize: 'cover'
                    }}
                ></div>
                {selectedItem && (
                    <div className='bilbioteca__contenedor-right-content'>
                        <h2>{selectedItem.NOMBRE}</h2>
                        <a href={`noTocar/PDF/${selectedItem.NOMBRE}.pdf`} target='_blank' rel='noopener noreferrer'><IconPdf/></a>
                    </div>
                )}
            </div>
        </div>
    </div>
    )
}