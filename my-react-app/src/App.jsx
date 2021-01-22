import './App.css';
import { Link } from 'react-router-dom'

import BarraBuscarProcesso from './ui/BarraBuscarProcesso'

const App = () => {

    return (
      <div className="container" >
        <h1>Busca de Processos</h1>
        <BarraBuscarProcesso><h1>teste</h1></BarraBuscarProcesso>
        <p>Você pode criar um novo processo <Link to='/cadastroNovoProcesso'>clicando aqui</Link>.</p>
      </div>
    );
  
}

export default App;
