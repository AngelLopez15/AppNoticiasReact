import React from 'react'
import styles from './Formulario.module.css'
import { useSelect } from '../hooks/useSelect'

export const Formulario = ({setCategoria}) => {

  // opciones de noticias
  const opciones = [
    {value:'general',label:'General'},
    {value:'business',label:'Negocios'},
    {value:'entertainment',label:'Entretenimiento'},
    {value:'health',label:'Salud'},
    {value:'science',label:'Ciencia'},
    {value:'sports',label:'Deportes'}
    {value:'technology',label:'Tecnologia'}
  ] 

  // utilizar custom hook
  const [categoria, SetCategoria] = useSelect('general', opciones)

  // al hacer submit al form pasar la categoria a app.js
  const buscarNoticias = e =>{
    e.preventDefault()
    setCategoria(categoria)
  }

  return (
    <div className={`${styles.buscador} row`}>
      <div className="col s12 m8 offset-m2">
        <form
          onSubmit={buscarNoticias}
        >
          <p className={styles.title}>Encuentra noticias por categoria</p>
          <SetCategoria />
          <div className="input-field col s12">
            <input 
              type="submit"
              className={`${styles.btn_block} btn-large amber darken-2`}
              // className={`${styles['btn-block']} btn-large amber darken-2`}
              value="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  )
}
