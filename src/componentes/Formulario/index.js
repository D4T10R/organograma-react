import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../Times'
import Botao from '../Botao'
import './formulario.css'

const formulario = () => {

    const item = ['front-end', 'design', 'back-end']

    const aposSubmit = (event) => {
        event.preventDefault()
        console.log("Clicou em submit")
    }

    return (

        <section className="formulario">
            <form onSubmit={aposSubmit}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                    <CampoTexto required={true} label="nome" placeholder="Digite o seu nome" />
                    <CampoTexto required={true} label="Email" placeholder="Digite seu Email" />
                    <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                    <ListaSuspensa required={true} label="Time" time={item} />
                    <Botao>
                        Criar card
                    </Botao>
            </form>
        </section>

    )

}

export default formulario;