import React from 'react';
import Header from "../../components/Header";
import "./index.css";  // Garanta que o CSS está sendo importado corretamente
import primeiraImagem from "../../assets/primeiraImagem.jpg";

function Sobre() {
  return (
    <>
      <Header />
        <div className="box-1">
          <img src={primeiraImagem} alt="Nosso trabalho" className="imagem-box-1" />
          <div>
            <h1>Sobre nós</h1>
            <p>
              Na nossa pizzaria, a paixão por comida boa e momentos de celebração se encontra em cada pedaço. 
              Somos uma equipe de entusiastas da culinária que acredita no poder da simplicidade e da qualidade. 
              Desde o início, nosso objetivo sempre foi criar um ambiente acolhedor onde as pessoas pudessem saborear 
              pizzas autênticas, feitas com ingredientes frescos e de alta qualidade.
            </p>
          </div>
        </div>
        <div className='linhaDivisoria'></div>
    </>
  );
}

export default Sobre;
