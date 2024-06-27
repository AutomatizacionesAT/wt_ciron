import { BD_aplicativosWeb } from './BASES/BD_aplicativosWeb'
import Card from './Card'
import './styles.scss'

export default function AplicativosWeb() {

  return (
    <div className="link animate__animated animate__fadeInUp">
      <div className="link-container">
        {BD_aplicativosWeb.map((e, index) => {
          return(
          <Card title={e.TITULO} image={e.IMAGEN} link={e.LINK} key={index}/>
          )
        })}
      </div>
    </div>
  )
}