import './App.css';

import BarraBuscarProcesso from './ui/Seach'
class App extends Component {
  render() {

    return (

      <div className="container" >
        <h1>Busca de Processos</h1>
        <BarraBuscarProcesso/> { this.props.children}
        <p>Você pode criar um novo processo clicando aqui</p>
      </div>
    );
  }
}

export default App;

/*
 {this.props.children}
 Quero que todas as rotas que clicar vai ser carregas dentro deste componente
*/
