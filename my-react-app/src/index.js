import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact={true} component={App}></Route>
        </Switch>
    </ BrowserRouter>
    ,
    document.getElementById('root')
);

reportWebVitals();

/*https://medium.com/collabcode/roteamento-no-react-com-os-poderes-do-react-router-v4-fbc191b9937d*/