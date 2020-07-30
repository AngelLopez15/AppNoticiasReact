import React from 'react'
import { Noticia } from './Noticia'
import PropTypes from 'prop-types'

// Cuando iteramos siempre necesitamos un key
export const ListadoNoticias = ({noticias}) => {
  return (
    <div className="row">
      {noticias.map(noticia=>(
        <Noticia 
          key={noticia.url}
          noticia={noticia}
        />
      ))}
    </div>
  )
}

ListadoNoticias.propTypes ={
  noticias:PropTypes.array.isRequired
}