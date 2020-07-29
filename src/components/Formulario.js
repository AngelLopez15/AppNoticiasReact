import React from 'react'
import styles from './Formulario.module.css'

export const Formulario = () => {
  return (
    <div className={`${styles.buscador} row`}>
      <div className="col s12 m8 offset-m2">
        <form>
          <p className={styles.title}>Encuentra noticias por categoria</p>
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
