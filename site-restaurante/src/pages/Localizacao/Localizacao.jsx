import React from 'react';
import MapComponent from '../../components/MapComponent';
import './Localizacao.css';

function Localizacao() {
  return (
    <div>
      <h1>Bem-vindo à nossa Localização!</h1>
      <section className="description">
        <h2>A Pizzaria do Estádio Mané Garrincha</h2>
        <p>
          Imagine-se em uma grande partida no <strong>Estádio Mané Garrincha</strong>, vibrando com a torcida. Agora, imagine o apito final, a
          multidão animada, e aquele apetite de quem acompanhou uma partida de futebol até o fim. Onde ir? A resposta é simples: <strong>Pizzaria
          Calabreso!</strong>! 🍕
        </p>
        <p>
          Localizada a apenas 15 minutos a pé do estádio, nossa pizzaria é o ponto perfeito para torcedores recarregarem as energias e desfrutarem de
          uma pizza deliciosa antes ou depois dos jogos. Seja você um torcedor fanático ou apenas alguém buscando um bom lugar para relaxar após
          a partida, temos tudo o que você precisa para tornar sua experiência ainda mais saborosa!
        </p>
      </section>

      <section className="directions">
        <h3>Como Chegar</h3>
        <p>
          Estamos localizados ao lado do grande <strong>Mané Garrincha</strong>. Você nos encontra logo ali!
        </p>
        <p>
          Tem dúvida? Não se preocupe, o nosso mapa interativo vai te ajudar!
        </p>
      </section>

      {/* Mapa Interativo */}
      <MapComponent />

      {/* Botão para abrir no Google Maps */}
      <section className="google-maps">
        <p>Veja a localização no Google Maps:</p>
        <button onClick={() => window.open('https://www.google.com.br/maps/place/Arena+BRB+Man%C3%A9+Garrincha/@-15.78356,-47.9018195,17z/data=!3m1!4b1!4m6!3m5!1s0x935a3af5eeb75937:0xfd6e9aa239a3075b!8m2!3d-15.78356!4d-47.8992446!16zL20vMDlzYzFr?entry=ttu&g_ep=EgoyMDI1MDQwNi4wIKXMDSoASAFQAw%3D%3D', '_blank')}>
          Abrir no Google Maps
        </button>
      </section>
    </div>
  );
}

export default Localizacao;
