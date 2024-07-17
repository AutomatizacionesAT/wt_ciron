import {useState} from 'react';
import Swal from 'sweetalert2';
import './styles.notes.scss'

export default function EscalamientoCED(){
  const [tipoFalla, setTipoFalla] = useState('');

  const buildTextareaContent = (values) => {
    let content = `Nombre de quien se comunica: ${values.nombre}
Horario de contacto: ${values.horario}
Día de contacto: ${values.dia_contacto}
Teléfono de contacto: +${values.codigo} ${values.telefono}
E-mail: ${values.email}
Número de ticket interno: ${values.numero_ticket}
Número de contacto en sitio: +${values.codigo2} ${values.numero_contacto}
Tipo de falla: ${values.tipo_falla}
`;

    if (values.tipo_falla === 'Caída total') {
      content += `¿La sede que reporta tiene más servicios afectados?: ${values.sede_servicios_afectados}\n`;
    }
    if (values.tipo_falla === 'Degradación') {
      content += `¿De qué manera percibe este problema?: ${values.percibe_problema}\n`;
    }
    if (values.tipo_falla === 'Perdida de paquetes') {
      content += `¿De cuanto es el procentaje de pérdida?: ${values.porcentaje_perdida}\n`;
    }

    content += `Hora de afectación: ${values.hora_afectacion}
Día de afectación: ${values.dia_afectacion}
Equipos encendidos: ${values.equipos_encendidos}
Hubo reinicio eléctrico: ${values.reinicio_electrico}
Estado de las luces LED de los equipos: ${values.estado_luces}
`;

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

  const tipoFallaChange = (event) => {
    setTipoFalla(event.target.value);
  }

  const handleReset = () => {
    setTipoFalla('');
  };

  return (
    <div className='gestorNotas'>
      <form className="formGN animate__animated animate__bounceInLeft" onSubmit={handleSubmit} onReset={handleReset}>
        <div className="titleGN">
          <h1>Apertura de tickets</h1>
        </div>
        <div className='formContainer'>
          <div className="input-containerGN">
            <input name="nombre" placeholder="" type="text" className="inputGN" required/>
            <div className="cut"></div>
            <label className="iLabel">NOMBRE DE QUIEN SE COMUNICA</label>
          </div>
          <div className="input-containerGN">
            <input name="horario" placeholder="" type="text" className="inputGN" required/>
            <div className="cut"></div>
            <label className="iLabel">HORARIO DE CONTACTO</label>
          </div>
          <div className="input-containerGN">
            <input name="dia_contacto" placeholder="" type="text" className="inputGN" required/>
            <div className="cut"></div>
            <label className="iLabel">DÍA DE CONTACTO</label>
          </div>
          <div className='inputsNumber'>
            <div className="input-containerGN or3">
              <input name="codigo" placeholder="" type="number" className="inputGN" required/>
              <div className="cut or2"></div>
              <label className="iLabel or2">CÓDIGO</label>
            </div>
            <div className="input-containerGN or2">
              <input name="telefono" placeholder="" type="number" className="inputGN" required/>
              <div className="cut or3"></div>
              <label className="iLabel">TELEFONO DE CONTACTO</label>
            </div>
          </div>
          <div className="input-containerGN">
            <input name="email" placeholder="" type="email" className="inputGN" pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.(com|es|mx|cl|net|org|edu|com.co|co)$" required />
            <div className="cut"></div>
            <label className="iLabel">E-MAIL</label>
          </div>
          <div className="input-containerGN">
            <input name="numero_ticket" placeholder="" type="text" className="inputGN" required/>
            <div className="cut"></div>
            <label className="iLabel">NÚMERO DE TICKET INTERNO</label>
          </div>
          <div className='inputsNumber'>
            <div className="input-containerGN or3">
              <input name="codigo2" placeholder="" type="number" className="inputGN" required/>
              <div className="cut or2"></div>
              <label className="iLabel or2">CÓDIGO</label>
            </div>
            <div className="input-containerGN or2">
              <input name="numero_contacto" placeholder="" type="number" className="inputGN" required/>
              <div className="cut or4"></div>
              <label className="iLabel">NUMERO DE CONTACTO EN SITIO</label>
            </div>
          </div>
          <div className="input-containerGN">
            <select name="tipo_falla"  onChange={tipoFallaChange} required> 
              <option value="">TIPO DE FALLA</option>
              <option value="Caída total">Caída total</option>
              <option value="Degradación">Degradación</option>
              <option value="Saturación">Saturación</option>
              <option value="Perdida de paquetes">Perdida de paquetes</option>
            </select>
          </div>
          {tipoFalla === 'Caída total' && (
            <div className="input-containerGN">
              <input name="sede_servicios_afectados" placeholder="" type="text" className="inputGN" required/>
              <div className="cut"></div>
              <label className="iLabel">¿La sede que reporta tiene más servicios afectados?</label>
            </div>
          )}
          {tipoFalla === 'Degradación' && (
            <div className="input-containerGN">
              <input name="percibe_problema" placeholder="" type="text" className="inputGN" required/>
              <div className="cut"></div>
              <label className="iLabel">¿De qué manera percibe este problema?</label>
            </div>
          )}
          {tipoFalla === 'Perdida de paquetes' && (
            <div className="input-containerGN">
              <input name="porcentaje_perdida" placeholder="" type="text" className="inputGN" required/>
              <div className="cut"></div>
              <label className="iLabel">¿De cuanto es el procentaje de pérdida?</label>
            </div>
          )}
          <div className="input-containerGN">
            <input name="hora_afectacion" placeholder="" type="time" className="inputGN" required/>
            <div className="cut"></div>
            <label className="iLabel">HORA DE AFECTACIÓN</label>
          </div>
          <div className="input-containerGN">
            <input name="dia_afectacion" placeholder="" type="date" className="inputGN" required/>
            <div className="cut"></div>
            <label className="iLabel">DÍA DE AFECTACIÓN</label>
          </div>
          <div className="input-containerGN">
            <select name="equipos_encendidos" required>
              <option value="">EQUIPOS ENCENDIDOS</option>
              <option value="Si">Si</option>
              <option value="No">No</option>
              <option value="No aplica">No aplica</option>
            </select>
          </div>
          <div className="input-containerGN">
            <select name="reinicio_electrico" required>
              <option value="">HUBO REINICIO ELECTRICO</option>
              <option value="Si">Si</option>
              <option value="No">No</option>
              <option value="No aplica">No aplica</option>
            </select>
          </div>
          <div className="input-containerGN">
            <input name="estado_luces" placeholder="" type="text" className="inputGN" required/>
            <div className="cut"></div>
            <label className="iLabel">ESTADO DE LAS LUCES LED DE LOS EQUIPOS</label>
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