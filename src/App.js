import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import './App.css';
import LoginRegistro from "./compnentes/LoginRegistro";


function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={LoginRegistro}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
