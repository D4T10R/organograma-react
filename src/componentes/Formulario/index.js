import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../Times'
import Botao from '../Botao'

import './formulario.css'

import React, { useState } from 'react'

const Formulario = (props) => {

    const item = ['front-end', 'design', 'back-end']

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome, 
            cargo, 
            imagem, 
            time
        })
    }

    return (

        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                    <CampoTexto 
                        required={true} 
                        label="nome" 
                        placeholder="Digite o seu nome" 
                        valor={nome}
                        aoAlterado={valor => setNome(valor)}
                    />
                    <CampoTexto 
                        required={true} 
                        label="Email" 
                        placeholder="Digite seu Email" 
                        valor={cargo}
                        aoAlterado={valor => setCargo(valor)}
                    />
                    <CampoTexto 
                        label="Imagem" 
                        placeholder="Digite o endereço da imagem" 
                        valor={imagem}
                        aoAlterado={valor => setImagem(valor)}
                    />
                    <ListaSuspensa 
                        required={true} 
                        label="Time" 
                        times={item} 
                        valor={time}
                        aoAlterado={valor => setTime(valor)}
                    />
                    <Botao>
                        Criar card
                    </Botao>
            </form>
        </section>

    )

}

export default Formulario;