import React from 'react';
import logo from '../logo.svg';
import './App.css';
import { HeaderComponent } from './components/Header';
import { Pessoa } from './models/Pessoa';

function App() {

  const pessoa: Pessoa = {
    altura: 1.70,
    corDeCabelo: "loiro",
    nome: "Cheddar",
    tamanhoDeCabelo: 20,
    tipoDeCabelo: "liso",
    tipoDeAlimentacao: "carnívoro",
    linguagem: "portugues"
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          bia
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <HeaderComponent pessoa={pessoa} />
      </header>
    </div>
  );
}

export default App;
