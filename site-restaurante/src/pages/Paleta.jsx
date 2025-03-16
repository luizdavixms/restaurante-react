import React from 'react';
import './App.css'; // Importando o arquivo de estilos CSS

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Bem-vindo ao Nosso Site</h1>
      </header>

      <section className="content">
        <p>Este é um exemplo de um site minimalista utilizando uma paleta de tons frios. Aqui você pode ver como a cor impacta o visual e a sensação do site.</p>
        <button className="cta-button">Saiba Mais</button>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Site Minimalista. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
