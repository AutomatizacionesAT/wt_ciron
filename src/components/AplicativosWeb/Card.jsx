import './styles.scss'

export default function Card({title, image, link}) {
  return (
    <div className="link-container-links-card dato-buscado">
      <figure className="link-container-links-card-image">
        <img src={`noTocar/imagenes/aplicativosWeb/${image}.png`}  />
      </figure>
      <h2 className="link-container-links-card-name">{title}</h2>
      <div className='link-container-links-card-btn'>
        <a href={link} className="animated-button" target='_blank'>
          <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
            ></path>
          </svg>
          <span className="text">Continuar</span>
          <span className="circle"></span>
          <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  )
}