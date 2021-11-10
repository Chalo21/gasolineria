import React, { useEffect } from 'react'

export default function ComboBox(props) {
        
    useEffect(() => {
        CargarOpciones(props.nombre, props.opciones)
    }, [])

    const CargarOpciones = (nombre, opciones) => {
        const MiSelector = document.getElementById(nombre)
        opciones.forEach(opcion => {
            MiSelector.appendChild(new Option(opcion, opcion))
        })
    }

    const CambiarOpcion= () => {
        props.setOpcion(document.getElementById(props.nombre).value)
    }

    return (
        <div>
            <label>{props.nombre}</label>
            <br/>
            <select id={props.nombre} onChange={CambiarOpcion}>
                <option hidden selected>Selecciona una opción</option>
            </select>
        </div>
    )
}
