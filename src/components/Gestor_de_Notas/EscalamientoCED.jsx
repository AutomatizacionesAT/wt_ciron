import {useState} from 'react';
import Swal from 'sweetalert2';
import './styles.notes.scss'

export default function EscalamientoCED(){
  const [vtr, setVtr] = useState('');

  const buildTextareaContent = (values) => {
    let content = `País donde se encuentra el servicio: ${values.pais}
LEC: ${values.lec}
Service ID: ${values.service_id}
Número de ticket del LEC: ${values.numero_ticket}
Nombre del cliente: ${values.nombre}
Ciudad: ${values.ciudad}
La VTR esta en nivel 4: ${values.vtr}
`;

    if (values.vtr === 'No') {
      content += `Se debe cambiar la VTR a nivel 4.\n`;
    }

  content +=`Razon del escalamiento: ${values.razon}`

    return content;
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());

    const textareaContent = buildTextareaContent(values);

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'La nota ha sido creada',
      html: `<div class="notas__textbox">
      <textarea id="textareaCopy">${textareaContent}</textarea>
    </div>`,
      showConfirmButton: true,
      confirmButtonText: 'Copiar Nota',
      customClass: {
        confirmButton: 'swalButton',
        popup: 'swalNote',
        icon: 'swalIcon',
        title: 'swalTitle',
      },
    }).then(() => {
      navigator.clipboard.writeText(document.getElementById('textareaCopy').value)
      .then(() => {
          Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'La nota ha sido copiada',
              showConfirmButton: false,
              timer: 1800
          })
      })
      .catch(err => {
          console.log(err);
      })
    })
  };

  const vtrChange = (event) => {
    setVtr(event.target.value);
  }

  const handleReset = () => {
    setVtr('');
  };

  return (
    <div className='gestorNotas'>
      <form className="formGN animate__animated animate__bounceInLeft" onSubmit={handleSubmit} onReset={handleReset}>
        <div className="titleGN">
          <h1>Escalamiento al CED</h1>
          </div>
        <div className='formContainer'>
          <div className="input-containerGN">
            <input name="pais" placeholder="" type="text" className="inputGN" required/>
            <div className="cut"></div>
            <label className="iLabel">PAÍS DONDE SE ENCUENTRA EL SERVICIO</label>
          </div>
          <div className="input-containerGN">
            <input name="lec" placeholder="" type="text" className="inputGN" required/>
            <div className="cut"></div>
            <label className="iLabel">LEC</label>
          </div>
          <div className="input-containerGN">
            <input name="service_id" placeholder="" type="text" className="inputGN" required/>
            <div className="cut"></div>
            <label className="iLabel">SERVICE ID</label>
          </div>
          <div className="input-containerGN">
            <input name="numero_ticket" placeholder="" type="text" className="inputGN" required />
            <div className="cut"></div>
            <label className="iLabel">NÚMERO DE TICKET DEL LEC</label>
          </div>
          <div className="input-containerGN">
            <input name="nombre" placeholder="" type="text" className="inputGN" required/>
            <div className="cut"></div>
            <label className="iLabel">NOMBRE DEL CLIENTE</label>
          </div>
          <div className="input-containerGN">
            <input name="ciudad" placeholder="" type="text" className="inputGN" required/>
            <div className="cut"></div>
            <label className="iLabel">CIUDAD</label>
          </div>
          <div className="input-containerGN">
            <select name="vtr"  onChange={vtrChange} required> 
              <option value="">LA VTR ESTA EN NIVEL 4</option>
              <option value="Si">Si</option>
              <option value="No">No</option>
            </select>
          </div>
          {vtr === 'No' && (
            <div className="input-containerGN">
              <p>SE DEBE CAMBIAR LA VTR A NIVEL 4.</p>
            </div>
          )}
          <div className="input-containerGN">
            <input name="razon" placeholder="" type="text" className="inputGN" required/>
            <div className="cut"></div>
            <label className="iLabel">RAZON DEL ESCALAMIENTO</label>
          </div>
        </div>
        <div className='buttons'>
          <button type="reset" className="buttonGN">
            <p>Reiniciar</p>
          </button>
          <button type="submit" className="buttonGN">
            <p>Crear nota</p>
          </button>
        </div>
      </form>
    </div>
  );
}