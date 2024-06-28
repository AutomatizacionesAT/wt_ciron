import './styles.scss'

export default function Card({palabra, definicion}) {
  return (
    <div className="card dato-buscado">
      <h1>{palabra}</h1>
      <div className="card__content">
        <p className="card__title">{palabra}</p>
        <p className="card__description">{definicion}</p>
      </div>
    </div>
  )
}