import React, { Fragment, useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Formulario } from './components/Formulario';
import { ListadoNoticias } from './components/ListadoNoticias';

function App() {

  // definir la categoria
  const [categoria, setCategoria] = useState('')

  const [noticias, setNoticias] = useState([])

  useEffect(() => {
    const consultarAPI = async()=>{
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=AQUI-VA-LA-APIKEY`
      
      const respuesta = await fetch(url)

      const noticias = await respuesta.json()

      setNoticias(noticias.articles)
    }

    consultarAPI()

  }, [categoria])

  return (
    <Fragment>
      <Header 
        titulo='Buscador de noticias'
      />
      <div className="container white">
        <Formulario 
          setCategoria={setCategoria}
        />
        <ListadoNoticias 
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
