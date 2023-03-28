import { useState } from 'react';
import Banner from './componentes/Banner';
import colaborador from './componentes/colaborador';
import Formulario from './componentes/Formulario';
import Time from './componentes/Times';


function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: 'blueviolet',
      corSecundaria: 'red'
    },
    {
      nome: 'Front-end',
      corPrimaria: 'blueviolet',
      corSecundaria: 'red'
    },
    {
      nome: 'Data science',
      corPrimaria: 'blue',
      corSecundaria: 'red'
    },
    {
      nome: 'UX & Design',
      corPrimaria: 'red',
      corSecundaria: 'blueviolet'
    },
    {
      nome: 'Devops',
      corPrimaria: 'red',
      corSecundaria: 'bluevioletd'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: 'blueviolet',
      corSecundaria: 'blueviolet'
    }, 
    {
      nome: 'Mobile',
      corPrimaria: 'blueviolet',
      corSecundaria: 'red'
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}  
      />)}
    </div>
  );
}

export default App;
