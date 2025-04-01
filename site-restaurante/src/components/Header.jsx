import React from 'react';
import "./Header.css"
import logoSimples from "../assets/logoSimples.png"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logoSimples} alt='Logo do Restaurante' className='logoImagem'/>
      </Link>  
        <nav className='containerNavLinks'>
            <Link to="/Cardapio" className='navLink'>CARDÁPIO</Link>
            <Link to="/Sobre" className='navLink'>SOBRE</Link>
            <Link to="/Localizacao" className='navLink'>LOCALIZAÇÃO</Link>
            <Link to="/Reservas" className='navLink'>RESERVAS</Link>
        </nav>
    </header>
  );
}

export default Header;
