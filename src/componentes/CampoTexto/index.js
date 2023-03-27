import { useState } from 'react'
import './CampoTexto.css'



const CampoTexto = (props) => {

    const placeholderModificado = `${props.placeholder}`

    // let valor = 'guilherme silveira'

    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value)
        console.log(props.valor)
    }   
    
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input onChange={aoDigitar} value={props.valor} required={props.required} placeholder={placeholderModificado}></input>
        </div>
    )
}

export default CampoTexto