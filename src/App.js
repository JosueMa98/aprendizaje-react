import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'; // importar para usar useState






function App() {

    function generarAleatorio()
    {
      const valor = Math.floor(Math.random()*10);
      setNumero(valor);


    }

    function generarAleatorio2()
    {
      const arreglo = new Array(5);
      for (let i= 0; i<arreglo.length; i++)
        {
          arreglo[i]= Math.floor(Math.random()*10);
        }
      setNumeros(arreglo);
    }

    const[numero, setNumero] = useState(1000); //El valor inicial deseado se declara en los ()
    const[numeros, setNumeros]=useState([0, 20, 50, 100, 1000]);

  return (
    <div>
      <p>Generar numero aleatorio: {numero} </p>
      <button onClick={generarAleatorio}>Generar</button>
      <hr/>
      

      <button onClick={generarAleatorio2}>Generar </button>
      <h1>Numeros aleatorios:</h1>
      {
        numeros.map(num =>(
          <p>{num}</p>
        
        ))
      }
    </div>
  );
}

export default App;
