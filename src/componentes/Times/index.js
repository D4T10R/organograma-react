import './times.css'

function ListaSuspensa(props) {
    return (
        <div className="campo-time">
            <label>{props.label}</label>
                <select>
                    {props.times.map((time) => <option>{time}</option>)}
                </select>
        </div>

    )

}

export default ListaSuspensa