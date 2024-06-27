import { BD_glosario } from './BASES/BD_glosario'
import Card from './Card'
import './styles.scss'

export default function AplicativosWeb() {

  return (
    <div className="link animate__animated animate__fadeInUp">
      <div className="link-container">
        {BD_glosario.map((e, index) => {
          return(
          <Card palabra={e.PALABRA} definicion={e.DEFINICION} key={index}/>
          )
        })}
      </div>
    </div>
  )
}