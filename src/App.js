import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'; // importar para usar useState
import Dado from './Dado'; // Importar el componente Dado







function App() {

    function generarAleatorio()
    {
      return  Math.floor(Math.random()*6) + 1; // Genera un número aleatorio entre 1 y 6
      
    }
    function tirar()
    {


      setNumero(generarAleatorio()); // Actualiza el estado con el número aleatorio generado
      setNumero2(generarAleatorio());
      setNumero3(generarAleatorio());

    }

    const [numero, setNumero] = useState(0);
    const [numero2, setNumero2] = useState(0);
    const [numero3, setNumero3] = useState(0);

  return (
    <div>
      <p>Generar numero aleatorio</p>
      <Dado valor={numero} />
      <Dado valor={numero2} />
      <Dado valor={numero3} />

      <button onClick={tirar}>Tirar</button>
      <hr/>
      


    </div>
  );
}

export default App;
