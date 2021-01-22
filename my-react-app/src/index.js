import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';


import BarraBuscarProcesso from './ui/Seach'

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App}></Route>
        <IndexRoute component={BarraBuscarProcesso}></IndexRoute>
    </Router>
    ,
    document.getElementById('root')
);

reportWebVitals();

/*
O hash serve pra não precisar fazer rendrização
Na raiz da app vai renderizar o App 
*/

/*
<IndexRoute component={BarraBuscarProcesso} />
Se não tiver nenhuma rota, ele vai carregar um componente automaticamente
*/