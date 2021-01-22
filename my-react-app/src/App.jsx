import './App.css';
import { Link } from 'react-router-dom'

import BarraBuscarProcesso from './ui/BarraBuscarProcesso'
import BuscarProcessoButton from './ui/BuscarProcessoButton'

const App = () => {

  return (
    <div style={{ alignItems: 'center' }} id="buscaProcessoPage" >
      <h1 style={{ textAlign: 'center', margin: '300px 50px 30px 100px' }}>Busca de Processos</h1>
      <BarraBuscarProcesso style={{
        padding: '18px 10px',
        alignItems: 'center',
        borderRadius: '4px',
        shadowRadius: '1px',
        border: '1px solid #757575',
        fontSize: '18px',
        width: '25%',
        margin: '0px 0px 0px 750px'
      }}></BarraBuscarProcesso>
      <BuscarProcessoButton style={{
        padding: '18px 10px',
        alignItems: 'center',
        borderRadius: '4px',
        shadowRadius: '1px',
        border: '1px solid #757575',
        fontSize: '18px'
      }}></BuscarProcessoButton>
      <p style={{
        textAlign: 'center', margin: '20px 50px 0px 100px'
      }}>Você pode criar um novo processo <Link to='/cadastroNovoProcesso'>clicando aqui</Link>.</p>
    </div>
  );

}

export default App;
