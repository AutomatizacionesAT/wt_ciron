import { useState } from 'react'
import { BD_gestorCorreos } from './BASES/BD_gestorCorreos'
import Swal from 'sweetalert2'
import img1 from '../../assets/images/gestorCorreos/hispano.png'
import img2 from '../../assets/images/gestorCorreos/portugues.png'
import img3 from '../../assets/images/gestorCorreos/ingles.png'
import './styles.scss'

export default function GestorCorreos(){
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedText, setSelectedText] = useState('');

  const handleClick = (image) => {
    setSelectedImage(image);
    if (image === img1) {
      setSelectedText(BD_gestorCorreos[0].DEFINICION);
    } else if (image === img2) {
      setSelectedText(BD_gestorCorreos[1].DEFINICION);
    } else if (image === img3) {
      setSelectedText(BD_gestorCorreos[2].DEFINICION);
    }
  };

  const copyText = () => {
    const textarea = document.querySelector('#copyTextArea')
		const contenido = textarea.value
		navigator.clipboard
			.writeText(contenido)
			.then(() => console.log('Texto copiado al portapapeles'))
			.catch(error => console.error('Error al copiar texto: ', error))
		//ALERTA
		const Toast = Swal.mixin({
			toast: true,
			position: 'top-end',
			showConfirmButton: false,
			timer: 2000,
			timerProgressBar: true,
			didOpen: toast => {
				toast.onmouseenter = Swal.stopTimer
				toast.onmouseleave = Swal.resumeTimer
			},
		})
		Toast.fire({
			icon: 'success',
			title: 'Texto copiado correctamente',
		})
	}

  return (
    <div className="gestorCorreos">
      <div className="gestorCorreos__content">
        <div className="gestorCorreos__content__title animate__animated animate__bounceInDown">
          <h1>Gestor de correos</h1>
        </div>
        <div className="gestorCorreos__content__correos animate__animated animate__bounceInLeft">
          <div className="gestorCorreos__content__correos__images">
            <div className="gestorCorreos__content__correos__images__region">
              <h2>Hispano</h2>
              <figure>
                <img className={selectedImage === img1 ? 'act' : ''} onClick={() => handleClick(img1)} src={img1} alt="" />
              </figure>
            </div>
            <div className="gestorCorreos__content__correos__images__region">
              <h2>Portugués</h2>
              <figure>
                <img className={selectedImage === img2 ? 'act' : ''} onClick={() => handleClick(img2)} src={img2} alt="" />
              </figure>
            </div>
            <div className="gestorCorreos__content__correos__images__region">
              <h2>Inglés</h2>
              <figure>
                <img className={selectedImage === img3 ? 'act' : ''} onClick={() => handleClick(img3)} src={img3} alt="" />
              </figure>
            </div>
          </div>
          <div className="gestorCorreos__content__correos__text">
            {
              selectedText ?
              (
                <>
                  <textarea id="copyTextArea" name="" onChange={(e) => setSelectedText(e.target.value)} value={selectedText}></textarea>
                  <div className="gestorCorreos__content__correos__text__copy">
                    <button onClick={() => copyText()} >Copiar <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"/></svg></button>
                  </div>
                </> 
              ):
              <textarea name="" id="" placeholder='Selecciona una región para ver la plantilla del correo...'></textarea>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
