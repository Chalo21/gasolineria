import React, { useState, useEffect } from 'react'

import ComboBox from "./ComboBox";

export default function Form() {

    const [isla, setIsla] = useState("")
    const [islas, setIslas] = useState([])
    const [gasolina, setGasolina] = useState("")
    const [gasolinas, setGasolinas] = useState([])
    const [reload, setReload] = useState(true)
    const [galones, setGalones] = useState("")
    const [total, setTotal] = useState("")
    const [pago, setPago] = useState("")
    const [vueltas, setVueltas] = useState("")

    useEffect(() => {
        setReload(false)
        setGasolinas([])
        CargarGasolina()
    }, [isla])

    useEffect(() => {
        setReload(true)
    }, [gasolinas])

    useEffect(() => {
        galones !== "" && CalcularPrecio()
    }, [galones])
    
    const CargarGasolina = () => {
        if(isla === "Isla 1"){
            setGasolinas([{Nombre: "Corriente", Precio: 9000}, {Nombre: "Extra", Precio: 14000}])
        return 
        }
        if(isla === "Isla 2"){
            setGasolinas([{Nombre: "Corriente", Precio: 9000}, {Nombre: "Extra", Precio: 14000}, {Nombre: "Diesel", Precio: 8500}])
        return 
        }
        if(isla === "Isla 3"){
            setGasolinas([{Nombre: "Gas", Precio: 800}])
        return 
        }
    }

    const GuardarGalones = (e) => {
        setGalones(e)
    }

    const GuardarPago = (e) => {
        setPago(e)
    }

    const CalcularPrecio = () => {
        setTotal(galones*gasolinas.find(function(element) {
            return element.Nombre === gasolina
        }).Precio)
    }

    const Pagar = () => {
        setVueltas(pago-total)
    }

    return (
        <div>
            <ComboBox nombre={"Islas"} opciones={["Isla 1", "Isla 2", "Isla 3"]} setOpcion={setIsla}/>
            <br/>
            {
                reload && <ComboBox nombre={"Gasolinas"} opciones={gasolinas.map(function(element) {return element.Nombre})} setOpcion={setGasolina}/>
            }  
            <br/>
            <div>
                <label>Galones: </label>
                <input 
                    placeholder = "Ingrese los galones" 
                    type = "number" 
                    readOnly={!(gasolina.length > 0)}
                    onChange={(e) => GuardarGalones(e.target.value)}    
                /> 
            </div>
            <br/>
            <div>
                <label>Total: </label>
                <input 
                    readOnly 
                    value = {total !== "" ? total : "Total de la compra"}
                    /> 
            </div>
            <br/>
            <div>
                <label>Pago: </label>
                <input 
                    placeholder = "Ingrese el pago"
                    onChange={(e) => GuardarPago(e.target.value)}
                    /> 
            </div>
            <br/>
            <div>
                <button onClick={Pagar}>
                    Pagar
                </button>
            </div>
            <br/>
            <div> 
                <label>Vueltas: </label>
                <input 
                    value={vueltas}
                />
            </div>
        </div>      
    )
}

