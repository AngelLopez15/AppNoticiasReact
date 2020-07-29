import React, { useState } from 'react'

export const useSelect = (stateInicial, opciones) => {
  
  // state del custom hook
  const [state, setstate] = useState(stateInicial)

  const SelectNoticias = () =>(
    <select
      className="browser-default"
      value={state}
      onChange={e=>setstate(e.target.value)}
    >
      {opciones.map(opcion=>(
        <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
      ))}
    </select>
  )

  return [state, SelectNoticias ]
}
