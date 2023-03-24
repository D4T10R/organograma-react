import CampoTexto from '../CampoTexto'
import './formulario.css'

const formulario = () => {

    return (

        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                    <CampoTexto label="nome" placeholder="Digite o seu nome" />
                    <CampoTexto label="Email" placeholder="Digite seu Email" />
                    <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
            </form>
        </section>

    )

}

export default formulario;