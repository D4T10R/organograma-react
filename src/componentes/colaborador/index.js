import './Colaborador.css'

const colaborador = (props) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={ {backgroundColor: props.corDeFundo} }>
                <img src={props.img} alt={props.nome} />
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.time}</h5>
            </div>
        </div>
    )
}

export default colaborador