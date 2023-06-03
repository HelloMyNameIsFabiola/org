// ListaOpciones.js
import "./ListaOpciones.css"

const ListaOpciones = (props) => {
    //El método map va a recorrer el arreglo de strings "equipos", lo va a transformar, y va a devolver uno nuevo,
    //su sintaxis es la siguiente:
    //Método map -> arreglo.map ( (equipo-N, posicion) ) =>
    //  return <option></option>  })      
    /*const equipos = ["Programación", "Front End", "Data Science", "Devops", "UX y Diseño", "Móvil", "Innovación y Gestión",  ]  */
    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarEquipo( e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
           <select value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
               { props.equipos.map( (equipo, index) => <option key = {index} value={equipo}> {equipo} </option> )  }
           </select>
    </div>
}

export default ListaOpciones