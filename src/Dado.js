import React from "react";
import Dado from "./Dado.css";

function generarDado(propiedades) {
    return (
        <div className="forma-dado">

            {propiedades.valor}
        </div>
    )
}

export default generarDado;