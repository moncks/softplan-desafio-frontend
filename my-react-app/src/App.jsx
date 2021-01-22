import './App.css';
import { Link } from 'react-router-dom'

import BarraBuscarProcesso from './ui/BarraBuscarProcesso'

const App = () => {

    return (
      <div style={{alignItems: 'center'}} className="container" >
        <h1 style={{textAlign: 'center', margin: '250px 50px 0px 100px'}}>Busca de Processos</h1>
        <BarraBuscarProcesso><h1>teste</h1></BarraBuscarProcesso>
        <p style={{textAlign: 'center', margin: '10px 50px 0px 100px'}}>Você pode criar um novo processo <Link to='/cadastroNovoProcesso'>clicando aqui</Link>.</p>
      </div>
    );
  
}

export default App;
