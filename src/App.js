import logo from './logo.svg';
import './App.css';

function retornarNumeroAleatorio() {
  return Math.floor(Math.random() * 100);
}

function retornarIndiceDeMasaCorporal(peso, altura) {
  const indiceMasa = peso / (altura * altura);
  return (
    <h1>Su indice de masa es= {indiceMasa}</h1>
  );

}

function App() {
  const nombre = "josue";
  const edad = 26;

  const objetoPerro = {
    nombre: "Pucca",
    edad: "11 años"
  };

  const arregloPaginas = ["http://google.com", "http://facebook.com", "http://youtube.com"];

  return (
    <div>
      <h1>Retornando numero aleatorio desde funcion: {retornarNumeroAleatorio()}</h1>
      <h2>Usando nombre de constante: {nombre}</h2>
      <h3>Usando la edad de la constante por el numero de la funcion aleatoria: {retornarNumeroAleatorio()*edad}</h3>
      <h4>Usando el nombre del objeto perro</h4>
      <p>Nombre: {objetoPerro.nombre}, Edad: {objetoPerro.edad}</p>
      <hr/>
      <a href={arregloPaginas[0]}>Acceso a google </a>
      <br/>
      <a href={arregloPaginas[2]}>Acceso a youtube </a>
      <br/>
      <h5>Retornando su indice de masa en base a su peso: 80kg y su altura: 170cm</h5>
      <p>Resultado= {retornarIndiceDeMasaCorporal(80, 1.7)}</p>
    </div>
  );
}

export default App;
