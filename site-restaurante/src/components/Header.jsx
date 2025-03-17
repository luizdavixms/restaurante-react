import React from 'react';
import { Link } from "react-router-dom"
import "./Header.css" 

function Header() {
  return (
    <header>
        <div className='logo'>
            <img src='' alt='Logo do Restaurante' className='logoImagem'/>
        </div>

        <nav className='containerNavLinks'>
            <Link to="/Cardapio" className='navLink'>Cardapio</Link>
            <Link to="/Sobre" className='navLink'>Sobre</Link>
            <Link to="/Localizacao" className='navLink'>Localizacao</Link>
            <Link to="/Reservas" className='navLink'>Reservas</Link>
        </nav>
    </header>
  );
}

export default Header;

