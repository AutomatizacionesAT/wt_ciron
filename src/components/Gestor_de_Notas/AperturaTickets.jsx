import './styles.notes.scss'
import Swal from 'sweetalert2';

export default function AperturaTickets(){
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'La nota ha sido creada',
      html: `<div class="notas__textbox">
      <textarea id="textareaCopy">
        Nombre de quien se comunica: ${values.nombre}
        Horario de contacto: ${values.horario}
        Día de contacto: ${values.dia_contacto}
        Teléfono de contacto: ${values.telefono}
        E-mail: ${values.email}
        Número de ticket interno: ${values.numero_ticket}
        Número de contacto en sitio: ${values.numero_contacto}
        Tipo de falla: ${values.tipo_falla}
        Hora de afectación: ${values.hora_afectacion}
        Día de afectación: ${values.dia_afectacion}
        Equipos encendidos: ${values.equipos_encendidos}
        Hubo reinicio eléctrico: ${values.reinicio_electrico}
        Estado de las luces LED de los equipos: ${values.estado_luces}
      </textarea>
    </div>`,
      showConfirmButton: true,
      confirmButtonText: 'Copiar Nota',
      customClass: {
        confirmButton: 'swalButton',
        popup: 'swalNote',
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
  return (
    <div className='gestorNotas'>
      <form className="formGN" onSubmit={handleSubmit}>
        <div className="titleGN">
          <h1>Apertura de tickets</h1>
        </div>
        <div className='formContainer'>
          <div className="input-containerGN">
            <input name="nombre" placeholder="" type="text" className="inputGN" required />
            <div className="cut"></div>
            <label className="iLabel">NOMBRE DE QUIEN SE COMUNICA</label>
          </div>
          <div className="input-containerGN">
            <input name="horario" placeholder="" type="text" className="inputGN" required />
            <div className="cut"></div>
            <label className="iLabel">HORARIO DE CONTACTO</label>
          </div>
          <div className="input-containerGN">
            <input name="dia_contacto" placeholder="" type="text" className="inputGN" required />
            <div className="cut"></div>
            <label className="iLabel">DÍA DE CONTACTO</label>
          </div>
          <div className="input-containerGN">
            <input name="telefono" placeholder="" type="text" className="inputGN" required />
            <div className="cut"></div>
            <label className="iLabel">TELEFONO DE CONTACTO</label>
          </div>
          <div className="input-containerGN">
            <input name="email" placeholder="" type="text" className="inputGN" required />
            <div className="cut"></div>
            <label className="iLabel">E-MAIL</label>
          </div>
          <div className="input-containerGN">
            <input name="numero_ticket" placeholder="" type="text" className="inputGN" required />
            <div className="cut"></div>
            <label className="iLabel">NÚMERO DE TICKET INTERNO</label>
          </div>
          <div className="input-containerGN">
            <input name="numero_contacto" placeholder="" type="text" className="inputGN" required />
            <div className="cut"></div>
            <label className="iLabel">NUMERO DE CONTACTO EN SITIO</label>
          </div>
          <div className="input-containerGN">
            <select name="tipo_falla" required>
              <option value="">TIPO DE FALLA</option>
              <option value="Caída total">Caída total</option>
              <option value="Degradación">Degradación</option>
              <option value="Saturación">Saturación</option>
              <option value="Perdida de paquetes">Perdida de paquetes</option>
            </select>
          </div>
          <div className="input-containerGN">
            <input name="hora_afectacion" placeholder="" type="text" className="inputGN" required />
            <div className="cut"></div>
            <label className="iLabel">HORA DE AFECTACIÓN</label>
          </div>
          <div className="input-containerGN">
            <input name="dia_afectacion" placeholder="" type="text" className="inputGN" required />
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
            <input name="estado_luces" placeholder="" type="text" className="inputGN" required />
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