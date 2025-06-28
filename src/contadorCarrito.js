import { useState } from "react";
import "./contador.css"; 


function Carrito() {


    const [contador, setContador] = useState(0);
    function contar(e) {
        e.preventDefault();
        //const cantidad = Number(e.target.value);
        setContador(contador+ 1);
    }
    
    
    
    


    return (
        <div className="card">
            <form onSubmit={contar}>
                <button type="submit">Agregar al carrito</button>
            </form>
            <hr/>
            <h1>Mostrando contador: {contador}</h1>
        </div>
    );
}


export default Carrito;