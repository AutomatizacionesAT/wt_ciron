import './styles.scss'

export default function Card({palabra, definicion}) {
  return (
    <div className="link-container-links-card dato-buscado">
      <h2 className="link-container-links-card-name">{palabra}</h2>
      <div className='link-container-links-card-btn'>
        <p>{definicion}</p>
      </div>
    </div>
  )
}