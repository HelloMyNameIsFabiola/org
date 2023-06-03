
// Antes Campo.js
import { useState } from "react"
import "./Campo.css"

const Campo = (props) => {
    const placeholderModificado = `${props.placeholder}...`


    //Destructuracion. Los inputs de forumulario x defecto seran tipo text, y para el input de color tipo sera igual a color.-
    const { type = "text" } = props


    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModificado} 
            required={props.required} 
            value={props.valor} 
            onChange = {manejarCambio}
            type={type}
        />
    </div>
}

export default Campo