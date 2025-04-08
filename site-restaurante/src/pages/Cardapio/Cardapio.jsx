import React from 'react';
import Header from '../../components/Header';

const cardapioData = [
  {
    categoria: "Pizzas",
    pratos: [
      { nome: "Margherita", descricao: "Molho de tomate, mozzarella, manjericão e azeite de oliva", preco: "R$ 39,00", imagem: "url_da_imagem_da_pizza_margherita.jpg" },
      { nome: "Calabresa", descricao: "Molho de tomate, queijo, calabresa fatiada e cebola", preco: "R$ 42,00", imagem: "url_da_imagem_da_pizza_calabresa.jpg" },
      { nome: "Frango com Catupiry", descricao: "Molho de tomate, frango desfiado, catupiry e orégano", preco: "R$ 45,00", imagem: "url_da_imagem_da_pizza_frango_catupiry.jpg" },
      { nome: "Nutella com Morango", descricao: "Molho de Nutella, morangos frescos e açúcar de confeiteiro", preco: "R$ 35,00", imagem: "url_da_imagem_da_pizza_nutella_morango.jpg" },
      { nome: "Pizza de 4 Queijos", descricao: "Mozzarella, parmesão, gorgonzola e provolone", preco: "R$ 50,00", imagem: "url_da_imagem_da_pizza_4queijos.jpg" },
      { nome: "Pizza Vegetariana", descricao: "Molho de tomate, legumes grelhados, mozzarella e azeite de oliva", preco: "R$ 48,00", imagem: "url_da_imagem_da_pizza_vegetariana.jpg" }
    ]
  }
];

function Cardapio() {
  return (
    <div>
      <Header />
      <h1>Cardápio de Pizzas</h1>
      <div className="cards-container">
        {cardapioData[0].pratos.map((prato, i) => (
          <div key={i} className="card">
            <img src={prato.imagem} alt={prato.nome} className="pizza-image" />
            <h3>{prato.nome}</h3>
            <p>{prato.descricao}</p>
            <p><strong>{prato.preco}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cardapio;
