import React from 'react';
import useDeslizar from '../../hooks/useDeslizar';
import Header from "../../components/Header";
import "./index.css";
import primeiraImagem from "../../assets/primeiraImagem.jpg";
import foto from "../../assets/foto.jpg"

function Sobre() {
  useDeslizar()

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
      <div className='box-2'>
        <div className='missao'>
          <h3 className='titulo-box-2'>Missão</h3>
          <p>Proporcionar momentos inesquecíveis ao redor da mesa, servindo pizzas artesanais
            feitas com ingredientes frescos, carinho e paixão pela boa comida.
          </p>
        </div>
        <div className='visao'>
          <h3 className='titulo-box-2'>Visão</h3>
          <p>Ser a pizzaria mais querida da região, reconhecida pelo sabor autêntico,
            atendimento caloroso e ambiente acolhedor que transforma clientes em verdadeiros amigos.
          </p>
        </div>
        <div className='valores'>
          <h3 className='titulo-box-2'>Valores</h3>
          <p>Respeito à tradição e inovação nos sabores.
            Tratamos cada cliente como parte da nossa família e buscamos sempre agir de forma
            sustentável e responsável.
          </p>
        </div>
      </div>
      <div className='box-3'>
        <h3 className='equipe-titulo deslizar'>Conheça nossa equipe</h3>
        <div className='perfil-luiz deslizar'>
          <img src={foto} alt="Luiz" className='foto-equipe' />
          <div className='informacoes-luiz'>
            <p>Luiz Davi Ximenes</p>
            <div className='redes-sociais'>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.linkedin.com/in/luiz-davi-ximenes-miranda-rocha-a0983a267/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <p>Celular: (61) 99644-2004</p>
          </div>
        </div>
        <div className='perfil-kauan deslizar'>
          <img src={foto} alt="Kauan" className='foto-equipe' />
          <div className='informacoes-kauan'>
            <p>Kauan de Oliveira</p>
            <div className='redes-sociais'>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <p>Celular: (XX) XXXXX-XXXX</p>
          </div>
        </div>
      </div>

    </>
  );
}

export default Sobre;
