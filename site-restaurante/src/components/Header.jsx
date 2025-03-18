import React from 'react';
import "./Header.css"
import Logo from "../assets/Logo.png"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={Logo} alt='Logo do Restaurante' className='logoImagem'/>
      </Link>  
        <nav className='containerNavLinks'>
            <Link to="/Cardapio" className='navLink'>Cardapio</Link>
            <Link to="/Sobre" className='navLink'>Sobre</Link>
            <Link to="/Localizacao" className='navLink'>Localizacao</Link>
            <Link to="/Reservas" className='navLink'>Reservas</Link>
        </nav>
        <div className='linhaSeparacao'>
        
        </div>
    </header>
  );
}

export default Header;
