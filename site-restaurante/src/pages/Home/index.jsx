import React from 'react';
import "./index.css"
import { Link } from "react-router-dom"

function Home() {
  return (
    <>
      <div className='container'> 
        <h1>Bem Vindo ao ...</h1>
        <p>Selecione uma das opções abaixo</p>

      <div className='botaoContainer'>
        <Link to="/Cardapio">
          <button className="botaoCardapio">Cardapio</button>
        </Link>

        <Link to="/Reservas">
          <button className="botaoReservas">Reservas</button>
        </Link>

        <Link to="Localizacao">
          <button className="botaoLocalizacao">Localizacao</button>
        </Link>

        <Link to="Sobre">
          <button className="botaoSobre">Sobre</button>
        </Link>
      </div>
      </div>
    </>
  );
}

export default Home;
