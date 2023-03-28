import './Time.css'
import Colaborador from '../colaborador'

const time = (props) => {

    const cssTime = { backgroundColor: props.corSecundaria}

    return (
        (props.colaboradores.length > 0)  && <section className='time' style={cssTime}>
            <h3 style={{ borderColor: props.corPrimaria }} >{props.nome}</h3>  
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador nome={colaborador.nome} time={colaborador.cargo} /> )}
            </div>
        </section>
    )
}

export default time