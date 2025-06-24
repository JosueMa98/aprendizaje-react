import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'; // importar para usar useState








function App() {

  function cambiar(e)
  {
    const nuevoTitulo = e.target.value; // obtener el valor del input
    setTitulo(nuevoTitulo);
  }

  const[titulo, setTitulo] = useState("");

  useEffect(() => {

    document.title = titulo;
  })

  return (
    <div className='App'>

      <p>Ingrese el titulo deseado:</p>
      <input type="text" onChange={cambiar} placeholder="Titulo" />
      <br/>

      <h1>{titulo}</h1>


    </div>
  );
}

export default App;
